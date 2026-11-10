import {fireEvent, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {describe, expect, it, vi} from "vitest";
import {Route, Routes, useNavigate} from "react-router-dom";
import BlogPage from "./BlogPage.jsx";
import BlogPostPage from "./BlogPostPage.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

function BrowserBack() {
    const navigate = useNavigate();
    return <button type="button" onClick={() => navigate(-1)}>Browser back</button>;
}

function renderBlog(route = "/blog", extra = null) {
    return renderWithProviders(
        <>
            {extra}
            <Routes>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/blog/:slug" element={<BlogPostPage/>}/>
            </Routes>
        </>,
        {route},
    );
}

describe("BlogPage", () => {
    it("renders the article overview with links to every long-form post", () => {
        renderBlog();

        expect(screen.getByRole("heading", {name: /Writing on AI/i})).toBeInTheDocument();
        expect(screen.getAllByRole("link", {name: /Agentic AI/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /Project management/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /Teaching with AI/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /Industry 4\.0 to 5\.0/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /hallucinations, token burn and rate limits/i}).length).toBeGreaterThan(0);
        expect(screen.getByRole("region", {name: /More articles/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /Scroll blog posts left/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /Scroll blog posts right/i})).toBeInTheDocument();
        expect(screen.getAllByText(/Featured latest post/i).length).toBeGreaterThan(0);
    });

    it("supports carousel buttons, keyboard navigation and drag gestures", async () => {
        const user = userEvent.setup();
        renderBlog();

        const carousel = screen.getByRole("region", {name: /More articles/i});
        const scrollBy = vi.fn();
        carousel.scrollBy = scrollBy;
        Object.defineProperty(carousel, "clientWidth", {configurable: true, value: 500});
        Object.defineProperty(carousel, "scrollLeft", {configurable: true, writable: true, value: 120});
        carousel.setPointerCapture = vi.fn();
        carousel.releasePointerCapture = vi.fn();

        await user.click(screen.getByRole("button", {name: /Scroll blog posts right/i}));
        await user.click(screen.getByRole("button", {name: /Scroll blog posts left/i}));
        fireEvent.keyDown(carousel, {key: "ArrowRight"});
        fireEvent.keyDown(carousel, {key: "ArrowLeft"});
        fireEvent.pointerDown(carousel, {pointerId: 1, button: 0, clientX: 200});
        fireEvent.pointerMove(carousel, {pointerId: 1, buttons: 1, clientX: 198});
        expect(carousel.setPointerCapture).not.toHaveBeenCalled();
        fireEvent.pointerMove(carousel, {pointerId: 1, buttons: 1, clientX: 150});
        fireEvent.pointerUp(carousel, {pointerId: 1});

        expect(scrollBy).toHaveBeenCalledTimes(4);
        expect(scrollBy).toHaveBeenCalledWith(expect.objectContaining({left: 410, behavior: "smooth"}));
        expect(scrollBy).toHaveBeenCalledWith(expect.objectContaining({left: -410, behavior: "smooth"}));
        expect(carousel.scrollLeft).toBe(170);
        expect(carousel.setPointerCapture).toHaveBeenCalledWith(1);
        expect(carousel.releasePointerCapture).toHaveBeenCalledWith(1);
        fireEvent.click(screen.getByRole("link", {name: /Project management/i}), {detail: 1});
        expect(screen.getByRole("heading", {name: /Writing on AI/i})).toBeInTheDocument();
    });

    it("keeps the category rail keyboard-scrollable and filters its articles", async () => {
        const user = userEvent.setup();
        renderBlog();

        const categoryRail = screen.getByRole("region", {name: "Scrollable blog categories"});
        const scrollBy = vi.fn();
        categoryRail.scrollBy = scrollBy;

        fireEvent.keyDown(categoryRail, {key: "Enter"});
        fireEvent.keyDown(categoryRail, {key: "ArrowRight"});
        fireEvent.keyDown(categoryRail, {key: "ArrowLeft"});

        expect(scrollBy).toHaveBeenNthCalledWith(1, {left: 220, behavior: "smooth"});
        expect(scrollBy).toHaveBeenNthCalledWith(2, {left: -220, behavior: "smooth"});

        await user.click(screen.getByRole("button", {name: "Cybersecurity"}));
        expect(screen.getByText(/There is no article in this category yet/i)).toBeInTheDocument();

        await user.click(screen.getByRole("button", {name: "AI & Governance"}));
        expect(screen.getAllByRole("link", {name: /Agentic AI/i}).length).toBeGreaterThan(0);
    });

    it("opens a dedicated article page when a blog card is clicked", () => {
        renderBlog();

        const carousel = screen.getByRole("region", {name: /More articles/i});
        carousel.setPointerCapture = vi.fn();
        const card = screen.getByRole("link", {name: /Project management/i});
        fireEvent.pointerDown(card, {pointerId: 1, pointerType: "mouse", button: 0, clientX: 200});
        fireEvent.pointerUp(card, {pointerId: 1});
        expect(carousel.setPointerCapture).not.toHaveBeenCalled();
        fireEvent.click(card);

        expect(screen.getByRole("heading", {name: /less administration, more judgement/i})).toBeInTheDocument();
        expect(screen.getByText(/Sources and further reading/i)).toBeInTheDocument();
    });

    it("renders the German article overview after switching language", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        renderBlog();

        expect(screen.getByRole("heading", {name: /Texte zu KI/i})).toBeInTheDocument();
    });

    it("restores the blog filter and the scrollable rails after returning from an article", async () => {
        const user = userEvent.setup();
        renderBlog("/blog", <BrowserBack/>);

        await user.click(screen.getByRole("button", {name: "AI & Governance"}));
        screen.getByRole("region", {name: "Scrollable blog categories"}).scrollLeft = 55;
        screen.getByRole("region", {name: "More articles"}).scrollLeft = 170;
        await user.click(screen.getByRole("link", {name: /Agentic AI: from impressive demos/i}));
        expect(screen.getByRole("heading", {level: 1, name: /Agentic AI: from impressive demos/i})).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: "Browser back"}));

        expect(screen.getByRole("button", {name: "AI & Governance", pressed: true})).toBeInTheDocument();
        expect(screen.getByRole("region", {name: "Scrollable blog categories"}).scrollLeft).toBe(55);
        expect(screen.getByRole("region", {name: "More articles"}).scrollLeft).toBe(170);
    });
});
