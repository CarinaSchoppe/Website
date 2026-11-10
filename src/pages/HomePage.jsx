import {ArrowRight, ArrowUpRight, BookOpen, Code2, FlaskConical, Globe2, MapPin} from "lucide-react";
import {Link} from "react-router-dom";
import Photo from "../components/Photo.jsx";
import ReferencesSection from "../components/ReferencesSection.jsx";
import {blogIndexForLanguage} from "../data/blogIndex.js";
import {IMAGES, PROFILE} from "../data/profile.js";
import {selectedWork} from "../data/selectedWork.js";
import {useLanguage} from "../i18n.jsx";
import "./home.css";

const capabilityIcons = [BookOpen, Code2, FlaskConical];
const capabilityTones = ["butter", "mint", "sky"];

const copy = {
    de: {
        role: "IT-Dozentin · Softwareentwicklerin · Wirtschaftsinformatikerin",
        intro: "Ich entwickle Software für systematische Literaturreviews, erforsche den Einsatz generativer KI im Arbeitsalltag und unterrichte IT und Wirtschaft.",
        location: "Brisbane, Australien",
        languages: "Deutsch & Englisch",
        portraitAlt: "Porträt von Carina Sophie Schoppe",
        about: "Mehr über mich",
        work: "Meine Arbeit ansehen",
        contact: "Persönlicher Kontakt",
        proof: "Erfahrung und Qualifikationen",
        milestones: [
            ["10.000+", "Dokumentierte Unterrichtsstunden"],
            ["4,7 von 5", "Durchschnittliche Teilnehmerbewertung"],
            ["M.Sc. und MBA", "Wirtschaftsinformatik und Management"],
        ],
        credentials: "Alle Qualifikationen",
        focus: "Meine Schwerpunkte",
        focusIntro: "Ich entwickle Kurse, Übungen und Lernmaterialien für Erwachsene. Beispiele aus meiner Softwarearbeit und Forschung bringe ich direkt in den Unterricht ein.",
        capabilities: [
            ["Lehre in KI, IT und Wirtschaft", "Ich unterrichte IT-Sicherheit, Softwareentwicklung, Datenbanken und Netzwerke ebenso wie Buchhaltungsgrundlagen, Arbeitsrecht und Datenschutz.", "Alle Lehrthemen ansehen", "/skills#unterricht"],
            ["Software & Automatisierung", "Ich automatisiere wiederkehrende Arbeitsschritte wie die Literaturrecherche oder das Befüllen von E-Mail-Vorlagen.", "PRISMA ansehen", "/projects#prisma"],
            ["KI & Forschung", "Ich untersuche, wie Beschäftigte mit generativer KI arbeiten und wie Unternehmen den Einsatz steuern können. Dazu gehört auch die Frage, wie KI Sicherheitsrisiken verändert.", "Forschungsarbeiten ansehen", "/skills#publications"],
        ],
        valuesTitle: "Wie ich arbeite",
        personal: "Wenn Software Ergebnisse sortiert oder Vorschläge macht, will ich prüfen können, worauf sie sich stützt.",
        values: [
            ["Selbst ausprobieren", "Eine Netzwerkübung kann damit beginnen, einen Verbindungsfehler einzugrenzen. Mir ist wichtig, dass Teilnehmende am Ende erklären können, warum ihre Lösung funktioniert."],
            ["Verantwortung klären", "In meiner MBA-Arbeit habe ich untersucht, wie Unternehmen beim Einsatz generativer KI Zuständigkeiten festlegen und Risiken beobachten können."],
            ["Vielfalt und Respekt", "Bei SCHLAU NRW habe ich ehrenamtlich Schulworkshops zu Vielfalt und Antidiskriminierung begleitet."],
        ],
        selected: "Ausgewählte Softwareprojekte",
        allProjects: "Alle Projekte",
        writing: "Fachtexte",
        allWriting: "Alle Texte",
        profile: "Mein Lebenslauf und Werdegang",
        contactTitle: "In Kontakt bleiben",
        contactCopy: "Ich freue mich über fachlichen Austausch zu Forschung, Software und Open Source.",
        linkedin: "Mein LinkedIn-Profil",
        businessLabel: "Mein Unternehmen",
        businessCopy: "Ich habe Luminovia für Trainings und Beratung in KI, IT und Cybersicherheit gegründet. Anfragen und Buchungen laufen über Luminovia.",
        businessLink: "Zu luminovia.org",
    },
    en: {
        role: "IT lecturer · Software developer · Business information systems",
        intro: "I build software for systematic literature reviews, study how people use generative AI at work, and teach IT and business.",
        location: "Brisbane, Australia",
        languages: "English & German",
        portraitAlt: "Portrait of Carina Sophie Schoppe",
        about: "More about me",
        work: "Explore my work",
        contact: "Personal contact",
        proof: "Experience and qualifications",
        milestones: [
            ["10,000+", "Documented teaching hours"],
            ["4.7 out of 5", "Average learner rating"],
            ["MSc and MBA", "Business information systems and management"],
        ],
        credentials: "All qualifications",
        focus: "What I do",
        focusIntro: "I design courses, practical exercises and materials for adult learners. I bring examples from my software projects and research into the classroom.",
        capabilities: [
            ["Teaching AI, IT and business", "I teach cybersecurity, software development, databases and networking, as well as accounting fundamentals, employment law and data protection.", "Explore teaching topics", "/skills#unterricht"],
            ["Software & automation", "I automate recurring tasks such as literature searches and filling in email templates.", "Explore PRISMA", "/projects#prisma"],
            ["AI & research", "I study how people work with generative AI, how organisations govern its use and how it changes security risks.", "View research", "/skills#publications"],
        ],
        valuesTitle: "How I work",
        personal: "When software ranks results or makes a recommendation, I want to be able to check what it’s based on.",
        values: [
            ["Learning by doing", "A networking exercise might start with tracing a connection fault. I want learners to be able to explain why their solution works."],
            ["Clarifying responsibility", "In my MBA thesis, I looked at how organisations can assign responsibility and monitor risks when using generative AI."],
            ["Diversity and respect", "As a volunteer with SCHLAU NRW, I helped run school workshops on diversity and anti-discrimination."],
        ],
        selected: "Selected software projects",
        allProjects: "All projects",
        writing: "Articles",
        allWriting: "All articles",
        profile: "My CV and career story",
        contactTitle: "Stay in touch",
        contactCopy: "I’m happy to talk about research, software and open-source work.",
        linkedin: "My LinkedIn profile",
        businessLabel: "My business",
        businessCopy: "I founded Luminovia to provide training and consulting in AI, IT and cybersecurity. Luminovia handles business enquiries and bookings.",
        businessLink: "Visit luminovia.org",
    },
};

