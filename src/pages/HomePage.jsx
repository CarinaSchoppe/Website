import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

const copy = {
    en: {
        badge: "Personal portfolio",
        title: "Carina Sophie Schoppe.",
        intro: "A portfolio for software projects, research interests, teaching background, credentials and selected writing around AI, digital education, cybersecurity and business computer science.",
        primary: "View projects",
        secondary: "View credentials",
        luminoviaBadge: "Business brand",
        luminoviaTitle: "Training, consulting and company work live at Luminovia.",
        luminoviaCopy: "Luminovia Training & Consulting is the business channel for professional training, consulting, project support and corporate enquiries. This personal website stays focused on Carina's portfolio, CV and public work.",
        luminoviaCta: "Open Luminovia",
        luminoviaEmail: "Email Luminovia",
        profileTitle: "Portfolio focus",
        profileItems: [
            ["Projects", "Software, automation, research tooling, Kotlin plugins and selected technical work."],
            ["Credentials", "Academic degrees, AI certificates, cybersecurity learning paths and completed TAE40122."],
            ["Writing", "Articles and reflections on AI, project work, digital education and responsible automation."],
        ],
        cvBadge: "CV update",
        cvTitle: "Certificate IV in Training and Assessment completed in June 2026.",
        cvCopy: "The Australian TAE40122 qualification is now part of the professional profile alongside B.Sc., M.Sc., MBA, AI certifications and teaching experience.",
        latest: "Latest milestones",
    },
    de: {
        badge: "Persoenliches Portfolio",
        title: "Carina Sophie Schoppe.",
        intro: "Ein Portfolio fuer Softwareprojekte, Research-Interessen, Lehrprofil, Nachweise und ausgewaehlte Texte zu AI, digitaler Bildung, Cybersecurity und Wirtschaftsinformatik.",
        primary: "Projekte ansehen",
        secondary: "Nachweise ansehen",
        luminoviaBadge: "Business-Marke",
        luminoviaTitle: "Training, Consulting und Firmenanfragen laufen ueber Luminovia.",
        luminoviaCopy: "Luminovia Training & Consulting ist der Business-Kanal fuer professionelle Trainings, Consulting, Projektbegleitung und Unternehmensanfragen. Diese persoenliche Website bleibt auf Portfolio, CV und oeffentliche Arbeit von Carina fokussiert.",
        luminoviaCta: "Luminovia oeffnen",
        luminoviaEmail: "Luminovia kontaktieren",
        profileTitle: "Portfolio-Fokus",
        profileItems: [
            ["Projekte", "Software, Automatisierung, Research-Tooling, Kotlin-Plugins und ausgewaehlte technische Arbeiten."],
            ["Nachweise", "Akademische Abschluesse, AI-Zertifikate, Cybersecurity-Lernpfade und abgeschlossenes TAE40122."],
            ["Texte", "Artikel und Reflexionen zu AI, Projektarbeit, digitaler Bildung und verantwortungsvoller Automatisierung."],
        ],
        cvBadge: "CV-Update",
        cvTitle: "Certificate IV in Training and Assessment im Juni 2026 abgeschlossen.",
        cvCopy: "Die australische TAE40122-Qualifikation ist nun Teil des professionellen Profils neben B.Sc., M.Sc., MBA, AI-Zertifikaten und Lehrerfahrung.",
        latest: "Aktuelle Stationen",
    },
};

export default function HomePage() {
    const {language} = useLanguage();
    const {softwareProjects, lifeMilestones} = useSiteContent();
    const c = copy[language];
    const latestMilestones = [...lifeMilestones].slice(-3).reverse();

    return (
        <main className="px-4 pb-24 pt-14 sm:px-6 lg:px-8">
            <section className="mx-auto grid max-w-7xl gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
                <div>
                    <Badge tone="cyan">{c.badge}</Badge>
                    <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">{c.title}</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{c.intro}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button to="/projects">{c.primary}</Button>
                        <Button to="/credentials" variant="secondary">{c.secondary}</Button>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        {c.profileItems.map(([title, text]) => (
                            <Card key={title}>
                                <h2 className="text-xl font-black text-white">{title}</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="grid gap-5">
                    <Photo src={IMAGES.hero} alt="Portrait of Carina Sophie Schoppe" className="aspect-[4/5] rounded-[2rem] lg:aspect-[5/4]" imgClass="object-[50%_20%]" fetchPriority="high"/>
                    <Card className="border-sky-100/18 bg-gradient-to-br from-white/[0.10] via-sky-300/[0.055] to-blue-400/[0.06]">
                        <Badge tone="amber">{c.cvBadge}</Badge>
                        <h2 className="mt-4 text-2xl font-black text-white">{c.cvTitle}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{c.cvCopy}</p>
                    </Card>
                </div>
            </section>

            <section className="mx-auto max-w-7xl py-8">
                <div className="grid gap-6 rounded-[2.25rem] border border-white/12 bg-white/[0.065] p-5 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-2xl lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-7">
                    <div className="rounded-[1.6rem] bg-white p-5">
                        <img src={IMAGES.luminoviaLogoFull} alt="Luminovia Training & Consulting logo" className="mx-auto h-auto max-h-56 w-full object-contain"/>
                    </div>
                    <div>
                        <Badge tone="emerald">{c.luminoviaBadge}</Badge>
                        <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{c.luminoviaTitle}</h2>
                        <p className="mt-5 text-base leading-8 text-slate-300">{c.luminoviaCopy}</p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button href={PROFILE.luminovia}>{c.luminoviaCta}</Button>
                            <Button href={`mailto:${PROFILE.luminoviaEmail}`} variant="secondary">{c.luminoviaEmail}</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-5 py-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                    <Badge tone="violet">{c.latest}</Badge>
                    <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">{c.profileTitle}</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {latestMilestones.map((item) => (
                        <Card key={`${item.year}-${item.title}`}>
                            <div className="text-sm font-black text-sky-100">{item.year}</div>
                            <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl py-8">
                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <h2 className="text-3xl font-black tracking-[-0.03em] text-white">Projects</h2>
                    <Button to="/projects" variant="secondary">Open portfolio</Button>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {softwareProjects.slice(0, 3).map((project) => (
                        <Card key={project.name}>
                            <div className="text-sm font-black text-sky-100">{project.type}</div>
                            <h3 className="mt-3 text-xl font-black text-white">{project.name}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}
