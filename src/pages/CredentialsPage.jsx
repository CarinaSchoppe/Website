import {useState} from "react";
import {credentialCategories as categoryKeys} from "../data/content.js";
import {useSiteContent} from "../data/localizedContent.js";
import {credentialDocuments} from "../data/portfolioDocuments.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import DocumentDownloads from "../components/DocumentDownloads.jsx";

export default function CredentialsPage() {
    const {language} = useLanguage();
    const {credentials, credentialCategories} = useSiteContent();
    const [activeCategory, setActiveCategory] = useState("All");
    const activeLabel = credentialCategories[categoryKeys.indexOf(activeCategory)];
    const visible = activeCategory === "All" ? credentials : credentials.filter(({category}) => category === activeLabel);
    const copy = language === "de"
        ? {
            badge: "Qualifikationen",
            title: "Abschlüsse und Nachweise",
            intro: "Zu jedem Eintrag gibt es PDFs zum Download. Geburtsdaten und private Kennnummern sind in den öffentlichen Kopien geschwärzt.",
            allLabel: "Alle Nachweise",
        }
        : {
            badge: "Qualifications",
            title: "Degrees, certificates and credentials",
            intro: "Each entry has downloadable PDFs. Birth dates and private identifiers are redacted in the public copies.",
            allLabel: "All credentials",
        };

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="amber">{copy.badge}</Badge>
                <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
                    <p className="text-lg leading-8 text-slate-300">{copy.intro}</p>
                </div>

                <div className="credential-filter-track mt-10 flex flex-wrap gap-2">
                    {categoryKeys.map((category, index) => (
                        <button
                            key={category}
                            type="button"
                            aria-pressed={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                            className="credential-filter-button min-h-11 rounded-full border px-4 py-2 text-sm font-black transition"
                        >
                            {category === "All" ? copy.allLabel : credentialCategories[index]}
                        </button>
                    ))}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {visible.map((credential) => (
                        <Card key={credential.title}>
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 via-violet-200 to-amber-200 text-sm font-black text-slate-950">✓</div>
                                <Badge tone="white">{credential.category}</Badge>
                            </div>
                            <h2 className="text-xl font-black text-white">{credential.title}</h2>
                            <p className="mt-3 text-sm font-bold leading-6 text-sky-100">{credential.meta}</p>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{credential.detail}</p>
                            <DocumentDownloads documents={credentialDocuments[credential.documentKey]} title={credential.title}/>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