export default function HomePage() {
    const {language} = useLanguage();
    const c = copy[language];
    const posts = [...blogIndexForLanguage(language)].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

    return (
        <main className="home site-width">
            <section className="home-hero" aria-labelledby="home-title">
                <div className="home-hero-copy">
                    <p className="home-role">{c.role}</p>
                    <h1 id="home-title"><span>Carina Sophie</span> <span className="home-surname">Schoppe</span></h1>
                    <p className="home-intro">{c.intro}</p>
                    <div className="home-hero-actions">
                        <Link className="site-button site-button-primary" to="/about">{c.about}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <Link className="site-button home-work-button" to="#arbeit">{c.work}<ArrowRight size={17} aria-hidden="true"/></Link>
                    </div>
                </div>
                <figure className="home-portrait">
                    <Photo
                        src={IMAGES.hero}
                        alt={c.portraitAlt}
                        className="home-portrait-photo"
                        width={960}
                        height={1440}
                        fetchPriority="high"
                        sizes="(min-width: 1400px) 500px, (min-width: 761px) 40vw, (min-width: 600px) 520px, 91vw"
                    />
                    <figcaption>
                        <span><MapPin size={15} aria-hidden="true"/>{c.location}</span>
                        <span><Globe2 size={15} aria-hidden="true"/>{c.languages}</span>
                    </figcaption>
                </figure>
            </section>

            <section className="home-section home-values" aria-labelledby="values-title">
                <div className="home-values-intro">
                    <h2 id="values-title">{c.valuesTitle}</h2>
                    <p>{c.personal}</p>
                    <Link className="site-text-link" to="/my-way">{c.profile}<ArrowRight size={16} aria-hidden="true"/></Link>
                </div>
                <div className="home-values-list">
                    {c.values.map(([title, description], index) => (
                        <div key={title} className={`home-value tone-${capabilityTones[index]}`}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="arbeit" className="home-section" aria-labelledby="focus-title" tabIndex={-1}>
                <div className="home-section-heading">
                    <div>
                        <h2 id="focus-title">{c.focus}</h2>
                        <p>{c.focusIntro}</p>
                    </div>
                </div>
                <div className="home-capabilities">
                    {c.capabilities.map(([title, description, action, href], index) => {
                        const Icon = capabilityIcons[index];
                        return (
                            <article key={title} className={`home-capability tone-${capabilityTones[index]}`}>
                                <span className="home-capability-icon"><Icon size={20} aria-hidden="true"/></span>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <Link className="site-text-link" to={href}>{action}<ArrowRight size={15} aria-hidden="true"/></Link>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="home-proof" aria-label={c.proof}>
                <dl>
                    {c.milestones.map(([value, label]) => <div key={value}><dt>{value}</dt><dd>{label}</dd></div>)}
                </dl>
                <Link className="site-text-link" to="/credentials">{c.credentials}<ArrowRight size={16} aria-hidden="true"/></Link>
            </section>

            <ReferencesSection/>

            <section className="home-section" aria-labelledby="selected-title">
                <div className="home-section-heading">
                    <h2 id="selected-title">{c.selected}</h2>
                    <Link className="site-text-link" to="/projects">{c.allProjects}<ArrowRight size={16} aria-hidden="true"/></Link>
                </div>
                <div className="home-projects">
                    {selectedWork.map((project) => (
                        <article key={project.id} className="home-project">
                            <Link to={`/projects#${project.id}`} className="home-project-link">
                                <div className="home-project-media">
                                    <img src={project.image} alt={project.imageAlt[language]} width="800" height="500" loading="lazy" decoding="async"/>
                                </div>
                                <div className="home-project-copy">
                                    <p className="site-kicker">{project.type[language]}</p>
                                    <h3>{project.title}<ArrowRight size={18} aria-hidden="true"/></h3>
                                    <p>{project.description[language]}</p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="home-section" aria-labelledby="writing-title">
                <div className="home-section-heading">
                    <h2 id="writing-title">{c.writing}</h2>
                    <Link className="site-text-link" to="/blog">{c.allWriting}<ArrowRight size={16} aria-hidden="true"/></Link>
                </div>
                <div className="home-writing-list">
                    {posts.map((post) => (
                        <article key={post.slug}>
                            <Link to={`/blog/${post.slug}`}>
                                <span className="site-kicker">{post.category}</span>
                                <h3>{post.title}</h3>
                                <ArrowRight size={19} aria-hidden="true"/>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="home-contact" aria-labelledby="contact-title">
                <div className="home-contact-personal">
                    <h2 id="contact-title">{c.contactTitle}</h2>
                    <p>{c.contactCopy}</p>
                    <div className="home-contact-actions">
                        <Link className="site-text-link" to="/contact">{c.contact}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <a className="site-text-link" href={PROFILE.linkedin}>{c.linkedin}<ArrowUpRight size={16} aria-hidden="true"/></a>
                    </div>
                </div>
                <div className="home-contact-business">
                    <div className="home-business-heading">
                        <img src={IMAGES.luminoviaLogoMark} alt="" width="44" height="44" loading="lazy"/>
                        <div>
                            <p className="site-kicker">{c.businessLabel}</p>
                            <h3>Luminovia Training &amp; Consulting</h3>
                        </div>
                    </div>
                    <p>{c.businessCopy}</p>
                    <a className="site-text-link" href={PROFILE.luminovia}>{c.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
                </div>
            </section>
        </main>
    );
}
