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

        expect(await screen.findByRole("heading", {name: /^Carina Sophie Schoppe\.$/i})).toBeInTheDocument();
        expect(screen.getByText(/Business-Marke/i)).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("de");

        await user.click(screen.getByRole("button", {name: /Sprache auf Englisch wechseln/i}));

        expect(screen.getByText(/Business brand/i)).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");
    });

    it("keeps English after the visitor explicitly selected it", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Projects", "/projects");

        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: /Projects that make Luminovia/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
    });

    it.each([
        ["/blog", /Blog on AI, project work and teaching with AI/i],
        ["/contact", /Contact Carina Sophie Schoppe/i],
        ["/skills", /Skill map for IT/i],
        ["/about", /personal profile between software/i],
        ["/credentials", /Credentials for teaching/i],
        ["/my-way", /professional path through IT/i],
        ["/portfolio", /Projects/i],
        ["/projects", /Projects/i],
        ["/pricing", /handled by Luminovia/i],
        ["/unknown-page", /This page is not in the training plan/i],
    ])("renders %s with English page copy", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Route", route);

        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: heading})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
    });

    it("routes legacy business pages to Luminovia instead of rendering direct offers", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /handled by Luminovia/i})).toBeInTheDocument();
        expect(screen.getByRole("link", {name: /Open Luminovia/i})).toHaveAttribute("href", "https://luminovia.org");
        expect(screen.queryByRole("heading", {name: /Transparent starting rates/i})).not.toBeInTheDocument();
    });

    it("renders direct contact links and Luminovia routing without a form", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Contact", "/contact");

        render(<App/>);

        await screen.findByRole("heading", {name: /Contact Carina Sophie Schoppe/i});
        expect(screen.queryByRole("button", {name: /Send request/i})).not.toBeInTheDocument();
        expect(screen.getAllByRole("link", {name: /Write an email/i})[0]).toHaveAttribute("href", expect.stringContaining("mailto:info@carinaschoppe.com"));
        expect(screen.getByRole("link", {name: /Open Luminovia/i})).toHaveAttribute("href", "https://luminovia.org");
        expect(screen.getByTitle(/Google Calendar appointment scheduler/i)).toHaveAttribute("src", expect.stringContaining("calendar.google.com/calendar/appointments/schedules"));
    });

    it("scrolls to a hash target after route rendering", async () => {
        const scrollIntoView = vi.fn();
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
    });
});
