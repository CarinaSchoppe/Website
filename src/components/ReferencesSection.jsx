import {ArrowRight, ChevronDown} from "lucide-react";
import {Link} from "react-router-dom";
import {referenceDocuments} from "../data/portfolioDocuments.js";
import {publications} from "../data/publications.js";
import {referenceGroups} from "../data/references.js";
import {useLanguage} from "../i18n.jsx";
import DocumentDownloads from "./DocumentDownloads.jsx";
import "./references.css";

const referenceCount = referenceGroups.reduce((count, {entries}) => count + entries.length, 0);
const bachelorThesis = publications.find(({key}) => key === "chatgpt-phishing");
const thesisDownload = bachelorThesis.documents.map((document) => ({
    ...document,
    title: {de: "Bachelorarbeit zu KI und Phishing", en: "Bachelor thesis on AI and phishing"},
}));

const copy = {
    de: {
        title: "Referenzen",
        intro: "Ausgewählte Lehraufträge, Fachbeiträge und Forschungsprojekte.",
        expand: `Alle ${referenceCount} Referenzen anzeigen`,
        collapse: "Referenzliste einklappen",
        credentials: "Abschlüsse und Nachweise",
        publications: "Wissenschaftliche Arbeiten",
    },
    en: {
        title: "References",
        intro: "Selected teaching assignments, speaking engagements and research projects.",
        expand: `Show all ${referenceCount} references`,
        collapse: "Collapse full reference list",
        credentials: "Degrees and credentials",
        publications: "Academic publications",
    },
};

export default function ReferencesSection() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <section id="referenzen" className="home-section home-references" aria-labelledby="references-title" tabIndex={-1}>
            <div className="home-section-heading">
                <div>
                    <h2 id="references-title">{c.title}</h2>
                    <p>{c.intro}</p>
                </div>
            </div>
            <ul className="reference-overview" role="list">
                {referenceGroups.map(({id, title, entries}) => (
                    <li key={id}>
                        <p className="site-kicker">{title[language]}</p>
                        <p>{entries.slice(0, 3).map(([name]) => name).join(" · ")}</p>
                    </li>
                ))}
            </ul>
            <details className="reference-details">
                <summary className="site-button">
                    <span className="reference-expand-label">{c.expand}</span>
                    <span className="reference-collapse-label">{c.collapse}</span>
                    <ChevronDown size={17} aria-hidden="true"/>
                </summary>
                <div className="reference-details-content">
                    {referenceGroups.map(({id, title, entries}) => (
                        <section key={id} className="reference-group" aria-labelledby={`reference-group-${id}`}>
                            <h3 id={`reference-group-${id}`}>{title[language]}</h3>
                            <ul className="reference-list">
                                {entries.map(([name, de, en]) => (
                                    <li key={name}>
                                        <strong>{name}</strong>
                                        <p>{language === "de" ? de : en}</p>
                                        <DocumentDownloads documents={referenceDocuments[name]} title={name}/>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                    <div className="mt-2 flex flex-wrap gap-x-6">
                        <Link to="/credentials" className="site-text-link">{c.credentials}<ArrowRight size={16} aria-hidden="true"/></Link>
                        <Link to="/skills#publications" className="site-text-link">{c.publications}<ArrowRight size={16} aria-hidden="true"/></Link>
                        <DocumentDownloads documents={thesisDownload}/>
                    </div>
                </div>
            </details>
        </section>
    );
}
