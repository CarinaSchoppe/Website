import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {describe, expect, it, vi} from "vitest";
import Button from "./Button.jsx";
import Photo from "./Photo.jsx";
import SoftwareProjectsSection from "./SoftwareProjectsSection.jsx";
import {LanguageProvider} from "../i18n.jsx";

function renderWithShell(ui) {
    return render(
        <LanguageProvider>
            <MemoryRouter>
                {ui}
            </MemoryRouter>
        </LanguageProvider>,
    );
}

describe("UI primitive branches", () => {
    it("renders a real button without an arrow and handles clicks", async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<Button onClick={onClick} showArrow={false} variant="dark">Run action</Button>);

        await user.click(screen.getByRole("button", {name: "Run action"}));
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(screen.getByRole("button", {name: "Run action"})).toHaveAttribute("data-button-variant", "dark");
    });

    it("opens web links in a new tab but keeps email links in the current context", () => {
        const {rerender} = render(<Button href="https://example.com">External</Button>);

        expect(screen.getByRole("link", {name: /External/i})).toHaveAttribute("target", "_blank");
        expect(screen.getByRole("link", {name: /External/i})).toHaveAttribute("rel", "noreferrer");

        rerender(<Button href="mailto:hello@example.com">Email</Button>);

        expect(screen.getByRole("link", {name: /Email/i})).not.toHaveAttribute("target");
        expect(screen.getByRole("link", {name: /Email/i})).not.toHaveAttribute("rel");
    });

    it("retries the original portrait before showing the placeholder", async () => {
        renderWithShell(<Photo src="/portrait.jpg" alt="Portrait" fallback="LV" fallbackCopy="Image fallback"/>);

        const picture = screen.getByAltText("Portrait").closest("picture");
        expect(picture.querySelector("source")).toBeInTheDocument();
        fireEvent.error(screen.getByAltText("Portrait"));
        expect(picture.querySelector("source")).not.toBeInTheDocument();
        expect(screen.getByAltText("Portrait")).toHaveAttribute("src", "/portrait.jpg");
        fireEvent.error(screen.getByAltText("Portrait"));

        expect(await screen.findByText("LV")).toBeInTheDocument();
        expect(screen.getByText("Image fallback")).toBeInTheDocument();
    });

    it("renders the compact project section with a view-all link", () => {
        renderWithShell(<SoftwareProjectsSection compact/>);

        expect(screen.getByRole("link", {name: /Projektportfolio ansehen|view all projects/i})).toHaveAttribute("href", "/projects");
    });
});
