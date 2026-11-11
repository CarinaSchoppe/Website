import {render, screen, waitFor, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it, vi} from "vitest";
import App from "./App.jsx";
import {LANGUAGE_STORAGE_KEY} from "./i18n.jsx";

describe("App routing and language", () => {
    beforeEach(() => {
        window.localStorage.clear();
        window.scrollTo = vi.fn();
        vi.unstubAllGlobals();
    });

    it("renders the portfolio homepage in German and switches the visible copy to English", async () => {
        const user = userEvent.setup();
        render(<App/>);

        expect(await screen.findByRole("heading", {name: /^Carina Sophie Schoppe$/i})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: "Lehre, Beratung und KI-Forschung"})).toBeInTheDocument();
        expect(screen.getByRole("region", {name: "Referenzen"})).toHaveAttribute("id", "referenzen");
        expect(screen.getByRole("link", {name: "Projekte ansehen"})).toHaveAttribute("href", "/#arbeit");
        expect(screen.getByRole("link", {name: "Training bei Luminovia"})).toHaveAttribute("href", "https://luminovia.org/training/#details");
        expect(screen.getByRole("link", {name: "Luminovia kontaktieren"})).toHaveAttribute("href", "https://luminovia.org/contact/");
        expect(screen.getByRole("link", {name: /^Lehrthemen Von Netzwerken/i})).toHaveAttribute("href", "/skills#unterricht");
        expect(screen.getByRole("region", {name: "Ausgewählte Projekte"})).toHaveAttribute("id", "arbeit");
        expect(screen.getByRole("link", {name: "Mein LinkedIn-Profil"})).toHaveAttribute("href", "https://www.linkedin.com/in/carinaschoppe/");
        expect(document.documentElement.lang).toBe("de");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("de");

        await user.click(screen.getByRole("button", {name: /Sprache auf Englisch wechseln/i}));

        expect(screen.getByRole("heading", {name: /^Carina Sophie Schoppe$/i})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: "Education, consulting and AI research"})).toBeInTheDocument();
        expect(screen.getByRole("region", {name: "References"})).toHaveAttribute("id", "referenzen");
        expect(screen.getByRole("link", {name: /^Teaching topics From networking/i})).toHaveAttribute("href", "/skills#unterricht");
        expect(screen.getByRole("region", {name: "Selected projects"})).toHaveAttribute("id", "arbeit");
        expect(screen.getByRole("link", {name: "My LinkedIn profile"})).toHaveAttribute("href", "https://www.linkedin.com/in/carinaschoppe/");
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");
    });

    it("starts with the light theme and remembers an explicit theme selection", async () => {
        const user = userEvent.setup();
        window.history.pushState({}, "Home", "/");
        const {unmount} = render(<App/>);

        expect(document.documentElement).toHaveAttribute("data-theme", "day");
        await user.click(screen.getByRole("button", {name: /Dunkles Farbschema aktivieren/i}));
        expect(document.documentElement).toHaveAttribute("data-theme", "night");
        unmount();

        render(<App/>);
        expect(document.documentElement).toHaveAttribute("data-theme", "night");
    });

    it("keeps English after the visitor explicitly selected it", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Projects", "/projects");

        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: /Software projects and open source/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
    });

    it.each([
        ["/blog", /Writing on AI, digital education/i],
        ["/contact", /Contact Carina Sophie Schoppe/i],
        ["/skills", /^Education, consulting and AI research\.$/i],
        ["/about", /^Carina Sophie Schoppe$/i],
        ["/credentials", /Degrees, certificates/i],
        ["/my-way", /professional path through technology/i],
        ["/portfolio", /Software projects and open source/i],
        ["/projects", /Software projects and open source/i],
        ["/pricing", /Oops, there is nothing here/i],
        ["/unknown-page", /Oops, there is nothing here/i],
        ["/ABOUT/", /Oops, there is nothing here/i],
        ["/BLOG/teaching-with-ai-without-losing-learning/", /Oops, there is nothing here/i],
    ])("renders %s with English page copy", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Route", route);

        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: heading})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
    });

    it("does not render removed legacy business pages", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Oops, there is nothing here/i})).toBeInTheDocument();
    });

    it("identifies each missing route without exposing its query parameters", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Missing route", "/not-a-page?token=private#section");

        render(<App/>);

        expect(await screen.findByText("/not-a-page")).toBeInTheDocument();
        expect(screen.getByText(/could not be found/i)).toBeInTheDocument();
        expect(screen.getByTestId("not-found-reference")).toHaveTextContent(/^404-[0-9A-F]{8}$/);
        expect(screen.queryByText(/token=private/i)).not.toBeInTheDocument();
        expect(document.title).toContain("/not-a-page not found");
    });

    it.each([
        ["en", "Personal contact", "Write an email", "Contact Luminovia", "Watch the AI consulting demo on YouTube"],
        ["de", "Persönlicher Kontakt", "E-Mail schreiben", "Kontakt zu Luminovia", "KI-Beratungsdemo auf YouTube ansehen"],
    ])("shows separate personal and business contact routes in %s", async (language, personalLabel, emailLabel, businessLabel, demoLabel) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        window.history.pushState({}, "Contact", "/contact");

        render(<App/>);

        const personal = within(await screen.findByRole("region", {name: personalLabel}));
        expect(personal.getByRole("heading")).toHaveAttribute("id", "contact-options");
        expect(personal.getByRole("link", {name: emailLabel})).toHaveAttribute("href", expect.stringContaining("mailto:info@carinaschoppe.com"));
        const company = screen.getByRole("region", {name: "Luminovia Training & Consulting"});
        expect(company).toHaveAttribute("id", "appointment");
        expect(within(company).getByRole("link", {name: businessLabel})).toHaveAttribute("href", "https://luminovia.org/contact/");
        const demo = within(company).getByRole("link", {name: demoLabel});
        expect(demo).toHaveAttribute("href", "https://www.youtube.com/watch?v=sYMO5sb-YKg");
        expect(demo).not.toHaveAttribute("target");
    });

    it("keeps the teaching credentials filter selected when the language changes", async () => {
        const user = userEvent.setup();
        window.history.pushState({}, "Credentials", "/credentials");

        render(<App/>);

        await user.click(await screen.findByRole("button", {name: "Lehre", exact: true}));
        await user.click(screen.getByRole("button", {name: /Sprache auf Englisch wechseln/i}));

        expect(screen.getByRole("button", {name: "Teaching", pressed: true})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: /DiBak Certified IT Lecturer/i})).toBeInTheDocument();
        expect(screen.queryByRole("heading", {name: /PTE Academic English/i})).not.toBeInTheDocument();
    });

    it("restores the reading position after a reload redirects to the canonical URL", async () => {
        window.history.pushState({key: "about-entry"}, "About", "/about");
        vi.stubGlobal("scrollY", 460);
        const performance = window.performance;
        vi.stubGlobal("performance", {
            getEntriesByType: () => [{type: "reload", redirectCount: 1}],
            now: () => performance.now(),
        });
        const {unmount} = render(<App/>);

        await screen.findByRole("heading", {level: 1, name: /^Carina Sophie Schoppe$/i});
        window.dispatchEvent(new Event("pagehide"));
        expect(JSON.parse(window.sessionStorage.getItem("carina_scroll_positions_v1"))).toEqual([["about-entry:/about", 460]]);
        unmount();

        window.history.replaceState({}, "About", "/about/");
        render(<App/>);
        await waitFor(() => expect(window.scrollTo).toHaveBeenCalledWith({top: 460, behavior: "auto"}));
        window.sessionStorage.removeItem("carina_scroll_positions_v1");
    });

    it("scrolls to the business contact on direct load and focuses personal contact after navigation", async () => {
        const scrollIntoView = vi.fn();
        const user = userEvent.setup();
        const requestAnimationFrame = vi.fn((callback) => {
            callback();
            return 1;
        });
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Hash route", "/contact#appointment");
        window.requestAnimationFrame = requestAnimationFrame;
        Element.prototype.scrollIntoView = scrollIntoView;

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Contact Carina Sophie Schoppe/i})).toBeInTheDocument();
        await waitFor(() => expect(scrollIntoView).toHaveBeenCalledWith({behavior: "auto", block: "start"}));
        expect(scrollIntoView.mock.contexts).toContain(screen.getByRole("region", {name: "Luminovia Training & Consulting"}));
        expect(requestAnimationFrame).toHaveBeenCalled();

        await user.click(within(screen.getByRole("banner")).getByRole("link", {name: "Projects"}));
        await user.click(await screen.findByRole("link", {name: "Talk about open source"}));
        expect(await screen.findByRole("heading", {name: "Personal contact"})).toHaveFocus();

        scrollIntoView.mockClear();
        window.history.back();
        await waitFor(() => expect(window.location.pathname).toBe("/projects"));
        window.history.back();
        await waitFor(() => expect(window.location.hash).toBe("#appointment"));
        expect(await screen.findByRole("heading", {name: /Contact Carina Sophie Schoppe/i})).toBeInTheDocument();
        expect(scrollIntoView).not.toHaveBeenCalled();

        await user.click(within(screen.getByRole("banner")).getByRole("link", {name: "Teaching"}));
        await user.click(await screen.findByRole("link", {name: "Publications"}));
        expect(await screen.findByRole("region", {name: "My academic work"})).toHaveFocus();
        await user.click(screen.getByRole("link", {name: "Skip to content"}));
        expect(document.getElementById("main-content")).toHaveFocus();
    });
});
