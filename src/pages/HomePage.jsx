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
        role: "IT-Dozentin · Wirtschaftsinformatikerin",
        intro: "Ich unterrichte Erwachsene und Teams in IT, entwickle Software für wiederkehrende Aufgaben und forsche zum Einsatz von KI im Arbeitsalltag.",
        location: "Brisbane, Australien",
        languages: "Deutsch & Englisch",
        portraitAlt: "Porträt von Carina Sophie Schoppe",
        contact: "Kontakt aufnehmen",
        business: "Firmentraining & Beratung",
        proof: "Erfahrung und Qualifikationen",
        milestones: [
            ["10.000+", "Dokumentierte Unterrichtsstunden"],
            ["4,7 von 5", "Durchschnittliche Teilnehmerbewertung"],
            ["M.Sc. und MBA", "Wirtschaftsinformatik und Management"],
        ],
        credentials: "Alle Qualifikationen",
        focus: "Meine Schwerpunkte",
        focusIntro: "Ich arbeite mit Bildungsanbietern und Unternehmen. Das sind die Themen, die ich in Unterricht, Projekte und Forschung einbringe.",
        capabilities: [
            ["IT-Training", "Ich konzipiere und gebe Kurse für Erwachsene. Teilnehmende arbeiten mit Übungen zu Python, SQL, Linux, Netzwerken und IT-Sicherheit.", "Trainings bei Luminovia", PROFILE.luminovia],
            ["Software & Automatisierung", "Ich entwickle Werkzeuge für wiederkehrende Abläufe, zum Beispiel für Literaturrecherche und E-Mail-Versand. Für OpenXLR arbeite ich mit anderen Entwicklern an Linux-Software.", "Softwareprojekte ansehen", "/projects"],
            ["KI & Forschung", "Ich untersuche, wie Beschäftigte mit generativer KI arbeiten und wie Unternehmen den Einsatz steuern können. Dazu gehört auch die Frage, wie KI Sicherheitsrisiken verändert.", "Forschungsarbeiten ansehen", "/skills#publications"],
        ],
        valuesTitle: "Wofür ich stehe",
        values: [
            ["Selbst ausprobieren", "Eine Netzwerkübung kann damit beginnen, einen Verbindungsfehler einzugrenzen. Mir ist wichtig, dass Teilnehmende am Ende erklären können, warum ihre Lösung funktioniert."],
            ["Entscheidungen nachvollziehen", "Meine Literatursoftware PRISMA hält fest, welche Studien bei der Vorauswahl herausfallen und warum. So lassen sich Entscheidungen später prüfen."],
            ["Vielfalt und Respekt", "Bei SCHLAU NRW habe ich ehrenamtlich Schulworkshops zu Vielfalt und Antidiskriminierung begleitet."],
        ],
        selected: "Ausgewählte Softwareprojekte",
        allProjects: "Alle Projekte",
        writing: "Fachtexte",
        allWriting: "Alle Texte",
        profile: "Mehr zu meinem Werdegang",
        contactTitle: "Zusammenarbeit anfragen",
        contactCopy: "Für Lehrprojekte, Gastvorträge, Forschungsfragen und technische Zusammenarbeit erreichen Sie mich direkt.",
        businessTitle: "Training und Beratung für Unternehmen",
        businessCopy: "Workshops, Firmentrainings und Beratung biete ich über mein Unternehmen Luminovia Training & Consulting an.",
        businessLink: "Zu Luminovia",
    },
    en: {
        role: "IT lecturer · Business information systems",
        intro: "I teach IT to adults and teams, build software for recurring tasks and research how AI is used at work.",
        location: "Brisbane, Australia",
        languages: "English & German",
        portraitAlt: "Portrait of Carina Sophie Schoppe",
        contact: "Get in touch",
        business: "Company training & consulting",
        proof: "Experience and qualifications",
        milestones: [
            ["10,000+", "Documented teaching hours"],
            ["4.7 out of 5", "Average learner rating"],
            ["MSc and MBA", "Business information systems and management"],
        ],
        credentials: "All qualifications",
        focus: "What I do",
        focusIntro: "I work with education providers and organisations. These are the areas I bring to training, projects and research.",
        capabilities: [
            ["IT training", "I design and teach courses for adults, with practical exercises in Python, SQL, Linux, networking and IT security.", "Training at Luminovia", PROFILE.luminovia],
            ["Software & automation", "I build tools for recurring tasks such as literature reviews and email. For OpenXLR, I work alongside other developers on Linux software.", "View software projects", "/projects"],
            ["AI & research", "I study how people work with generative AI, how organisations govern its use and how it changes security risks.", "View research", "/skills#publications"],
        ],
        valuesTitle: "What matters to me",
        values: [
            ["Learning by doing", "A networking exercise might start with tracing a connection fault. I want learners to be able to explain why their solution works."],
            ["Traceable decisions", "My literature review tool PRISMA records which studies were screened out and why. That makes those decisions possible to review later."],
            ["Diversity and respect", "As a volunteer with SCHLAU NRW, I helped run school workshops on diversity and anti-discrimination."],
        ],
        selected: "Selected software projects",
        allProjects: "All projects",
        writing: "Articles",
        allWriting: "All articles",
        profile: "More about my background",
        contactTitle: "Work with me",
        contactCopy: "Contact me directly about teaching projects, guest lectures, research or technical collaboration.",
        businessTitle: "Training and consulting for organisations",
        businessCopy: "I offer workshops, company training and consulting through my business, Luminovia Training & Consulting.",
        businessLink: "Visit Luminovia",
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
                        <Link className="site-button site-button-primary" to="/contact">{c.contact}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <a className="site-button home-business-button" href={PROFILE.luminovia}>{c.business}<ArrowUpRight size={17} aria-hidden="true"/></a>
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

            <section className="home-proof" aria-label={c.proof}>
                <dl>
                    {c.milestones.map(([value, label]) => <div key={value}><dt>{value}</dt><dd>{label}</dd></div>)}
                </dl>
                <Link className="site-text-link" to="/credentials">{c.credentials}<ArrowRight size={16} aria-hidden="true"/></Link>
            </section>

            <section className="home-section" aria-labelledby="focus-title">
                <div className="home-section-heading">
                    <div>
                        <h2 id="focus-title">{c.focus}</h2>
                        <p>{c.focusIntro}</p>
                    </div>
                </div>
                <div className="home-capabilities">
                    {c.capabilities.map(([title, description, action, href], index) => {
                        const Icon = capabilityIcons[index];
                        const content = <>{action}<ArrowUpRight size={15} aria-hidden="true"/></>;
                        return (
                            <article key={title} className={`home-capability tone-${capabilityTones[index]}`}>
                                <span className="home-capability-icon"><Icon size={20} aria-hidden="true"/></span>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                {href === PROFILE.luminovia
                                    ? <a className="site-text-link" href={href}>{content}</a>
                                    : <Link className="site-text-link" to={href}>{content}</Link>}
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="home-section home-values" aria-labelledby="values-title">
                <div className="home-section-heading">
                    <h2 id="values-title">{c.valuesTitle}</h2>
                    <Link className="site-text-link" to="/about">{c.profile}<ArrowRight size={16} aria-hidden="true"/></Link>
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
                    <Link className="site-button site-button-primary" to="/contact">{c.contact}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
                <div className="home-contact-business">
                    <h3>{c.businessTitle}</h3>
                    <p>{c.businessCopy}</p>
                    <a className="site-text-link" href={PROFILE.luminovia}>{c.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
                </div>
            </section>
        </main>
    );
}
