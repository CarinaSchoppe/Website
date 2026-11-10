import {ArrowDown, ArrowUpRight, Mail, Phone} from "lucide-react";
import {Link} from "react-router-dom";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "./contact.css";

function cleanPhone(value) {
    return value.replace(/[^\d+]/g, "");
}

export default function ContactPage() {
    const {language, t} = useLanguage();
    const de = language === "de";
    const subject = encodeURIComponent(de ? "Kontaktanfrage über carinaschoppe.com" : "Contact request via carinaschoppe.com");
    const email = `mailto:${PROFILE.email}?subject=${subject}`;
    const phones = [
        [de ? "Australien" : "Australia", PROFILE.phoneAustralia],
        [de ? "Deutschland" : "Germany", PROFILE.phoneGermany],
    ];

    return (
        <main className="contact-page site-width">
            <div className="contact-hero">
                <div className="contact-lead">
                    <p className="site-kicker">{t.contact.badge}</p>
                    <h1>{t.contact.title}</h1>
                    <p>{t.contact.copy}</p>
                    <div className="contact-actions">
                        <a href={email} className="site-button site-button-primary"><Mail size={17} aria-hidden="true"/>{t.contact.emailButton}</a>
                        <Link to="#appointment" className="site-text-link">{t.contact.businessLabel}<ArrowDown size={16} aria-hidden="true"/></Link>
                    </div>
                </div>
                <section className="contact-details" aria-labelledby="contact-options">
                    <h2 id="contact-options" tabIndex={-1}>{t.contact.fallbackTitle}</h2>
                    <dl>
                        <div>
                            <dt><Mail size={16} aria-hidden="true"/>{de ? "E-Mail" : "Email"}</dt>
                            <dd><a href={email}>{PROFILE.email}</a></dd>
                        </div>
                        {phones.map(([label, number]) => (
                            <div key={label}>
                                <dt><Phone size={16} aria-hidden="true"/>{label}</dt>
                                <dd><a href={`tel:${cleanPhone(number)}`}>{number}</a></dd>
                            </div>
                        ))}
                    </dl>
                    <div className="contact-social">
                        <a href={PROFILE.linkedin}>LinkedIn<ArrowUpRight size={14} aria-hidden="true"/></a>
                        <a href={PROFILE.github}>GitHub<ArrowUpRight size={14} aria-hidden="true"/></a>
                    </div>
                </section>
            </div>

            <section id="appointment" className="contact-business" aria-labelledby="contact-business-title" tabIndex={-1}>
                <img src={IMAGES.luminoviaLogoMark} alt="" width="58" height="58" loading="lazy"/>
                <div>
                    <p className="site-kicker">{t.contact.businessLabel}</p>
                    <h2 id="contact-business-title">Luminovia Training &amp; Consulting</h2>
                    <p>{t.contact.businessCopy}</p>
                </div>
                <a href={PROFILE.luminoviaContact} className="site-text-link">{t.contact.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
            </section>
        </main>
    );
}
