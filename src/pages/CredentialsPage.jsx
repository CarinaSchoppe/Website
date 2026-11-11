import {useState} from "react";
import {credentialCategories as categoryKeys} from "../data/content.js";
import {useSiteContent} from "../data/localizedContent.js";
import {credentialDocuments} from "../data/portfolioDocuments.js";
import {useLanguage} from "../i18n.jsx";
import DocumentDownloads from "../components/DocumentDownloads.jsx";

export default function CredentialsPage() {
    const {language} = useLanguage();
    const {credentials, credentialCategories} = useSiteContent();
    const [activeCategory, setActiveCategory] = useState("All");
    const activeLabel = credentialCategories[categoryKeys.indexOf(activeCategory)];
    const visible = activeCategory === "All" ? credentials : credentials.filter(({category}) => category === activeLabel);
    const copy = language === "de"
        ? {
            title: "Abschlüsse und Nachweise",
            intro: "Zu jedem Eintrag gibt es PDFs zum Download. Geburtsdaten und private Kennnummern sind in den öffentlichen Kopien geschwärzt.",
            allLabel: "Alle Nachweise",
            filterLabel: "Nachweise nach Kategorie filtern",
            resultLabels: ["Nachweis", "Nachweise"],
            details: "Details zum Nachweis",
        }
        : {
            title: "Degrees, certificates and credentials",
            intro: "Each entry has downloadable PDFs. Birth dates and private identifiers are redacted in the public copies.",
            allLabel: "All credentials",
            filterLabel: "Filter credentials by category",
            resultLabels: ["credential", "credentials"],
            details: "Credential details",
        };

    return (
        <main className="site-width pb-20 pt-10 sm:pt-16">
            <h1 className="max-w-4xl text-4xl tracking-[-0.04em] sm:text-6xl">{copy.title}</h1>
            <p className="mt-4 max-w-[62ch] leading-7 text-[var(--muted)] sm:text-lg">{copy.intro}</p>

            <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label={copy.filterLabel}>
                {categoryKeys.map((category, index) => (
                    <button
                        key={category}
                        type="button"
                        aria-pressed={activeCategory === category}
                        aria-controls="credentials-results"
                        onClick={() => setActiveCategory(category)}
                        className="site-filter-button min-h-11 rounded-full border px-4 py-2 text-sm font-extrabold"
                    >
                        {category === "All" ? copy.allLabel : credentialCategories[index]}
                    </button>
                ))}
            </div>

            <p className="mb-3 mt-5 text-sm text-[var(--muted)]" role="status">
                {visible.length} {copy.resultLabels[visible.length === 1 ? 0 : 1]}
            </p>
            <ul id="credentials-results" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="list">
                {visible.map((credential) => (
                    <li key={credential.documentKey} className="soft-section flex min-w-0 flex-col p-4 sm:p-5">
                        <p className="site-kicker text-[var(--muted)]">{credential.category}</p>
                        <h2 className="mt-2 text-xl">{credential.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{credential.meta}</p>
                        <div className="mt-auto pt-3">
                            <DocumentDownloads documents={credentialDocuments[credential.documentKey]} title={credential.title}/>
                        </div>
                        <details className="border-t border-[var(--line)]">
                            <summary className="min-h-11 cursor-pointer py-3 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-4">{copy.details}</summary>
                            <p className="pb-2 text-sm leading-6 text-[var(--muted)]">{credential.detail}</p>
                        </details>
                    </li>
                ))}
            </ul>
        </main>
    );
}
