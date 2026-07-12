import {fireEvent, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {describe, expect, it, vi} from "vitest";
import {Route, Routes} from "react-router-dom";
import BlogPage from "./BlogPage.jsx";
import BlogPostPage from "./BlogPostPage.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

function renderBlog(route = "/blog") {
    return renderWithProviders(
        <Routes>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/blog/:slug" element={<BlogPostPage/>}/>
        </Routes>,
        {route},
    );
}

describe("BlogPage", () => {
    it("renders the article overview with links to every long-form post", () => {
        renderBlog();

        expect(screen.getByRole("heading", {name: /Blog on AI/i})).toBeInTheDocument();
        expect(screen.getAllByRole("link", {name: /Agentic AI/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /Project management/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /Teaching with AI/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /Industry 4\.0 to 5\.0/i}).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", {name: /hallucinations, token burn and rate limits/i}).length).toBeGreaterThan(0);
        expect(screen.getByRole("region", {name: /All blog posts/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /Scroll blog posts left/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /Scroll blog posts right/i})).toBeInTheDocument();
        expect(screen.getAllByText(/Featured latest post/i).length).toBeGreaterThan(0);
    });

    it("supports carousel buttons, keyboard navigation and drag gestures", async () => {
        const user = userEvent.setup();
        renderBlog();

        const carousel = screen.getByRole("region", {name: /All blog posts/i});
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
        fireEvent.pointerDown(carousel, {pointerId: 1, clientX: 200});
        fireEvent.pointerMove(carousel, {pointerId: 1, clientX: 150});
        fireEvent.pointerUp(carousel, {pointerId: 1});

        expect(scrollBy).toHaveBeenCalledTimes(4);
        expect(scrollBy).toHaveBeenCalledWith(expect.objectContaining({left: 410, behavior: "smooth"}));
        expect(scrollBy).toHaveBeenCalledWith(expect.objectContaining({left: -410, behavior: "smooth"}));
        expect(carousel.scrollLeft).toBe(170);
        expect(carousel.setPointerCapture).toHaveBeenCalledWith(1);
        expect(carousel.releasePointerCapture).toHaveBeenCalledWith(1);
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

    it("opens a dedicated article page when a blog card is clicked", async () => {
        const user = userEvent.setup();
        renderBlog();

        await user.click(screen.getAllByRole("link", {name: /Project management/i})[0]);

        expect(screen.getByRole("heading", {name: /less administration, more judgement/i})).toBeInTheDocument();
        expect(screen.getByText(/Sources and further reading/i)).toBeInTheDocument();
    });

    it("renders the German article overview after switching language", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        renderBlog();

        expect(screen.getByRole("heading", {name: /Blog zu AI/i})).toBeInTheDocument();
    });
});
