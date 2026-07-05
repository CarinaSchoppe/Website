import {Link} from "react-router-dom";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import Photo from "../components/Photo.jsx";

const copy = {
    en: {
        role: "IT, AI & Business Information Systems Lecturer",
        intro: "Personal portfolio for software projects, research interests, teaching background, credentials and selected writing around AI, digital education, cybersecurity and business computer science.",
        projects: "View projects",
        credentials: "View credentials",
        luminovia: "Company training & consulting -> Luminovia",
        location: "Based in Brisbane, Australia",
        proof: [
            ["Lecturer in IT, AI & Business Information Systems", "Teaching profile"],
            ["Research & teaching in AI, cybersecurity & digital education", "Academic context"],
            ["Software builder with a focus on practical impact", "Project work"],
            ["Bridging theory and practice for real-world outcomes", "Transfer"],
        ],
        connect: "What I connect",
        connectCards: [
            ["AI & Data", "From concepts to responsible use", "brain"],
            ["Cybersecurity", "Security mindset, not just tools", "shield"],
            ["Digital Education", "Learning design for engagement & impact", "mortar"],
            ["Software Engineering", "Building useful, maintainable systems", "code"],
            ["Business Information Systems", "Information that drives better decisions", "chart"],
            ["People & Leadership", "Empowering learners and teams", "people"],
        ],
        featuredProjects: "Featured projects",
        viewProjects: "View all projects",
        credentialsTitle: "Credentials & milestones",
        viewAll: "View all",
        writing: "Writing",
        viewPosts: "View all posts",
        luminoviaTitle: "Company training and consulting live at Luminovia.",
        luminoviaCopy: "Commercial training, consulting, workshops and corporate enquiries belong on Luminovia. This site stays focused on Carina's portfolio, CV, writing and public work.",
        luminoviaCta: "Go to Luminovia",
        contactTitle: "Let's connect",
        contactCopy: "Interested in collaboration, speaking or profile-related enquiries?",
        send: "Send a message",
        linkedin: "Connect on LinkedIn",
    },
    de: {
        role: "Dozentin für IT, AI & Wirtschaftsinformatik",
        intro: "Persönliches Portfolio für Softwareprojekte, Research-Interessen, Lehrprofil, Nachweise und ausgewählte Texte zu AI, digitaler Bildung, Cybersecurity und Wirtschaftsinformatik.",
        projects: "Projekte ansehen",
        credentials: "Nachweise ansehen",
        luminovia: "Firmentraining & Consulting -> Luminovia",
        location: "Sitz in Brisbane, Australien",
        proof: [
            ["Dozentin für IT, AI & Wirtschaftsinformatik", "Lehrprofil"],
            ["Research & Lehre in AI, Cybersecurity & digitaler Bildung", "Akademischer Kontext"],
            ["Softwareprojekte mit praktischem Fokus", "Projektarbeit"],
            ["Verbindung von Theorie und Praxis", "Transfer"],
        ],
        connect: "Was ich verbinde",
        connectCards: [
            ["AI & Daten", "Von Konzepten zu verantwortungsvoller Nutzung", "brain"],
            ["Cybersecurity", "Security Mindset, nicht nur Tools", "shield"],
            ["Digitale Bildung", "Lerndesign für Wirkung und Engagement", "mortar"],
            ["Software Engineering", "Nützliche, wartbare Systeme bauen", "code"],
            ["Wirtschaftsinformatik", "Informationen für bessere Entscheidungen", "chart"],
            ["People & Leadership", "Lernende und Teams befähigen", "people"],
        ],
        featuredProjects: "Ausgewählte Projekte",
        viewProjects: "Alle Projekte",
        credentialsTitle: "Nachweise & Stationen",
        viewAll: "Alle ansehen",
        writing: "Texte",
        viewPosts: "Alle Beiträge",
        luminoviaTitle: "Firmentraining und Consulting laufen über Luminovia.",
        luminoviaCopy: "Kommerzielle Trainings, Consulting, Workshops und Unternehmensanfragen gehören zu Luminovia. Diese Seite bleibt auf Carinas Portfolio, CV, Texte und öffentliche Arbeit fokussiert.",
        luminoviaCta: "Zu Luminovia",
        contactTitle: "Kontakt",
        contactCopy: "Für Zusammenarbeit, Vorträge oder profilbezogene Anfragen.",
        send: "Nachricht senden",
        linkedin: "Auf LinkedIn verbinden",
    },
};

const iconPaths = {
    brain: "M9 5a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3m6-14a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3M9 5v14m6-14v14M6 9h12M6 15h12",
    shield: "M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z",
    mortar: "M3 8l9-4 9 4-9 4-9-4zm4 3v4c3 2 7 2 10 0v-4",
    code: "M8 8l-4 4 4 4m8-8l4 4-4 4M14 5l-4 14",
    chart: "M4 19h16M7 16V9m5 7V5m5 11v-6",
    people: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c1-4 9-4 10 0m-2 0c1-4 9-4 10 0",
};

