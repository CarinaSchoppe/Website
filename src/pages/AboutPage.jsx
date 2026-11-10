import {ArrowDown, ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "./about.css";

const copy = {
    de: {
        kicker: "Über mich",
        title: ["Technik erklären.", "Selbst ausprobieren."],
        intro: "Ich bin Carina Sophie Schoppe. Ich gebe IT-Kurse für Erwachsene, entwickle Open-Source-Software und erforsche, wie generative KI die Arbeit verändert.",
        location: "Brisbane, Australien",
        language: "Deutsch & Englisch",
        portrait: "Carina Sophie Schoppe vor einer Glasfassade",
        tablet: "Carina hält ein Tablet und einen Stift",
        storyLink: "Mein Weg nach Brisbane",
        approachLabel: "So arbeite ich",
        teachingTitle: "Vom Beispiel zur eigenen Lösung",
        teaching: "Im Kurs arbeiten wir mit konkreten Aufgaben. Bei IT-Sicherheit kann das eine verdächtige E-Mail sein. Wir suchen nach Hinweisen, prüfen unsere Vermutungen und besprechen, wie sich dieselbe Prüfung im Arbeitsalltag anwenden lässt. Tempo und Tiefe passe ich an die Gruppe an.",
        researchTitle: "Wer entscheidet, wenn KI mitarbeitet?",
        research: "In meiner Masterarbeit habe ich untersucht, welche Chancen und Risiken generative KI für Beschäftigte in deutschen Unternehmen birgt. In meiner MBA-Arbeit ging es darum, wie Führungskräfte den Einsatz in wissensintensiven Organisationen steuern können. Auch beim Entwickeln achte ich auf Nachvollziehbarkeit. Meine Literatursoftware PRISMA hält zum Beispiel fest, welche Studien ausgesondert wurden und warum.",
        publications: "Meine wissenschaftlichen Arbeiten",
        pathLabel: "Mein Werdegang",
        pathTitle: "Von Paderborn nach Brisbane",
        path: [
            ["2019", "Studium und erste Kurse", "Ich begann mein Wirtschaftsinformatikstudium an der Universität Paderborn und machte mich als Dozentin und Beraterin selbstständig."],
            ["2021", "IT-Sicherheit erklären", "Im Projekt KMUeinfachSicher bereitete ich Themen wie Passwörter und den Umgang mit Daten für kleine und mittlere Unternehmen auf."],
            ["2022", "Bildung zu Vielfalt", "Bei SCHLAU NRW habe ich ehrenamtlich Bildungsworkshops zu Vielfalt und Antidiskriminierung begleitet und moderiert."],
            ["2026", "Internationale Lehre", "Ich schloss meinen MBA und das australische Certificate IV in Training and Assessment ab. Heute unterrichte ich von Brisbane aus auf Deutsch und Englisch."],
        ],
        fullPath: "Zum vollständigen Werdegang",
        nextLabel: "Mehr über meine Arbeit",
        next: [
            ["Kompetenzen", "Meine fachlichen Schwerpunkte", "/skills"],
            ["Texte", "Was ich über KI und Bildung schreibe", "/blog"],
            ["Kontakt", "Kooperationen, Forschung und Gastvorträge", "/contact"],
        ],
        business: "Trainings für Unternehmen und Beratung biete ich über Luminovia Training & Consulting an.",
        businessLink: "Zu Luminovia",
    },
    en: {
        kicker: "About me",
        title: ["Explain technology.", "Try it yourself."],
        intro: "I’m Carina Sophie Schoppe. I teach IT to adults, develop open-source software and research how generative AI changes the way we work.",
        location: "Brisbane, Australia",
        language: "English & German",
        portrait: "Carina Sophie Schoppe in front of a glass building",
        tablet: "Carina holding a tablet and stylus",
        storyLink: "My path to Brisbane",
        approachLabel: "How I work",
        teachingTitle: "From a worked example to your own solution",
        teaching: "In class, we start with a practical task. In IT security, that might be a suspicious email. We look for clues, check our assumptions and discuss how to make the same checks at work. I adjust the pace and depth to the group.",
        researchTitle: "Who decides when AI is involved?",
        research: "My master’s thesis looked at the opportunities and risks of generative AI for employees in German companies. In my MBA research, I examined how leaders can govern its use in knowledge-intensive organisations. I bring that interest in transparency to software too. My literature review tool PRISMA records which studies were screened out and why.",
        publications: "Read my academic work",
        pathLabel: "My background",
        pathTitle: "From Paderborn to Brisbane",
        path: [
            ["2019", "Study and early teaching", "I started studying Business Computer Science at the University of Paderborn and began working as a freelance lecturer and consultant."],
            ["2021", "Explaining IT security", "At KMUeinfachSicher I helped turn topics such as password security and data handling into learning materials for small and medium-sized businesses."],
            ["2022", "Education on diversity", "I volunteered with SCHLAU NRW, supporting and facilitating workshops on diversity and anti-discrimination."],
            ["2026", "Teaching internationally", "I completed my MBA and the Australian Certificate IV in Training and Assessment. I now teach in English and German from Brisbane."],
        ],
        fullPath: "Explore my full professional timeline",
        nextLabel: "More about my work",
        next: [
            ["Skills", "What I specialise in", "/skills"],
            ["Writing", "What I write about AI and education", "/blog"],
            ["Contact", "Collaboration, research and guest lectures", "/contact"],
        ],
        business: "I offer company training and consulting through Luminovia Training & Consulting.",
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
                        <span>{c.location}</span>
                        <span>{c.language}</span>
                    </figcaption>
                </figure>
            </section>

            <section className="about-method" aria-labelledby="about-method-title">
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
                    <h2 id="about-method-title">{c.teachingTitle}</h2>
                    <p>{c.teaching}</p>
                    <h3>{c.researchTitle}</h3>
                    <p>{c.research}</p>
                    <Link className="about-text-link about-publications" to="/skills#publications">{c.publications}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
            </section>

            <section className="about-path" id="about-path" aria-labelledby="about-path-title">
                <div className="about-path-heading">
                    <p className="about-kicker">{c.pathLabel}</p>
                    <h2 id="about-path-title">{c.pathTitle}</h2>
                    <Link className="about-text-link" to="/my-way">{c.fullPath}<ArrowRight size={18} aria-hidden="true"/></Link>
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
