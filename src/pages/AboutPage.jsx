import {ArrowRight, ArrowUpRight, MapPin} from "lucide-react";
import {Link} from "react-router-dom";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "./about.css";

const copy = {
    de: {
        kicker: "Über mich",
        role: "IT-Dozentin, Wirtschaftsinformatikerin und Gründerin von Luminovia",
        intro: "Ich unterrichte Erwachsene und Teams und entwickle die Übungen und Kursmaterialien dafür selbst. Ich programmiere eigene Werkzeuge für Literaturrecherche und Automatisierung, arbeite an Open-Source-Projekten mit und forsche dazu, wie KI die Arbeit verändert.",
        location: "Brisbane, Australien",
        portrait: "Porträt von Carina Sophie Schoppe",
        tablet: "Carina hält im Stehen ein Tablet und einen Stift",
        career: "Lebenslauf ansehen",
        linkedin: "Mein LinkedIn-Profil",
        facts: [
            ["Studium", "M. Sc. Wirtschaftsinformatik und MBA"],
            ["Berufliche Bildung", "Certificate IV in Training and Assessment (TAE40122)"],
            ["Unterrichtssprachen", "Deutsch und Englisch"],
        ],
        approachTitle: "Wie ich unterrichte, forsche und programmiere",
        teachingTitle: "Woran erkennt man eine Phishing-Mail?",
        teaching: "Eine Übung zur IT-Sicherheit kann mit einer verdächtigen E-Mail anfangen. Wir sehen uns Absender und Links an und fragen, warum die Nachricht so dringend klingt. Danach besprechen wir, wie man im Betrieb mit so einer E-Mail umgehen würde.",
        researchTitle: "Wer entscheidet, wenn KI mitarbeitet?",
        research: "In meiner Masterarbeit habe ich untersucht, was generative KI für Beschäftigte in deutschen Unternehmen verändert. Für meine MBA-Arbeit wollte ich wissen, wie Führungskräfte ihren Einsatz in wissensintensiven Organisationen steuern können.",
        software: "Meine Literatursoftware PRISMA hält fest, welche Studien bei der Vorauswahl herausgefallen sind und warum. So kann man die Entscheidungen auch später noch prüfen.",
        publications: "Meine wissenschaftlichen Arbeiten",
        projects: "Meine Softwareprojekte",
        pathLabel: "Mein Werdegang",
        pathTitle: "Von Paderborn nach Brisbane",
        path: [
            ["2019", "Studium und erste Kurse", "An der Universität Paderborn begann ich mit Wirtschaftsinformatik. Im selben Jahr machte ich mich als Dozentin und Beraterin selbstständig."],
            ["2021", "IT-Sicherheit für kleine Unternehmen", "Im Projekt KMUeinfachSicher erarbeitete ich Lernmaterial zu Passwörtern und zum sicheren Umgang mit Daten."],
            ["2022", "Workshops zu Vielfalt", "Bei SCHLAU NRW habe ich ehrenamtlich Schulworkshops zu Vielfalt und Antidiskriminierung begleitet und moderiert."],
            ["2025", "Bachelor und Master", "Ich schloss den Bachelor an der Universität Paderborn und den Master an der IU ab, beide in Wirtschaftsinformatik."],
            ["2026", "Unterricht und Forschung von Brisbane aus", "Ich schloss meinen MBA ab, erwarb eine australische Lehrqualifikation und arbeitete als Forschungsassistentin an der University of Queensland zu Agentic AI."],
        ],
        fullPath: "Mein vollständiger Werdegang",
        nextLabel: "Mehr über meine Arbeit",
        next: [
            ["Kompetenzen", "Meine fachlichen Schwerpunkte", "/skills"],
            ["Qualifikationen", "Abschlüsse und berufliche Nachweise", "/credentials"],
            ["Texte", "Was ich über KI und Bildung schreibe", "/blog"],
            ["Kontakt", "Kooperationen, Forschung und Gastvorträge", "/contact"],
        ],
        business: "Bei Luminovia konzipiere und leite ich Workshops und Schulungen zu KI, IT und IT-Sicherheit. Das Unternehmen bietet Trainings und Beratung für Teams, Hochschulen und Bildungsanbieter an.",
        businessLink: "luminovia.org besuchen",
    },
    en: {
        kicker: "About me",
        role: "IT lecturer, business information systems specialist and founder of Luminovia",
        intro: "I teach adults and teams and design my own exercises and course materials. I build tools for literature reviews and automation, contribute to open-source projects and study how AI changes the way people work.",
        location: "Brisbane, Australia",
        portrait: "Portrait of Carina Sophie Schoppe",
        tablet: "Carina standing with a tablet and stylus",
        career: "View my CV",
        linkedin: "My LinkedIn profile",
        facts: [
            ["Degrees", "MSc in Business Information Systems and MBA"],
            ["Vocational education", "Certificate IV in Training and Assessment (TAE40122)"],
            ["Teaching languages", "English and German"],
        ],
        approachTitle: "How I teach, research and write software",
        teachingTitle: "How do you spot a phishing email?",
        teaching: "A security exercise might start with a suspicious email. We check the sender and the links and ask why the message sounds so urgent. Then we talk about how we’d handle the same email at work.",
        researchTitle: "Who makes the call when AI is involved?",
        research: "My master’s thesis looked at what generative AI changes for employees in German companies. For my MBA, I wanted to understand how leaders in knowledge-intensive organisations can oversee its use.",
        software: "My literature review tool PRISMA records which papers were screened out and why, so you can go back and check those decisions.",
        publications: "Read my academic work",
        projects: "My software projects",
        pathLabel: "My background",
        pathTitle: "From Paderborn to Brisbane",
        path: [
            ["2019", "My degree and my first classes", "I began studying Business Information Systems at the University of Paderborn. That same year I started freelancing as a lecturer and consultant."],
            ["2021", "IT security for small businesses", "At KMUeinfachSicher, I helped write learning materials on password security and handling data safely."],
            ["2022", "Workshops on diversity", "I volunteered with SCHLAU NRW, helping run school workshops on diversity and anti-discrimination."],
            ["2025", "Bachelor’s and master’s degrees", "I completed my bachelor’s at the University of Paderborn and my master’s at IU, both in Business Information Systems."],
            ["2026", "Teaching and research from Brisbane", "I completed my MBA, gained an Australian teaching qualification and worked as a research assistant on agentic AI at The University of Queensland."],
        ],
        fullPath: "See my full timeline",
        nextLabel: "More about my work",
        next: [
            ["Skills", "What I specialise in", "/skills"],
            ["Credentials", "My degrees and professional qualifications", "/credentials"],
            ["Writing", "What I write about AI and education", "/blog"],
            ["Contact", "Collaboration, research and guest lectures", "/contact"],
        ],
        business: "At Luminovia, I design and lead workshops and courses on AI, IT and cybersecurity. The company provides training and consulting to teams, universities and education providers.",
        businessLink: "Visit luminovia.org",
    },
};

