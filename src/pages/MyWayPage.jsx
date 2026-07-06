import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import {IMAGES} from "../data/profile.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

function latestYear(value) {
    const years = String(value).match(/\d{4}/g);
    return years ? Number.parseInt(years[years.length - 1], 10) : 0;
}

export default function MyWayPage() {
    const {language} = useLanguage();
    const {lifeMilestones} = useSiteContent();
    const orderedMilestones = [...lifeMilestones].sort((a, b) => latestYear(b.year) - latestYear(a.year));
    const copy = language === "de"
        ? {
            badge: "Werdegang",
            title: "Ein professioneller Weg durch IT, Business, Forschung und digitale Bildung.",
            intro: "Die Timeline zeigt, wie sich mein Profil über Software, Wirtschaftsinformatik, Forschung, AI, Bildung und den Standort Brisbane entwickelt hat.",
            skills: "Kompetenzen ansehen",
            request: "Projekte ansehen",
            education: "Bildung",
            educationCopy: "Wirtschaftsinformatik, MBA ohne Major, TAE40122 im Juni 2026, AI, Forschung und digitale Bildung.",
            work: "Praxis",
            workCopy: "Softwareentwicklung, digitale Bildung, Unternehmertum, Research und ausgewählte Projektarbeit.",
            now: "Heute",
            nowCopy: "Sitz in Brisbane, persönliches Portfolio auf carinaschoppe.com und klare Trennung zwischen öffentlichem Profil und Luminovia als Business-Kanal.",
            timeline: "Timeline",
            milestones: "Aktuelle Stationen zuerst."
        }
        : {
            badge: "Story",
            title: "A professional path through IT, business, research and digital education.",
            intro: "This timeline shows how my profile developed across software, business information systems, research, AI, education and the Brisbane context.",
            skills: "View skills",
            request: "View projects",
            education: "Education",
            educationCopy: "Business Computer Science, MBA without major, TAE40122 completed in June 2026, AI, research and digital education.",
            work: "Practice",
            workCopy: "Software development, digital education, entrepreneurship, research and selected project work.",
            now: "Today",
            nowCopy: "Based in Brisbane, with carinaschoppe.com as a personal portfolio and Luminovia as the business brand.",
            timeline: "Timeline",
            milestones: "Current milestones first."
        };
    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <Badge tone="emerald">{copy.badge}</Badge>
                        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
                            {copy.title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            {copy.intro}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button to="/skills">{copy.skills}</Button>
                            <Button to="/projects" variant="secondary">{copy.request}</Button>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Photo src={IMAGES.outdoor} alt="Professional outdoor portrait of Carina Sophie Schoppe" className="aspect-[3/4] rounded-3xl" imgClass="object-[50%_20%]"/>
                        <div className="grid gap-4">
                            <Card>
                                <h2 className="text-2xl font-black text-white">{copy.education}</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.educationCopy}</p>
                            </Card>
                            <Card>
                                <h2 className="text-2xl font-black text-white">{copy.work}</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.workCopy}</p>
                            </Card>
                            <Card>
                                <h2 className="text-2xl font-black text-white">{copy.now}</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.nowCopy}</p>
                            </Card>
                        </div>
                    </div>
                </div>

                <section className="mt-16">
                    <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                        <div>
                            <Badge tone="violet">{copy.timeline}</Badge>
                            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.milestones}</h2>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute bottom-0 left-12 top-0 hidden w-px bg-gradient-to-b from-sky-200/60 via-white/15 to-blue-300/35 md:block"/>
                        <div className="grid gap-5">
                            {orderedMilestones.map((item) => (
                                <div key={`${item.year}-${item.title}`} className="relative md:pl-32">
                                    <div className="absolute left-0 top-7 hidden min-h-11 w-24 place-items-center rounded-2xl border border-sky-200/30 bg-[#0B1224]/95 px-3 text-center text-[11px] font-black leading-tight text-sky-100 shadow-[0_12px_40px_rgba(37,99,235,.18)] md:grid">
                                        {item.year}
                                    </div>
                                    <Card className="bg-gradient-to-br from-white/[0.08] via-sky-300/[0.045] to-blue-300/[0.04]">
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <div className="text-sm font-black uppercase tracking-[0.18em] text-sky-100">{item.category}</div>
                                                <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
                                            </div>
                                            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white">{item.year}</div>
                                        </div>
                                        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.copy}</p>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
