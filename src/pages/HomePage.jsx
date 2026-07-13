import {Link} from "react-router-dom";
import {
    ArrowRight,
    Award,
    BookOpen,
    Code2,
    ExternalLink,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    ShieldCheck,
    Users,
} from "lucide-react";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Photo from "../components/Photo.jsx";

const copy = {
    en: {
        role: "Lecturer in IT, AI & Business Information Systems",
        intro: "I combine an academic foundation with hands-on work in software, AI, cybersecurity and digital education. This portfolio brings together selected projects, qualifications and writing.",
        projects: "View projects",
        credentials: "View credentials",
        luminovia: "Company training & consulting → Luminovia",
        location: "Brisbane, Australia",
        proofLabel: "What I connect",
        proof: [
            ["Teaching", "IT, AI and business information systems", GraduationCap],
            ["Research", "AI, cybersecurity and digital education", BookOpen],
            ["Software practice", "Useful systems for real workflows", Code2],
            ["Leadership", "Clear communication and responsibility", Users],
        ],
        selected: "Selected projects",
        selectedIntro: "Software projects, automation tools and technical experiments built to solve practical problems.",
        allProjects: "All projects",
        projectDetail: "Open project",
        qualifications: "Credentials & qualifications",
        allCredentials: "All credentials",
        writing: "Selected writing",
        writingIntro: "Analysis and practical perspectives on AI, digital education, cybersecurity and business information systems.",
        allWriting: "All writing",
        read: "Read article",
        contactEyebrow: "Contact",
        contactTitle: "Let’s discuss a project, research topic or speaking opportunity.",
        contactCopy: "For collaborations, research, guest lectures and questions about my professional profile, contact me directly.",
        message: "Send a message",
        linkedin: "LinkedIn",
        businessEyebrow: "Company enquiries",
        businessTitle: "Training and consulting are handled by Luminovia.",
        businessLink: "Visit Luminovia",
    },
    de: {
        role: "Dozentin für IT, AI & Wirtschaftsinformatik",
        intro: "Ich verbinde wissenschaftliche Fundierung mit praktischer Arbeit in Software, AI, Cybersecurity und digitaler Bildung. Dieses Portfolio bündelt ausgewählte Projekte, Qualifikationen und Texte.",
        projects: "Projekte ansehen",
        credentials: "Nachweise ansehen",
        luminovia: "Firmentraining & Consulting → Luminovia",
        location: "Brisbane, Australien",
        proofLabel: "Was ich verbinde",
        proof: [
            ["Lehre", "IT, AI und Wirtschaftsinformatik", GraduationCap],
            ["Forschung", "AI, Cybersecurity und digitale Bildung", BookOpen],
            ["Softwarepraxis", "Nützliche Systeme für reale Abläufe", Code2],
            ["Leadership", "Klare Kommunikation und Verantwortung", Users],
        ],
        selected: "Ausgewählte Projekte",
        selectedIntro: "Softwareprojekte, Automatisierungslösungen und technische Experimente für konkrete praktische Aufgaben.",
        allProjects: "Alle Projekte",
        projectDetail: "Projekt öffnen",
        qualifications: "Nachweise & Qualifikationen",
        allCredentials: "Alle Nachweise",
        writing: "Ausgewählte Texte",
        writingIntro: "Analysen und praxisnahe Perspektiven zu AI, digitaler Bildung, Cybersecurity und Wirtschaftsinformatik.",
        allWriting: "Alle Texte",
        read: "Beitrag lesen",
        contactEyebrow: "Kontakt",
        contactTitle: "Lassen Sie uns über ein Projekt, ein Forschungsthema oder einen Vortrag sprechen.",
        contactCopy: "Für Kooperationen, Forschung, Gastvorträge und Fragen zu meinem beruflichen Profil erreichen Sie mich direkt.",
        message: "Nachricht senden",
        linkedin: "LinkedIn",
        businessEyebrow: "Unternehmensanfragen",
        businessTitle: "Firmentrainings und Consulting laufen über Luminovia.",
        businessLink: "Zu Luminovia",
    },
};

const credentialIcons = [GraduationCap, Award, ShieldCheck, BookOpen];

function SectionLink({to, children}) {
    return <Link className="editorial-section-link" to={to}>{children}<ArrowRight size={16}/></Link>;
}

