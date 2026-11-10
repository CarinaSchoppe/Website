import {ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

export default function Footer() {
    const {language, t} = useLanguage();
    const labels = language === "de"
        ? {
            summary: "IT-Dozentin, Wirtschaftsinformatikerin und Gründerin von Luminovia. In Brisbane zu Hause, auf Deutsch und Englisch tätig.",
            portfolio: "Auf dieser Seite",
            business: "Kontakt & Unternehmen",
        }
        : {
            summary: "IT lecturer, business information systems specialist, and founder of Luminovia. Based in Brisbane, working in German and English.",
            portfolio: "On this site",
            business: "Contact & business",
        };

    return (
        <footer className="site-footer">
            <div className="site-width site-footer-inner">
                <div>
                    <Link to="/" className="site-footer-brand">Carina Sophie Schoppe</Link>
                    <p>{labels.summary}</p>
                    <div className="site-footer-social">
                        <a href={PROFILE.linkedin}>LinkedIn <ArrowUpRight size={13} aria-hidden="true"/></a>
                        <a href={PROFILE.github}>GitHub <ArrowUpRight size={13} aria-hidden="true"/></a>
                    </div>
                </div>
                <nav aria-label={labels.portfolio}>
                    <h2>{labels.portfolio}</h2>
                    <ul>
                        {navItems.map((item) => <li key={item.to}><Link to={item.to}>{t.nav[item.key]}</Link></li>)}
                    </ul>
                </nav>
                <div>
                    <h2>{labels.business}</h2>
                    <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                    <a className="site-footer-business" href={PROFILE.luminovia}>Luminovia Training & Consulting <ArrowUpRight size={14} aria-hidden="true"/></a>
                </div>
                <div className="site-footer-legal">
                    <span>© {PROFILE.name}</span>
                    <Link to="/imprint">{t.nav.imprint}</Link>
                    <Link to="/privacy">{t.nav.privacy}</Link>
                </div>
            </div>
        </footer>
    );
}
