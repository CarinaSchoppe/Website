import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import {safeGetStorageItem, safeSetStorageItem} from "../utils/browser.js";

const CONSENT_KEY = "carina_analytics_consent";
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
    const {pathname, search} = useLocation();
    const {t} = useLanguage();
    const [consent, setConsent] = useState(() => safeGetStorageItem(CONSENT_KEY));
    const enabled = Boolean(PROFILE.analyticsId);

    useEffect(() => {
        if (!enabled || consent !== "accepted") return;

        loadAnalytics(PROFILE.analyticsId);
        const pageLocation = `${window.location.origin}${pathname}${search}`;
        if (lastPageLocation === pageLocation) return;

        globalThis.gtag("event", "page_view", {
            page_title: document.title,
            page_location: pageLocation,
            page_referrer: lastPageLocation ?? document.referrer,
        });
        lastPageLocation = pageLocation;
    }, [consent, enabled, pathname, search]);

    if (!enabled || consent) return null;

    function choose(value) {
        safeSetStorageItem(CONSENT_KEY, value);
        setConsent(value);
    }

    return (
        <section className="analytics-consent" aria-label={t.analytics.title}>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                    <div className="text-sm font-extrabold">{t.analytics.title}</div>
                    <p className="mt-1 text-sm leading-6">
                        {t.analytics.copy}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                    <button onClick={() => choose("declined")} className="site-button">
                        {t.analytics.decline}
                    </button>
                    <button onClick={() => choose("accepted")} className="site-button site-button-primary">
                        {t.analytics.accept}
                    </button>
                </div>
            </div>
        </section>
    );
}
