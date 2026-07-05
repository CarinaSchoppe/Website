import {Link, NavLink} from "react-router-dom";
import {IMAGES, navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const linkClass = "rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white";

export default function Footer() {
    const {language, t} = useLanguage();
    const labels = language === "de"
        ? {
            summary: "Persönliches Portfolio von Carina Sophie Schoppe: Projekte, Nachweise, Werdegang, Texte und Kontakt. Business-Training und Consulting laufen über Luminovia Training & Consulting.",
            portfolio: "Portfolio",
            business: "Business",
            luminovia: "Luminovia Training & Consulting",
            luminoviaCopy: "Training, Consulting, Projektbegleitung und Unternehmensanfragen.",
        }
        : {
            summary: "Personal portfolio of Carina Sophie Schoppe: projects, credentials, timeline, writing and contact. Business training and consulting are handled through Luminovia Training & Consulting.",
            portfolio: "Portfolio",
            business: "Business",
            luminovia: "Luminovia Training & Consulting",
            luminoviaCopy: "Training, consulting, project support and company enquiries.",
        };

    return (
        <footer className="border-t border-white/10 bg-[#060914]/72 px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
                <div>
                    <Link to="/" className="inline-flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white text-lg font-black text-slate-950">CS</span>
                        <span className="text-2xl font-black text-white">Carina Sophie Schoppe</span>
                    </Link>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{labels.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
                        <a href={PROFILE.github} target="_blank" rel="noreferrer" className={linkClass}>GitHub</a>
                        <a href={`mailto:${PROFILE.email}`} className={linkClass}>{PROFILE.email}</a>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.16em] text-sky-100">{labels.portfolio}</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={linkClass}>{t.nav[item.key]}</NavLink>)}
                        <Link to="/imprint" className={linkClass}>{t.nav.imprint}</Link>
                        <Link to="/privacy" className={linkClass}>{t.nav.privacy}</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.16em] text-sky-100">{labels.business}</h2>
                    <a href={PROFILE.luminovia} target="_blank" rel="noreferrer" className="mt-4 block rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-4 transition hover:border-sky-200/35 hover:bg-white/[0.1]">
                        <span className="block rounded-xl bg-white p-3">
                            <img src={IMAGES.luminoviaLogoFull} alt="Luminovia Training & Consulting logo" className="h-16 w-full object-contain"/>
                        </span>
                        <span className="mt-4 block text-lg font-black text-white">{labels.luminovia}</span>
                        <span className="mt-2 block text-sm leading-6 text-slate-300">{labels.luminoviaCopy}</span>
                    </a>
                    <a href={`mailto:${PROFILE.luminoviaEmail}`} className={`${linkClass} mt-3 inline-flex`}>{PROFILE.luminoviaEmail}</a>
                </div>
            </div>
        </footer>
    );
}
