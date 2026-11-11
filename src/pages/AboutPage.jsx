import {ArrowRight, ArrowUpRight, MapPin} from "lucide-react";
import {Link} from "react-router-dom";
import Photo from "../components/Photo.jsx";
import {aboutPortraitSizes} from "../data/portrait.js";
import {IMAGES, PROFILE} from "../data/profile.js";
import {selectedWork} from "../data/selectedWork.js";
import {useLanguage} from "../i18n.jsx";
import "./about.css";

const prismaProject = selectedWork.find(({id}) => id === "prisma");

const copy = {
    de: {
        kicker: "Über mich",
        intro: "Ich verbinde Lehre, Beratung und KI-Forschung. Dabei interessiert mich, wie Menschen Technologie verstehen und sinnvoll bei der Arbeit einsetzen. Aus Forschung werden so konkrete Lernaufgaben und Orientierung für die Praxis.",
        location: "Brisbane, Australien",
        portrait: "Porträt von Carina Sophie Schoppe",
        career: "Zum Werdegang",
        linkedin: "Mein LinkedIn-Profil",
        featureLabel: "Forschungssoftware · Eigenentwicklung",
        featureWhy: "Warum ich PRISMA entwickelt habe",
        featureIntro: "Bei einem Literaturreview möchte ich später erklären können, warum ich eine Studie aufgenommen oder ausgeschlossen habe. PRISMA hilft mir, diese Entscheidungen festzuhalten.",
        featureDetails: "Zum Projekt",
        featureSource: "Quellcode auf GitHub",
        approachTitle: "Wie Forschung in meine Lehre einfließt",
        researchTitle: "Generative KI im Arbeitsalltag",
        research: "In meiner Masterarbeit habe ich untersucht, wie Beschäftigte generative KI in der Kundenkommunikation, Softwareentwicklung und Datenanalyse einsetzen. Meine MBA-Arbeit beschreibt, wie Unternehmen Zuständigkeiten klären und Risiken überwachen können.",
        teachingTitle: "Sicherheitsentscheidungen begründen",
        teaching: "Meine Bachelorarbeit untersucht, wie KI Phishing-Nachrichten glaubwürdiger machen kann. Im Unterricht prüfen Teilnehmende verdächtige E-Mails oder grenzen einen Netzwerkfehler ein und begründen, wie sie vorgegangen sind.",
        publications: "Meine wissenschaftlichen Arbeiten",
        projects: "Meine Softwareprojekte",
        pathLabel: "Mein Werdegang",
        pathTitle: "Von Paderborn nach Brisbane",
        pathIntro: "Ich bin in Bodenwerder im Weserbergland aufgewachsen und habe während meines Studiums in Paderborn angefangen zu unterrichten. Heute lebe ich in Brisbane und verbinde Lehre, Beratung und KI-Forschung. Ich arbeite auf Deutsch und Englisch.",
        fullPath: "Mein vollständiger Werdegang",
        nextLabel: "Mehr über meine Arbeit",
        next: [
            ["Kompetenzen", "Meine fachlichen Schwerpunkte", "/skills"],
            ["Qualifikationen", "Abschlüsse und berufliche Nachweise", "/credentials"],
            ["Texte", "Was ich über KI und Bildung schreibe", "/blog"],
            ["Referenzen", "Wo ich unterrichtet und geforscht habe", "/#referenzen"],
        ],
        business: "Für Firmentrainings, Workshops und Beratung habe ich Luminovia gegründet.",
        businessLink: "luminovia.org besuchen",
    },
    en: {
        kicker: "About me",
        intro: "I bring together education, consulting and AI research. I’m interested in how people understand technology and put it to work. My research informs practical learning activities and helps people make informed decisions.",
        location: "Brisbane, Australia",
        portrait: "Portrait of Carina Sophie Schoppe",
        career: "See my career timeline",
        linkedin: "My LinkedIn profile",
        featureLabel: "Research software I built",
        featureWhy: "Why I built PRISMA",
        featureIntro: "When I return to a literature review, I want to know why I included or excluded a study. PRISMA helps me keep a record of those decisions.",
        featureDetails: "Project details",
        featureSource: "Source code on GitHub",
        approachTitle: "How my research informs my teaching",
        researchTitle: "Generative AI at work",
        research: "My master’s thesis examined how people use generative AI in customer communication, software development and data analysis. My MBA thesis describes how companies can assign responsibility and monitor risks.",
        teachingTitle: "Explaining a security decision",
        teaching: "My bachelor’s thesis examined how AI can make phishing emails more convincing. In class, learners assess a suspicious email or trace a network fault and explain how they reached their conclusion.",
        publications: "Read my academic work",
        projects: "My software projects",
        pathLabel: "My background",
        pathTitle: "From Paderborn to Brisbane",
        pathIntro: "I grew up in Bodenwerder in Germany’s Weserbergland region and started teaching while studying in Paderborn. I now live in Brisbane and combine education, consulting and AI research, working in English and German.",
        fullPath: "See my full timeline",
        nextLabel: "More about my work",
        next: [
            ["Skills", "What I specialise in", "/skills"],
            ["Credentials", "My degrees and professional qualifications", "/credentials"],
            ["Writing", "What I write about AI and education", "/blog"],
            ["References", "Where I’ve taught and worked in research", "/#referenzen"],
        ],
        business: "I founded Luminovia for company training, workshops and consulting.",
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
                    <p className="about-lede">{c.intro}</p>
                    <div className="about-hero-actions">
                        <Link className="site-button site-button-primary" to="/my-way">{c.career}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <a className="site-text-link" href={PROFILE.linkedin}>{c.linkedin}<ArrowUpRight size={17} aria-hidden="true"/></a>
                    </div>
                </div>

                <figure className="about-hero-figure">
                    <Photo
                        src={IMAGES.outdoor}
                        alt={c.portrait}
                        className="about-photo about-portrait"
                        width={1120}
                        height={1680}
                        fetchPriority="high"
                        sizes={aboutPortraitSizes}
                    />
                    <figcaption>
                        <MapPin size={16} aria-hidden="true"/>{c.location}
                    </figcaption>
                </figure>
            </section>

            <section className="about-method" aria-labelledby="about-method-title">
                <h2 id="about-method-title">{c.approachTitle}</h2>
                <div className="about-method-grid">
                    <div>
                        <h3>{c.researchTitle}</h3>
                        <p>{c.research}</p>
                    </div>
                    <div>
                        <h3>{c.teachingTitle}</h3>
                        <p>{c.teaching}</p>
                    </div>
                </div>
                <div className="about-hero-actions about-method-links">
                    <Link className="site-text-link" to="/skills#publications">{c.publications}<ArrowRight size={17} aria-hidden="true"/></Link>
                    <Link className="site-text-link" to="/projects">{c.projects}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
            </section>

            <section className="about-feature" id="forschungssoftware" aria-labelledby="about-feature-title" tabIndex={-1}>
                <div>
                    <p className="about-kicker">{c.featureLabel}</p>
                    <h2 id="about-feature-title">PRISMA Literature Review Pipeline</h2>
                    <div className="about-hero-actions">
                        <Link className="site-text-link" to={`/projects#${prismaProject.id}`}>{c.featureDetails}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <a className="site-text-link" href={prismaProject.href}>{c.featureSource}<ArrowUpRight size={17} aria-hidden="true"/></a>
                    </div>
                </div>
                <div>
                    <h3>{c.featureWhy}</h3>
                    <p className="about-feature-intro">{c.featureIntro}</p>
                </div>
            </section>

            <section className="about-path" id="about-path" aria-labelledby="about-path-title" tabIndex={-1}>
                <div className="about-path-heading">
                    <p className="about-kicker">{c.pathLabel}</p>
                    <h2 id="about-path-title">{c.pathTitle}</h2>
                </div>
                <div>
                    <p className="about-path-intro">{c.pathIntro}</p>
                    <Link className="site-text-link about-path-link" to="/my-way">{c.fullPath}<ArrowRight size={18} aria-hidden="true"/></Link>
                </div>
            </section>

            <section className="about-business" id="about-business" tabIndex={-1} aria-labelledby="about-business-title">
                <img className="about-business-logo" src={IMAGES.luminoviaLogoFull} alt="" width="208" height="208" loading="lazy"/>
                <div>
                    <h2 id="about-business-title">Luminovia Training &amp; Consulting</h2>
                    <p>{c.business}</p>
                    <a className="site-text-link" href={PROFILE.luminovia}>{c.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
                </div>
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
