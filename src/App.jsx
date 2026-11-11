import {lazy, Suspense, useEffect, useLayoutEffect, useRef, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation, useNavigationType} from "react-router-dom";
import AnalyticsConsent from "./components/AnalyticsConsent.jsx";
import AppErrorBoundary from "./components/AppErrorBoundary.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Seo from "./components/Seo.jsx";
import {LanguageProvider} from "./i18n.jsx";
import HomePage from "./pages/HomePage.jsx";
import {isChunkLoadError, safeGetSessionItem, safeGetStorageItem, safeRemoveSessionItem, safeSetSessionItem, safeSetStorageItem} from "./utils/browser.js";

const CHUNK_RECOVERY_KEY = "carina_chunk_recovery_v1";
const THEME_KEY = "carina_color_scheme_v2";
const ROUTER_BASENAME = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

function getInitialTheme() {
    const storedTheme = safeGetStorageItem(THEME_KEY);
    if (storedTheme === "day" || storedTheme === "night") return storedTheme;

    return "day";
}

function lazyWithRecovery(loader) {
    return lazy(async () => {
        try {
            const module = await loader();
            safeRemoveSessionItem(CHUNK_RECOVERY_KEY);
            return module;
        /* v8 ignore start -- stale chunk recovery depends on browser cache state after deployment */
        } catch (error) {
            if (isChunkLoadError(error)
                && safeGetSessionItem(CHUNK_RECOVERY_KEY) !== "used"
                && safeSetSessionItem(CHUNK_RECOVERY_KEY, "used")) {
                globalThis.location.reload();
                return new Promise(() => {});
            }

            throw error;
        }
        /* v8 ignore stop */
    });
}

const CredentialsPage = lazyWithRecovery(() => import("./pages/CredentialsPage.jsx"));
const AboutPage = lazyWithRecovery(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazyWithRecovery(() => import("./pages/ContactPage.jsx"));
const MyWayPage = lazyWithRecovery(() => import("./pages/MyWayPage.jsx"));
const SkillsPage = lazyWithRecovery(() => import("./pages/SkillsPage.jsx"));
const BlogPage = lazyWithRecovery(() => import("./pages/BlogPage.jsx"));
const BlogPostPage = lazyWithRecovery(() => import("./pages/BlogPostPage.jsx"));
const SoftwarePage = lazyWithRecovery(() => import("./pages/SoftwarePage.jsx"));
const ImprintPage = lazyWithRecovery(() => import("./pages/ImprintPage.jsx"));
const PrivacyPage = lazyWithRecovery(() => import("./pages/PrivacyPage.jsx"));
const NotFoundPage = lazyWithRecovery(() => import("./pages/NotFoundPage.jsx"));

function getHashTarget(hash) {
    if (!hash.startsWith("#") || hash.length === 1) return null;

    try {
        return document.getElementById(decodeURIComponent(hash.slice(1)));
    /* v8 ignore start -- invalid URI hashes are normalized by browsers in ordinary navigation */
    } catch {
        return document.getElementById(hash.slice(1));
    }
    /* v8 ignore stop */
}

function RouteScroll({positions}) {
    const {key, hash} = useLocation();
    const isHistoryNavigation = useNavigationType() === "POP";

    useLayoutEffect(() => {
        const savedPositions = positions.current;
        const restoredPosition = isHistoryNavigation ? savedPositions.get(key) : undefined;
        const rememberPosition = () => savedPositions.set(key, window.scrollY);
        const frame = globalThis.requestAnimationFrame(() => {
            const target = getHashTarget(hash);
            if (restoredPosition !== undefined) {
                window.scrollTo({top: restoredPosition, behavior: "auto"});
            } else if (target) {
                if (!isHistoryNavigation) target.focus({preventScroll: true});
                target.scrollIntoView({behavior: "auto", block: "start"});
            } else if (!hash && !isHistoryNavigation) {
                document.getElementById("main-content").focus({preventScroll: true});
                window.scrollTo({top: 0, behavior: "auto"});
            }
            rememberPosition();
        });

        window.addEventListener("scroll", rememberPosition, {passive: true});
        return () => {
            globalThis.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", rememberPosition);
        };
    }, [key, hash, isHistoryNavigation, positions]);

    return null;
}

function routeElement(Component) {
    return (
        <AppErrorBoundary>
            <Component/>
        </AppErrorBoundary>
    );
}

function routePaths(path) {
    return path === "/" ? [path] : [path, `${path}/`];
}

function pageRoutes(path, Component) {
    return routePaths(path).map((routePath) => (
        <Route key={routePath} path={routePath} element={routeElement(Component)}/>
    ));
}

export default function App() {
    const [theme, setTheme] = useState(getInitialTheme);
    const scrollPositions = useRef(new Map());

    useLayoutEffect(() => {
        const previous = window.history.scrollRestoration;
        window.history.scrollRestoration = "manual";
        return () => {
            window.history.scrollRestoration = previous;
        };
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        safeSetStorageItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => setTheme((current) => current === "day" ? "night" : "day");

    return (
        <LanguageProvider>
            <BrowserRouter basename={ROUTER_BASENAME}>
                <Seo/>
                <div data-theme={theme} className="theme-root">
                    <Header theme={theme} onToggleTheme={toggleTheme}/>
                    {/* Keep the footer out of the first paint until the route has loaded. */}
                    <Suspense fallback={<div id="main-content" className="site-content" tabIndex={-1}/>}>
                        <div id="main-content" className="site-content" tabIndex={-1}>
                            <Routes>
                                <Route path="/" element={routeElement(HomePage)}/>
                                {pageRoutes("/credentials", CredentialsPage)}
                                {pageRoutes("/portfolio", SoftwarePage)}
                                {pageRoutes("/about", AboutPage)}
                                {pageRoutes("/contact", ContactPage)}
                                {pageRoutes("/my-way", MyWayPage)}
                                {pageRoutes("/skills", SkillsPage)}
                                {pageRoutes("/blog", BlogPage)}
                                {pageRoutes("/blog/:slug", BlogPostPage)}
                                {pageRoutes("/projects", SoftwarePage)}
                                {pageRoutes("/software", SoftwarePage)}
                                {pageRoutes("/imprint", ImprintPage)}
                                {pageRoutes("/privacy", PrivacyPage)}
                                <Route path="*" element={routeElement(NotFoundPage)}/>
                            </Routes>
                        </div>
                        <RouteScroll positions={scrollPositions}/>
                        <AppErrorBoundary fallback={null}>
                            <AnalyticsConsent/>
                        </AppErrorBoundary>
                        <div className="relative z-10">
                            <Footer/>
                        </div>
                    </Suspense>
                </div>
            </BrowserRouter>
        </LanguageProvider>
    );
}
