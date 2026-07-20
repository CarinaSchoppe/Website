import {defineConfig} from "vitest/config";
import preact from "@preact/preset-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = "https://carinaschoppe.com";
const prerenderRoutes = [
    ["/projects", "Projekte | Carina Sophie Schoppe", "Softwareprojekte, Automation und technische Experimente von Carina Sophie Schoppe, darunter Forschungswerkzeuge, Datenworkflows, Kotlin- und Mobile-Projekte."],
    ["/software", "Projekte | Carina Sophie Schoppe", "Softwareprojekte, Automation und technische Experimente von Carina Sophie Schoppe, darunter Forschungswerkzeuge, Datenworkflows, Kotlin- und Mobile-Projekte."],
    ["/portfolio", "Portfolio | Carina Sophie Schoppe", "Portfolio mit öffentlichen Projekten, technischen Arbeiten und Informationen zum beruflichen Profil von Carina Sophie Schoppe."],
    ["/skills", "Kompetenzen | Carina Sophie Schoppe", "Kompetenzprofil von Carina Sophie Schoppe zu AI, Softwareentwicklung, Cybersecurity, Wirtschaftsinformatik, Forschung und digitaler Bildung."],
    ["/credentials", "Nachweise | Carina Sophie Schoppe", "Abschlüsse, Zertifikate und fachliche Nachweise von Carina Sophie Schoppe, darunter B.Sc., M.Sc., MBA, TAE40122 und AI-Zertifikate."],
    ["/my-way", "Werdegang | Carina Sophie Schoppe", "Beruflicher Werdegang von Carina Sophie Schoppe durch Wirtschaftsinformatik, Softwarepraxis, AI, Forschung, Lehre und Brisbane."],
    ["/about", "Über Carina | Carina Sophie Schoppe", "Persönliches Profil von Carina Sophie Schoppe zwischen Software, Forschung, digitaler Bildung, AI, Cybersecurity und Unternehmertum."],
    ["/blog", "Blog | Carina Sophie Schoppe", "Texte von Carina Sophie Schoppe zu AI, Governance, digitaler Bildung, Projektarbeit, Cybersecurity, Automationsrisiken und moderner Arbeit."],
    ["/blog/agentic-ai-from-demo-to-delegation", "Agentic AI: vom Demo zur delegierten Arbeit | Carina Sophie Schoppe Blog", "Beitrag zu Agentic AI, delegierten Workflows, menschlicher Prüfung und belastbarem Organisationsdesign."],
    ["/blog/project-management-in-the-age-of-ai", "Projektmanagement im Zeitalter von AI | Carina Sophie Schoppe Blog", "Beitrag darüber, wie AI Projektmanagement, Koordination, Risikoarbeit und Delivery-Routinen verändert."],
    ["/blog/teaching-with-ai-without-losing-learning", "Lehren mit KI, ohne das Lernen zu verlieren | Carina Sophie Schoppe Blog", "Beitrag zum praktischen KI-Einsatz in Bildung, Lerndesign, Prüfungen und Kompetenzentwicklung."],
    ["/blog/from-industry-4-0-to-5-0-human-above-the-loop", "Von Industry 4.0 zu 5.0 | Carina Sophie Schoppe Blog", "Beitrag zu Industry 5.0, Human-in-the-Loop, Human-above-the-Loop und verantwortlicher AI-Aufsicht."],
    ["/blog/ai-automation-risks-hallucinations-token-burn-rate-limits", "Risiken der AI-Automation | Carina Sophie Schoppe Blog", "Beitrag zu Halluzinationen, Tokenverbrauch, Ratelimits und resilientem Prozessdesign in AI-Automationen."],
    ["/contact", "Kontakt | Carina Sophie Schoppe", "Kontakt zu Carina Sophie Schoppe für Kooperationen, Projekte, Forschung, Gastvorträge oder Fragen zum beruflichen Profil. Unternehmensanfragen werden an Luminovia verwiesen."],
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
        .replace(/\s*<link href="\/images\/carina-outdoor-640\.webp"[^>]*\/>/, "")
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtmlAttribute(title)}</title>`)
        .replace(/<meta content="[^"]*" name="description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="description"/>`)
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
