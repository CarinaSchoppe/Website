import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {localizedSiteContentForLanguage} from "../data/localizedContent.js";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const SITE_URL = "https://carinaschoppe.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/carina-hero.jpg`;

const routeMeta = {
    en: {
        "/": {
            title: "Carina Sophie Schoppe | Portfolio",
            description: "Personal portfolio of Carina Sophie Schoppe with software projects, research interests, credentials, writing and a clear reference to Luminovia Training & Consulting.",
        },
        "/projects": {
            title: "Projects | Carina Sophie Schoppe",
            description: "Selected software, automation, research tooling, Kotlin, mobile and digital implementation projects by Carina Sophie Schoppe.",
        },
        "/software": {
            title: "Projects | Carina Sophie Schoppe",
            description: "Selected software, automation, research tooling, Kotlin, mobile and digital implementation projects by Carina Sophie Schoppe.",
        },
        "/portfolio": {
            title: "Portfolio | Carina Sophie Schoppe",
            description: "Portfolio overview for public projects, technical work and professional profile information.",
        },
        "/skills": {
            title: "Skills | Carina Sophie Schoppe",
            description: "Personal skill overview across AI, software development, cybersecurity, business computer science, research and digital education.",
        },
        "/credentials": {
            title: "Credentials | Carina Sophie Schoppe",
            description: "Credentials and professional background including B.Sc., M.Sc., MBA, TAE40122 completed in June 2026, AI certificates and cybersecurity learning paths.",
        },
        "/my-way": {
            title: "Story | Carina Sophie Schoppe",
            description: "Professional timeline through business computer science, software practice, AI, research, TAE40122 and Brisbane.",
        },
        "/about": {
            title: "About | Carina Sophie Schoppe",
            description: "Personal profile of Carina Sophie Schoppe between software, research, digital education, AI, cybersecurity and entrepreneurship.",
        },
        "/blog": {
            title: "Blog | Carina Sophie Schoppe",
            description: "Articles on AI, governance, digital education, project work, cybersecurity, automation risk and modern work.",
        },
        "/contact": {
            title: "Contact | Carina Sophie Schoppe",
            description: "Contact Carina Sophie Schoppe about collaborations, projects, research, guest lectures or her professional background. Company enquiries are routed to Luminovia.",
        },
        "/imprint": {
            title: "Imprint | Carina Sophie Schoppe",
            description: "Legal notice and contact details for Carina Sophie Schoppe.",
        },
        "/privacy": {
            title: "Privacy Policy | Carina Sophie Schoppe",
            description: "Privacy policy for the Carina Sophie Schoppe website, including analytics and contact information.",
        },
    },
    de: {
        "/": {
            title: "Carina Sophie Schoppe | Portfolio",
            description: "Persönliches Portfolio von Carina Sophie Schoppe mit Softwareprojekten, Forschungsinteressen, Nachweisen, Texten und klarem Verweis auf Luminovia Training & Consulting.",
        },
        "/projects": {
            title: "Projekte | Carina Sophie Schoppe",
            description: "Ausgewählte Software-, Automatisierungs-, Forschungs-, Kotlin- und Mobile-Projekte von Carina Sophie Schoppe.",
        },
        "/software": {
            title: "Projekte | Carina Sophie Schoppe",
            description: "Ausgewählte Software-, Automatisierungs-, Forschungs-, Kotlin- und Mobile-Projekte von Carina Sophie Schoppe.",
        },
        "/portfolio": {
            title: "Portfolio | Carina Sophie Schoppe",
            description: "Portfolio-Übersicht mit öffentlichen Projekten, technischen Arbeiten und Informationen zum beruflichen Profil von Carina Sophie Schoppe.",
        },
        "/skills": {
            title: "Kompetenzen | Carina Sophie Schoppe",
            description: "Persönliche Kompetenzübersicht zu AI, Softwareentwicklung, Cybersecurity, Wirtschaftsinformatik, Forschung und digitaler Bildung.",
        },
        "/credentials": {
            title: "Nachweise | Carina Sophie Schoppe",
            description: "Nachweise und professioneller Hintergrund mit B.Sc., M.Sc., MBA, TAE40122 abgeschlossen im Juni 2026, AI-Zertifikaten und Cybersecurity-Lernpfaden.",
        },
        "/my-way": {
            title: "Werdegang | Carina Sophie Schoppe",
            description: "Professionelle Timeline durch Wirtschaftsinformatik, Softwarepraxis, AI, Forschung, TAE40122 und Brisbane.",
        },
        "/about": {
            title: "Über Carina | Carina Sophie Schoppe",
            description: "Persönliches Profil von Carina Sophie Schoppe zwischen Software, Forschung, digitaler Bildung, AI, Cybersecurity und Unternehmertum.",
        },
        "/blog": {
            title: "Blog | Carina Sophie Schoppe",
            description: "Beiträge zu AI, Governance, digitaler Bildung, Projektarbeit, Cybersecurity, Automationsrisiken und moderner Arbeit.",
        },
        "/contact": {
            title: "Kontakt | Carina Sophie Schoppe",
            description: "Kontakt zu Carina Sophie Schoppe für Kooperationen, Projekte, Forschung, Gastvorträge oder Fragen zu ihrem beruflichen Hintergrund. Unternehmensanfragen werden zu Luminovia geleitet.",
        },
        "/imprint": {
            title: "Impressum | Carina Sophie Schoppe",
            description: "Impressum und Kontaktinformationen von Carina Sophie Schoppe.",
        },
        "/privacy": {
            title: "Datenschutzerklärung | Carina Sophie Schoppe",
            description: "Datenschutzerklärung der Website von Carina Sophie Schoppe, inklusive Analytics- und Kontaktinformationen.",
        },
    },
};

