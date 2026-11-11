import {act, render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {afterEach, describe, expect, it, vi} from "vitest";
import {Link, MemoryRouter} from "react-router-dom";
import {LanguageProvider, LANGUAGE_STORAGE_KEY} from "../i18n.jsx";
import AnalyticsConsent, {AnalyticsSettings} from "./AnalyticsConsent.jsx";
import {PROFILE} from "../data/profile.js";

function renderConsent({settings = false, route = "/#projects"} = {}) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
    vi.stubGlobal(`ga-disable-${PROFILE.analyticsId}`, undefined);

    return render(
        <LanguageProvider>
            <MemoryRouter initialEntries={[route]}>
                <AnalyticsConsent/>
                {settings && <AnalyticsSettings/>}
                <Link to="/about">About</Link>
                <Link to="/about?token=another-test-value" replace>Change query</Link>
                <Link to="/about#section">Jump to section</Link>
            </MemoryRouter>
        </LanguageProvider>,
    );
}

describe("AnalyticsConsent", () => {
    afterEach(() => {
        document.querySelector('script[src*="googletagmanager.com"]')?.remove();
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
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
        vi.spyOn(document, "referrer", "get").mockReturnValue("https://example.org/refer?source=test-only#intro");
        renderConsent();

        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull();
        await user.click(screen.getByRole("button", {name: /Accept/i}));

        expect(window.localStorage.getItem("carina_analytics_consent")).toBe("accepted");
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeTruthy();
        expect(globalThis.dataLayer.filter(([command]) => command === "event")).toHaveLength(1);
        await user.click(screen.getByRole("link", {name: "Change query"}));
        expect(globalThis[`ga-disable-${PROFILE.analyticsId}`]).toBe(true);
        expect(globalThis.dataLayer.filter(([command]) => command === "event")).toHaveLength(1);
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
        expect(JSON.stringify(globalThis.dataLayer)).not.toContain("test-only");
        expect(JSON.stringify(globalThis.dataLayer)).not.toContain("another-test-value");
    });

    it("turns off the loaded tag and expires its cookies when consent is withdrawn", async () => {
        const user = userEvent.setup();
        vi.stubGlobal("gtag", undefined);
        vi.stubGlobal("dataLayer", undefined);
        window.localStorage.setItem("carina_analytics_consent", "accepted");
        document.cookie = "_ga=test; Path=/";
        document.cookie = `_ga_${PROFILE.analyticsId.slice(2)}=test; Path=/`;
        renderConsent({settings: true, route: "/privacy/#analytics-preferences"});

        const settings = within(screen.getByRole("region", {name: "Analytics settings"}));
        expect(settings.getByRole("button", {name: "Accept", pressed: true})).toBeInTheDocument();
        await user.click(settings.getByRole("button", {name: "Decline"}));
        expect(settings.getByRole("button", {name: "Decline", pressed: true})).toHaveFocus();
        expect(settings.getByRole("status")).toHaveTextContent("Analytics is disabled");
        expect(globalThis[`ga-disable-${PROFILE.analyticsId}`]).toBe(true);
        expect(document.cookie).not.toContain("_ga");
        await user.click(screen.getByRole("link", {name: "About"}));
        expect(globalThis.dataLayer.filter(([command]) => command === "event")).toHaveLength(1);

        await user.click(settings.getByRole("button", {name: "Accept"}));
        expect(globalThis[`ga-disable-${PROFILE.analyticsId}`]).toBe(false);
        expect(globalThis.dataLayer.filter(([command]) => command === "event")).toHaveLength(2);
        expect(document.querySelectorAll('script[src*="googletagmanager.com"]')).toHaveLength(1);
    });

    it("offers a choice for an invalid stored value and follows changes from another tab", () => {
        window.localStorage.setItem("carina_analytics_consent", "invalid");
        renderConsent({settings: true});
        expect(screen.getByRole("status")).toHaveTextContent("until you choose to accept it");

        act(() => {
            window.localStorage.setItem("carina_analytics_consent", "declined");
            window.dispatchEvent(new StorageEvent("storage", {key: "another-setting"}));
        });
        expect(screen.getByText("Privacy-friendly analytics")).toBeInTheDocument();

        act(() => window.dispatchEvent(new StorageEvent("storage", {key: "carina_analytics_consent"})));
        expect(screen.getByRole("status")).toHaveTextContent("Analytics is disabled on this browser");
        expect(screen.queryByText("Privacy-friendly analytics")).not.toBeInTheDocument();
    });
});
