import {useSiteContent} from "../data/localizedContent.js";
import {publications} from "../data/publications.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";

function TopicLink({item, className}) {
    return <span className={className}>{item}</span>;
}

function PublicationCard({downloadLabel, language, publication}) {
    return (
        <a href={publication.href} download className="soft-link-card group flex min-h-[300px] flex-col p-5 focus:outline-none focus:ring-2 focus:ring-sky-200/80">
            <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                    <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{publication.type[language]}</div>
                    <div className="mt-2 text-xs font-bold text-zinc-500">{publication.year}</div>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs font-black text-sky-100 transition group-hover:border-sky-100/40">PDF</span>
            </div>
            <h3 className="text-2xl font-black text-white">{publication.title[language]}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{publication.description[language]}</p>
            <div className="mt-auto pt-6 text-sm font-black text-sky-200 transition group-hover:text-white">{downloadLabel}</div>
        </a>
    );
}

export default function SkillsPage() {
    const {language} = useLanguage();
    const {skillGroups, trainingTopics} = useSiteContent();
    const copy = language === "de"
        ? {
            badge: "Kompetenzen & Themen",
            title: "Eine persönliche Kompetenzkarte für AI, Software, Cybersecurity und digitale Bildung.",
            formats: "Luminovia ansehen",
            credentials: "Nachweise ansehen",
            clusters: "Skill-Cluster",
            clustersTitle: "Themenfelder aus Portfolio, Lehre, Research und Projektarbeit.",
            consultingTitle: "Capability Map",
            consultingCopy: "Diese Seite beschreibt persönliche fachliche Schwerpunkte. Konkrete Firmenangebote, Projektbegleitung und Consulting laufen bewusst über Luminovia.",
            consultingAreas: [
                ["AI & Automatisierung", "Generative AI, Prompt-Workflows, AI Governance, Literaturreviews, Research Tooling und verantwortungsvolle Nutzung."],
                ["Softwareentwicklung", "Programmierung, APIs, Automatisierung, Datenflüsse, technische Projektstruktur und Umsetzungslogik."],
                ["Cybersecurity", "Security Awareness, Web Security, SOC-Grundlagen, Pentest-Lernen und defensive Perspektiven."],
                ["Digitale Bildung / Instructional Design", "Didaktik, Lernarchitektur, erwachsenengerechte Erklärungen, Materialien und Transferdenken."],
                ["Wirtschaftsinformatik", "Prozesse, Systeme, IT-Management, Digital Business, HCI und organisatorische Technologieentscheidungen."],
                ["Projektmanagement / Agile", "Scrum, Projektstruktur, Stakeholder-Kommunikation, AI-gestützte Projektarbeit und Entscheidungsvorbereitung."],
                ["Daten / Analytics", "SQL, Datenmodelle, Research-Daten, Auswertung, Datenbereinigung und datenbasierte Argumentation."],
            ],
            publications: "Publikationen",
            publicationsTitle: "Publikationen als fachlicher Kompetenznachweis.",
            publicationsCopy: "Diese akademischen Arbeiten stützen meine Kompetenz rund um generative AI, AI Governance, Human-Machine Interaction, Cybersecurity Awareness und verantwortungsvolle digitale Transformation.",
            downloadPublication: "PDF herunterladen",
            jumpLabel: "Auf dieser Seite",
            jumpItems: [["#consulting-skills", "Arbeitsfelder"], ["#publications", "Publikationen"], ["#skill-map", "Skills"], ["#clusters", "Cluster"]],
        }
        : {
            badge: "Skills & topics",
            title: "A personal capability map for AI, software, cybersecurity and digital education.",
            formats: "View Luminovia",
            credentials: "View credentials",
            clusters: "Skill clusters",
            clustersTitle: "Fields across portfolio, teaching, research and project work.",
            consultingTitle: "Capability map",
            consultingCopy: "This page describes personal subject strengths. Concrete company offers, project support and consulting intentionally live at Luminovia.",
            consultingAreas: [
                ["AI & automation", "Generative AI, prompt workflows, AI governance, literature reviews, research tooling and responsible use."],
                ["Software development", "Programming, APIs, automation, data flows, technical project structure and implementation logic."],
                ["Cybersecurity", "Security awareness, web security, SOC foundations, pentest learning and defensive perspectives."],
                ["Digital education / instructional design", "Didactics, learning architecture, adult-friendly explanations, materials and transfer thinking."],
                ["Business information systems", "Processes, systems, IT management, digital business, HCI and organisational technology decisions."],
                ["Project management / agile", "Scrum, project structure, stakeholder communication, AI-supported project work and decision preparation."],
                ["Data / analytics", "SQL, data models, research data, analysis, data cleanup and evidence-based argumentation."],
            ],
            publications: "Publications",
            publicationsTitle: "Publications as academic proof of competence.",
            publicationsCopy: "These academic papers support my expertise around generative AI, AI governance, human-machine interaction, cybersecurity awareness and responsible digital transformation.",
            downloadPublication: "Download PDF",
            jumpLabel: "On this page",
            jumpItems: [["#consulting-skills", "Fields"], ["#publications", "Publications"], ["#skill-map", "Skills"], ["#clusters", "Clusters"]],
        };
    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="orange">{copy.badge}</Badge>
                <div className="mt-6">
                    <h1 className="max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                        {copy.title}
                    </h1>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Button href="https://luminovia.org">{copy.formats}</Button>
                    <Button to="/credentials" variant="secondary">{copy.credentials}</Button>
                </div>
                <SectionJumpNav label={copy.jumpLabel} items={copy.jumpItems} className="mt-8"/>

                <section id="consulting-skills" className="mt-14 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <Badge tone="violet">{copy.consultingTitle}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.consultingTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.consultingCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {copy.consultingAreas.map(([title, description]) => (
                            <Card key={title}>
                                <h3 className="text-2xl font-black text-white">{title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="publications" className="mt-16 scroll-mt-36">
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <Badge tone="emerald">{copy.publications}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.publicationsTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.publicationsCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 lg:grid-cols-3">
                        {publications.map((publication) => (
                            <PublicationCard key={publication.key} downloadLabel={copy.downloadPublication} language={language} publication={publication}/>
                        ))}
                    </div>
                </section>

                <section id="skill-map" className="mt-14 scroll-mt-36">
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {skillGroups.map((group) => (
                            <Card key={group.group}>
                                <h2 className="text-2xl font-black text-white">{group.group}</h2>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <TopicLink key={item} item={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-sky-200/40 hover:bg-sky-200/10"/>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="clusters" className="mt-16 scroll-mt-36">
                    <div className="mb-7">
                        <Badge tone="emerald">{copy.clusters}</Badge>
                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.clustersTitle}</h2>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-4">
                        {trainingTopics.map((topic) => (
                            <Card key={topic.group} className="bg-gradient-to-br from-sky-300/10 via-white/[0.04] to-violet-300/10">
                                <h3 className="text-2xl font-black text-white">{topic.group}</h3>
                                <div className="mt-5 grid gap-2">
                                    {topic.items.map((item) => (
                                        <TopicLink key={item} item={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-200 transition hover:border-sky-200/40 hover:bg-sky-200/10"/>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
