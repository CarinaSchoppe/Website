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
            copy: "Contact me here about collaborations, projects, research, guest lectures or questions about my professional background. Company training and consulting enquiries are handled by Luminovia.",
            appointment: "Book an appointment",
            appointmentTitle: "Book an appointment directly",
            appointmentCopy: "Choose a suitable time in the calendar below. Brief context by email before the call is helpful, but not required.",
            calendarTitle: "Google Calendar appointment scheduler",
            emailButton: "Write an email",
            fallbackTitle: "Direct contact",
            fallbackCopy: "For collaborations, projects, research or questions about my professional background, contact me directly. Company training and consulting enquiries belong on Luminovia.",
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
            badge: "Page not found",
            title: "Oops, there is nothing here.",
            copy: "There is no page at this address. The link may be incomplete, outdated or the page may have moved.",
            pathPrefix: "The page",
            pathSuffix: "could not be found.",
            reference: "Reference",
            home: "Back to homepage",
            contact: "Contact",
            hint: "Continue with the projects, writing or contact page.",
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
            copy: "Kontaktieren Sie mich hier zu Kooperationen, Projekten, Forschung, Gastvorträgen oder Fragen zu meinem beruflichen Hintergrund. Firmentrainings und Consulting werden über Luminovia bearbeitet.",
            appointment: "Termin buchen",
            appointmentTitle: "Direkt einen Termin buchen",
            appointmentCopy: "Wählen Sie im Kalender unten einen passenden Termin. Kurzer Kontext per E-Mail vor dem Gespräch ist hilfreich, aber nicht erforderlich.",
            calendarTitle: "Google Calendar Terminbuchung",
            emailButton: "E-Mail schreiben",
            fallbackTitle: "Direkter Kontakt",
            fallbackCopy: "Für Kooperationen, Projekte, Forschung oder Fragen zu meinem beruflichen Hintergrund erreichen Sie mich direkt. Firmentrainings und Consulting gehören zu Luminovia.",
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
            badge: "Seite nicht gefunden",
            title: "Huch, hier ist nichts.",
            copy: "Unter dieser Adresse gibt es keine Seite. Vielleicht war der Link unvollständig, veraltet oder die Seite wurde verschoben.",
            pathPrefix: "Die Seite",
            pathSuffix: "wurde nicht gefunden.",
            reference: "Referenz",
            home: "Zur Startseite",
            contact: "Kontakt",
            hint: "Von hier aus geht es direkt zu den Projekten, Texten oder zur Kontaktseite.",
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
