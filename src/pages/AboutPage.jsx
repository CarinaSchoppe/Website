import {ArrowDown, ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "./about.css";

const copy = {
    de: {
        kicker: "Über mich",
        title: ["Von Paderborn", "nach Brisbane"],
        intro: "Ich bin Carina Sophie Schoppe. Während meines Studiums in Paderborn habe ich angefangen, IT zu unterrichten. Heute gebe ich von Brisbane aus Kurse für Erwachsene und entwickle Software, etwa für die Literaturrecherche.",
        language: "Deutsch & Englisch",
        portrait: "Carina im Shirt des Fachschaftsrats Wirtschaftsinformatik",
        tablet: "Carina hält im Stehen ein Tablet und einen Stift",
        storyLink: "Zum Werdegang",
        approachTitle: "Einblicke in meine Arbeit",
        approachLabel: "Ein Blick in meinen Unterricht",
        teachingTitle: "Woran erkennt man eine Phishing-Mail?",
        teaching: "Eine Übung zur IT-Sicherheit kann mit einer verdächtigen E-Mail anfangen. Wir sehen uns Absender und Links an und fragen, warum die Nachricht so dringend klingt. Danach besprechen wir, wie man im Betrieb mit so einer E-Mail umgehen würde.",
        researchTitle: "Wer entscheidet, wenn KI mitarbeitet?",
        research: "In meiner Masterarbeit habe ich untersucht, was generative KI für Beschäftigte in deutschen Unternehmen verändert. Für meine MBA-Arbeit wollte ich wissen, wie Führungskräfte ihren Einsatz in wissensintensiven Organisationen steuern können.",
        software: "Meine Literatursoftware PRISMA hält fest, welche Studien bei der Vorauswahl herausgefallen sind und warum. So kann man die Entscheidungen auch später noch prüfen.",
        publications: "Meine wissenschaftlichen Arbeiten",
        pathTitle: "Stationen auf meinem Weg",
        path: [
            ["2019", "Studium und erste Kurse", "An der Universität Paderborn begann ich mit Wirtschaftsinformatik. Im selben Jahr machte ich mich als Dozentin und Beraterin selbstständig."],
            ["2021", "IT-Sicherheit für kleine Unternehmen", "Im Projekt KMUeinfachSicher erarbeitete ich Lernmaterial zu Passwörtern und zum sicheren Umgang mit Daten."],
            ["2022", "Workshops zu Vielfalt", "Bei SCHLAU NRW habe ich ehrenamtlich Schulworkshops zu Vielfalt und Antidiskriminierung begleitet und moderiert."],
            ["2025", "Bachelor und Master", "Ich schloss den Bachelor an der Universität Paderborn und den Master an der IU ab, beide in Wirtschaftsinformatik."],
            ["2026", "Unterricht von Brisbane aus", "Ich schloss meinen MBA ab und erwarb mit dem Certificate IV in Training and Assessment eine australische Lehrqualifikation für die berufliche Bildung."],
        ],
        fullPath: "Mein vollständiger Werdegang",
        credentials: "Abschlüsse und Zertifikate",
        nextLabel: "Mehr über meine Arbeit",
        next: [
            ["Kompetenzen", "Meine fachlichen Schwerpunkte", "/skills"],
            ["Texte", "Was ich über KI und Bildung schreibe", "/blog"],
            ["Kontakt", "Kooperationen, Forschung und Gastvorträge", "/contact"],
        ],
        business: "Luminovia Training & Consulting ist mein Unternehmen für Firmentrainings und Beratung.",
        businessLink: "Zu Luminovia",
    },
    en: {
        kicker: "About me",
        title: ["From Paderborn", "to Brisbane"],
        intro: "I’m Carina Sophie Schoppe. I started teaching IT while studying in Paderborn. I now teach adults from Brisbane and build software for tasks like finding and reviewing research papers.",
        language: "English & German",
        portrait: "Carina wearing a Business Information Systems student council shirt",
        tablet: "Carina standing with a tablet and stylus",
        storyLink: "My career so far",
        approachTitle: "A closer look at my work",
        approachLabel: "Inside an IT class",
        teachingTitle: "How do you spot a phishing email?",
        teaching: "A security exercise might start with a suspicious email. We check the sender and the links and ask why the message sounds so urgent. Then we talk about how we’d handle the same email at work.",
        researchTitle: "Who makes the call when AI is involved?",
        research: "My master’s thesis looked at what generative AI changes for employees in German companies. For my MBA, I wanted to understand how leaders in knowledge-intensive organisations can oversee its use.",
        software: "My literature review tool PRISMA records which papers were screened out and why, so you can go back and check those decisions.",
        publications: "Read my academic work",
        pathTitle: "My career so far",
        path: [
            ["2019", "My degree and my first classes", "I began studying Business Information Systems at the University of Paderborn. That same year I started freelancing as a lecturer and consultant."],
            ["2021", "IT security for small businesses", "At KMUeinfachSicher, I helped write learning materials on password security and handling data safely."],
            ["2022", "Workshops on diversity", "I volunteered with SCHLAU NRW, helping run school workshops on diversity and anti-discrimination."],
            ["2025", "Bachelor’s and master’s degrees", "I completed my bachelor’s at the University of Paderborn and my master’s at IU, both in Business Information Systems."],
            ["2026", "Teaching from Brisbane", "I completed my MBA and earned the Certificate IV in Training and Assessment, an Australian qualification for vocational educators."],
        ],
        fullPath: "See my full timeline",
        credentials: "Degrees and certificates",
        nextLabel: "More about my work",
        next: [
            ["Skills", "What I specialise in", "/skills"],
            ["Writing", "What I write about AI and education", "/blog"],
            ["Contact", "Collaboration, research and guest lectures", "/contact"],
        ],
        business: "I run Luminovia Training & Consulting, where I offer training and advice for organisations.",
        businessLink: "Visit Luminovia",
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
                    <h1 id="about-title">{c.title[0]} <em>{c.title[1]}</em></h1>
                    <p className="about-lede">{c.intro}</p>
                    <a className="about-text-link" href="#about-path">{c.storyLink}<ArrowDown size={18} aria-hidden="true"/></a>
                </div>

                <figure className="about-hero-figure">
                    <Photo
                        src={IMAGES.outdoor}
                        alt={c.portrait}
                        className="about-photo about-portrait"
                        width={1120}
                        height={1680}
                        fetchPriority="high"
                        sizes="(min-width: 1230px) 420px, (min-width: 801px) 36vw, 90vw"
                    />
                    <figcaption>
                        <span>{PROFILE.name}</span>
                        <span>{c.language}</span>
                    </figcaption>
                </figure>
            </section>

            <section className="about-method" aria-labelledby="about-method-title">
                <h2 id="about-method-title" className="sr-only">{c.approachTitle}</h2>
                <div className="about-method-art">
                    <Photo
                        src={IMAGES.fullBody}
                        alt={c.tablet}
                        className="about-photo about-fullbody"
                        width={1365}
                        height={2048}
                        sizes="(min-width: 1230px) 340px, (min-width: 801px) 32vw, 80vw"
                    />
                </div>
                <div className="about-method-copy">
                    <p className="about-kicker">{c.approachLabel}</p>
                    <h3 className="about-teaching-title">{c.teachingTitle}</h3>
                    <p>{c.teaching}</p>
                    <h3>{c.researchTitle}</h3>
                    <p>{c.research}</p>
                    <p>{c.software}</p>
                    <Link className="about-text-link about-publications" to="/skills#publications">{c.publications}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
            </section>

            <section className="about-path" id="about-path" aria-labelledby="about-path-title">
                <div className="about-path-heading">
                    <h2 id="about-path-title">{c.pathTitle}</h2>
                    <div className="about-route" aria-hidden="true">
                        <span>Paderborn</span><span className="about-route-track"/><span>Brisbane</span>
                    </div>
                    <div className="about-path-links">
                        <Link className="about-text-link" to="/my-way">{c.fullPath}<ArrowRight size={18} aria-hidden="true"/></Link>
                        <Link className="about-text-link" to="/credentials">{c.credentials}<ArrowRight size={18} aria-hidden="true"/></Link>
                    </div>
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
                <div className="about-business">
                    <p>{c.business}</p>
                    <a className="about-text-link" href={PROFILE.luminovia}>{c.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
                </div>
            </section>
        </main>
    );
}
