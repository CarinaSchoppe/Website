import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

const copy = {
    en: {
        badge: "Business content moved",
        title: "Training, consulting, pricing and offers are handled by Luminovia.",
        intro: "carinaschoppe.com is now a personal portfolio. Business services, company enquiries, training formats, consulting work and pricing information belong on Luminovia Training & Consulting.",
        primary: "Open Luminovia",
        secondary: "Email Luminovia",
        portfolio: "Back to portfolio",
        cards: [
            ["Training", "AI, IT, cybersecurity, software, business technology and digital education formats."],
            ["Consulting", "Project support, AI use cases, learning architecture, digital enablement and advisory work."],
            ["Company contact", "Use info@luminovia.org for direct business enquiries."],
        ],
    },
    de: {
        badge: "Business-Inhalte umgezogen",
        title: "Training, Consulting, Preise und Angebote laufen über Luminovia.",
        intro: "carinaschoppe.com ist jetzt ein persönliches Portfolio. Business-Services, Firmenanfragen, Trainingsformate, Consulting und Preisinfos gehören zu Luminovia Training & Consulting.",
        primary: "Luminovia öffnen",
        secondary: "Luminovia kontaktieren",
        portfolio: "Zurück zum Portfolio",
        cards: [
            ["Training", "AI, IT, Cybersecurity, Software, Business Technology und digitale Bildungsformate."],
            ["Consulting", "Projektbegleitung, AI Use Cases, Learning Architecture, Digital Enablement und Beratung."],
            ["Firmenkontakt", "Nutzen Sie info@luminovia.org für direkte Business-Anfragen."],
        ],
    },
};

export default function BusinessRedirectPage() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                    <Badge tone="amber">{c.badge}</Badge>
                    <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">{c.title}</h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">{c.intro}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button href={PROFILE.luminovia}>{c.primary}</Button>
                        <Button href={`mailto:${PROFILE.luminoviaEmail}`} variant="secondary">{c.secondary}</Button>
                        <Button to="/" variant="secondary">{c.portfolio}</Button>
                    </div>
                </div>
                <Card className="bg-white p-6">
                    <img src={IMAGES.luminoviaLogoMark} alt="Luminovia Training & Consulting logo" className="mx-auto h-auto max-h-52 w-full object-contain sm:hidden"/>
                    <img src={IMAGES.luminoviaLogoFull} alt="Luminovia Training & Consulting logo" className="mx-auto hidden h-auto max-h-72 w-full object-contain sm:block"/>
                </Card>
            </div>
            <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">
                {c.cards.map(([title, text]) => (
                    <Card key={title}>
                        <h2 className="text-2xl font-black text-white">{title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                    </Card>
                ))}
            </div>
        </main>
    );
}
