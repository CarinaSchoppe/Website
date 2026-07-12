import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {safeGetStorageItem, safeSetStorageItem} from "./utils/browser.js";

export const LANGUAGE_STORAGE_KEY = "carina_site_language_v2";
const DEFAULT_LANGUAGE = "de";

const dictionaries = {
    en: {
        languageName: "English",
        switchLabel: "DE",
        nav: {
            skills: "Skills",
            software: "Projects",
            about: "About",
            credentials: "Credentials",
            blog: "Writing",
            book: "Contact",
            imprint: "Imprint",
            privacy: "Privacy",
        },
        headerTagline: "Portfolio",
        luminovia: "Luminovia",
        linkedin: "LinkedIn",
        menu: "Menu",
        navigation: "Navigation",
        close: "Close",
        open: "Open",
        github: "GitHub",
        home: {
            photoFallback: "Portrait of Carina Sophie Schoppe.",
        },
        contact: {
            badge: "Contact",
            title: "Contact Carina Sophie Schoppe.",
            copy: "Use this page for portfolio, project, research, CV or professional profile enquiries. Company training and consulting enquiries are handled by Luminovia.",
            appointment: "Book an appointment",
            appointmentTitle: "Book an appointment directly",
            appointmentCopy: "Choose a suitable time in the calendar below. Brief context by email before the call is helpful, but not required.",
            calendarTitle: "Google Calendar appointment scheduler",
            emailButton: "Write an email",
            fallbackTitle: "Direct contact",
            fallbackCopy: "For portfolio, project, research or professional profile enquiries, contact me directly. Company training and consulting enquiries belong on Luminovia.",
            calendarFallback: "Open scheduler",
            briefTitle: "Helpful details for a fast reply",
            briefCopy: "A short message is enough. These details help me respond precisely.",
            briefItems: ["enquiry context", "project or profile relevance", "preferred timeframe", "relevant links or documents", "language: English or German"],
        },
        analytics: {
            title: "Privacy-friendly analytics",
            copy: "I use Google Analytics only after consent to understand which pages are useful. IP anonymisation is enabled.",
            decline: "Decline",
            accept: "Accept",
        },
        notFound: {
            badge: "404 / Page not found",
            title: "This page is not part of the portfolio.",
            copy: "The link may be outdated, moved or typed incorrectly. Use one of the main paths below to continue.",
            home: "Back to homepage",
            contact: "Contact",
            hint: "Looking for a specific profile detail, project or blog post? The contact page is the fastest route.",
        },
    },
    de: {
        languageName: "Deutsch",
        switchLabel: "EN",
        nav: {
            skills: "Kompetenzen",
            software: "Projekte",
            about: "Über mich",
            credentials: "Nachweise",
            blog: "Texte",
            book: "Kontakt",
            imprint: "Impressum",
            privacy: "Datenschutz",
        },
        headerTagline: "Portfolio",
        luminovia: "Luminovia",
        linkedin: "LinkedIn",
        menu: "Menü",
        navigation: "Navigation",
        close: "Schließen",
        open: "Öffnen",
        github: "GitHub",
        home: {
            photoFallback: "Porträt von Carina Sophie Schoppe.",
        },
        contact: {
            badge: "Kontakt",
            title: "Kontakt zu Carina Sophie Schoppe.",
            copy: "Diese Seite ist für Portfolio-, Projekt-, Forschungs-, CV- und professionelle Profilanfragen vorgesehen. Firmentrainings und Consulting werden über Luminovia bearbeitet.",
            appointment: "Termin buchen",
            appointmentTitle: "Direkt einen Termin buchen",
            appointmentCopy: "Wählen Sie im Kalender unten einen passenden Termin. Kurzer Kontext per E-Mail vor dem Gespräch ist hilfreich, aber nicht erforderlich.",
            calendarTitle: "Google Calendar Terminbuchung",
            emailButton: "E-Mail schreiben",
            fallbackTitle: "Direkter Kontakt",
            fallbackCopy: "Für Portfolio-, Projekt-, Forschungs- oder professionelle Profilanfragen erreichen Sie mich direkt. Firmentrainings und Consulting gehören zu Luminovia.",
            calendarFallback: "Terminplaner öffnen",
            briefTitle: "Hilfreiche Angaben für eine schnelle Rückmeldung",
            briefCopy: "Eine kurze Nachricht reicht. Diese Angaben helfen mir, präzise zu antworten.",
            briefItems: ["Kontext der Anfrage", "Projekt- oder Profilbezug", "gewünschter Zeitraum", "relevante Links oder Unterlagen", "Sprache: Deutsch oder Englisch"],
        },
        analytics: {
            title: "Datenschutzfreundliche Analyse",
            copy: "Ich nutze Google Analytics nur nach Zustimmung, um zu verstehen, welche Seiten hilfreich sind. IP-Anonymisierung ist aktiviert.",
            decline: "Ablehnen",
            accept: "Akzeptieren",
        },
        notFound: {
            badge: "404 / Seite nicht gefunden",
            title: "Diese Seite gehört nicht zum Portfolio.",
            copy: "Der Link ist möglicherweise veraltet, verschoben oder falsch eingegeben. Nutzen Sie einen der Hauptbereiche, um weiterzugehen.",
            home: "Zur Startseite",
            contact: "Kontakt",
            hint: "Suchen Sie ein bestimmtes Profildetail, Projekt oder einen Blogbeitrag? Über die Kontaktseite erreichen Sie mich am schnellsten.",
        },
    },
};

/**
 * @typedef {"en" | "de"} Language
 * @typedef {{
 *   language: Language,
 *   toggleLanguage: () => void,
 *   t: typeof dictionaries.en
 * }} LanguageContextValue
 */

const LanguageContext = createContext(/** @type {LanguageContextValue | null} */ (null));

/**
 * @param {string | null | undefined} value
 * @returns {Language}
 */
function resolveLanguage(value) {
    return value === "de" || value === "en" ? value : DEFAULT_LANGUAGE;
}

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState(() => resolveLanguage(safeGetStorageItem(LANGUAGE_STORAGE_KEY)));

    useEffect(() => {
        safeSetStorageItem(LANGUAGE_STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage((current) => current === "en" ? "de" : "en");
    }, []);

    const value = useMemo(() => ({
        language,
        toggleLanguage,
        t: dictionaries[language],
    }), [language, toggleLanguage]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}
