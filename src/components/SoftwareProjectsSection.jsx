import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "./Badge.jsx";
import Button from "./Button.jsx";

export default function SoftwareProjectsSection({compact = false}) {
    const {t, language} = useLanguage();
    const {softwareProjects} = useSiteContent();
    const projects = compact ? softwareProjects.slice(0, 4) : softwareProjects;
    const copy = language === "de"
        ? {
            badge: "Projekte",
            title: "Öffentliche Software- und Automationsprojekte.",
            text: "Ausgewählte Arbeiten aus Automatisierung, AI-gestützter Forschung, Datenbereinigung, Kotlin-Entwicklung und mobilen Anwendungen.",
            viewAll: "Projektportfolio ansehen",
        }
        : {
            badge: "Projects",
            title: "Public software and automation projects.",
            text: "Selected work across automation, AI-supported research, data cleanup, Kotlin development and mobile applications.",
            viewAll: "View project portfolio",
        };

    return (
        <section className="soft-section px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <Badge tone="cyan">{copy.badge}</Badge>
                        <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            {copy.title}
                        </h2>
                    </div>
                    <div>
                        <p className="text-lg leading-8 text-slate-300">
                            {copy.text}
                        </p>
                        {compact && (
                            <div className="mt-5">
                                <Button to="/projects" variant="secondary">{copy.viewAll}</Button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="soft-link-card group flex min-h-[300px] flex-col p-5"
                        >
                            <div className="mb-5 flex items-start justify-between gap-3">
                                <div>
                                    <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{project.type}</div>
                                    <div className="mt-2 text-xs font-bold text-zinc-500">{project.status}</div>
                                </div>
                                <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs font-black text-sky-100 transition group-hover:border-sky-100/40">
                  {t.github}
                </span>
                            </div>
                            <h3 className="text-2xl font-black text-white">{project.name}</h3>
                            <p className="mt-4 text-sm leading-7 text-zinc-300">{project.description}</p>
                            <div className="mt-auto flex flex-wrap gap-2 pt-6">
                                {project.stack.map((item) => (
                                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-bold text-zinc-200">
                    {item}
                  </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
