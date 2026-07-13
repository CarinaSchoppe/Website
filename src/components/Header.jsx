import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {Globe2, Menu, Moon, Sun, X} from "lucide-react";
import {NavLink} from "react-router-dom";
import {navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

function navClass({isActive}) {
    return `editorial-nav-link${isActive ? " is-active" : ""}`;
}

function LanguageToggle({language, toggleLanguage, label, className = ""}) {
    return (
        <button type="button" onClick={toggleLanguage} className={`editorial-control ${className}`} aria-label={label}>
            <Globe2 size={17}/><span>{language === "de" ? "EN" : "DE"}</span>
        </button>
    );
}

function ThemeToggle({theme, onToggleTheme, language, className = ""}) {
    const nextIsNight = theme === "day";
    const label = language === "de"
        ? nextIsNight ? "Dunkles Farbschema aktivieren" : "Helles Farbschema aktivieren"
        : nextIsNight ? "Switch to dark theme" : "Switch to light theme";
    return (
        <button type="button" onClick={onToggleTheme} className={`editorial-control editorial-theme-control ${className}`} aria-label={label}>
            {theme === "day" ? <Moon size={18}/> : <Sun size={18}/>}<span className="sr-only">{label}</span>
        </button>
    );
}

export default function Header({theme = "night", onToggleTheme = () => {}}) {
    const [open, setOpen] = useState(false);
    const {t, toggleLanguage, language} = useLanguage();

    useEffect(() => {
        if (!open) return undefined;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = previousOverflow; };
    }, [open]);

    const languageLabel = language === "de" ? "Sprache auf Englisch wechseln" : "Switch language to German";
    const mobileMenu = open ? (
        <div className="editorial-mobile-menu" role="dialog" aria-modal="true" aria-label={t.navigation}>
            <div className="editorial-mobile-menu-head">
                <span>{t.navigation}</span>
                <div>
                    <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language}/>
                    <LanguageToggle language={language} toggleLanguage={toggleLanguage} label={languageLabel}/>
                    <button className="editorial-control" type="button" onClick={() => setOpen(false)} aria-label={t.close}><X size={20}/></button>
                </div>
            </div>
            <nav>
                {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={navClass}>{t.nav[item.key]}</NavLink>)}
            </nav>
            <div className="editorial-mobile-external">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">{t.linkedin}</a>
                <a href={PROFILE.luminovia} target="_blank" rel="noreferrer">{t.luminovia}</a>
            </div>
        </div>
    ) : null;

    return (
        <>
            <header className="portfolio-header editorial-header">
                <div className="editorial-header-inner">
                    <NavLink to="/" className="editorial-brand" aria-label="Carina Sophie Schoppe home">
                        <span className="editorial-brand-mark">CS</span>
                        <span><strong>Carina Sophie Schoppe</strong><small>{language === "de" ? "Lehre. Forschung. Praxis." : "Teaching. Research. Practice."}</small></span>
                    </NavLink>
                    <nav className="editorial-desktop-nav" aria-label={t.navigation}>
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{t.nav[item.key]}</NavLink>)}
                    </nav>
                    <div className="editorial-header-controls">
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language}/>
                        <LanguageToggle language={language} toggleLanguage={toggleLanguage} label={languageLabel}/>
                    </div>
                    <button className="editorial-menu-button" type="button" onClick={() => setOpen(true)} aria-label={`${t.open} ${t.menu}`}><Menu size={20}/><span>{t.menu}</span></button>
                </div>
            </header>
            {mobileMenu && createPortal(mobileMenu, document.body)}
        </>
    );
}
