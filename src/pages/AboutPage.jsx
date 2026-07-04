import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

const copy = {
    en: {
        badge: "About",
        title: "A personal profile between software, research and digital education.",
        intro: "Carina Sophie Schoppe works at the intersection of business computer science, AI, cybersecurity, software development, didactics and entrepreneurship.",
        follow: "Business-facing training and consulting are represented through Luminovia. This page keeps the personal profile separate: background, interests, public writing, projects and professional development.",
        linkedin: "View LinkedIn",
        github: "View GitHub",
        timeline: "My timeline",
        cards: [
            ["Didactic", "I translate complex topics into structured, learner-friendly formats with exercises and transfer logic."],
            ["Technical", "AI, software, cybersecurity, data and business IT are taught through systems, workflows and examples that connect concepts with implementation reality."],
            ["Professional", "Remote-first, bilingual and comfortable with adult learners, corporate teams and education providers."],
        ],
        links: [
            ["My Way", "A compact life timeline from school and early programming to Brisbane, AI training and international teaching.", "/my-way"],
            ["Skills", "A skill map for AI, software development, cybersecurity, business IT, teaching design and communication.", "/skills"],
            ["Blog", "Long-form articles on AI governance, digital education, automation risk, project work and responsible technology adoption.", "/blog"],
        ],
        timelineTitle: "Professional timeline",
    },
    de: {
        badge: "Über mich",
        title: "Ein persoenliches Profil zwischen Software, Research und digitaler Bildung.",
        intro: "Carina Sophie Schoppe arbeitet an der Schnittstelle von Wirtschaftsinformatik, AI, Cybersecurity, Softwareentwicklung, Didaktik und Unternehmertum.",
        follow: "Business-orientiertes Training und Consulting werden ueber Luminovia vertreten. Diese Seite trennt das bewusst davon: Hintergrund, Interessen, oeffentliche Texte, Projekte und professionelle Entwicklung.",
        linkedin: "LinkedIn ansehen",
        github: "GitHub ansehen",
        timeline: "Werdegang",
        cards: [
            ["Didaktisch", "Ich übersetze komplexe Themen in strukturierte, lernfreundliche Formate mit Übungen und Transferlogik."],
            ["Technisch", "AI, Software, Cybersecurity, Daten und Business-IT werden über Systeme, Arbeitsabläufe und Beispiele vermittelt, die Konzepte mit Umsetzungspraxis verbinden."],
            ["Professionell", "Remote-first, zweisprachig und erfahren mit Erwachsenenbildung, Unternehmensteams und Bildungsanbietern."],
        ],
        links: [
            ["Werdegang", "Eine kompakte Timeline von Schule und frühem Programmieren bis Brisbane, AI-Training und internationaler Lehre.", "/my-way"],
            ["Kompetenzen", "Eine Kompetenzübersicht für AI, Softwareentwicklung, Cybersecurity, Business-IT, Didaktik und Kommunikation.", "/skills"],
            ["Blog", "Ausführliche Beiträge zu AI Governance, digitaler Bildung, Automationsrisiken, Projektarbeit und verantwortungsvoller Technologieeinführung.", "/blog"],
        ],
        timelineTitle: "Professioneller Werdegang",
    },
};

export default function AboutPage() {
    const {language, t} = useLanguage();
    const {timeline} = useSiteContent();
    const c = copy[language];

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="rose">{c.badge}</Badge>
                <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{c.title}</h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">{c.intro}</p>
                        <p className="mt-5 text-lg leading-8 text-slate-300">{c.follow}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Button href={PROFILE.linkedin}>{c.linkedin}</Button>
                            <Button href={PROFILE.github} variant="secondary">{c.github}</Button>
                            <Button to="/my-way" variant="secondary">{c.timeline}</Button>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Photo src={IMAGES.headshot} alt="Headshot of Carina Sophie Schoppe for her lecturer and consultant profile" className="aspect-[3/4] rounded-2xl" imgClass="object-[50%_20%]"/>
                        <div className="grid gap-4">
                            {c.cards.map(([title, text]) => (
                                <Card key={title}>
                                    <h2 className="text-xl font-black text-white">{title}</h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {c.links.map(([title, text, to]) => (
                        <Card key={title}>
                            <h2 className="text-2xl font-black text-white">{title}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
                            <div className="mt-6">
                                <Button to={to} variant="secondary">{t.open}</Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-black text-white">{c.timelineTitle}</h2>
                    <div className="mt-6 grid gap-4 lg:grid-cols-5">
                        {timeline.map((item) => (
                            <Card key={item.year}>
                                <div className="text-sm font-black text-sky-100">{item.year}</div>
                                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
