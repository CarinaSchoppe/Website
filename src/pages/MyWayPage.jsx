import {ArrowLeft, ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import Badge from "../components/Badge.jsx";
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
            title: "Mein beruflicher Weg durch IT, Wirtschaft und Bildung.",
            intro: "Ich bin in Bodenwerder im Weserbergland aufgewachsen und ging in Holzminden zur Schule. Sprachaufenthalte in Australien, England und Spanien gaben mir früh die Gelegenheit, in anderen Ländern zu lernen. Heute unterrichte ich von Brisbane aus auf Deutsch und Englisch.",
            back: "Zurück zu meinem Profil",
            linkedin: "Mein LinkedIn-Profil",
            skills: "Kompetenzen ansehen",
            projects: "Softwareprojekte ansehen",
            study: "Vom Studium in den Unterricht",
            studyCopy: "2019 begann ich in Paderborn mit Wirtschaftsinformatik und machte mich im selben Jahr als Dozentin und Beraterin selbstständig. Bei KMUeinfachSicher entwickelte ich Lernmaterial für kleine Betriebe. Über bytes Coding verband ich die Softwareentwicklung mit der Bildungsarbeit.",
            today: "Brisbane und Luminovia",
            todayCopy: "Nach Bachelor, Master und MBA erwarb ich in Australien das Certificate IV in Training and Assessment (TAE40122). Mit meinem Unternehmen Luminovia Training & Consulting biete ich Workshops und Beratung an. An der University of Queensland habe ich als Forschungsassistentin zu Agentic AI gearbeitet.",
            business: "Zu luminovia.org",
            timeline: "Lebenslauf",
            order: "Die jüngsten Stationen stehen oben.",
            portrait: "Carina Sophie Schoppe vor einer Glasfassade",
        }
        : {
            badge: "My background",
            title: "My professional path through technology, business and education.",
            intro: "I grew up in Bodenwerder in Germany’s Weserbergland region and went to school in Holzminden. I spent time in Australia, England and Spain learning languages. Today, I teach in English and German from Brisbane.",
            back: "Back to my profile",
            linkedin: "My LinkedIn profile",
            skills: "View skills",
            projects: "View software projects",
            study: "From university to the classroom",
            studyCopy: "I began studying Business Information Systems in Paderborn in 2019 and started freelancing as a lecturer and consultant that same year. I developed learning materials for small businesses through KMUeinfachSicher. At bytes Coding, I combined software development with education.",
            today: "Brisbane and Luminovia",
            todayCopy: "After completing my bachelor’s, master’s and MBA, I gained Australia’s Certificate IV in Training and Assessment (TAE40122). I offer workshops and consulting through my company, Luminovia Training & Consulting. I also worked as a research assistant on agentic AI at The University of Queensland.",
            business: "Visit luminovia.org",
            timeline: "CV and career timeline",
            order: "Most recent milestones first.",
            portrait: "Carina Sophie Schoppe in front of a glass building",
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
                        <div className="mt-5 flex flex-wrap gap-x-5">
                            <Link to="/about#about-path" className="site-text-link"><ArrowLeft size={16} aria-hidden="true"/>{copy.back}</Link>
                            <a href={PROFILE.linkedin} className="site-text-link">{copy.linkedin}<ArrowUpRight size={17} aria-hidden="true"/></a>
                        </div>
                    </div>
                    <Photo src={IMAGES.outdoor} alt={copy.portrait} className="aspect-[4/3] w-full max-w-120 rounded-2xl lg:justify-self-end" imgClass="object-[50%_20%]" sizes="(min-width: 520px) 480px, 90vw"/>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <Card>
                        <h2 className="text-2xl text-white">{copy.study}</h2>
                        <p className="mt-3 leading-7 text-slate-300">{copy.studyCopy}</p>
                    </Card>
                    <Card>
                        <h2 className="text-2xl text-white">{copy.today}</h2>
                        <p className="mt-3 leading-7 text-slate-300">{copy.todayCopy}</p>
                        <a className="site-text-link mt-2" href={PROFILE.luminovia}>{copy.business}<ArrowUpRight size={17} aria-hidden="true"/></a>
                    </Card>
                </div>

                <section className="mt-16" aria-labelledby="career-timeline-title">
                    <h2 id="career-timeline-title" className="text-4xl tracking-[-0.04em] text-white sm:text-5xl">{copy.timeline}</h2>
                    <p className="mt-3 text-slate-300">{copy.order}</p>
                    <ol className="mt-6 border-t border-white/10">
                        {orderedMilestones.map((item) => (
                            <li key={`${item.year}-${item.title}`} className="grid gap-2 border-b border-white/10 py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
                                <span className="font-extrabold tabular-nums text-sky-100">{item.year}</span>
                                <div>
                                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-300">{item.category}</p>
                                    <h3 className="mt-1 text-xl text-white">{item.title}</h3>
                                    <p className="mt-2 max-w-3xl leading-7 text-slate-300">{item.copy}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
                <div className="mt-8 flex flex-wrap gap-x-5">
                    <Link className="site-text-link" to="/skills">{copy.skills}<ArrowRight size={17} aria-hidden="true"/></Link>
                    <Link className="site-text-link" to="/projects">{copy.projects}<ArrowRight size={17} aria-hidden="true"/></Link>
                </div>
            </div>
        </main>
    );
}
