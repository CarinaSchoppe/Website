import {lazy, Suspense, useEffect, useLayoutEffect, useState} from "react";
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
const SCROLL_POSITIONS_KEY = "carina_scroll_positions_v1";
const SAVED_SCROLL_LIMIT = 50;
const THEME_KEY = "carina_color_scheme_v2";
const ROUTER_BASENAME = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

function getInitialTheme() {
    const storedTheme = safeGetStorageItem(THEME_KEY);
    if (storedTheme === "day" || storedTheme === "night") return storedTheme;

    return "day";
}

function scrollPath({pathname, search, hash}) {
    return `${pathname.replace(/\/+$/, "") || "/"}${search}${hash}`;
}

function loadScrollPositions() {
    const navigation = window.performance.getEntriesByType?.("navigation")[0];
    if (navigation?.type !== "reload" && navigation?.type !== "back_forward") return new Map();

    try {
        const entries = JSON.parse(safeGetSessionItem(SCROLL_POSITIONS_KEY) ?? "[]");
        const positions = new Map(entries);

        // A canonical trailing-slash redirect can clear the router's history key on reload.
        const [lastKey, lastPosition] = entries.at(-1) ?? [];
        const currentPath = scrollPath(window.location);
        if (navigation.type === "reload" && navigation.redirectCount > 0
            && typeof lastKey === "string" && lastKey.slice(lastKey.indexOf(":") + 1) === currentPath) {
            positions.set(`default:${currentPath}`, lastPosition);
        }
        return positions;
    /* v8 ignore next 3 -- invalid session data is external to the application */
    } catch {
        return new Map();
    }
}

function lazyWithRecovery(loader) {
    return lazy(async () => {
        const requestedPath = globalThis.location.pathname;
        try {
            const module = await loader();
            safeRemoveSessionItem(CHUNK_RECOVERY_KEY);
            return module;
        /* v8 ignore start -- stale chunk recovery depends on browser cache state after deployment */
        } catch (error) {
            if (globalThis.location.pathname === requestedPath
                && isChunkLoadError(error)
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
    const location = useLocation();
    const {hash} = location;
    const isHistoryNavigation = useNavigationType() === "POP";
    const scrollKey = `${location.key}:${scrollPath(location)}`;

    useLayoutEffect(() => {
        const restoredPosition = isHistoryNavigation ? positions.get(scrollKey) : undefined;
        const rememberPosition = () => positions.set(scrollKey, window.scrollY);
        const saveScrollOnExit = () => {
            positions.delete(scrollKey);
            rememberPosition();
            safeSetSessionItem(SCROLL_POSITIONS_KEY, JSON.stringify([...positions].slice(-SAVED_SCROLL_LIMIT)));
        };
        const frame = globalThis.requestAnimationFrame(() => {
            const target = getHashTarget(hash);
            if (Number.isFinite(restoredPosition)) {
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
        window.addEventListener("pagehide", saveScrollOnExit);
        return () => {
            globalThis.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", rememberPosition);
            window.removeEventListener("pagehide", saveScrollOnExit);
        };
    }, [hash, isHistoryNavigation, positions, scrollKey]);

    return null;
}

function RouteContent({component: Component}) {
    const {pathname} = useLocation();
    return (
        <AppErrorBoundary key={pathname}>
            <Component/>
        </AppErrorBoundary>
    );
}

function routePaths(path) {
    return path === "/" ? [path] : [path, `${path}/`];
}

function pageRoutes(path, Component) {
    return routePaths(path).map((routePath) => (
        <Route key={routePath} path={routePath} caseSensitive element={<RouteContent component={Component}/>}/>
    ));
}

export default function App() {
    const [theme, setTheme] = useState(getInitialTheme);
    const [scrollPositions] = useState(loadScrollPositions);

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
                                <Route path="/" element={<RouteContent component={HomePage}/>}/>
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
                                <Route path="*" element={<RouteContent component={NotFoundPage}/>}/>
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
