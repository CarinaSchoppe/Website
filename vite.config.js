import {defineConfig} from "vitest/config";
import preact from "@preact/preset-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = "https://carinaschoppe.com";
const legacyEntryChunkNames = [
    "assets/index-BHwT2ryf.js",
    "assets/index-BXzdP6Lr.js",
    "assets/index-DO8wLb-v.js",
    "assets/index-DUbK75q5.js",
    "assets/index-BTxBA96Y.js",
];

const prerenderRoutes = [
    ["/projects", "Projects | Carina Sophie Schoppe", "Selected software, automation, research tooling, Kotlin, mobile and digital implementation projects by Carina Sophie Schoppe."],
    ["/software", "Projects | Carina Sophie Schoppe", "Selected software, automation, research tooling, Kotlin, mobile and digital implementation projects by Carina Sophie Schoppe."],
    ["/portfolio", "Portfolio | Carina Sophie Schoppe", "Portfolio overview for public projects, technical work and professional profile information."],
    ["/skills", "Skills | Carina Sophie Schoppe", "Personal skill overview across AI, software development, cybersecurity, business computer science, research and digital education."],
    ["/credentials", "Credentials | Carina Sophie Schoppe", "Credentials and professional background including B.Sc., M.Sc., MBA, TAE40122 completed in June 2026, AI certificates and cybersecurity learning paths."],
    ["/my-way", "My Way | Carina Sophie Schoppe", "Professional timeline through business computer science, software practice, AI, research, TAE40122 and Brisbane."],
    ["/about", "About | Carina Sophie Schoppe", "Personal profile of Carina Sophie Schoppe between software, research, digital education, AI, cybersecurity and entrepreneurship."],
    ["/blog", "Blog | Carina Sophie Schoppe", "Articles on AI, governance, digital education, project work, cybersecurity, automation risk and modern work."],
    ["/blog/agentic-ai-from-demo-to-delegation", "Agentic AI: from demos to delegated work | Carina Sophie Schoppe Blog", "An article on agentic AI, delegated workflows, human review and practical organisational design."],
    ["/blog/project-management-in-the-age-of-ai", "Project Management in the Age of AI | Carina Sophie Schoppe Blog", "An article on how AI changes project management, coordination, risk work and delivery routines."],
    ["/blog/teaching-with-ai-without-losing-learning", "Teaching with AI without losing learning | Carina Sophie Schoppe Blog", "An article on practical AI use in education, learning design, assessment and learner competence."],
    ["/blog/from-industry-4-0-to-5-0-human-above-the-loop", "From Industry 4.0 to 5.0 | Carina Sophie Schoppe Blog", "An article on Industry 5.0, human-in-the-loop, human-above-the-loop and AI supervision."],
    ["/blog/ai-automation-risks-hallucinations-token-burn-rate-limits", "AI automation risks: hallucinations, token burn and rate limits | Carina Sophie Schoppe Blog", "An article on AI automation risks, hallucinations, token burn, rate limits and process resilience."],
    ["/contact", "Contact | Carina Sophie Schoppe", "Contact Carina Sophie Schoppe for portfolio, project, research, CV or professional profile enquiries. Business enquiries are routed to Luminovia."],
    ["/imprint", "Imprint | Carina Sophie Schoppe", "Legal notice and contact details for Carina Sophie Schoppe."],
    ["/privacy", "Privacy Policy | Carina Sophie Schoppe", "Privacy policy for the Carina Sophie Schoppe website, including analytics and contact information."],
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
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtmlAttribute(title)}</title>`)
        .replace(/<meta content="[^"]*" name="description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="description"/>`)
        .replace(/<meta content="[^"]*" property="og:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" property="og:title"/>`)
        .replace(/<meta content="[^"]*" property="og:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" property="og:description"/>`)
        .replace(/<meta content="[^"]*" property="og:url"\/>/, `<meta content="${canonical}" property="og:url"/>`)
        .replace(/<link href="[^"]*" rel="canonical"\/>/, `<link href="${canonical}" rel="canonical"/>`)
        .replace(/<link href="[^"]*" hreflang="en" rel="alternate"\/>/, `<link href="${canonical}" hreflang="en" rel="alternate"/>`)
        .replace(/<link href="[^"]*" hreflang="de" rel="alternate"\/>/, `<link href="${canonical}" hreflang="de" rel="alternate"/>`);
}

function legacyEntryChunkSource() {
    return `import("./legacy-entry-loader.js");
`;
}

function htmlPerformancePlugin() {
    return {
        name: "html-performance-pass",
        enforce: "post",
        apply: "build",
        generateBundle(_options, bundle) {
            const entryChunk = Object.values(bundle).find((asset) => asset.type === "chunk" && asset.isEntry);
            if (entryChunk) {
                legacyEntryChunkNames.forEach((fileName) => {
                    if (bundle[fileName]) return;

                    this.emitFile({
                        type: "asset",
                        fileName,
                        source: legacyEntryChunkSource(),
                    });
                });
            }

            const htmlAsset = Object.values(bundle).find((asset) => asset.type === "asset" && asset.fileName.endsWith(".html"));
            if (!htmlAsset || typeof htmlAsset.source !== "string") return;

            let html = htmlAsset.source.replace(/<link rel="stylesheet" crossorigin href="(\/(?:Website\/)?[^"]+\.css)">/g, (_match, href) => {
                return `<link rel="preload" href="${href}" as="style" crossorigin onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`;
            });

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
