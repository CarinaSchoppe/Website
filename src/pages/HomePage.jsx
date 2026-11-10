import {ArrowDownRight, ArrowRight, ArrowUpRight, MapPin} from "lucide-react";
import {Link} from "react-router-dom";
import Photo from "../components/Photo.jsx";
import {useSiteContent} from "../data/localizedContent.js";
import {IMAGES, PROFILE} from "../data/profile.js";
import {selectedWork} from "../data/selectedWork.js";
import {useLanguage} from "../i18n.jsx";
import "./home.css";

const copy = {
    de: {
        label: "IT-Dozentin · Wirtschaftsinformatikerin",
        title: "Ich mache IT",
        emphasis: "greifbar.",
        intro: "Ich bin Carina Sophie Schoppe. Ich unterrichte IT, entwickle Software und forsche dazu, wie Menschen mit KI arbeiten.",
        location: "Brisbane, Australien",
        portraitAlt: "Carina Sophie Schoppe sitzt lächelnd mit Tablet und Stift auf einem Hocker",
        about: "Mehr über mich",
        projects: "Projekte entdecken",
        approaches: [
            {label: "Lehren", subtitle: "IT in der Erwachsenenbildung", tone: "butter"},
            {label: "Entwickeln", subtitle: "Software & Open Source", tone: "mint"},
            {label: "Forschen", subtitle: "KI, Sicherheit & Verantwortung", tone: "sky"},
        ],
        workLabel: "Was mich auszeichnet",
        workTitle: "So arbeite ich.",
        approachText: [
            "In meinen Kursen wird aus einem Begriff eine Aufgabe: ein Netzwerk aufbauen, eine SQL-Abfrage testen oder im Linux-Terminal herausfinden, warum etwas nicht läuft. Ich unterrichte auf Deutsch und Englisch.",
            "Ich programmiere gern dort, wo ich im Alltag Reibung sehe. Manchmal entsteht daraus ein Werkzeug für wiederkehrende Aufgaben. Manchmal ist es ein gezielter Beitrag zu einem bestehenden Open-Source-Projekt.",
            "Mich interessiert, was passiert, wenn KI Teil echter Arbeitsabläufe wird: Wer prüft die Ergebnisse? Wo entstehen neue Risiken? Und welche Entscheidungen sollen Menschen selbst treffen?",
        ],
        milestonesLabel: "Aus meinem Werdegang",
        milestones: [
            ["10.000+", "Unterrichtsstunden"],
            ["M. Sc.", "Wirtschaftsinformatik"],
            ["TAE40122", "Training and Assessment · Australien"],
        ],
        credentials: "Qualifikationen ansehen",
        selectedLabel: "Aus dem Projektarchiv",
        selectedTitle: "Was ich gebaut habe.",
        selectedIntro: "Drei Projekte, an denen man sieht, wie unterschiedlich praktische IT-Arbeit aussehen kann.",
        allProjects: "Alle Projekte",
        writingLabel: "Zum Weiterlesen",
        writingTitle: "Worüber ich schreibe.",
        allWriting: "Alle Texte",
        contactLabel: "Kontakt",
        contactTitle: "Was beschäftigt dich gerade?",
        contactCopy: "Ob Gastvortrag, Forschungsfrage oder gemeinsames Projekt: Schreib mir gern, woran du arbeitest.",
        message: "Kontakt aufnehmen",
        businessLabel: "Für Unternehmen",
        businessTitle: "Luminovia Training & Consulting",
        businessCopy: "Unter meiner eigenen Marke biete ich Firmentrainings und Beratung an.",
        businessLink: "Zu Luminovia",
    },
    en: {
        label: "IT lecturer · Business information systems",
        title: "I make IT",
        emphasis: "tangible.",
        intro: "I’m Carina Sophie Schoppe. I teach IT, build software, and research how people work with AI.",
        location: "Brisbane, Australia",
        portraitAlt: "Carina Sophie Schoppe smiling on a stool with a tablet and stylus",
        about: "More about me",
        projects: "Explore my projects",
        approaches: [
            {label: "Teaching", subtitle: "IT for adult learners", tone: "butter"},
            {label: "Building", subtitle: "Software & open source", tone: "mint"},
            {label: "Researching", subtitle: "AI, security & responsibility", tone: "sky"},
        ],
        workLabel: "What defines my work",
        workTitle: "How I work.",
        approachText: [
            "In my classes, a concept becomes a task: build a network, test a SQL query, or find out why something isn’t working in a Linux terminal. I teach in German and English.",
            "I like to write software when I run into a problem worth solving. Sometimes that means building a tool for a repetitive task. Sometimes it means making a focused contribution to an existing open source project.",
            "I’m curious about what happens when AI becomes part of everyday work. Who checks the results? What new risks appear? And which decisions should people make themselves?",
        ],
        milestonesLabel: "A few milestones",
        milestones: [
            ["10,000+", "Teaching hours"],
            ["MSc", "Business Information Systems"],
            ["TAE40122", "Training and Assessment · Australia"],
        ],
        credentials: "View my credentials",
        selectedLabel: "From the project archive",
        selectedTitle: "What I’ve built.",
        selectedIntro: "Three projects that show the different shapes practical IT work can take.",
        allProjects: "All projects",
        writingLabel: "Further reading",
        writingTitle: "What I write about.",
        allWriting: "All writing",
        contactLabel: "Contact",
        contactTitle: "What are you working on?",
        contactCopy: "If you’re planning a guest lecture, exploring a research question, or looking to collaborate, I’d like to hear from you.",
        message: "Get in touch",
        businessLabel: "For organisations",
        businessTitle: "Luminovia Training & Consulting",
        businessCopy: "I offer company training and consulting through my own business.",
        businessLink: "Visit Luminovia",
    },
};

