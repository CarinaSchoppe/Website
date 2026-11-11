import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {afterEach, describe, expect, it, vi} from "vitest";
import {Link, MemoryRouter} from "react-router-dom";
import {PROFILE} from "../data/profile.js";
import PrivacyPage from "../pages/PrivacyPage.jsx";
import {LanguageProvider, LANGUAGE_STORAGE_KEY} from "../i18n.jsx";
import AnalyticsConsent from "./AnalyticsConsent.jsx";

function renderConsent({route = "/?source=example#projects", children} = {}) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");

    return render(
        <LanguageProvider>
            <MemoryRouter initialEntries={[route]}>
                <AnalyticsConsent/>
                <Link to="/about?source=example#intro">About</Link>
                <Link to="/about?source=other#intro" replace>Change query</Link>
                <Link to="/about?source=other#section">Jump to section</Link>
                {children}
            </MemoryRouter>
        </LanguageProvider>,
    );
}

describe("AnalyticsConsent", () => {
    afterEach(() => {
        document.querySelector('script[src*="googletagmanager.com"]')?.remove();
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
        delete globalThis[`ga-disable-${PROFILE.analyticsId}`];
    });

    it("stores declined consent and hides the banner", async () => {
        const user = userEvent.setup();
        renderConsent();

        expect(screen.getByText(/Privacy-friendly analytics/i)).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: /Decline/i}));

        expect(window.localStorage.getItem("carina_analytics_consent")).toBe("declined");
        expect(screen.queryByText(/Privacy-friendly analytics/i)).not.toBeInTheDocument();
    });

    it("configures the tag once and tracks page changes only after consent", async () => {
        const user = userEvent.setup();
        vi.stubGlobal("gtag", undefined);
        vi.stubGlobal("dataLayer", undefined);
        vi.spyOn(document, "referrer", "get").mockReturnValue("https://example.org/refer?source=other#intro");
        renderConsent();

        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull();
        await user.click(screen.getByRole("button", {name: /Accept/i}));

        expect(window.localStorage.getItem("carina_analytics_consent")).toBe("accepted");
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeTruthy();
        await user.click(screen.getByRole("link", {name: "About"}));
        await user.click(screen.getByRole("link", {name: "Change query"}));
        await user.click(screen.getByRole("link", {name: "Jump to section"}));
        expect(globalThis.dataLayer.map(([command]) => command)).toEqual(["js", "config", "event", "event"]);
        expect(globalThis.dataLayer[1][2]).toMatchObject({send_page_view: false});
        expect(Array.from(globalThis.dataLayer[2])).toEqual(["event", "page_view", expect.objectContaining({
            page_location: `${window.location.origin}/`,
            page_referrer: "https://example.org/refer",
        })]);
        expect(Array.from(globalThis.dataLayer[3])).toEqual(["event", "page_view", expect.objectContaining({
            page_location: `${window.location.origin}/about`,
            page_referrer: `${window.location.origin}/`,
        })]);
    });
    it("lets visitors revoke and later re-enable saved consent from the privacy page", async () => {
        const user = userEvent.setup();
        const flag = `ga-disable-${PROFILE.analyticsId}`;
        const settings = () => screen.getByRole("link", {name: "Change analytics settings"});
        const banner = () => screen.queryByRole("region", {name: "Privacy-friendly analytics"});
        window.localStorage.setItem("carina_analytics_consent", "accepted");
        const firstVisit = renderConsent({
            route: "/privacy",
            children: <><PrivacyPage/><Link to="/contact">Open contact</Link></>,
        });
        expect(globalThis[flag]).toBe(false);
        expect(banner()).not.toBeInTheDocument();
        const previousCalls = globalThis.dataLayer.length;

        await user.click(settings());
        expect(banner()).toHaveFocus();
        expect(screen.getByRole("button", {name: "Accept", pressed: true})).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: "Decline"}));
        expect(window.localStorage.getItem("carina_analytics_consent")).toBe("declined");
        expect(globalThis[flag]).toBe(true);
        expect(banner()).not.toBeInTheDocument();
        expect(settings()).toHaveFocus();

        await user.click(settings());
        expect(screen.getByRole("button", {name: "Decline", pressed: true})).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: "Decline"}));
        await user.click(screen.getByRole("link", {name: "Open contact"}));
        expect(globalThis.dataLayer).toHaveLength(previousCalls);

        firstVisit.unmount();
        document.querySelector('script[src*="googletagmanager.com"]')?.remove();
        delete globalThis.gtag;
        delete globalThis.dataLayer;
        delete globalThis[flag];
        renderConsent({route: "/privacy", children: <PrivacyPage/>});
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull();
        expect(globalThis[flag]).toBe(true);
        expect(banner()).not.toBeInTheDocument();

        await user.click(settings());
        await user.click(screen.getByRole("button", {name: "Accept"}));
        expect(window.localStorage.getItem("carina_analytics_consent")).toBe("accepted");
        expect(globalThis[flag]).toBe(false);
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeTruthy();
    });
});
