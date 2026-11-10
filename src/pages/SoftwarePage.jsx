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
        eyebrow: "Meine Projekte",
        title: "Software, die ich baue.",
        intro: "Ich schreibe Werkzeuge für wiederkehrende Aufgaben, etwa für Literaturrecherchen und E-Mails. Bei OpenXLR arbeite ich mit anderen an Software für Audiogeräte unter Linux.",
        jump: "Auswahl ansehen",
        github: "Mein GitHub-Profil",
        featured: "Drei Projekte im Fokus",
        source: "Quellcode auf GitHub",
        contribution: "Mein Beitrag zum Mixer-Layout",
        publications: "Meine Forschungsarbeiten",
        publicationsIntro: "Drei Arbeiten über generative KI in Unternehmen, ihre Steuerung und ihren Einsatz für personalisierte Phishing-Mails.",
        download: "PDF herunterladen",
        skills: "Mehr über meine Kompetenzen",
    },
    en: {
        eyebrow: "My projects",
        title: "Software I build.",
        intro: "I write tools for recurring tasks, including literature reviews and email. With OpenXLR, I work alongside other developers on software for audio interfaces on Linux.",
        jump: "Explore featured work",
        github: "My GitHub profile",
        featured: "Three featured projects",
        source: "Source code on GitHub",
        contribution: "My contribution to the mixer layout",
        publications: "My research",
        publicationsIntro: "Three papers on generative AI at work, its governance and its use in personalised phishing emails.",
        download: "Download PDF",
        skills: "More about my skills",
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
                        <Link className="projects-solid-link" to="#featured-projects">{copy.jump}<ArrowDown aria-hidden="true" size={17}/></Link>
                        <a className="projects-text-link" href={PROFILE.github}>{copy.github}<ArrowUpRight aria-hidden="true" size={17}/></a>
                    </div>
                </div>
                <div className="projects-margin-art" aria-hidden="true">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>

            <section className="projects-wrap projects-block" aria-labelledby="featured-projects">
                <h2 id="featured-projects">{copy.featured}</h2>
                <div className="projects-feature-grid">
                    {selectedWork.map((project) => (
                        <article key={project.id} id={project.id} className="projects-feature" data-project-tone={project.tone}>
                            <figure>
                                <img src={project.image} alt={project.imageAlt[language]} width="800" height="500" loading="lazy" decoding="async"/>
                                <figcaption>
                                    {project.imageSource
                                        ? <a href={project.imageSource}>{project.imageCaption[language]} <ArrowUpRight aria-hidden="true" size={13}/></a>
                                        : project.imageCaption[language]}
                                </figcaption>
                            </figure>
                            <div className="projects-feature-copy">
                                <p className="projects-eyebrow">{project.type[language]}</p>
                                <h3>{project.title}</h3>
                                <p>{project.description[language]}</p>
                                <ul className="projects-stack" aria-label={language === "de" ? "Technologien" : "Technologies"}>
                                    {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                                </ul>
                                <div className="projects-feature-links">
                                    <a className="projects-text-link" href={project.href} aria-label={`${project.title} · ${copy.source}`}>{copy.source}<ArrowUpRight aria-hidden="true" size={15}/></a>
                                    {project.contribution && <a className="projects-text-link" href={project.contribution}>{copy.contribution}<ArrowUpRight aria-hidden="true" size={15}/></a>}
                                </div>
                            </div>
                        </article>
                    ))}
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
