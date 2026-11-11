import {defineConfig} from "vitest/config";
import preact from "@preact/preset-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {blogIndexForLanguage} from "./src/data/blogIndex.js";
import {aboutPortraitSizes, outdoorWidths} from "./src/data/portrait.js";
import {canonicalUrl} from "./src/data/siteUrls.js";

const prerenderRoutes = [
    ["/projects", "Projekte | Carina Sophie Schoppe", "Softwareprojekte, Automation und technische Experimente von Carina Sophie Schoppe, darunter Forschungswerkzeuge, Datenworkflows, Kotlin- und Mobile-Projekte."],
    ["/software", "Projekte | Carina Sophie Schoppe", "Softwareprojekte, Automation und technische Experimente von Carina Sophie Schoppe, darunter Forschungswerkzeuge, Datenworkflows, Kotlin- und Mobile-Projekte."],
    ["/portfolio", "Portfolio | Carina Sophie Schoppe", "Portfolio mit öffentlichen Projekten, technischen Arbeiten und Informationen zum beruflichen Profil von Carina Sophie Schoppe."],
    ["/skills", "Lehrthemen und Kompetenzen | Carina Sophie Schoppe", "Unterricht zu KI, IT-Sicherheit, Software, Datenbanken, Netzwerken, Wirtschaft, Buchhaltung, Arbeitsrecht und Datenschutz mit Beispielen aus der Praxis."],
    ["/credentials", "Nachweise | Carina Sophie Schoppe", "Abschlüsse, Zertifikate und fachliche Nachweise von Carina Sophie Schoppe, darunter B.Sc., M.Sc., MBA, TAE40122 und AI-Zertifikate."],
    ["/my-way", "Werdegang | Carina Sophie Schoppe", "Carina Sophie Schoppes Lebenslauf und Werdegang von Wirtschaftsinformatik und Lehre in Deutschland bis zu Software, KI-Forschung und Luminovia in Brisbane."],
    ["/about", "Über Carina | Carina Sophie Schoppe", "Carina Sophie Schoppe ist IT-Dozentin, Softwareentwicklerin und Gründerin von Luminovia Training & Consulting. Persönlicher Werdegang und LinkedIn-Profil."],
    ["/blog", "Blog | Carina Sophie Schoppe", "Texte von Carina Sophie Schoppe zu AI, Governance, digitaler Bildung, Projektarbeit, Cybersecurity, Automationsrisiken und moderner Arbeit."],
    ...blogIndexForLanguage("de").map(({slug, title, excerpt}) => [
        `/blog/${slug}`,
        `${title} | Carina Sophie Schoppe Blog`,
        excerpt,
    ]),
    ["/contact", "Kontakt | Carina Sophie Schoppe", "Persönlicher Kontakt zu Carina Sophie Schoppe für den Austausch über Forschung, Open Source und ihre Arbeit. Geschäftliche Anfragen gehen an Luminovia."],
    ["/imprint", "Impressum | Carina Sophie Schoppe", "Impressum und Kontaktinformationen von Carina Sophie Schoppe."],
    ["/privacy", "Datenschutzerklärung | Carina Sophie Schoppe", "Datenschutzerklärung der Website von Carina Sophie Schoppe mit Informationen zu Analytics und Kontaktaufnahme."],
];

