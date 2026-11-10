import {render, screen, waitFor} from "@testing-library/react";
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
        expect(screen.getByRole("heading", {name: /Meine Schwerpunkte/i})).toBeInTheDocument();
        expect(screen.getByRole("region", {name: "Referenzen"})).toHaveAttribute("id", "referenzen");
        expect(screen.getByRole("link", {name: "Firmentraining & Beratung"})).toHaveAttribute("href", "https://luminovia.org");
        expect(screen.getByRole("link", {name: "Alle Lehrthemen ansehen"})).toHaveAttribute("href", "/skills#unterricht");
        expect(screen.getByRole("link", {name: "Mein Lebenslauf und Werdegang"})).toHaveAttribute("href", "/my-way");
        expect(screen.getByRole("link", {name: "Mein LinkedIn-Profil"})).toHaveAttribute("href", "https://www.linkedin.com/in/carinaschoppe/");
        expect(document.documentElement.lang).toBe("de");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("de");

        await user.click(screen.getByRole("button", {name: /Sprache auf Englisch wechseln/i}));

        expect(screen.getByRole("heading", {name: /^Carina Sophie Schoppe$/i})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: /What I do/i})).toBeInTheDocument();
        expect(screen.getByRole("region", {name: "References"})).toHaveAttribute("id", "referenzen");
        expect(screen.getByRole("link", {name: "Explore teaching topics"})).toHaveAttribute("href", "/skills#unterricht");
        expect(screen.getByRole("link", {name: "My CV and career story"})).toHaveAttribute("href", "/my-way");
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
        ["/skills", /^What I teach and build\.$/i],
        ["/about", /^Carina Sophie Schoppe$/i],
        ["/credentials", /Degrees, certificates/i],
        ["/my-way", /professional path through technology/i],
        ["/portfolio", /Software projects and open source/i],
        ["/projects", /Software projects and open source/i],
        ["/pricing", /Oops, there is nothing here/i],
        ["/unknown-page", /Oops, there is nothing here/i],
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

    it("renders direct contact links and Luminovia routing without a form", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Contact", "/contact");

        render(<App/>);

        await screen.findByRole("heading", {name: /Contact Carina Sophie Schoppe/i});
        expect(screen.queryByRole("button", {name: /Send request/i})).not.toBeInTheDocument();
        expect(screen.getAllByRole("link", {name: /Write an email/i})[0]).toHaveAttribute("href", expect.stringContaining("mailto:info@carinaschoppe.com"));
        expect(screen.getByRole("link", {name: /Open Luminovia/i})).toHaveAttribute("href", "https://luminovia.org");
        expect(screen.getByRole("link", {name: "Request an appointment by email"})).toHaveAttribute("href", expect.stringContaining("mailto:info@carinaschoppe.com?subject=Appointment%20request&body="));
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

    it("scrolls to a hash target after route rendering", async () => {
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
        expect(requestAnimationFrame).toHaveBeenCalled();
        await user.click(screen.getByRole("link", {name: "Request an appointment", exact: true}));
        expect(screen.getByRole("region", {name: "Arrange a call"})).toHaveFocus();
    });
});
