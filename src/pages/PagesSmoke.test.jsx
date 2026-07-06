import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

const routes = [
    ["/", /^Carina Sophie Schoppe\.$/i],
    ["/projects", /Software projects, automation/i],
    ["/software", /Software projects, automation/i],
    ["/portfolio", /Software projects, automation/i],
    ["/skills", /personal capability map/i],
    ["/credentials", /CV, certificates/i],
    ["/my-way", /A professional path through IT/i],
    ["/about", /personal profile between software/i],
    ["/blog", /Blog on AI, digital education/i],
    ["/contact", /Contact Carina Sophie Schoppe/i],
    ["/training", /This page is not part of the portfolio/i],
    ["/offers", /This page is not part of the portfolio/i],
    ["/consulting", /This page is not part of the portfolio/i],
    ["/pricing", /This page is not part of the portfolio/i],
    ["/imprint", /Imprint/i],
    ["/privacy", /Privacy policy/i],
    ["/unknown-page", /This page is not part of the portfolio/i],
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
        window.innerWidth = 390;
        render(<App/>);

        await user.click(screen.getByRole("button", {name: /Menu/i}));
        expect(screen.getByText("Navigation")).toBeInTheDocument();
        expect(document.body).toHaveStyle({overflow: "hidden"});

        await user.click(screen.getByRole("button", {name: /Close/i}));
        expect(screen.queryByText("Navigation")).not.toBeInTheDocument();
        expect(document.body).not.toHaveStyle({overflow: "hidden"});
    });
});
