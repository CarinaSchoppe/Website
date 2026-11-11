import {useEffect, useRef} from "react";
import {Globe2, Menu, Moon, Sun, X} from "lucide-react";
import {Link, NavLink} from "react-router-dom";
import {navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const primaryItems = ["/about", "/skills", "/projects", "/credentials", "/#referenzen", "/blog", "/contact"]
    .map((path) => navItems.find((item) => item.to === path));

function PortfolioNavLink({item, onClick, children}) {
    const RouterLink = item.key === "references" ? Link : NavLink;

    return (
        <RouterLink to={item.to} onClick={onClick} className={item.key === "book" ? "site-nav-contact" : undefined}>
            {children}
        </RouterLink>
    );
}

function LanguageToggle({language, toggleLanguage}) {
    const label = language === "de" ? "EN · Sprache auf Englisch wechseln" : "DE · Switch language to German";
    return (
        <button type="button" onClick={toggleLanguage} className="site-control" aria-label={label}>
            <Globe2 size={17} aria-hidden="true"/><span>{language === "de" ? "EN" : "DE"}</span>
        </button>
    );
}

function ThemeToggle({theme, onToggleTheme, language}) {
    const nextIsNight = theme === "day";
    const label = language === "de"
        ? nextIsNight ? "Dunkles Farbschema aktivieren" : "Helles Farbschema aktivieren"
        : nextIsNight ? "Switch to dark theme" : "Switch to light theme";
    const Icon = nextIsNight ? Moon : Sun;
    return (
        <button type="button" onClick={onToggleTheme} className="site-control" aria-label={label}>
            <Icon size={18} aria-hidden="true"/>
        </button>
    );
}

export default function Header({theme, onToggleTheme}) {
    const menu = useRef(null);
    const {t, toggleLanguage, language} = useLanguage();
    const close = () => menu.current.close();

    useEffect(() => {
        const desktop = window.matchMedia?.("(width > 990px)");
        const closeOnDesktop = ({matches}) => {
            if (matches && menu.current.open) menu.current.close();
        };
        desktop?.addEventListener("change", closeOnDesktop);
        return () => desktop?.removeEventListener("change", closeOnDesktop);
    }, []);

    return (
        <>
            <Link className="site-skip" to="#main-content">{language === "de" ? "Zum Inhalt springen" : "Skip to content"}</Link>
            <header className="site-header">
                <div className="site-width site-header-inner">
                    <NavLink to="/" className="site-brand">
                        <span className="site-brand-mark" aria-hidden="true">CS</span>
                        <span className="site-brand-name">Carina Sophie Schoppe</span>
                    </NavLink>
                    <nav className="site-desktop-nav" aria-label={t.navigation}>
                        {primaryItems.map((item) => <PortfolioNavLink key={item.to} item={item}>{t.nav[item.key]}</PortfolioNavLink>)}
                    </nav>
                    <div className="site-header-controls">
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language}/>
                        <LanguageToggle language={language} toggleLanguage={toggleLanguage}/>
                        <button className="site-control site-menu-trigger" type="button" onClick={() => menu.current.showModal()} aria-label={language === "de" ? "Menü öffnen" : "Open menu"} aria-haspopup="dialog" aria-controls="site-menu">
                            <Menu size={20} aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </header>
            <dialog ref={menu} id="site-menu" className="site-menu" aria-labelledby="site-menu-title">
                <div className="site-menu-inner">
                    <div className="site-menu-head">
                        <h2 id="site-menu-title">{t.navigation}</h2>
                        <button className="site-control" type="button" onClick={close} aria-label={t.close}><X size={22} aria-hidden="true"/></button>
                    </div>
                    <nav aria-label={t.navigation}>
                        {primaryItems.map((item) => <PortfolioNavLink key={item.to} item={item} onClick={close}>{t.nav[item.key]}</PortfolioNavLink>)}
                    </nav>
                    <div className="site-menu-external">
                        <a href={PROFILE.linkedin}>{t.linkedin}</a>
                        <a href={PROFILE.luminovia}>{t.luminovia}</a>
                    </div>
                </div>
            </dialog>
        </>
    );
}