export default function HomePage() {
    const {language} = useLanguage();
    const {blogPosts} = useSiteContent();
    const c = copy[language];
    const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

    return (
        <main className="home site-width">
            <section className="home-hero" aria-labelledby="home-title">
                <div className="home-hero-copy">
                    <p className="site-kicker home-hero-kicker">{c.label}</p>
                    <h1 id="home-title">{c.title} <em>{c.emphasis}</em></h1>
                    <p className="home-intro">{c.intro}</p>
                    <div className="home-hero-actions">
                        <Link className="site-button site-button-primary" to="/about">{c.about}<ArrowUpRight size={18} aria-hidden="true"/></Link>
                        <Link className="site-text-link" to="/projects">{c.projects}<ArrowRight size={17} aria-hidden="true"/></Link>
                    </div>
                </div>
                <figure className="home-portrait">
                    <div className="home-portrait-mat">
                        <Photo
                            src={IMAGES.tablet}
                            alt={c.portraitAlt}
                            className="home-portrait-photo"
                            width={960}
                            height={1440}
                            fetchPriority="high"
                            sizes="(min-width: 1160px) 430px, (min-width: 821px) 38vw, 84vw"
                        />
                        <span className="home-portrait-tab" aria-hidden="true"/>
                    </div>
                    <figcaption><MapPin size={15} aria-hidden="true"/>{c.location}</figcaption>
                </figure>
            </section>

            <nav className="home-index" aria-label={c.workLabel}>
                {c.approaches.map(({label, subtitle, tone}, index) => (
                    <a key={tone} className={`home-index-entry tone-${tone}`} href={`#work-${tone}`}>
                        <span className="home-index-number">0{index + 1}</span>
                        <span><strong>{label}</strong><small>{subtitle}</small></span>
                        <ArrowDownRight size={22} aria-hidden="true"/>
                    </a>
                ))}
            </nav>

            <section className="home-method home-section" aria-labelledby="work-title">
                <div className="home-method-heading">
                    <p className="site-kicker">{c.workLabel}</p>
                    <h2 id="work-title">{c.workTitle}</h2>
                </div>
                <div className="home-method-notes">
                    {c.approaches.map(({label, tone}, index) => (
                        <article key={tone} className={`home-method-note tone-${tone}`} id={`work-${tone}`}>
                            <h3>{label}</h3><p>{c.approachText[index]}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="home-milestones tone-lavender" aria-label={c.milestonesLabel}>
                <dl>
                    {c.milestones.map(([value, label]) => <div key={value}><dt>{value}</dt><dd>{label}</dd></div>)}
                </dl>
                <Link className="site-text-link" to="/credentials">{c.credentials}<ArrowRight size={17} aria-hidden="true"/></Link>
            </section>

            <section className="home-section" aria-labelledby="selected-title">
                <div className="home-section-heading">
                    <div>
                        <p className="site-kicker">{c.selectedLabel}</p>
                        <h2 id="selected-title">{c.selectedTitle}</h2>
                        <p>{c.selectedIntro}</p>
                    </div>
                    <Link className="site-text-link" to="/projects">{c.allProjects}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
                <div className="home-projects">
                    {selectedWork.map((project) => (
                        <article key={project.id} className={`home-project tone-${project.tone}`}>
                            <Link to={`/projects#${project.id}`} className="home-project-link">
                                <div className="home-project-media">
                                    <img src={project.image} alt={project.imageAlt[language]} width="800" height="500" loading="lazy" decoding="async"/>
                                </div>
                                <div className="home-project-copy">
                                    <p className="site-kicker">{project.type[language]}</p>
                                    <h3>{project.title}<ArrowUpRight size={22} aria-hidden="true"/></h3>
                                    <p>{project.description[language]}</p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="home-writing home-section" aria-labelledby="writing-title">
                <div className="home-section-heading">
                    <div><p className="site-kicker">{c.writingLabel}</p><h2 id="writing-title">{c.writingTitle}</h2></div>
                    <Link className="site-text-link" to="/blog">{c.allWriting}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
                <div className="home-writing-list">
                    {posts.map((post) => (
                        <article key={post.slug}>
                            <Link to={`/blog/${post.slug}`}>
                                <span className="site-kicker">{post.category}</span>
                                <h3>{post.title}</h3>
                                <ArrowUpRight size={23} aria-hidden="true"/>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="home-contact" aria-labelledby="contact-title">
                <div className="home-contact-personal">
                    <p className="site-kicker">{c.contactLabel}</p>
                    <h2 id="contact-title">{c.contactTitle}</h2>
                    <p>{c.contactCopy}</p>
                    <Link className="site-button" to="/contact">{c.message}<ArrowRight size={18} aria-hidden="true"/></Link>
                </div>
                <div className="home-contact-business tone-butter">
                    <img src={IMAGES.luminoviaLogoMark} width="58" height="58" alt="" loading="lazy"/>
                    <p className="site-kicker">{c.businessLabel}</p>
                    <h3>{c.businessTitle}</h3>
                    <p>{c.businessCopy}</p>
                    <a className="site-text-link" href={PROFILE.luminovia}>{c.businessLink}<ArrowUpRight size={18} aria-hidden="true"/></a>
                </div>
            </section>
        </main>
    );
}