function upsertMeta(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function upsertLink(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement("link");
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function upsertJsonLd(id, data) {
    let element = document.head.querySelector(`#${id}`);
    if (!element) {
        element = document.createElement("script");
        element.type = "application/ld+json";
        element.id = id;
        document.head.appendChild(element);
    }

    element.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
    document.head.querySelector(`#${id}`)?.remove();
}

function normalizePathname(pathname) {
    if (pathname === "/") return pathname;
    return pathname.replace(/\/+$/, "");
}

function buildPersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#carina-sophie-schoppe`,
        name: PROFILE.name,
        url: `${SITE_URL}/`,
        image: DEFAULT_IMAGE,
        email: PROFILE.email,
        jobTitle: "Software, research and digital education portfolio",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Brisbane",
            addressRegion: "QLD",
            addressCountry: "AU",
        },
        knowsLanguage: ["German", "English", "Spanish"],
        sameAs: [PROFILE.linkedin, PROFILE.github, PROFILE.luminovia],
        alumniOf: ["University of Paderborn", "IU International University"],
    };
}

function buildBreadcrumbSchema(pathname, title) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {"@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/`},
            ...(pathname === "/" ? [] : [{"@type": "ListItem", position: 2, name: title.split("|")[0].trim(), item: `${SITE_URL}${pathname}`}]),
        ],
    };
}

export default function Seo() {
    const {pathname} = useLocation();
    const {language} = useLanguage();
    const normalizedPathname = normalizePathname(pathname);
    const isBlogPostRoute = /^\/blog\/[^/]+$/.test(normalizedPathname);
    const routeMetaEntry = routeMeta[language][normalizedPathname];
    const isKnownRoute = Boolean(routeMetaEntry || isBlogPostRoute);
    const currentMeta = isBlogPostRoute
        ? {
            title: language === "de" ? "Blogbeitrag | Carina Sophie Schoppe" : "Blog Article | Carina Sophie Schoppe",
            description: language === "de" ? "Fachbeitrag von Carina Sophie Schoppe zu AI, Governance, digitaler Bildung oder moderner Arbeit." : "Long-form article by Carina Sophie Schoppe on AI, governance, digital education or modern work.",
        }
        : routeMetaEntry || {
                title: language === "de" ? "Seite nicht gefunden | Carina Sophie Schoppe" : "Page not found | Carina Sophie Schoppe",
                description: language === "de" ? "Diese Seite wurde nicht gefunden. Nutzen Sie Startseite, Projekte oder Kontakt." : "This page was not found. Use the homepage, projects or contact page.",
            };
    const {title, description} = currentMeta;

    useEffect(() => {
        const canonical = `${SITE_URL}${normalizedPathname === "/" ? "/" : normalizedPathname}`;
        document.title = title;

        upsertMeta('meta[name="description"]', {name: "description", content: description});
        upsertMeta('meta[name="robots"]', {
            name: "robots",
            content: isKnownRoute ? "index, follow, max-image-preview:large" : "noindex, follow",
        });
        upsertMeta('meta[property="og:title"]', {property: "og:title", content: title});
        upsertMeta('meta[property="og:description"]', {property: "og:description", content: description});
        upsertMeta('meta[property="og:url"]', {property: "og:url", content: canonical});
        upsertMeta('meta[property="og:image"]', {property: "og:image", content: DEFAULT_IMAGE});
        upsertMeta('meta[property="og:type"]', {property: "og:type", content: isBlogPostRoute ? "article" : "website"});
        upsertMeta('meta[name="twitter:card"]', {name: "twitter:card", content: "summary_large_image"});
        upsertMeta('meta[name="twitter:title"]', {name: "twitter:title", content: title});
        upsertMeta('meta[name="twitter:description"]', {name: "twitter:description", content: description});
        upsertLink('link[rel="canonical"]', {rel: "canonical", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="en"]', {rel: "alternate", hreflang: "en", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="de"]', {rel: "alternate", hreflang: "de", href: canonical});

        upsertJsonLd("dynamic-person-service-schema", buildPersonSchema());
        upsertJsonLd("dynamic-breadcrumb-schema", buildBreadcrumbSchema(normalizedPathname, title));
        removeJsonLd("dynamic-faq-schema");

        if (!isBlogPostRoute) {
            removeJsonLd("dynamic-blogpost-schema");
        }
    }, [description, isBlogPostRoute, isKnownRoute, normalizedPathname, title]);

    useEffect(() => {
        const blogMatch = normalizedPathname.match(/^\/blog\/([^/]+)$/);
        if (!blogMatch) return undefined;

        const post = localizedSiteContentForLanguage(language).blogPosts.find((item) => item.slug === blogMatch[1]);
        if (!post) return undefined;

        const canonical = `${SITE_URL}${normalizedPathname}`;
        const blogTitle = `${post.title} | Carina Sophie Schoppe Blog`;
        document.title = blogTitle;
        upsertMeta('meta[name="description"]', {name: "description", content: post.excerpt});
        upsertMeta('meta[property="og:title"]', {property: "og:title", content: blogTitle});
        upsertMeta('meta[property="og:description"]', {property: "og:description", content: post.excerpt});
        upsertMeta('meta[property="og:type"]', {property: "og:type", content: "article"});
        upsertJsonLd("dynamic-blogpost-schema", {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            image: DEFAULT_IMAGE,
            author: {"@id": `${SITE_URL}/#carina-sophie-schoppe`},
            publisher: {"@id": `${SITE_URL}/#carina-sophie-schoppe`},
            mainEntityOfPage: canonical,
        });

        return () => {
            removeJsonLd("dynamic-blogpost-schema");
        };
    }, [language, normalizedPathname]);

    return null;
}