export default function AboutPage() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <main className="about-page">
            <section className="about-hero" aria-labelledby="about-title">
                <div className="about-hero-copy">
                    <p className="about-kicker">{c.kicker}</p>
                    <h1 id="about-title">{PROFILE.name}</h1>
                    <p className="about-role">{c.role}</p>
                    <p className="about-lede">{c.intro}</p>
                    <div className="about-hero-actions">
                        <Link className="site-button site-button-primary" to="/my-way">{c.career}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <a className="site-text-link" href={PROFILE.linkedin}>{c.linkedin}<ArrowUpRight size={17} aria-hidden="true"/></a>
                    </div>
                </div>

                <figure className="about-hero-figure">
                    <Photo
                        src={IMAGES.headshot}
                        alt={c.portrait}
                        className="about-photo about-portrait"
                        width={1365}
                        height={2048}
                        fetchPriority="high"
                        sizes="(min-width: 1120px) 400px, (min-width: 821px) 35vw, (min-width: 540px) 416px, 90vw"
                    />
                    <figcaption>
                        <MapPin size={16} aria-hidden="true"/>{c.location}
                    </figcaption>
                </figure>
            </section>

            <dl className="about-facts">
                {c.facts.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
            </dl>

            <section className="about-method" aria-labelledby="about-method-title">
                <div className="about-method-art">
                    <Photo
                        src={IMAGES.fullBody}
                        alt={c.tablet}
                        className="about-photo about-fullbody"
                        width={1365}
                        height={2048}
                        sizes="(min-width: 900px) 280px, 250px"
                    />
                </div>
                <div className="about-method-copy">
                    <h2 id="about-method-title">{c.approachTitle}</h2>
                    <h3>{c.teachingTitle}</h3>
                    <p>{c.teaching}</p>
                    <h3>{c.researchTitle}</h3>
                    <p>{c.research}</p>
                    <p>{c.software}</p>
                    <div className="about-hero-actions about-method-links">
                        <Link className="site-text-link" to="/skills#publications">{c.publications}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <Link className="site-text-link" to="/projects">{c.projects}<ArrowRight size={17} aria-hidden="true"/></Link>
                    </div>
                </div>
            </section>

            <section className="about-path" id="about-path" aria-labelledby="about-path-title" tabIndex={-1}>
                <div className="about-path-heading">
                    <p className="about-kicker">{c.pathLabel}</p>
                    <h2 id="about-path-title">{c.pathTitle}</h2>
                    <Link className="site-text-link about-path-link" to="/my-way">{c.fullPath}<ArrowRight size={18} aria-hidden="true"/></Link>
                </div>
                <ol className="about-path-list">
                    {c.path.map(([year, title, description]) => (
                        <li key={year}>
                            <time dateTime={year}>{year}</time>
                            <div><h3>{title}</h3><p>{description}</p></div>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="about-business" aria-labelledby="about-business-title">
                <img src={IMAGES.luminoviaLogoMark} alt="" width="58" height="58" loading="lazy"/>
                <div>
                    <h2 id="about-business-title">Luminovia Training &amp; Consulting</h2>
                    <p>{c.business}</p>
                </div>
                <a className="site-text-link" href={PROFILE.luminovia}>{c.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
            </section>

            <section className="about-next" aria-labelledby="about-next-title">
                <h2 id="about-next-title">{c.nextLabel}</h2>
                <div className="about-next-links">
                    {c.next.map(([title, description, to]) => (
                        <Link key={to} to={to}>
                            <span><strong>{title}</strong><small>{description}</small></span>
                            <ArrowRight size={20} aria-hidden="true"/>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
