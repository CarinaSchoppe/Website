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
    ["/skills", /Professional strengths across AI/i],
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
