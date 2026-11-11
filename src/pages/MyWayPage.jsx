import {ArrowLeft, ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import Badge from "../components/Badge.jsx";
import Photo from "../components/Photo.jsx";

function latestYear(value) {
    const years = String(value).match(/\d{4}/g);
    return years ? Number.parseInt(years[years.length - 1], 10) : 0;
}

export default function MyWayPage() {
    const {language} = useLanguage();
    const {lifeMilestones} = useSiteContent();
    const copy = language === "de"
        ? {
            badge: "Werdegang",
            title: "Mein beruflicher Weg durch IT, Wirtschaft und Bildung.",
            intro: "Ich bin in Bodenwerder im Weserbergland aufgewachsen und ging in Holzminden zur Schule. Heute verbinde ich von Brisbane aus Lehre, Beratung und KI-Forschung – auf Deutsch und Englisch.",
            back: "Zurück zu meinem Profil",
            linkedin: "Mein LinkedIn-Profil",
            credentials: "Abschlüsse und Nachweise ansehen",
            skills: "Kompetenzen ansehen",
            projects: "Softwareprojekte ansehen",
            businessCopy: "Für Firmentrainings und Beratung habe ich Luminovia Training & Consulting gegründet.",
            business: "Zu luminovia.org",
            timeline: "Lebenslauf",
            order: "Die jüngsten Stationen stehen oben.",
            portrait: "Carina Sophie Schoppe vor einer Glasfassade",
        }
        : {
            badge: "My background",
            title: "My professional path through technology, business and education.",
            intro: "I grew up in Bodenwerder in Germany’s Weserbergland region and went to school in Holzminden. Today I bring together education, consulting and AI research from Brisbane, working in English and German.",
            back: "Back to my profile",
            linkedin: "My LinkedIn profile",
            credentials: "View degrees and credentials",
            skills: "View skills",
            projects: "View software projects",
            businessCopy: "I founded Luminovia Training & Consulting for company training and consulting.",
            business: "Visit luminovia.org",
            timeline: "CV and career timeline",
            order: "Most recent milestones first.",
            portrait: "Carina Sophie Schoppe in front of a glass building",
        };
    const orderedMilestones = [...lifeMilestones].sort((a, b) => latestYear(b.year) - latestYear(a.year));
    return (
        <main className="site-width pb-20 pt-12 sm:pt-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <Badge tone="emerald">{copy.badge}</Badge>
                        <h1 className="mt-6 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                            {copy.title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                            {copy.intro}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                            <Link to="/credentials" className="site-button site-button-primary">{copy.credentials}<ArrowRight size={17} aria-hidden="true"/></Link>
                            <a href={PROFILE.linkedin} className="site-text-link">{copy.linkedin}<ArrowUpRight size={17} aria-hidden="true"/></a>
                        </div>
                    </div>
                    <Photo src={IMAGES.outdoor} alt={copy.portrait} className="aspect-[4/3] w-full max-w-120 rounded-2xl lg:justify-self-end" imgClass="object-[50%_20%]" sizes="(min-width: 520px) 480px, 90vw"/>
                </div>

                <section className="mt-16" aria-labelledby="career-timeline-title">
                    <h2 id="career-timeline-title" className="text-4xl tracking-[-0.04em] sm:text-5xl">{copy.timeline}</h2>
                    <p className="mt-3 text-[var(--muted)]">{copy.order}</p>
                    <ol className="mt-6 border-t border-[var(--line)]">
                        {orderedMilestones.map((item) => (
                            <li key={`${item.year}-${item.title}`} className="grid gap-2 border-b border-[var(--line)] py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
                                <span className="font-extrabold tabular-nums text-[var(--accent)]">{item.year}</span>
                                <div>
                                    <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted)]">{item.category}</p>
                                    <h3 className="mt-1 text-xl">{item.title}</h3>
                                    <p className="mt-2 max-w-3xl leading-7 text-[var(--muted)]">{item.copy}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
                <div className="mt-8 border-b border-[var(--line)] pb-4">
                    <p className="text-[var(--muted)]">{copy.businessCopy}</p>
                    <a className="site-text-link" href={PROFILE.luminovia}>{copy.business}<ArrowUpRight size={17} aria-hidden="true"/></a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-5">
                    <Link to="/about" className="site-text-link"><ArrowLeft size={16} aria-hidden="true"/>{copy.back}</Link>
                    <Link className="site-text-link" to="/skills">{copy.skills}<ArrowRight size={17} aria-hidden="true"/></Link>
                    <Link className="site-text-link" to="/projects">{copy.projects}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
            </div>
        </main>
    );
}