export default function HomePage() {
    const {language} = useLanguage();
    const {softwareProjects, credentials, blogPosts} = useSiteContent();
    const c = copy[language];
    const projects = softwareProjects.slice(0, 3);
    const qualifications = [credentials[5], credentials[1], credentials[0], credentials[3]].filter(Boolean);
    const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    return (
        <main className="editorial-home">
            <section className="editorial-hero" aria-labelledby="home-title">
                <div className="editorial-hero-copy">
                    <p className="editorial-kicker">{language === "de" ? "Lehre. Forschung. Praxis." : "Teaching. Research. Practice."}</p>
                    <h1 id="home-title" aria-label="Carina Sophie Schoppe.">Carina Sophie<br/>Schoppe<span>.</span></h1>
                    <p className="editorial-role">{c.role}</p>
                    <p className="editorial-intro">{c.intro}</p>
                    <div className="editorial-actions">
                        <Link className="editorial-button editorial-button-primary" to="/projects">{c.projects}<ArrowRight size={17}/></Link>
                        <Link className="editorial-button editorial-button-secondary" to="/credentials">{c.credentials}<ArrowRight size={17}/></Link>
                    </div>
                    <a className="editorial-tertiary-link" href={PROFILE.luminovia} target="_blank" rel="noreferrer">{c.luminovia}</a>
                </div>
                <div className="editorial-hero-media">
                    <Photo
                        src={IMAGES.outdoor}
                        alt="Portrait of Carina Sophie Schoppe"
                        className="editorial-portrait"
                        imgClass="object-[50%_18%]"
                        fetchPriority="high"
                        sizes="(min-width: 1200px) 700px, (min-width: 821px) 50vw, 100vw"
                    />
                    <div className="editorial-location"><MapPin size={17}/><span>{c.location}</span></div>
                </div>
            </section>

            <section className="editorial-proof" aria-label={c.proofLabel}>
                <h2 className="sr-only">{c.proofLabel}</h2>
                {c.proof.map(([title, text, Icon]) => (
                    <article key={title}>
                        <Icon size={25}/>
                        <div><h3>{title}</h3><p>{text}</p></div>
                    </article>
                ))}
            </section>

            <section className="editorial-work" aria-labelledby="selected-projects">
                <div className="editorial-section-heading">
                    <div>
                        <p className="editorial-eyebrow">{language === "de" ? "Portfolio" : "Portfolio"}</p>
                        <h2 id="selected-projects">{c.selected}</h2>
                        <p>{c.selectedIntro}</p>
                    </div>
                    <SectionLink to="/projects">{c.allProjects}</SectionLink>
                </div>

                <div className="editorial-work-grid">
                    <div className="editorial-project-list">
                        {projects.map((project, index) => (
                            <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="editorial-project-row">
                                <span className="editorial-project-number">{String(index + 1).padStart(2, "0")}</span>
                                <div className="editorial-project-copy">
                                    <p>{project.type}</p>
                                    <h3>{project.name}</h3>
                                    <span>{project.description}</span>
                                </div>
                                <div className="editorial-project-meta">
                                    <span>{project.stack.slice(0, 3).join(" · ")}</span>
                                    <strong>{c.projectDetail}<ExternalLink size={14}/></strong>
                                </div>
                            </a>
                        ))}
                    </div>

                    <aside className="editorial-credentials" aria-labelledby="qualifications-title">
                        <div className="editorial-aside-heading">
                            <h2 id="qualifications-title">{c.qualifications}</h2>
                        </div>
                        <div className="editorial-credential-list">
                            {qualifications.map((credential, index) => {
                                const Icon = credentialIcons[index];
                                return (
                                    <article key={credential.title}>
                                        <Icon size={23}/>
                                        <div><h3>{credential.title}</h3><p>{credential.meta}</p></div>
                                    </article>
                                );
                            })}
                        </div>
                        <SectionLink to="/credentials">{c.allCredentials}</SectionLink>
                    </aside>
                </div>
            </section>

            <section className="editorial-writing" aria-labelledby="writing-title">
                <div className="editorial-section-heading">
                    <div>
                        <p className="editorial-eyebrow">{language === "de" ? "Fachliche Perspektiven" : "Professional perspectives"}</p>
                        <h2 id="writing-title">{c.writing}</h2>
                        <p>{c.writingIntro}</p>
                    </div>
                    <SectionLink to="/blog">{c.allWriting}</SectionLink>
                </div>
                <div className="editorial-writing-grid">
                    {latestPosts.map((post) => (
                        <Link key={post.slug} to={`/blog/${post.slug}`} className="editorial-article">
                            <p>{post.category} · {post.date}</p>
                            <h3>{post.title}</h3>
                            <span>{post.excerpt}</span>
                            <strong>{c.read}<ArrowRight size={15}/></strong>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="editorial-contact" aria-labelledby="contact-title">
                <div className="editorial-contact-main">
                    <p className="editorial-eyebrow">{c.contactEyebrow}</p>
                    <h2 id="contact-title">{c.contactTitle}</h2>
                    <p>{c.contactCopy}</p>
                    <div>
                        <Link className="editorial-button editorial-button-primary" to="/contact"><Mail size={17}/>{c.message}</Link>
                        <a className="editorial-button editorial-button-secondary" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>{c.linkedin}</a>
                    </div>
                </div>
                <div className="editorial-business-redirect">
                    <img src={IMAGES.luminoviaLogoMark} width="72" height="72" alt="" loading="lazy"/>
                    <div><p>{c.businessEyebrow}</p><h3>{c.businessTitle}</h3></div>
                    <a href={PROFILE.luminovia} target="_blank" rel="noreferrer">{c.businessLink}<ExternalLink size={15}/></a>
                </div>
            </section>
        </main>
    );
}
