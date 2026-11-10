import {ChevronDown} from "lucide-react";
import {useSiteContent} from "../data/localizedContent.js";
import {PROFILE} from "../data/profile.js";
import {publications} from "../data/publications.js";
import {teachingTopics} from "../data/teachingTopics.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import DocumentDownloads from "../components/DocumentDownloads.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";

function TopicLink({item, className}) {
    return <span className={className}>{item}</span>;
}

function PublicationCard({language, publication}) {
    return (
        <article className="soft-section flex flex-col p-5 lg:min-h-[300px]">
            <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                    <div className="text-xs font-black uppercase tracking-[0.14em] text-sky-100">{publication.type[language]}</div>
                    <div className="mt-2 text-xs font-bold text-zinc-500">{publication.year}</div>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs font-black text-sky-100">PDF</span>
            </div>
            <h3 className="text-2xl font-black text-white">{publication.title[language]}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{publication.description[language]}</p>
            <div className="mt-auto pt-4">
                <DocumentDownloads documents={publication.documents} title={publication.title[language]}/>
            </div>
        </article>
    );
}

export default function SkillsPage() {
    const {language} = useLanguage();
    const {skillGroups} = useSiteContent();
    const copy = language === "de"
        ? {
            badge: "Lehre, Software und Forschung",
            title: "Was ich unterrichte und entwickle.",
            intro: "Ich unterrichte IT und Wirtschaft in der Erwachsenenbildung. Im Unterricht wechseln sich fachliche Grundlagen, praktische Übungen und Fallbeispiele ab.",
            references: "Lehrreferenzen ansehen",
            company: "Luminovia Training & Consulting",
            companyCopy: "Für Buchungen und Anfragen zu Trainings oder Beratung ist mein Unternehmen Luminovia die Anlaufstelle.",
            credentials: "Nachweise ansehen",
            teaching: "Unterrichtsthemen",
            teachingCopy: "Zu meiner Lehrpraxis gehören Netzwerklabore, Programmieraufgaben und kaufmännische Fallbeispiele. Ich habe auf Deutsch und Englisch mit Teams, Bildungsanbietern und Hochschulen gearbeitet und auf IHK-Prüfungen vorbereitet.",
            projectTitle: "Software aus meiner Praxis",
            projectCopy: "Wie ich eigene Werkzeuge entwickle und zu Open Source beitrage, zeige ich im Projektportfolio.",
            projects: "Softwareprojekte ansehen",
            skills: "Werkzeuge, Methoden und weitere Kompetenzen",
            publications: "Publikationen",
            publicationsTitle: "Publikationen und wissenschaftliche Arbeiten.",
            publicationsCopy: "In diesen Arbeiten beschäftige ich mich mit generativer KI, KI-Governance, Mensch-Maschine-Interaktion und IT-Sicherheit.",
            jumpLabel: "Auf dieser Seite",
            jumpItems: [["#unterricht", "Unterricht"], ["#softwarepraxis", "Software"], ["#publications", "Publikationen"], ["#skill-map", "Kompetenzen"]],
        }
        : {
            badge: "Teaching, software and research",
            title: "What I teach and build.",
            intro: "I teach IT and business to adults through a mix of fundamentals, hands-on exercises and case studies.",
            references: "View teaching references",
            company: "Luminovia Training & Consulting",
            companyCopy: "My company, Luminovia, handles training and consulting enquiries and bookings.",
            credentials: "View credentials",
            teaching: "Teaching topics",
            teachingCopy: "My teaching has included networking labs, programming exercises and business case studies. I’ve worked with teams, education providers and universities in German and English, and helped learners prepare for German IHK exams.",
            projectTitle: "Software I build and contribute to",
            projectCopy: "My project portfolio shows how I build my own tools and contribute to open source.",
            projects: "Explore software projects",
            skills: "Tools, methods and other skills",
            publications: "Publications",
            publicationsTitle: "Publications and academic work.",
            publicationsCopy: "These papers cover my work on generative AI, AI governance, human–computer interaction and cybersecurity.",
            jumpLabel: "On this page",
            jumpItems: [["#unterricht", "Teaching"], ["#softwarepraxis", "Software"], ["#publications", "Publications"], ["#skill-map", "Skills"]],
        };
    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="orange">{copy.badge}</Badge>
                <div className="mt-6">
                    <h1 className="max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                        {copy.title}
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>
                </div>

                <SectionJumpNav label={copy.jumpLabel} items={copy.jumpItems} className="mt-7"/>

                <section id="unterricht" className="mt-14" aria-labelledby="consulting-skills" tabIndex={-1}>
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <h2 id="consulting-skills" className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.teaching}</h2>
                        <p className="text-lg leading-8 text-slate-300">{copy.teachingCopy}</p>
                    </div>
                    <div id="clusters" className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {teachingTopics.map((topic) => {
                            const [title, description] = topic[language];
                            return (
                                <Card key={topic.id}>
                                    <h3 className="text-xl font-black text-white">{title}</h3>
                                    <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
                                </Card>
                            );
                        })}
                    </div>
                    <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                        <p className="max-w-xl text-sm leading-6 text-slate-300">{copy.companyCopy}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Button to="/#referenzen" variant="secondary">{copy.references}</Button>
                            <Button href={PROFILE.luminoviaContact} variant="secondary">{copy.company}</Button>
                        </div>
                    </div>
                </section>

                <section id="softwarepraxis" className="soft-section mt-14 grid gap-5 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end" aria-labelledby="softwarepraxis-title" tabIndex={-1}>
                    <div>
                        <h2 id="softwarepraxis-title" className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{copy.projectTitle}</h2>
                        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{copy.projectCopy}</p>
                    </div>
                    <Button to="/projects" variant="secondary">{copy.projects}</Button>
                </section>

                <section id="publications" className="mt-16" aria-labelledby="publications-title" tabIndex={-1}>
                    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                        <div>
                            <Badge tone="emerald">{copy.publications}</Badge>
                            <h2 id="publications-title" className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.publicationsTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.publicationsCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 lg:grid-cols-3">
                        {publications.map((publication) => (
                            <PublicationCard key={publication.key} language={language} publication={publication}/>
                        ))}
                    </div>
                </section>

                <section id="skill-map" className="mt-14" aria-labelledby="skill-map-title" tabIndex={-1}>
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <h2 id="skill-map-title" className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{copy.skills}</h2>
                        <Button to="/credentials" variant="secondary">{copy.credentials}</Button>
                    </div>
                    <div className="mt-6 grid items-start gap-3 md:grid-cols-2">
                        {skillGroups.map((group) => (
                            <details key={group.group} className="soft-section group">
                                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-[var(--corner)] px-4 py-3 text-base font-bold text-white [&::-webkit-details-marker]:hidden">
                                    {group.group}
                                    <ChevronDown size={18} className="shrink-0 text-sky-100 group-open:rotate-180" aria-hidden="true"/>
                                </summary>
                                <div className="flex flex-wrap gap-2 px-4 pb-4 pt-1">
                                    {group.items.map((item) => (
                                        <TopicLink key={item} item={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200"/>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
