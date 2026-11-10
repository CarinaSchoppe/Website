import {ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import {PROFILE} from "../data/profile.js";
import {publications} from "../data/publications.js";
import {selectedWork} from "../data/selectedWork.js";
import {useLanguage} from "../i18n.jsx";
import "./projects.css";

const labels = {
    de: {
        eyebrow: "Projektportfolio",
        title: "Softwareprojekte und Open Source",
        intro: "Ich entwickle Werkzeuge für wiederkehrende Aufgaben und arbeite an Open-Source-Software mit. Die Beispiele reichen von systematischer Literaturrecherche bis zur Mikrofoneinrichtung unter Linux.",
        jump: "Projektbeispiele ansehen",
        contact: "Über Open Source austauschen",
        github: "Mein GitHub-Profil",
        overview: "Projekte im Überblick",
        featured: "Ausgewählte Projekte",
        own: "Eigenes Projekt",
        community: "Open-Source-Beitrag",
        technologies: "Technologien",
        source: "Quellcode auf GitHub",
        contribution: "Mein Beitrag zum Mixer-Layout",
        publications: "Meine Forschungsarbeiten",
        publicationsIntro: "Drei Arbeiten über generative KI in Unternehmen, ihre Steuerung und ihren Einsatz für personalisierte Phishing-Mails.",
        download: "PDF herunterladen",
        skills: "Mehr über meine Kompetenzen",
        work: {
            prisma: {
                purpose: "Systematische Literaturrecherche",
                evidence: "Was die Pipeline liefert",
                features: ["Zusammengeführte Treffer aus mehreren Fachdatenbanken", "CSV-Exporte und ein Bericht zu Ein- und Ausschlüssen"],
            },
            mail: {
                purpose: "Personalisierte E-Mails vorbereiten",
                evidence: "Was der Workflow übernimmt",
                features: ["Vorlagen mit Angaben aus Empfängerlisten befüllen", "Bereits protokollierte Empfänger beim Versand überspringen"],
            },
            openxlr: {purpose: "Audiogeräte unter Linux steuern"},
        },
    },
    en: {
        eyebrow: "Project portfolio",
        title: "Software projects and open source",
        intro: "I build tools for recurring tasks and contribute to open source software. The examples range from systematic literature reviews to microphone setup on Linux.",
        jump: "Explore selected projects",
        contact: "Talk about open source",
        github: "My GitHub profile",
        overview: "Projects at a glance",
        featured: "Selected projects",
        own: "Independent project",
        community: "Open source contribution",
        technologies: "Technologies",
        source: "Source code on GitHub",
        contribution: "My contribution to the mixer layout",
        publications: "My research",
        publicationsIntro: "Three papers on generative AI at work, its governance and its use in personalised phishing emails.",
        download: "Download PDF",
        skills: "More about my skills",
        work: {
            prisma: {
                purpose: "Systematic literature reviews",
                evidence: "What the pipeline produces",
                features: ["Merged results from multiple scholarly databases", "CSV exports and a report on included and excluded papers"],
            },
            mail: {
                purpose: "Preparing personalised emails",
                evidence: "What the workflow handles",
                features: ["Fills templates with information from recipient lists", "Skips addresses that have already been logged as sent"],
            },
            openxlr: {purpose: "Controlling audio interfaces on Linux"},
        },
    },
};

export default function SoftwarePage() {
    const {language} = useLanguage();
    const copy = labels[language];

    return (
        <main className="projects-page">
            <div className="projects-wrap projects-intro">
                <div>
                    <p className="projects-eyebrow">{copy.eyebrow}</p>
                    <h1>{copy.title}</h1>
                    <p className="projects-lead">{copy.intro}</p>
                    <div className="projects-intro-actions">
                        <Link className="site-button site-button-primary" to="#featured-projects">{copy.jump}<ArrowDown aria-hidden="true" size={17}/></Link>
                        <Link className="projects-text-link" to="/contact#contact-options">{copy.contact}<ArrowRight aria-hidden="true" size={17}/></Link>
                    </div>
                </div>
                <nav className="projects-overview" aria-label={copy.overview}>
                    <p className="projects-eyebrow">{copy.overview}</p>
                    <ul>
                        {selectedWork.map((project) => (
                            <li key={project.id}>
                                <Link to={`#${project.id}`} data-project-tone={project.tone}>
                                    <span><strong>{project.title}</strong><small>{copy.work[project.id].purpose}</small></span>
                                    <ArrowDown aria-hidden="true" size={16}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <section className="projects-wrap projects-block" aria-labelledby="featured-projects">
                <div className="projects-section-heading">
                    <h2 id="featured-projects" tabIndex={-1}>{copy.featured}</h2>
                    <a className="projects-text-link" href={PROFILE.github}>{copy.github}<ArrowUpRight aria-hidden="true" size={16}/></a>
                </div>
                <div className="projects-feature-list">
                    {selectedWork.map((project) => {
                        const work = copy.work[project.id];

                        return (
                            <article key={project.id} id={project.id} className="projects-feature" data-project-tone={project.tone} tabIndex={-1}>
                                <div className="projects-feature-copy">
                                    <p className="projects-role">{project.contribution ? copy.community : copy.own}</p>
                                    <h3>{project.title}</h3>
                                    <p>{project.description[language]}</p>
                                    <ul className="projects-stack" aria-label={copy.technologies}>
                                        {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                                    </ul>
                                    <div className="projects-feature-links">
                                        <a className="projects-text-link" href={project.href} aria-label={`${project.title} · ${copy.source}`}>{copy.source}<ArrowUpRight aria-hidden="true" size={15}/></a>
                                        {project.contribution && <a className="projects-text-link" href={project.contribution}>{copy.contribution}<ArrowUpRight aria-hidden="true" size={15}/></a>}
                                    </div>
                                </div>
                                {project.imageSource ? (
                                    <figure className="projects-evidence">
                                        <img src={project.image} alt={project.imageAlt[language]} width="800" height="500" loading="lazy" decoding="async"/>
                                        <figcaption><a href={project.imageSource}>{project.imageCaption[language]}<ArrowUpRight aria-hidden="true" size={13}/></a></figcaption>
                                    </figure>
                                ) : (
                                    <div className="projects-evidence projects-deliverables">
                                        <h4>{work.evidence}</h4>
                                        <ul>{work.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>

            <SoftwareProjectsSection/>

            <section className="projects-wrap projects-block projects-publications" aria-labelledby="project-publications">
                <h2 id="project-publications">{copy.publications}</h2>
                <p className="projects-section-intro">{copy.publicationsIntro}</p>
                <div className="projects-publications-grid">
                    {publications.map((publication) => (
                        <article key={publication.key} className="projects-publication">
                            <p className="projects-eyebrow">{publication.type[language]} · {publication.year}</p>
                            <h3>{publication.title[language]}</h3>
                            <p>{publication.description[language]}</p>
                            <a href={publication.href} download className="projects-text-link" aria-label={`${copy.download}: ${publication.title[language]}`}>{copy.download}<ArrowDownToLine aria-hidden="true" size={16}/></a>
                        </article>
                    ))}
                </div>
                <Link className="projects-text-link" to="/skills">{copy.skills}<ArrowRight aria-hidden="true" size={17}/></Link>
            </section>
        </main>
    );
}
