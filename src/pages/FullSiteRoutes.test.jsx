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
        expect(existsSync("public/apple-touch-icon.svg")).toBe(true);
        expect(existsSync("public/images/luminovia-logo-full.svg")).toBe(true);
        expect(sitemap).toContain(`${SITE_BASE_URL}/`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/training`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/offers`);
        expect(sitemap).not.toContain(`${SITE_BASE_URL}/pricing`);
        expect(robots).toContain(`Sitemap: ${SITE_BASE_URL}/sitemap.xml`);
    });

    it("keeps the sitemap connected to every rendered app page", async () => {
        expect(appRoutes).toEqual(expect.arrayContaining([
            "/",
            "/projects",
            "/skills",
            "/credentials",
            "/my-way",
            "/blog",
            "/contact",
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
                unmount();
            }
        }
    }, 30000);

    it("exposes the primary Carina portfolio information architecture in navigation", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Home", "/");

        render(<App/>);

        const [headerNav] = await screen.findAllByRole("navigation");

        expect(within(headerNav).queryByRole("link", {name: /^Training$/i})).not.toBeInTheDocument();
        expect(within(headerNav).queryByRole("link", {name: /^Offers$/i})).not.toBeInTheDocument();
        expect(within(headerNav).queryByRole("link", {name: /^Pricing$/i})).not.toBeInTheDocument();
        expect(within(headerNav).getByRole("link", {name: /^Projects$/i})).toHaveAttribute("href", "/projects");
        expect(within(headerNav).getByRole("link", {name: /^Skills$/i})).toHaveAttribute("href", "/skills");
        expect(within(headerNav).getByRole("link", {name: /^Credentials$/i})).toHaveAttribute("href", "/credentials");
        expect(within(headerNav).getByRole("link", {name: /^My Way$/i})).toHaveAttribute("href", "/my-way");
        expect(within(headerNav).getByRole("link", {name: /^Contact$/i})).toHaveAttribute("href", "/contact");
    });

    it.each([
        ["/projects/", /Software projects, automation/i],
        ["/credentials/", /CV, certificates|Nachweise/i],
        ["/my-way/", /professional path through IT|professioneller Weg durch IT/i],
        ["/blog/", /Blog on AI, digital education|Blog zu AI/i],
        ["/training/", /handled by Luminovia|laufen über Luminovia/i],
    ])("renders trailing-slash route %s", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Trailing route", route);

        const {unmount} = render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: heading})).toBeInTheDocument();
        expect(document.title).not.toMatch(/not found|nicht gefunden/i);
        unmount();
    });
});
