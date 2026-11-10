import {ArrowUpRight, Mail, Phone} from "lucide-react";
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
            <h1 className="contact-title">{t.contact.title}</h1>

            <div className="contact-routes">
                <section className="contact-route contact-route-personal" aria-labelledby="contact-options">
                    <h2 id="contact-options" tabIndex={-1}>{t.contact.fallbackTitle}</h2>
                    <p>{t.contact.copy}</p>
                    <div className="contact-route-actions">
                        <a href={email} className="site-button site-button-primary"><Mail size={17} aria-hidden="true"/>{t.contact.emailButton}</a>
                        <span className="contact-email">{PROFILE.email}</span>
                    </div>
                </section>

                <section id="appointment" className="contact-route contact-route-business" aria-labelledby="contact-business-title" tabIndex={-1}>
                    <div className="contact-business-brand">
                        <div>
                            <p className="site-kicker">{t.contact.businessLabel}</p>
                            <h2 id="contact-business-title">Luminovia Training &amp; Consulting</h2>
                        </div>
                        <img src={IMAGES.luminoviaLogoMark} alt="" width="42" height="42"/>
                    </div>
                    <p>{t.contact.businessCopy}</p>
                    <div className="contact-route-actions">
                        <a href={PROFILE.luminoviaContact} className="site-button">{t.contact.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
                    </div>
                </section>
            </div>

            <section className="contact-details" aria-labelledby="contact-details-title">
                <h2 id="contact-details-title">{de ? "Telefon und Profile" : "Phone and profiles"}</h2>
                <dl>
                    {phones.map(([label, number]) => (
                        <div key={label}>
                            <dt><Phone size={16} aria-hidden="true"/>{label}</dt>
                            <dd><a href={`tel:${cleanPhone(number)}`}>{number}</a></dd>
                        </div>
                    ))}
                    <div>
                        <dt>{de ? "Berufliche Profile" : "Professional profiles"}</dt>
                        <dd className="contact-social">
                            <a href={PROFILE.linkedin}>LinkedIn<ArrowUpRight size={14} aria-hidden="true"/></a>
                            <a href={PROFILE.github}>GitHub<ArrowUpRight size={14} aria-hidden="true"/></a>
                        </dd>
                    </div>
                </dl>
            </section>
        </main>
    );
}
