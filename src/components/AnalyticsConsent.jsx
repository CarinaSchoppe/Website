import {useEffect, useSyncExternalStore} from "react";
import {useLocation} from "react-router-dom";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import {safeGetStorageItem, safeSetStorageItem} from "../utils/browser.js";

const CONSENT_KEY = "carina_analytics_consent";
const CONSENT_CHANGE = "carina:analytics-preference";
const PREFERENCES_ID = "analytics-preferences";
const DISABLE_KEY = `ga-disable-${PROFILE.analyticsId}`;
const enabled = Boolean(PROFILE.analyticsId);
// The Google tag can collect document URLs independently of our page-view events.
let canMeasureDocument = !window.location.search && !document.referrer.includes("?");
let unsavedPreference = null;
let lastPageLocation;

function getPreference() {
    const value = unsavedPreference ?? safeGetStorageItem(CONSENT_KEY);
    return value === "accepted" || value === "declined" ? value : null;
}

function subscribe(onChange) {
    const syncStorage = ({key}) => {
        if (key !== CONSENT_KEY && key !== null) return;
        unsavedPreference = null;
        onChange();
    };
    window.addEventListener(CONSENT_CHANGE, onChange);
    window.addEventListener("storage", syncStorage);
    return () => {
        window.removeEventListener(CONSENT_CHANGE, onChange);
        window.removeEventListener("storage", syncStorage);
    };
}

function expireAnalyticsCookies() {
    const sessionCookie = `_ga_${PROFILE.analyticsId.replace(/^G-/, "")}`;
    try {
        for (const name of ["_ga", sessionCookie]) {
            const expired = `${name}=; Max-Age=0; Path=/`;
            document.cookie = expired;
            document.cookie = `${expired}; Domain=${window.location.hostname}`;
        }
    } catch {
        // The tag stays disabled when the browser blocks cookie access.
    }
}

function isDisabled(preference, search = window.location.search) {
    if (window.location.search) canMeasureDocument = false;
    return preference !== "accepted" || !canMeasureDocument || Boolean(search);
}

function choose(value) {
    globalThis[DISABLE_KEY] = isDisabled(value);
    if (value === "declined") expireAnalyticsCookies();
    unsavedPreference = safeSetStorageItem(CONSENT_KEY, value) ? null : value;
    window.dispatchEvent(new Event(CONSENT_CHANGE));
}

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
    const consent = useSyncExternalStore(subscribe, getPreference);

    useEffect(() => {
        if (!enabled) return;
        const disabled = isDisabled(consent, search);
        globalThis[DISABLE_KEY] = disabled;
        if (disabled) {
            if (consent !== "accepted") lastPageLocation = undefined;
            return;
        }

        const pageLocation = `${window.location.origin}${pathname}`;
        if (lastPageLocation === pageLocation) return;

        const page = {
            page_title: document.title,
            page_location: pageLocation,
            page_referrer: lastPageLocation ?? document.referrer.split(/[?#]/, 1)[0],
        };
        loadAnalytics(PROFILE.analyticsId);
        globalThis.gtag("event", "page_view", page);
        lastPageLocation = pageLocation;
    }, [consent, pathname, search]);

    if (!enabled || consent || pathname.replace(/\/+$/, "") === "/privacy") return null;

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

export function AnalyticsSettings() {
    const {t} = useLanguage();
    const preference = useSyncExternalStore(subscribe, getPreference);
    if (!enabled) return null;

    const status = {
        accepted: t.analytics.statusAccepted,
        declined: t.analytics.statusDeclined,
    }[preference] ?? t.analytics.statusPending;

    return (
        <section id={PREFERENCES_ID} aria-labelledby="analytics-settings-title" tabIndex={-1} className="mt-6 border-t border-[var(--line)] pt-5">
            <h3 id="analytics-settings-title" className="text-lg">{t.analytics.settingsTitle}</h3>
            <p role="status" className="mt-2 text-sm text-[var(--muted)]">{status}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" aria-pressed={preference === "declined"} onClick={() => choose("declined")} className="site-button site-filter-button">
                    {t.analytics.decline}
                </button>
                <button type="button" aria-pressed={preference === "accepted"} onClick={() => choose("accepted")} className="site-button site-filter-button">
                    {t.analytics.accept}
                </button>
            </div>
        </section>
    );
}
