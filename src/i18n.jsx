import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {safeGetStorageItem, safeSetStorageItem} from "./utils/browser.js";

export const LANGUAGE_STORAGE_KEY = "carina_site_language_v2";
const DEFAULT_LANGUAGE = "de";

const dictionaries = {
    en: {
        languageName: "English",
        switchLabel: "DE",
        nav: {
            skills: "Teaching",
            software: "Projects",
            about: "About",
            credentials: "Credentials",
            references: "References",
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
            copy: "You can reach me here to talk about research, open source or my work. I speak English and German.",
            emailButton: "Write an email",
            fallbackTitle: "Personal contact",
            businessLabel: "Business enquiries",
            businessCopy: "For company training, workshops, consulting or booking enquiries, please contact Luminovia.",
            businessLink: "Contact Luminovia",
        },
        analytics: {
            title: "Privacy-friendly analytics",
            copy: "I use Google Analytics only after consent to understand which pages are useful. IP anonymisation is enabled.",
            decline: "Decline",
            accept: "Accept",
            settingsTitle: "Analytics settings",
            statusAccepted: "Analytics is enabled on this browser.",
            statusDeclined: "Analytics is disabled on this browser.",
            statusPending: "Analytics is disabled until you choose to accept it.",
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
            skills: "Lehrthemen",
            software: "Projekte",
            about: "Über mich",
            credentials: "Nachweise",
            references: "Referenzen",
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
            copy: "Hier erreichen Sie mich für den Austausch über Forschung, Open Source oder meine Arbeit. Ich spreche Deutsch und Englisch.",
            emailButton: "E-Mail schreiben",
            fallbackTitle: "Persönlicher Kontakt",
            businessLabel: "Geschäftliche Anfragen",
            businessCopy: "Für Firmentrainings, Workshops, Beratung und Buchungsanfragen wenden Sie sich an Luminovia.",
            businessLink: "Kontakt zu Luminovia",
        },
        analytics: {
            title: "Datenschutzfreundliche Analyse",
            copy: "Ich nutze Google Analytics nur nach Zustimmung, um zu verstehen, welche Seiten hilfreich sind. IP-Anonymisierung ist aktiviert.",
            decline: "Ablehnen",
            accept: "Akzeptieren",
            settingsTitle: "Analytics-Einstellungen",
            statusAccepted: "Die Website-Analyse ist in diesem Browser aktiviert.",
            statusDeclined: "Die Website-Analyse ist in diesem Browser deaktiviert.",
            statusPending: "Die Website-Analyse bleibt bis zur Zustimmung deaktiviert.",
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
