import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import {safeGetStorageItem, safeSetStorageItem} from "../utils/browser.js";

const CONSENT_KEY = "carina_analytics_consent";
export const ANALYTICS_PREFERENCES_ID = "analytics-preferences";
const disabledFlag = `ga-disable-${PROFILE.analyticsId}`;
let lastPageLocation;

function loadAnalytics(measurementId) {
    if (!measurementId || globalThis.gtag) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    globalThis.dataLayer = globalThis.dataLayer || [];
    globalThis.gtag = function gtag() {
        globalThis.dataLayer.push(arguments);
    };
    globalThis.gtag("js", new Date());
    globalThis.gtag("config", measurementId, {anonymize_ip: true, send_page_view: false});
    lastPageLocation = undefined;
}

export default function AnalyticsConsent() {
    const {pathname, hash, key} = useLocation();
    const {t} = useLanguage();
    const [consent, setConsent] = useState(() => safeGetStorageItem(CONSENT_KEY));
    const [dismissedKey, setDismissedKey] = useState(null);
    const banner = useRef(null);
    const enabled = Boolean(PROFILE.analyticsId);
    const editingPreferences = hash === `#${ANALYTICS_PREFERENCES_ID}` && dismissedKey !== key;

    useEffect(() => {
        if (!enabled) return;
        globalThis[disabledFlag] = consent !== "accepted";
        if (consent !== "accepted") return;

        loadAnalytics(PROFILE.analyticsId);
        const pageLocation = `${window.location.origin}${pathname}`;
        if (lastPageLocation === pageLocation) return;

        globalThis.gtag("event", "page_view", {
            page_title: document.title,
            page_location: pageLocation,
            page_referrer: lastPageLocation ?? document.referrer.split(/[?#]/, 1)[0],
        });
        lastPageLocation = pageLocation;
    }, [consent, enabled, pathname]);

    useEffect(() => {
        if (editingPreferences) banner.current?.focus({preventScroll: true});
    }, [editingPreferences, key]);

    if (!enabled || (consent && !editingPreferences)) return null;

    function choose(value) {
        globalThis[disabledFlag] = value !== "accepted";
        if (value !== "accepted") lastPageLocation = undefined;
        safeSetStorageItem(CONSENT_KEY, value);
        setConsent(value);
        if (editingPreferences) {
            setDismissedKey(key);
            document.getElementById(ANALYTICS_PREFERENCES_ID)?.focus({preventScroll: true});
        }
    }

    return (
        <section ref={banner} tabIndex={editingPreferences ? -1 : undefined} className="analytics-consent" aria-label={t.analytics.title}>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                    <div className="text-sm font-extrabold">{t.analytics.title}</div>
                    <p className="mt-1 text-sm leading-6">
                        {t.analytics.copy}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                    <button onClick={() => choose("declined")} aria-pressed={editingPreferences ? consent === "declined" : undefined} className="site-button">
                        {t.analytics.decline}
                    </button>
                    <button onClick={() => choose("accepted")} aria-pressed={editingPreferences ? consent === "accepted" : undefined} className="site-button site-button-primary">
                        {t.analytics.accept}
                    </button>
                </div>
            </div>
        </section>
    );
}
