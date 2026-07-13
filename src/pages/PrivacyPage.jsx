import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const controllerAddress = `${PROFILE.name}, ${PROFILE.addressLines.join(", ")}`;

const enSections = [
    ["Controller", `The controller responsible for this website is ${controllerAddress}. You can contact me by email at ${PROFILE.email}, by Australian phone at ${PROFILE.phoneAustralia}, or by German phone at ${PROFILE.phoneGermany}.`],
    ["Access data and hosting", "The hosting provider may process technical access data such as IP address, date and time of access, requested files, browser type, operating system and referrer URL to deliver and protect the website."],
    ["Contact and booking links", "If you contact me by email, phone or an external booking link, the information you provide is processed to answer your request and organise the requested training, lecture, workshop or call."],
    ["Google Analytics", "This site uses Google Analytics only after visitor consent. The measurement ID is G-YNGD292XE5. IP anonymisation is enabled."],
    ["Local storage", "This website stores the analytics consent choice in local storage so the banner does not appear on every page view."],
    ["Your rights", "Depending on applicable data protection law, you may have rights to access, rectification, erasure, restriction of processing, portability, objection and withdrawal of consent."],
];

const deSections = [
    ["Verantwortliche Stelle", `Verantwortlich für diese Website ist ${controllerAddress}. Kontakt ist per E-Mail unter ${PROFILE.email}, telefonisch in Australien unter ${PROFILE.phoneAustralia} oder telefonisch in Deutschland unter ${PROFILE.phoneGermany} möglich.`],
    ["Zugriffsdaten und Hosting", "Der Hosting-Anbieter kann technische Zugriffsdaten wie IP-Adresse, Zeitpunkt, abgerufene Dateien, Browsertyp, Betriebssystem und Referrer verarbeiten, um die Website bereitzustellen und zu schützen."],
    ["Kontakt und Buchungslinks", "Wenn Sie mich per E-Mail, Telefon oder externem Buchungslink kontaktieren, werden die angegebenen Daten verarbeitet, um Ihre Anfrage zu beantworten und Training, Vortrag, Workshop oder Call zu organisieren."],
    ["Google Analytics", "Diese Website nutzt Google Analytics nur nach Zustimmung. Die Measurement ID lautet G-YNGD292XE5. IP-Anonymisierung ist aktiviert."],
    ["Local Storage", "Diese Website speichert die Analytics-Einwilligung im lokalen Browser-Speicher, damit der Banner nicht auf jeder Seite erneut erscheint."],
    ["Ihre Rechte", "Je nach anwendbarem Datenschutzrecht können Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Widerruf einer Einwilligung bestehen."],
];

export default function PrivacyPage() {
    const {language} = useLanguage();
    const isDe = language === "de";
    const sections = isDe ? deSections : enSections;

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <Badge tone="emerald">{isDe ? "Datenschutz" : "Data protection"}</Badge>
                <h1 className="privacy-title mt-6 font-black tracking-normal text-white">{isDe ? "Datenschutzerklärung" : "Privacy Policy"}</h1>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                    {isDe ? "Diese Erklärung beschreibt, welche Daten bei der Nutzung dieser Website verarbeitet werden können." : "This policy explains what data may be processed when using this website and how analytics works."}
                </p>

                <div className="mt-10 grid gap-5">
                    {sections.map(([title, copy]) => (
                        <Card key={title}>
                            <h2 className="text-2xl font-black text-white">{title}</h2>
                            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">{copy}</p>
                        </Card>
                    ))}

                    <Card>
                        <h2 className="text-2xl font-black text-white">{isDe ? "Kontakt" : "Contact"}</h2>
                        <p className="mt-5 leading-7 text-slate-300">
                            {isDe ? "Bei Datenschutzfragen kontaktieren Sie " : "For privacy questions, contact "}
                            <a className="font-bold text-sky-100 hover:text-white" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
                        </p>
                    </Card>
                </div>
            </div>
        </main>
    );
}
