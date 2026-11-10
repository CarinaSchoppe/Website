import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

export default function ImprintPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Rechtliches",
            title: "Impressum",
            intro: "Rechtliche Angaben für diese Website.",
            info: "Angaben gemäß Section 5 TMG",
            contact: "Kontakt",
            phone: "Telefon",
            email: "E-Mail",
            editorial: "Redaktionell verantwortlich",
            odr: "EU-Streitschlichtung",
            odrCopy: "Die EU-Plattform zur Online-Streitbeilegung wurde am 20. Juli 2025 eingestellt.",
            odrLink: "Mitteilung der Europäischen Kommission",
            odrUrl: "https://consumer-redress.ec.europa.eu/site-relocation_de",
            consumer: "Verbraucherstreitbeilegung",
            consumerCopy: "Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
            australia: "Australien",
            germany: "Deutschland",
        }
        : {
            badge: "Legal notice",
            title: "Imprint",
            intro: "Legal information for this website.",
            info: "Information according to Section 5 TMG",
            contact: "Contact",
            phone: "Phone",
            email: "Email",
            editorial: "Editorial responsibility",
            odr: "EU dispute resolution",
            odrCopy: "The EU online dispute resolution platform was discontinued on 20 July 2025.",
            odrLink: "European Commission notice",
            odrUrl: "https://consumer-redress.ec.europa.eu/site-relocation_en",
            consumer: "Consumer dispute resolution",
            consumerCopy: "I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
            australia: "Australia",
            germany: "Germany",
        };

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <Badge>{copy.badge}</Badge>
                <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
                <p className="mt-5 text-lg leading-8 text-slate-300">{copy.intro}</p>

                <div className="mt-10 grid gap-5">
                    <Card>
                        <h2 className="text-2xl font-black text-white">{copy.info}</h2>
                        <div className="mt-5 space-y-1 text-slate-300">
                            <p>{PROFILE.name}</p>
                            {PROFILE.addressLines.map((line) => <p key={line}>{line}</p>)}
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-black text-white">{copy.contact}</h2>
                        <div className="mt-5 space-y-1 text-slate-300">
                            <p>{copy.phone} {copy.australia}: <a className="font-bold text-sky-100 hover:text-white" href={`tel:${PROFILE.phoneAustralia.replaceAll(" ", "")}`}>{PROFILE.phoneAustralia}</a></p>
                            <p>{copy.phone} {copy.germany}: <a className="font-bold text-sky-100 hover:text-white" href={`tel:${PROFILE.phoneGermany.replaceAll(" ", "")}`}>{PROFILE.phoneGermany}</a></p>
                            <p>{copy.email}: <a className="font-bold text-sky-100 hover:text-white" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-black text-white">{copy.editorial}</h2>
                        <p className="mt-5 text-slate-300">{PROFILE.name}</p>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-black text-white">{copy.odr}</h2>
                        <p className="mt-5 leading-7 text-slate-300">
                            {copy.odrCopy} <a className="font-bold text-sky-100 hover:text-white" href={copy.odrUrl} target="_blank" rel="noreferrer">{copy.odrLink}</a>.
                        </p>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-black text-white">{copy.consumer}</h2>
                        <p className="mt-5 leading-7 text-slate-300">{copy.consumerCopy}</p>
                    </Card>
                </div>
            </div>
        </main>
    );
}