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
        title: "A professional profile spanning software, research and digital education.",
        intro: "I work at the intersection of business information systems, AI, cybersecurity, software development and learning design. My focus is on making complex technology understandable and useful in practice.",
        follow: "This website documents my background, interests, projects, publications and professional development. Company training and consulting have a separate home at Luminovia.",
        linkedin: "View LinkedIn",
        github: "View GitHub",
        timeline: "My timeline",
        cards: [
            ["Learning design", "I translate complex topics into structured, learner-friendly formats with purposeful exercises and clear opportunities to apply what was learned."],
            ["Technical practice", "I connect concepts in AI, software, cybersecurity, data and business IT with systems, workflows and implementation examples."],
            ["International work", "Based in Brisbane, I work remotely in German and English with adult learners, professional teams and education providers."],
        ],
        links: [
            ["Story", "A compact life timeline from school and early programming to Brisbane, AI training and international teaching.", "/my-way"],
            ["Skills", "A skill map for AI, software development, cybersecurity, business IT, teaching design and communication.", "/skills"],
            ["Blog", "Long-form articles on AI governance, digital education, automation risk, project work and responsible technology adoption.", "/blog"],
        ],
        timelineTitle: "Professional timeline",
    },
    de: {
        badge: "Über mich",
        title: "Ein berufliches Profil zwischen Software, Forschung und digitaler Bildung.",
        intro: "Ich arbeite an der Schnittstelle von Wirtschaftsinformatik, AI, Cybersecurity, Softwareentwicklung und Didaktik. Mein Schwerpunkt liegt darauf, komplexe Technologien verständlich zu machen und in die Praxis zu übertragen.",
        follow: "Diese Website dokumentiert meinen Hintergrund, fachliche Interessen, Projekte, Publikationen und meine berufliche Entwicklung. Firmentrainings und Consulting haben mit Luminovia einen eigenen Auftritt.",
        linkedin: "LinkedIn ansehen",
        github: "GitHub ansehen",
        timeline: "Werdegang",
        cards: [
            ["Didaktik", "Ich übersetze komplexe Themen in strukturierte, lernfreundliche Formate mit gezielten Übungen und klarem Praxisbezug."],
            ["Technische Praxis", "Ich verbinde Konzepte aus AI, Software, Cybersecurity, Daten und Wirtschaftsinformatik mit Systemen, Arbeitsabläufen und konkreten Umsetzungsbeispielen."],
            ["Internationale Arbeit", "Von Brisbane aus arbeite ich remote auf Deutsch und Englisch mit Erwachsenen, professionellen Teams und Bildungsanbietern."],
        ],
        links: [
            ["Werdegang", "Ein kompakter Zeitstrahl von Schule und frühem Programmieren bis Brisbane, AI-Training und internationaler Lehre.", "/my-way"],
            ["Kompetenzen", "Eine Kompetenzübersicht für AI, Softwareentwicklung, Cybersecurity, Wirtschaftsinformatik, Didaktik und Kommunikation.", "/skills"],
            ["Texte", "Ausführliche Beiträge zu AI Governance, digitaler Bildung, Automationsrisiken, Projektarbeit und verantwortungsvoller Technologieeinführung.", "/blog"],
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
