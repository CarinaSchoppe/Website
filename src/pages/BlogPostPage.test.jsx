import {screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {Route, Routes} from "react-router-dom";
import BlogPage from "./BlogPage.jsx";
import BlogPostPage from "./BlogPostPage.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

function renderRoutes(route) {
    return renderWithProviders(
        <Routes>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/blog/:slug" element={<BlogPostPage/>}/>
        </Routes>,
        {route},
    );
}

describe("BlogPostPage", () => {
    it("renders a full English article with sections, takeaway and source links", () => {
        renderRoutes("/blog/agentic-ai-from-demo-to-delegation");

        expect(screen.getByRole("heading", {name: /Agentic AI: from impressive demos/i})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: /Agents are workflow design/i})).toBeInTheDocument();
        expect(screen.getByText(/Key takeaway/i)).toBeInTheDocument();
        expect(screen.getAllByRole("link", {name: /McKinsey/i})).toHaveLength(2);
    });

    it("renders the matching German version for the same slug", () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        renderRoutes("/blog/teaching-with-ai-without-losing-learning");

        expect(screen.getByRole("heading", {name: /Lehren mit KI/i})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: /Gute KI-Didaktik/i})).toBeInTheDocument();
        expect(screen.getByText(/Kernidee/i)).toBeInTheDocument();
    });

    it("redirects unknown slugs back to the blog overview", () => {
        renderRoutes("/blog/not-a-real-post");

        expect(screen.getByRole("heading", {name: /Writing on AI/i})).toBeInTheDocument();
    });
});