function escapeHtmlAttribute(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function routeFileName(path) {
    return `${path.replace(/^\//, "")}/index.html`;
}

const routeModules = {
    "/projects": "SoftwarePage",
    "/software": "SoftwarePage",
    "/portfolio": "SoftwarePage",
    "/skills": "SkillsPage",
    "/credentials": "CredentialsPage",
    "/my-way": "MyWayPage",
    "/about": "AboutPage",
    "/blog": "BlogPage",
    "/contact": "ContactPage",
    "/imprint": "ImprintPage",
    "/privacy": "PrivacyPage",
};

function appendHeadLinks(html, links) {
    return links.length ? html.replace("</head>", `${links.join("\n")}\n</head>`) : html;
}

function preloadRoute(html, path, chunks) {
    const page = chunks.get(path.startsWith("/blog/") ? "BlogPostPage" : routeModules[path]);
    const links = page
        ? [page.fileName, ...page.imports]
            .filter((name) => !html.includes(`"/${name}"`))
            .map((name) => `<link rel="modulepreload" href="/${name}" crossorigin>`)
        : [];

    if (path === "/about") {
        const sources = outdoorWidths.map((width) => `/images/carina-outdoor-${width}.webp ${width}w`).join(", ");
        links.push(`<link rel="preload" as="image" type="image/webp" imagesrcset="${sources}" imagesizes="${aboutPortraitSizes}" fetchpriority="high">`);
    }

    return appendHeadLinks(html, links);
}

function withRouteHead(html, [path, title, description]) {
    const canonical = path && canonicalUrl(path);
    return html
        .replace(/\s*<link\b(?=[^>]*\bdata-hero-preload\b)[^>]*>/, "")
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtmlAttribute(title)}</title>`)
        .replace(/<meta content="[^"]*" name="description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="description"/>`)
        .replace(/<meta content="website" property="og:type"\/>/, `<meta content="${path?.startsWith("/blog/") ? "article" : "website"}" property="og:type"/>`)
        .replace(/<meta content="[^"]*" property="og:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" property="og:title"/>`)
        .replace(/<meta content="[^"]*" property="og:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" property="og:description"/>`)
        .replace(/<meta content="[^"]*" name="twitter:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" name="twitter:title"/>`)
        .replace(/<meta content="[^"]*" name="twitter:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="twitter:description"/>`)
        .replace(/<meta content="[^"]*" property="og:url"\/>/, canonical ? `<meta content="${canonical}" property="og:url"/>` : "")
        .replace(/<link href="[^"]*" rel="canonical"\/>/, canonical ? `<link href="${canonical}" rel="canonical"/>` : "");
}

function htmlPerformancePlugin() {
    return {
        name: "html-performance-pass",
        enforce: "post",
        apply: "build",
        generateBundle(_options, bundle) {
            const htmlAsset = Object.values(bundle).find((asset) => asset.type === "asset" && asset.fileName.endsWith(".html"));
            if (!htmlAsset || typeof htmlAsset.source !== "string") return;

            let html = htmlAsset.source;

            const moduleScripts = [];
            html = html.replace(/\s*<script type="module" crossorigin src="\/([^"]+\.js)"><\/script>/g, (match) => {
                moduleScripts.push(match.trim());
                return "";
            });

            if (moduleScripts.length > 0) {
                html = html.replace("</body>", `${moduleScripts.map((script) => `\n${script}`).join("")}\n</body>`);
            }

            const font = Object.keys(bundle).find((name) => /\/manrope-[^/]+\.woff2$/.test(name));
            if (font) {
                html = appendHeadLinks(html, [`<link rel="preload" as="font" type="font/woff2" href="/${font}" crossorigin>`]);
            }

            htmlAsset.source = html;
            const chunks = new Map(Object.values(bundle).filter((entry) => entry.type === "chunk").map((chunk) => [chunk.name, chunk]));

            prerenderRoutes.forEach((route) => {
                this.emitFile({
                    type: "asset",
                    fileName: routeFileName(route[0]),
                    source: preloadRoute(withRouteHead(html, route), route[0], chunks),
                });
            });

            const notFoundHtml = withRouteHead(html, [null, "Seite nicht gefunden | Carina Sophie Schoppe", "Diese Adresse führt zu keiner Seite."])
                .replace('content="index, follow, max-image-preview:large" name="robots"', 'content="noindex, follow" name="robots"')
                .replace('<div id="root"></div>', `<div id="root"></div>
<noscript><main class="site-width"><h1>Seite nicht gefunden</h1><p>Diese Adresse führt zu keiner Seite.</p><p><a href="/">Zur Startseite</a></p></main></noscript>`);
            this.emitFile({type: "asset", fileName: "404.html", source: notFoundHtml});
        },
    };
}

export default defineConfig(({command, mode}) => {
    const usePreactCompat = command === "build" && mode !== "test";

    return {
        plugins: [usePreactCompat ? preact() : react(), tailwindcss(), htmlPerformancePlugin()],
        base: "/",
        build: {
            cssCodeSplit: false,
            modulePreload: {
                polyfill: false,
            },
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        return /node_modules[\\/](preact|react-router|react-router-dom)[\\/]/.test(id)
                            ? "ui-vendor"
                            : undefined;
                    },
                },
            },
            target: "es2022",
        },
        test: {
            environment: "jsdom",
            setupFiles: "./src/test/setup.js",
            globals: true,
            coverage: {
                reporter: ["text", "json"],
                include: [
                    "src/components/**/*.{js,jsx}",
                    "src/data/**/*.js",
                    "src/pages/**/*.jsx",
                    "src/utils/**/*.js",
                    "src/App.jsx",
                    "src/i18n.jsx",
                ],
                exclude: [
                    "src/**/*.test.{js,jsx}",
                    "src/test/**",
                    "src/main.jsx",
                ],
                thresholds: {
                    lines: 99,
                },
            },
        },
    };
});
