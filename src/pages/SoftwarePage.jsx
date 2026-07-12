import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import {publications} from "../data/publications.js";
import {useLanguage} from "../i18n.jsx";

export default function SoftwarePage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Projektportfolio",
            title: "Softwareprojekte, Automation und technische Experimente.",
            intro: "Dieses persönliche Portfolio zeigt ausgewählte Projektarbeit: Automatisierung mit Python, AI-gestützte Research-Workflows, Datenbereinigung, Kotlin-Plugins, Mobile Apps, Game-Systeme und digitale Arbeitsabläufe. Im Mittelpunkt stehen nachvollziehbare, öffentlich dokumentierte Umsetzungen.",
            github: "GitHub-Profil öffnen",
            skills: "Kompetenzen ansehen",
            publicationsTitle: "Publikationen",
            publicationsCopy: "Akademische Arbeiten zu generativer AI, AI Governance, Human-Machine Interaction und Cybersecurity als fachlicher Kontext hinter Research, Lehre und Portfolio.",
            download: "PDF herunterladen",
        }
        : {
            badge: "Project portfolio",
            title: "Software projects, automation and technical experiments.",
            intro: "This personal portfolio highlights selected project work: Python automation, AI-supported research workflows, data cleanup, Kotlin plugins, mobile apps, game systems and digital workflows. The focus is traceable, publicly documented implementation work.",
            github: "Open GitHub profile",
            skills: "View skills",
            publicationsTitle: "Publications",
            publicationsCopy: "Academic work on generative AI, AI governance, human-machine interaction and cybersecurity as subject context behind research, teaching and portfolio work.",
            download: "Download PDF",
        };
    return (
        <main className="pb-24 pt-32">
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Badge tone="blue">{copy.badge}</Badge>
                    <div className="mt-6">
                        <h1 className="max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                            {copy.title}
                        </h1>
                        <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">
                            {copy.intro}
                        </p>
                    </div>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Button href="https://github.com/CarinaSchoppe">{copy.github}</Button>
                        <Button to="/skills" variant="secondary">{copy.skills}</Button>
                    </div>
                </div>
            </section>
            <SoftwareProjectsSection/>
            <section className="soft-section px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                        <div>
                            <Badge tone="emerald">{copy.publicationsTitle}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.publicationsTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.publicationsCopy}</p>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-3">
                        {publications.map((publication) => (
                            <a key={publication.key} href={publication.href} download className="soft-link-card group flex min-h-[300px] flex-col p-5 focus:outline-none focus:ring-2 focus:ring-sky-200/80">
                                <div className="mb-5 flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{publication.type[language]}</div>
                                        <div className="mt-2 text-xs font-bold text-zinc-500">{publication.year}</div>
                                    </div>
                                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-sky-100">PDF</span>
                                </div>
                                <h3 className="text-2xl font-black text-white">{publication.title[language]}</h3>
                                <p className="mt-4 text-sm leading-7 text-zinc-300">{publication.description[language]}</p>
                                <div className="mt-auto pt-6 text-sm font-black text-sky-200 transition group-hover:text-white">{copy.download}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
