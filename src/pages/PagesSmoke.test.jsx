import {render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

const routes = [
    ["/", /^Carina Sophie Schoppe$/i],
    ["/projects", /Software projects and open source/i],
    ["/software", /Software projects and open source/i],
    ["/portfolio", /Software projects and open source/i],
    ["/skills", /^What I teach and build\.$/i],
    ["/credentials", /Degrees, certificates/i],
    ["/my-way", /professional path through technology/i],
    ["/about", /^Carina Sophie Schoppe$/i],
    ["/blog", /Writing on AI, digital education/i],
    ["/contact", /Contact Carina Sophie Schoppe/i],
    ["/training", /Oops, there is nothing here/i],
    ["/offers", /Oops, there is nothing here/i],
    ["/consulting", /Oops, there is nothing here/i],
    ["/pricing", /Oops, there is nothing here/i],
    ["/imprint", /Imprint/i],
    ["/privacy", /Privacy policy/i],
    ["/unknown-page", /Oops, there is nothing here/i],
];

describe("static page routes", () => {
    beforeEach(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
    });

    it.each(routes)("renders %s", async (route, heading) => {
        window.history.pushState({}, "Route", route);
        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: heading})).toBeInTheDocument();
    });

    it("shows the teaching range and its Luminovia link in both languages", async () => {
        const user = userEvent.setup();
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "Teaching", "/skills");
        render(<App/>);

        const topics = await screen.findByRole("region", {name: "Unterrichtsthemen"});
        expect(topics).toHaveAttribute("id", "unterricht");
        expect(within(topics).getAllByRole("heading", {level: 3})).toHaveLength(8);
        expect(within(topics).getByRole("heading", {name: /Buchhaltung/i})).toBeInTheDocument();
        expect(within(topics).getByRole("heading", {name: /Arbeitsrecht und Datenschutz/i})).toBeInTheDocument();
        expect(within(screen.getByRole("main")).getByRole("link", {name: "Luminovia Training & Consulting", exact: true})).toHaveAttribute("href", "https://luminovia.org/contact/");

        await user.click(screen.getByRole("button", {name: /Sprache auf Englisch wechseln/i}));

        const englishTopics = screen.getByRole("region", {name: "Teaching topics"});
        expect(within(englishTopics).getAllByRole("heading", {level: 3})).toHaveLength(8);
        expect(within(englishTopics).getByRole("heading", {name: /Bookkeeping/i})).toBeInTheDocument();
        expect(within(englishTopics).getByRole("heading", {name: /Employment law and data protection/i})).toBeInTheDocument();
    });

    it("opens and closes the mobile navigation", async () => {
        const user = userEvent.setup();
        window.history.pushState({}, "Home", "/");
        render(<App/>);

        const dialog = screen.getByRole("dialog", {hidden: true});
        // jsdom does not implement the native dialog methods.
        Object.assign(dialog, {
            showModal: () => dialog.setAttribute("open", ""),
            close: () => {
                dialog.removeAttribute("open");
                dialog.dispatchEvent(new Event("close"));
            },
        });

        const menu = screen.getByRole("button", {name: /Menu/i});
        expect(dialog).not.toHaveAttribute("open");
        await user.click(menu);
        expect(screen.getByRole("dialog", {name: "Navigation"})).toHaveAttribute("open");

        await user.click(within(dialog).getByRole("button", {name: /Close/i}));
        expect(dialog).not.toHaveAttribute("open");

        await user.click(menu);
        await user.click(within(dialog).getByRole("link", {name: "Projects"}));
        expect(dialog).not.toHaveAttribute("open");
        expect(await screen.findByRole("heading", {level: 1, name: /Software projects and open source/i})).toBeInTheDocument();
    });
});