function LineIcon({name}) {
    return (
        <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={iconPaths[name]}/>
        </svg>
    );
}

function Panel({children, className = ""}) {
    return <section className={`portfolio-panel ${className}`}>{children}</section>;
}

export default function HomePage() {
    const {language} = useLanguage();
    const {softwareProjects, credentials, blogPosts, timeline} = useSiteContent();
    const c = copy[language];
    const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    const milestoneRows = timeline.slice(-4).reverse();

    return (
        <main className="portfolio-home">
            <section className="portfolio-hero">
                <div className="portfolio-hero-copy">
                    <h1>Carina Sophie Schoppe.</h1>
                    <p className="portfolio-gradient-text">{c.role}</p>
                    <p className="portfolio-hero-intro">{c.intro}</p>
                    <div className="portfolio-actions">
                        <Button to="/projects">{c.projects}</Button>
                        <Button to="/credentials" variant="secondary">{c.credentials}</Button>
                        <Button href={PROFILE.luminovia} variant="secondary">{c.luminovia}</Button>
                    </div>
                </div>
                <div className="portfolio-portrait-wrap" aria-label={c.location}>
                    <div className="portfolio-skyline" aria-hidden="true"/>
                    <Photo src={IMAGES.outdoor} alt="Portrait of Carina Sophie Schoppe" className="portfolio-portrait" imgClass="object-[50%_18%]" fetchPriority="high"/>
                    <div className="portfolio-location">{c.location}</div>
                </div>
            </section>

            <section className="portfolio-proof-strip" aria-label="Portfolio proof">
                {c.proof.map(([title, label], index) => (
                    <div key={title} className="portfolio-proof-item">
                        <LineIcon name={["mortar", "brain", "code", "chart"][index]}/>
                        <div>
                            <strong>{title}</strong>
                            <span>{label}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="portfolio-connect">
                <h2>{c.connect}</h2>
                <div className="portfolio-connect-grid">
                    {c.connectCards.map(([title, text, icon], index) => (
                        <article key={title} className="portfolio-mini-card" data-accent-index={index}>
                            <LineIcon name={icon}/>
                            <div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="portfolio-dashboard">
                <Panel className="portfolio-projects-panel">
                    <div className="portfolio-panel-head">
                        <h2>{c.featuredProjects}</h2>
                        <Link to="/projects">{c.viewProjects} {"->"}</Link>
                    </div>
                    <div className="portfolio-project-grid">
                        {softwareProjects.slice(0, 3).map((project) => (
                            <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="portfolio-project-card">
                                <div className="portfolio-project-visual" aria-hidden="true">
                                    <LineIcon name={project.stack.includes("Kotlin") ? "code" : project.stack.includes("AI") ? "brain" : "chart"}/>
                                </div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div>
                                    {project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}
                                </div>
                            </a>
                        ))}
                    </div>
                </Panel>

                <Panel>
                    <div className="portfolio-panel-head">
                        <h2>{c.credentialsTitle}</h2>
                        <Link to="/credentials">{c.viewAll} {"->"}</Link>
                    </div>
                    <div className="portfolio-timeline">
                        {milestoneRows.map((item, index) => (
                            <div key={`${item.year}-${item.title}`} className="portfolio-timeline-row">
                                <span data-index={index}>{item.year}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="portfolio-credential-chips">
                        {credentials.slice(0, 4).map((item) => <span key={item.title}>{item.title}</span>)}
                    </div>
                </Panel>

                <Panel>
                    <div className="portfolio-panel-head">
                        <h2>{c.writing}</h2>
                        <Link to="/blog">{c.viewPosts} {"->"}</Link>
                    </div>
                    <div className="portfolio-writing-list">
                        {latestPosts.map((post, index) => (
                            <Link key={post.slug} to={`/blog/${post.slug}`} className="portfolio-writing-card" data-accent-index={index}>
                                <div className="portfolio-writing-visual" aria-hidden="true"><LineIcon name={index === 0 ? "brain" : index === 1 ? "shield" : "chart"}/></div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <span>{post.date} · {post.category}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Panel>
            </section>

            <section className="portfolio-bottom-grid">
                <Panel className="portfolio-luminovia-panel">
                    <div className="portfolio-external-arrow" aria-hidden="true">↗</div>
                    <div>
                        <h2>{c.luminoviaTitle}</h2>
                        <p>{c.luminoviaCopy}</p>
                    </div>
                    <Button href={PROFILE.luminovia}>{c.luminoviaCta}</Button>
                </Panel>

                <Panel className="portfolio-contact-panel">
                    <h2>{c.contactTitle}</h2>
                    <div className="portfolio-contact-links">
                        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                        <span>{PROFILE.location}</span>
                        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">{c.linkedin}</a>
                    </div>
                    <div>
                        <p>{c.contactCopy}</p>
                        <Button to="/contact" variant="secondary">{c.send}</Button>
                    </div>
                </Panel>
            </section>
        </main>
    );
}
