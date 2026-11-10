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
                    <p>{de
                        ? "Planst du einen Gastvortrag, arbeitest du an einem Forschungsprojekt oder möchtest du über eine Zusammenarbeit sprechen? Schreib mir, worum es geht. Deutsch und Englisch sind beide willkommen."
                        : "Planning a guest lecture, working on a research project, or looking to collaborate? Tell me what you have in mind. German and English are both welcome."}</p>
                    <div className="contact-actions">
                        <a href={email} className="site-button site-button-primary"><Mail size={17} aria-hidden="true"/>{t.contact.emailButton}</a>
                        <Link to="#appointment" className="site-text-link">{t.contact.calendarFallback}<ArrowDown size={16} aria-hidden="true"/></Link>
                    </div>
                </div>
                <section className="contact-details" aria-labelledby="contact-options">
                    <h2 id="contact-options">{t.contact.fallbackTitle}</h2>
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

            <aside className="contact-business tone-butter" aria-labelledby="contact-business-title">
                <img src={IMAGES.luminoviaLogoMark} alt="" width="58" height="58" loading="lazy"/>
                <div>
                    <p className="site-kicker">{de ? "Für Unternehmen" : "For organisations"}</p>
                    <h2 id="contact-business-title">Luminovia Training & Consulting</h2>
                    <p>{de ? "Hier findest du meine Firmentrainings, Workshops und Beratung." : "This is where I offer company training, workshops and consulting."}</p>
                </div>
                <a href={PROFILE.luminovia} className="site-text-link">{de ? "Zu Luminovia" : "Open Luminovia"}<ArrowUpRight size={17} aria-hidden="true"/></a>
            </aside>

            <section id="appointment" className="contact-appointment" aria-labelledby="appointment-title">
                <div className="contact-appointment-head">
                    <div>
                        <p className="site-kicker">{de ? "Kalender" : "Calendar"}</p>
                        <h2 id="appointment-title">{t.contact.appointmentTitle}</h2>
                        <p>{de ? "Such dir im Kalender einen passenden Termin aus. Wenn du magst, schick mir vorab ein paar Zeilen per E-Mail." : t.contact.appointmentCopy}</p>
                    </div>
                    <a href={PROFILE.appointmentSchedule} target="_blank" rel="noreferrer" className="site-text-link">
                        {de ? "Kalender separat öffnen" : "Open calendar separately"}<ArrowUpRight size={17} aria-hidden="true"/>
                    </a>
                </div>
                <iframe src={PROFILE.appointmentSchedule} title={t.contact.calendarTitle} loading="lazy"/>
            </section>
        </main>
    );
}
