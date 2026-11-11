import {existsSync, readFileSync} from "node:fs";
import {render, screen, within} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

const SITE_BASE_URL = "https://carinaschoppe.com";
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const appRoutes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(SITE_BASE_URL))
    .map((url) => url.slice(SITE_BASE_URL.length) || "/")
    .filter((path) => !path.endsWith(".pdf"))
    .filter((path) => !path.endsWith(".html"));

describe("full static site route coverage", () => {
    it("uses the carinaschoppe.com static site identity", () => {
        const html = readFileSync("index.html", "utf8");
        const robots = readFileSync("public/robots.txt", "utf8");
        const cname = readFileSync("public/CNAME", "utf8").trim();

        expect(cname).toBe("carinaschoppe.com");
        expect(html).toContain('<link href="/favicon.svg" rel="icon" type="image/svg+xml"/>');
        expect(html).toContain("Carina Sophie Schoppe | Portfolio");
        expect(existsSync("public/favicon.svg")).toBe(true);
        expect(html).toContain('<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"/>');
        expect(existsSync("public/apple-touch-icon.png")).toBe(true);
        expect(existsSync("public/images/luminovia-logo-full.svg")).toBe(true);
        expect(html).toContain("params.get(\"__soft404\")");
        expect(html).not.toContain("hreflang=");
        expect(sitemap).toContain(`${SITE_BASE_URL}/`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/software`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/portfolio`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/training`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/offers`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/pricing`);
        expect(robots).toContain(`Sitemap: ${SITE_BASE_URL}/sitemap.xml`);
    });

    it("keeps the sitemap connected to every rendered app page", async () => {
        expect(appRoutes).toEqual(expect.arrayContaining([
            "/",
            "/projects/",
            "/skills/",
            "/credentials/",
            "/my-way/",
            "/blog/",
            "/contact/",
        ]));

        for (const language of ["en", "de"]) {
            for (const route of appRoutes) {
                window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
                window.history.pushState({}, `Route ${route}`, route);

                const {unmount} = render(<App/>);
                expect(await screen.findByRole("main")).toBeInTheDocument();
                expect(await screen.findByRole("heading", {level: 1})).toBeInTheDocument();
                expect(screen.queryByRole("heading", {name: /page not found/i})).not.toBeInTheDocument();
                expect(screen.queryByRole("heading", {name: /seite nicht gefunden/i})).not.toBeInTheDocument();
                expect(document.title).not.toMatch(/not found|nicht gefunden/i);
                expect(document.documentElement.lang).toBe(language);
                expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", `${SITE_BASE_URL}${route}`);
                unmount();
            }
        }
    }, 30000);

    it("exposes the primary Carina portfolio information architecture in navigation", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Home", "/");

        render(<App/>);

        const headerNav = within(await screen.findByRole("banner")).getByRole("navigation");
        const footer = within(screen.getByRole("contentinfo"));

        expect(within(headerNav).getAllByRole("link").map((link) => link.getAttribute("href")).sort()).toEqual([
            "/#referenzen", "/about", "/blog", "/contact", "/credentials", "/projects", "/skills",
        ]);
        expect(footer.getByRole("link", {name: /^Teaching$/i})).toHaveAttribute("href", "/skills");
        expect(footer.getByRole("link", {name: /^Credentials$/i})).toHaveAttribute("href", "/credentials");
    });

    it.each(["/software/", "/portfolio/"])("keeps the project alias %s with the main projects canonical URL", async (route) => {
        window.history.pushState({}, "Project alias", route);

        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1})).toHaveTextContent(/Softwareprojekte und Open Source|Software projects and open source/i);
        expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", `${SITE_BASE_URL}/projects/`);
    });

    it.each([
        ["/projects/", /Software projects and open source/i],
        ["/credentials/", /Degrees, certificates|Abschlüsse, Zertifikate/i],
        ["/my-way/", /professional path through technology|beruflicher Weg durch IT/i],
        ["/blog/", /Writing on AI, digital education|Texte zu KI/i],
    ])("renders trailing-slash route %s", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Trailing route", route);

        const {unmount} = render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: heading})).toBeInTheDocument();
        expect(document.title).not.toMatch(/not found|nicht gefunden/i);
        unmount();
    });

    it("does not keep removed business routes alive", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Removed route", "/training/");

        const {unmount} = render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: /Oops, there is nothing here/i})).toBeInTheDocument();
        expect(document.title).toMatch(/not found/i);
        expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
        unmount();
    });

    it("keeps a missing article at its URL and excludes it from search", async () => {
        const missingPath = "/blog/not-a-real-post/?source=test#paragraph";
        window.history.pushState({}, "Missing article", missingPath);
        render(<App/>);

        expect(await screen.findByTestId("not-found-reference")).toBeInTheDocument();
        expect(`${window.location.pathname}${window.location.search}${window.location.hash}`).toBe(missingPath);
        expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
        expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
    });

    it.each(["en", "de"])("keeps article titles consistent across metadata in %s", async (language) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        window.history.pushState({}, "Article", "/blog/teaching-with-ai-without-losing-learning/");
        render(<App/>);

        const heading = await screen.findByRole("heading", {level: 1});
        const title = `${heading.textContent} | Carina Sophie Schoppe Blog`;
        expect(document.title).toBe(title);
        expect(document.head.querySelector('meta[property="og:title"]')).toHaveAttribute("content", title);
        expect(document.head.querySelector('meta[name="twitter:title"]')).toHaveAttribute("content", title);
        const breadcrumb = JSON.parse(document.getElementById("dynamic-breadcrumb-schema").textContent);
        expect(breadcrumb.itemListElement.at(-1).name).toBe(heading.textContent);
    });
});
