import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {blogIndexForLanguage} from "../data/blogIndex.js";
import {PROFILE} from "../data/profile.js";
import {canonicalUrl, SITE_URL} from "../data/siteUrls.js";
import {useLanguage} from "../i18n.jsx";

const DEFAULT_IMAGE = `${SITE_URL}/images/carina-hero.jpg`;

const routeMeta = {
    en: {
        "/": {
            title: "Carina Sophie Schoppe | Portfolio",
            description: "The personal portfolio of Carina Sophie Schoppe, an IT lecturer, software developer and founder of Luminovia. Explore her story, interests and work.",
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
            title: "Teaching topics and skills | Carina Sophie Schoppe",
            description: "Teaching in AI, cybersecurity, software, databases, networking, business, accounting, employment law and data protection, with examples from Carina’s courses.",
        },
        "/credentials": {
            title: "Credentials | Carina Sophie Schoppe",
            description: "Credentials and professional background including B.Sc., M.Sc., MBA, TAE40122 completed in June 2026, AI certificates and cybersecurity learning paths.",
        },
        "/my-way": {
            title: "Story | Carina Sophie Schoppe",
            description: "Carina Sophie Schoppe’s CV and story from business information systems and teaching in Germany to software, AI research and Luminovia in Brisbane.",
        },
        "/about": {
            title: "About | Carina Sophie Schoppe",
            description: "Meet Carina Sophie Schoppe, IT lecturer, software developer and founder of Luminovia Training & Consulting. Explore her background and LinkedIn profile.",
        },
        "/blog": {
            title: "Blog | Carina Sophie Schoppe",
            description: "Articles on AI, governance, digital education, project work, cybersecurity, automation risk and modern work.",
        },
        "/contact": {
            title: "Contact | Carina Sophie Schoppe",
            description: "Reach Carina Sophie Schoppe to talk about research, open source or her work. Luminovia handles training, consulting and business enquiries.",
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
            description: "Das persönliche Portfolio von Carina Sophie Schoppe, IT-Dozentin, Softwareentwicklerin und Luminovia-Gründerin. Werdegang, Interessen und Projekte.",
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
            title: "Lehrthemen und Kompetenzen | Carina Sophie Schoppe",
            description: "Unterricht zu KI, IT-Sicherheit, Software, Datenbanken, Netzwerken, Wirtschaft, Buchhaltung, Arbeitsrecht und Datenschutz mit Beispielen aus der Praxis.",
        },
        "/credentials": {
            title: "Nachweise | Carina Sophie Schoppe",
            description: "Nachweise und professioneller Hintergrund mit B.Sc., M.Sc., MBA, TAE40122 abgeschlossen im Juni 2026, AI-Zertifikaten und Cybersecurity-Lernpfaden.",
        },
        "/my-way": {
            title: "Werdegang | Carina Sophie Schoppe",
            description: "Carina Sophie Schoppes Lebenslauf und Werdegang von Wirtschaftsinformatik und Lehre in Deutschland bis zu Software, KI-Forschung und Luminovia in Brisbane.",
        },
        "/about": {
            title: "Über Carina | Carina Sophie Schoppe",
            description: "Carina Sophie Schoppe ist IT-Dozentin, Softwareentwicklerin und Gründerin von Luminovia Training & Consulting. Persönlicher Werdegang und LinkedIn-Profil.",
        },
        "/blog": {
            title: "Blog | Carina Sophie Schoppe",
            description: "Beiträge zu AI, Governance, digitaler Bildung, Projektarbeit, Cybersecurity, Automationsrisiken und moderner Arbeit.",
        },
        "/contact": {
            title: "Kontakt | Carina Sophie Schoppe",
            description: "Persönlicher Kontakt zu Carina Sophie Schoppe für den Austausch über Forschung, Open Source und ihre Arbeit. Geschäftliche Anfragen gehen an Luminovia.",
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
        jobTitle: "IT lecturer and software developer",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Brisbane",
            addressRegion: "QLD",
            addressCountry: "AU",
        },
        knowsLanguage: ["German", "English", "Spanish"],
        sameAs: [PROFILE.linkedin, PROFILE.github],
        worksFor: {"@type": "Organization", name: "Luminovia Training & Consulting", url: PROFILE.luminovia},
        alumniOf: ["University of Paderborn", "IU International University"],
    };
}

function buildBreadcrumbSchema(pathname, title) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {"@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/`},
            ...(pathname === "/" ? [] : [{"@type": "ListItem", position: 2, name: title.split("|")[0].trim(), item: canonicalUrl(pathname)}]),
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
    const shortNotFoundPath = normalizedPathname.length > 64
        ? `${normalizedPathname.slice(0, 61)}...`
        : normalizedPathname;
    const currentMeta = isBlogPostRoute
        ? {
            title: language === "de" ? "Blogbeitrag | Carina Sophie Schoppe" : "Blog Article | Carina Sophie Schoppe",
            description: language === "de" ? "Fachbeitrag von Carina Sophie Schoppe zu AI, Governance, digitaler Bildung oder moderner Arbeit." : "Long-form article by Carina Sophie Schoppe on AI, governance, digital education or modern work.",
        }
        : routeMetaEntry || {
                title: language === "de"
                    ? `${shortNotFoundPath} nicht gefunden | Carina Sophie Schoppe`
                    : `${shortNotFoundPath} not found | Carina Sophie Schoppe`,
                description: language === "de"
                    ? `Die angeforderte Seite ${shortNotFoundPath} wurde nicht gefunden.`
                    : `The requested page ${shortNotFoundPath} could not be found.`,
            };
    const {title, description} = currentMeta;

    useEffect(() => {
        const canonical = canonicalUrl(normalizedPathname);
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

        const post = blogIndexForLanguage(language).find((item) => item.slug === blogMatch[1]);
        if (!post) return undefined;

        const canonical = canonicalUrl(normalizedPathname);
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
