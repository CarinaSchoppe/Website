import {ArrowRight, ArrowUpRight, BookOpen, Code2, FlaskConical, Globe2, Mail, MapPin, SlidersHorizontal} from "lucide-react";
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
const projectIcons = {mail: Mail, openxlr: SlidersHorizontal};

const copy = {
    de: {
        role: "IT-Dozentin · Softwareentwicklerin · Wirtschaftsinformatikerin",
        intro: "Ich unterrichte IT und Wirtschaft, entwickle Forschungssoftware und untersuche, wie Menschen generative KI bei der Arbeit einsetzen.",
        location: "Brisbane, Australien",
        languages: "Deutsch & Englisch",
        portraitAlt: "Porträt von Carina Sophie Schoppe",
        about: "Mehr über mich",
        work: "Meine Arbeit ansehen",
        contact: "Persönlicher Kontakt",
        proof: "Erfahrung und Qualifikationen",
        milestones: [
            ["10.000+", "Unterrichtsstunden"],
            ["4,7 von 5", "Ø Teilnehmerbewertung"],
            ["M.Sc. & MBA", "Zwei Masterabschlüsse"],
        ],
        credentials: "Alle Qualifikationen",
        focus: "Lehre, Software und Forschung",
        capabilities: [
            ["Lehrthemen", "Von Netzwerken und KI bis zu Buchhaltung und Datenschutz.", "/skills#unterricht"],
            ["Softwareentwicklung", "Eigene Werkzeuge und Beiträge zu Open Source.", "/projects"],
            ["Publikationen", "Forschung zu generativer KI, Arbeitsalltag und IT-Sicherheit.", "/skills#publications"],
        ],
        selected: "Ausgewählte Projekte",
        allProjects: "Alle Projekte",
        projectAction: "Projekt ansehen",
        projectSummaries: {
            prisma: "Quelloffene Software für systematische Literaturreviews. Sie verbindet Literatursuche, Screening und dokumentierte Auswahlentscheidungen.",
            mail: "Personalisierte E-Mails aus Listen und Vorlagen vorbereiten.",
            openxlr: "Meine Beiträge zur Audiosteuerung unter Linux.",
        },
        writing: "Fachtexte",
        allWriting: "Alle Texte",
        contactTitle: "Lass uns austauschen",
        contactCopy: "Schreib mir zu Forschung, Software oder Open Source.",
        linkedin: "Mein LinkedIn-Profil",
        businessLabel: "Mein Unternehmen",
        businessCopy: "Trainings, Beratung und Buchungen laufen über Luminovia.",
        businessLink: "Luminovia kontaktieren",
    },
    en: {
        role: "IT lecturer · Software developer · Business information systems",
        intro: "I teach IT and business, build research software and study how people use generative AI at work.",
        location: "Brisbane, Australia",
        languages: "English & German",
        portraitAlt: "Portrait of Carina Sophie Schoppe",
        about: "More about me",
        work: "Explore my work",
        contact: "Personal contact",
        proof: "Experience and qualifications",
        milestones: [
            ["10,000+", "Teaching hours"],
            ["4.7 out of 5", "Average learner rating"],
            ["MSc & MBA", "Two master’s degrees"],
        ],
        credentials: "All qualifications",
        focus: "Teaching, software and research",
        capabilities: [
            ["Teaching topics", "From networking and AI to bookkeeping and data protection.", "/skills#unterricht"],
            ["Software development", "Tools I build and contributions to open source.", "/projects"],
            ["Publications", "Research on generative AI, work and cybersecurity.", "/skills#publications"],
        ],
        selected: "Selected projects",
        allProjects: "All projects",
        projectAction: "View project",
        projectSummaries: {
            prisma: "Open-source software for systematic literature reviews. It brings together literature searches, screening and documented decisions.",
            mail: "Prepare personalised emails from lists and templates.",
            openxlr: "My contributions to audio controls on Linux.",
        },
        writing: "Articles",
        allWriting: "All articles",
        contactTitle: "Get in touch",
        contactCopy: "I’m happy to talk about research, software and open source.",
        linkedin: "My LinkedIn profile",
        businessLabel: "My business",
        businessCopy: "Luminovia handles training, consulting and bookings.",
        businessLink: "Contact Luminovia",
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
                        <Link className="site-button site-button-primary" to="#arbeit">{c.work}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <Link className="site-text-link" to="/about">{c.about}<ArrowRight size={17} aria-hidden="true"/></Link>
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

            <section id="arbeit" className="home-section" aria-labelledby="selected-title" tabIndex={-1}>
                <div className="home-section-heading">
                    <h2 id="selected-title">{c.selected}</h2>
                    <Link className="site-text-link" to="/projects">{c.allProjects}<ArrowRight size={16} aria-hidden="true"/></Link>
                </div>
                <div className="home-projects">
                    {selectedWork.map((project) => {
                        const Icon = projectIcons[project.id];
                        const featured = project.id === "prisma";
                        return (
                            <article key={project.id} className={`home-project tone-${project.tone}`} data-featured={featured || undefined}>
                                <Link to={`/projects#${project.id}`} className="home-project-link">
                                    {Icon && <span className="home-card-icon"><Icon size={19} aria-hidden="true"/></span>}
                                    <div className="home-project-copy">
                                        <p className="site-kicker">{project.type[language]}</p>
                                        <h3>{project.title}</h3>
                                        <p>{c.projectSummaries[project.id]}</p>
                                        {featured && <span className="home-project-action">{c.projectAction}<ArrowRight size={16} aria-hidden="true"/></span>}
                                    </div>
                                    {featured ? (
                                        <div className="home-project-media">
                                            <img src={project.image} alt={project.imageAlt[language]} width="800" height="500" loading="lazy" decoding="async"/>
                                        </div>
                                    ) : <ArrowRight className="home-card-arrow" size={18} aria-hidden="true"/>}
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="home-section" aria-labelledby="focus-title">
                <div className="home-section-heading"><h2 id="focus-title">{c.focus}</h2></div>
                <div className="home-capabilities">
                    {c.capabilities.map(([title, description, href], index) => {
                        const Icon = capabilityIcons[index];
                        return (
                            <Link key={href} className={`home-capability tone-${capabilityTones[index]}`} to={href}>
                                <span className="home-card-icon"><Icon size={19} aria-hidden="true"/></span>
                                <div><h3>{title}</h3><p>{description}</p></div>
                                <ArrowRight className="home-card-arrow" size={18} aria-hidden="true"/>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <ReferencesSection/>

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
                        <Link className="site-button site-button-primary" to="/contact">{c.contact}<ArrowRight size={17} aria-hidden="true"/></Link>
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
                    <a className="site-text-link" href={PROFILE.luminoviaContact}>{c.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
                </div>
            </section>
        </main>
    );
}
