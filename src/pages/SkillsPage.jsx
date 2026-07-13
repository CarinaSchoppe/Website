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
            title: "Fachliche Schwerpunkte in AI, Software, Cybersecurity und digitaler Bildung.",
            formats: "Luminovia ansehen",
            credentials: "Nachweise ansehen",
            clusters: "Kompetenzfelder",
            clustersTitle: "Themen aus Projekten, Lehre, Forschung und beruflicher Praxis.",
            consultingTitle: "Fachliche Schwerpunkte",
            consultingCopy: "Die Übersicht zeigt, wie meine technischen, wissenschaftlichen und didaktischen Kompetenzen zusammenwirken. Angebote für Unternehmen werden separat auf Luminovia dargestellt.",
            consultingAreas: [
                ["AI & Automatisierung", "Generative AI, Prompt-Workflows, AI Governance, systematische Literaturreviews, Forschungswerkzeuge und verantwortungsvolle Nutzung."],
                ["Softwareentwicklung", "Programmierung, APIs, Automatisierung, Datenflüsse sowie die Struktur und Umsetzung technischer Projekte."],
                ["Cybersecurity", "Security Awareness, Web Security, SOC-Grundlagen, Pentesting und eine konsequent defensive Sicherheitsperspektive."],
                ["Digitale Bildung & Didaktik", "Lernarchitektur, erwachsenengerechte Erklärungen, praxisnahe Materialien, Übungen und Transfer in den Arbeitsalltag."],
                ["Wirtschaftsinformatik", "Prozesse, Informationssysteme, IT-Management, HCI und fundierte Technologieentscheidungen in Organisationen."],
                ["Projektmanagement & Agile", "Scrum, Projektstruktur, Stakeholder-Kommunikation, AI-gestützte Projektarbeit und belastbare Entscheidungsgrundlagen."],
                ["Daten & Analyse", "SQL, Datenmodelle, Forschungsdaten, Datenbereinigung, Auswertung und datenbasierte Argumentation."],
            ],
            publications: "Publikationen",
            publicationsTitle: "Publikationen und wissenschaftliche Arbeiten.",
            publicationsCopy: "Die Arbeiten dokumentieren meine Auseinandersetzung mit generativer AI, AI Governance, Mensch-Maschine-Interaktion, Cybersecurity Awareness und verantwortungsvoller digitaler Transformation.",
            downloadPublication: "PDF herunterladen",
            jumpLabel: "Auf dieser Seite",
            jumpItems: [["#consulting-skills", "Schwerpunkte"], ["#publications", "Publikationen"], ["#skill-map", "Kompetenzen"], ["#clusters", "Themenfelder"]],
        }
        : {
            badge: "Skills & topics",
            title: "Professional strengths across AI, software, cybersecurity and digital education.",
            formats: "View Luminovia",
            credentials: "View credentials",
            clusters: "Skill clusters",
            clustersTitle: "Fields across portfolio, teaching, research and project work.",
            consultingTitle: "Capability map",
            consultingCopy: "This overview shows how my technical, academic and educational capabilities work together. Services for organisations are presented separately on Luminovia.",
            consultingAreas: [
                ["AI & automation", "Generative AI, prompt workflows, AI governance, literature reviews, research tooling and responsible use."],
                ["Software development", "Programming, APIs, automation, data flows, technical project structure and implementation logic."],
                ["Cybersecurity", "Security awareness, web security, SOC foundations, pentest learning and defensive perspectives."],
                ["Digital education / instructional design", "Learning architecture, clear explanations for adult learners, practical materials, exercises and transfer into the workplace."],
                ["Business information systems", "Processes, systems, IT management, digital business, HCI and organisational technology decisions."],
                ["Project management / agile", "Scrum, project structure, stakeholder communication, AI-supported project work and decision preparation."],
                ["Data / analytics", "SQL, data models, research data, analysis, data cleanup and evidence-based argumentation."],
            ],
            publications: "Publications",
            publicationsTitle: "Publications and academic work.",
            publicationsCopy: "These papers document my work on generative AI, AI governance, human-machine interaction, cybersecurity awareness and responsible digital transformation.",
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
