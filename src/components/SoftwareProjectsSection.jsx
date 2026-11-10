import {ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {useSiteContent} from "../data/localizedContent.js";
import {selectedWork} from "../data/selectedWork.js";
import {useLanguage} from "../i18n.jsx";

const featuredRepositories = new Set(selectedWork.map((project) => project.href));

export default function SoftwareProjectsSection({compact = false}) {
    const {language} = useLanguage();
    const {softwareProjects} = useSiteContent();
    const projects = compact
        ? softwareProjects.slice(0, 4)
        : softwareProjects.filter((project) => !featuredRepositories.has(project.href));
    const copy = language === "de"
        ? {
            title: compact ? "Softwareprojekte" : "Weitere Projekte",
            intro: "Ein Notebook für doppelte Dateien, Plugins für Minecraft und frühere Experimente mit Android und Java.",
            viewAll: "Projektportfolio ansehen",
            technologies: "Technologien",
        }
        : {
            title: compact ? "Software projects" : "More projects",
            intro: "A notebook for finding duplicate files, Minecraft plugins and earlier experiments with Android and Java.",
            viewAll: "View all projects",
            technologies: "Technologies",
        };

    return (
        <section className="projects-wrap projects-block" aria-labelledby="project-catalog">
            <h2 id="project-catalog">{copy.title}</h2>
            <p className="projects-section-intro">{copy.intro}</p>
            {compact && <Link className="projects-text-link" to="/projects">{copy.viewAll}<ArrowRight aria-hidden="true" size={17}/></Link>}
            <ul className="projects-catalog">
                {projects.map((project) => (
                    <li key={project.href}>
                        <a href={project.href} className="projects-catalog-link">
                            <div>
                                <p className="projects-eyebrow">{project.type}</p>
                                <h3>{project.name}</h3>
                            </div>
                            <div>
                                <p>{project.description}</p>
                                <ul className="projects-stack" aria-label={copy.technologies}>
                                    {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                                </ul>
                            </div>
                            <ArrowUpRight aria-hidden="true" size={21}/>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
