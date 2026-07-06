import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {NavLink} from "react-router-dom";
import {navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

function navClass({isActive}) {
    return isActive
        ? "rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white shadow-[0_12px_34px_rgba(168,85,247,.18)] ring-1 ring-white/14"
        : "rounded-full px-3 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white";
}

function FlagIcon({country}) {
    return <span className={`flag-icon flag-${country}`} aria-hidden="true"/>;
}

function LanguageToggle({language, toggleLanguage, t, className = ""}) {
    const targetCountry = language === "en" ? "de" : "us";
    const label = language === "de" ? "Sprache auf Englisch wechseln" : "Switch language to German";

    return (
        <button
            onClick={toggleLanguage}
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-black text-zinc-300 transition hover:bg-white/[0.09] hover:text-white ${className}`}
            aria-label={label}
        >
            <FlagIcon country={targetCountry}/>
            <span>{t.switchLabel}</span>
        </button>
    );
}

function ThemeToggle({theme, onToggleTheme, language, className = ""}) {
    const isDay = theme === "day";
    const visibleLabel = language === "de" ? isDay ? "Tag" : "Nacht" : isDay ? "Day" : "Night";
    const label = language === "de"
        ? isDay ? "Farbschema auf Nacht wechseln" : "Farbschema auf Tag wechseln"
        : isDay ? "Switch colour scheme to night" : "Switch colour scheme to day";

    return (
        <button
            type="button"
            onClick={onToggleTheme}
            className={`theme-toggle inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-black text-zinc-200 transition hover:bg-white/[0.12] hover:text-white ${className}`}
            aria-label={label}
            aria-pressed={isDay}
        >
            <span className="theme-toggle-icon" data-mode={theme} aria-hidden="true"/>
            <span>{visibleLabel}</span>
        </button>
    );
}

export default function Header({theme = "night", onToggleTheme = () => {}}) {
    const [open, setOpen] = useState(false);
    const {t, toggleLanguage, language} = useLanguage();

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    const mobileMenu = open ? (
        <div className="mobile-menu-overlay xl:hidden" role="dialog" aria-modal="true" aria-label={t.navigation}>
            <div className="sticky top-0 z-10 -mx-5 mb-8 flex items-center justify-between border-b border-white/10 bg-[#08090B]/92 px-5 py-4">
                <span className="text-lg font-black text-white">{t.navigation}</span>
                <div className="flex gap-2">
                    <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language} className="px-4 text-white"/>
                    <LanguageToggle language={language} toggleLanguage={toggleLanguage} t={t} className="px-4 text-white"/>
                    <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-sm font-black text-white" aria-label={t.close}>
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
            </div>
            <div className="grid gap-3 pb-8">
                {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-[1.7rem] border border-white/14 bg-white/[0.12] px-5 py-5 text-left text-xl font-black text-white shadow-[0_18px_58px_rgba(0,0,0,.24)]">{t.nav[item.key]}</NavLink>
                ))}
            </div>
            <div className="grid gap-3 border-t border-white/10 pt-5">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/14 bg-white/[0.08] px-5 py-4 text-base font-black text-white">{t.linkedin}</a>
                <a href={PROFILE.luminovia} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/14 bg-white/[0.08] px-5 py-4 text-base font-black text-white" onClick={() => setOpen(false)}>{t.luminovia}</a>
            </div>
        </div>
    ) : null;

    return (
        <>
            <header className="portfolio-header sticky top-0 z-[90] border-b border-white/10 bg-[#030611]/84 shadow-[0_14px_50px_rgba(0,0,0,.18)] backdrop-blur-2xl">
                <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <NavLink to="/" className="group flex items-center gap-3 text-left" aria-label="Carina Sophie Schoppe home">
                        <div className="personal-logo-shell grid h-10 w-10 place-items-center overflow-hidden rounded-none border-0 bg-transparent shadow-none transition duration-500 group-hover:rotate-2">
                            <span className="portfolio-cs-mark text-xl font-black">CS</span>
                        </div>
                        <div className="hidden sm:block xl:hidden">
                            <div className="text-sm font-black tracking-tight text-white">Carina Sophie Schoppe</div>
                            <div className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">{t.headerTagline}</div>
                        </div>
                    </NavLink>

                    <nav className="hidden items-center gap-0.5 xl:flex">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{t.nav[item.key]}</NavLink>)}
                    </nav>

                    <div className="hidden items-center gap-3 xl:flex">
                        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} language={language}/>
                        <LanguageToggle language={language} toggleLanguage={toggleLanguage} t={t}/>
                    </div>

                    <button className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-black text-white backdrop-blur-xl xl:hidden" onClick={() => setOpen(true)} aria-label={`${t.open} ${t.menu}`}>{t.menu}</button>
                </div>
            </header>

            {mobileMenu && createPortal(mobileMenu, document.body)}
        </>
    );
}
