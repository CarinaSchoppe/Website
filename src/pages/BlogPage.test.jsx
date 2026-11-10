import {screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {describe, expect, it} from "vitest";
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
    it("lists every published article in the overview", () => {
        renderBlog();

        expect(screen.getByRole("heading", {name: /Writing on AI/i})).toBeInTheDocument();
        const articles = within(screen.getByRole("region", {name: "Articles"}));
        expect(articles.getAllByRole("link")).toHaveLength(5);
        expect(articles.getByRole("link", {name: /Agentic AI/i})).toBeInTheDocument();
        expect(articles.getByRole("link", {name: /Project management/i})).toBeInTheDocument();
        expect(articles.getByRole("link", {name: /Teaching with AI/i})).toBeInTheDocument();
        expect(articles.getByRole("link", {name: /Industry 4\.0 to 5\.0/i})).toBeInTheDocument();
        expect(articles.getByRole("link", {name: /hallucinations, token burn and rate limits/i})).toBeInTheDocument();
        expect(articles.getByText("Latest article")).toBeInTheDocument();
    });

    it("offers populated topics and updates the visible results by keyboard", async () => {
        const user = userEvent.setup();
        renderBlog();

        const filters = within(screen.getByRole("group", {name: "Filter articles by topic"}));
        expect(filters.getAllByRole("button")).toHaveLength(4);
        expect(filters.queryByRole("button", {name: "Cybersecurity"})).not.toBeInTheDocument();
        const education = filters.getByRole("button", {name: "Digital Education"});
        education.focus();
        await user.keyboard("{Enter}");

        expect(education).toHaveAttribute("aria-pressed", "true");
        expect(screen.getByRole("status")).toHaveTextContent("1 article");
        expect(screen.getByRole("link", {name: /Teaching with AI/i})).toBeInTheDocument();
        expect(screen.queryByRole("link", {name: /Agentic AI/i})).not.toBeInTheDocument();
    });

    it("opens a dedicated article when its preview is selected", async () => {
        const user = userEvent.setup();
        renderBlog();

        await user.click(screen.getByRole("link", {name: /Project management/i}));
        expect(screen.getByRole("heading", {name: /less administration, more judgement/i})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: /Sources and further reading/i})).toBeInTheDocument();
    });

    it("shows German titles, topic labels and the result count", () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        renderBlog();

        expect(screen.getByRole("heading", {name: /Texte zu KI/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Digitale Bildung"})).toBeInTheDocument();
        expect(screen.getByRole("status")).toHaveTextContent("5 Beiträge");
    });

    it("restores the selected topic after returning from an article", async () => {
        const user = userEvent.setup();
        renderBlog("/blog", <BrowserBack/>);

        await user.click(screen.getByRole("button", {name: "AI & Governance"}));
        await user.click(screen.getByRole("link", {name: /Agentic AI: from impressive demos/i}));
        expect(screen.getByRole("heading", {level: 1, name: /Agentic AI: from impressive demos/i})).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: "Browser back"}));

        expect(screen.getByRole("button", {name: "AI & Governance", pressed: true})).toBeInTheDocument();
        expect(screen.getByRole("status")).toHaveTextContent("2 articles");
    });
});
