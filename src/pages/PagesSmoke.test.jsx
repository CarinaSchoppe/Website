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
    ["/skills", /Professional strengths across AI/i],
    ["/credentials", /Degrees, certificates/i],
    ["/my-way", /professional path through technology/i],
    ["/about", /professional profile spanning software/i],
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
