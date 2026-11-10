import {defineConfig} from "vitest/config";
import preact from "@preact/preset-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {blogIndexForLanguage} from "./src/data/blogIndex.js";

const siteUrl = "https://carinaschoppe.com";
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

function withRouteHead(html, [path, title, description]) {
    const canonical = `${siteUrl}${path}`;
    return html
        .replace(/\s*<link\b(?=[^>]*\bdata-hero-preload\b)[^>]*>/, "")
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtmlAttribute(title)}</title>`)
        .replace(/<meta content="[^"]*" name="description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="description"/>`)
        .replace(/<meta content="website" property="og:type"\/>/, `<meta content="${path.startsWith("/blog/") ? "article" : "website"}" property="og:type"/>`)
        .replace(/<meta content="[^"]*" property="og:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" property="og:title"/>`)
        .replace(/<meta content="[^"]*" property="og:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" property="og:description"/>`)
        .replace(/<meta content="[^"]*" property="og:url"\/>/, `<meta content="${canonical}" property="og:url"/>`)
        .replace(/<link href="[^"]*" rel="canonical"\/>/, `<link href="${canonical}" rel="canonical"/>`)
        .replace(/<link href="[^"]*" hreflang="en" rel="alternate"\/>/, `<link href="${canonical}" hreflang="en" rel="alternate"/>`)
        .replace(/<link href="[^"]*" hreflang="de" rel="alternate"\/>/, `<link href="${canonical}" hreflang="de" rel="alternate"/>`);
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

            htmlAsset.source = html;

            prerenderRoutes.forEach((route) => {
                this.emitFile({
                    type: "asset",
                    fileName: routeFileName(route[0]),
                    source: withRouteHead(html, route),
                });
            });
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
