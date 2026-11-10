import {referenceGroups} from "../data/references.js";
import {useLanguage} from "../i18n.jsx";

const copy = {
    de: {
        title: "Referenzen",
        intro: "Eine Auswahl meiner Lehraufträge, Fachbeiträge und Arbeit an Hochschulen.",
    },
    en: {
        title: "References",
        intro: "Selected teaching assignments, speaking engagements and university work.",
    },
};

export default function ReferencesSection() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <section id="referenzen" className="home-section home-references" aria-labelledby="references-title">
            <div className="home-section-heading">
                <div>
                    <h2 id="references-title">{c.title}</h2>
                    <p>{c.intro}</p>
                </div>
            </div>
            {referenceGroups.map(({id, title, entries}) => (
                <section key={id} className="reference-group" aria-labelledby={`reference-group-${id}`}>
                    <h3 id={`reference-group-${id}`}>{title[language]}</h3>
                    <ul className="reference-list">
                        {entries.map(([name, de, en]) => (
                            <li key={name}>
                                <strong>{name}</strong>
                                <p>{language === "de" ? de : en}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </section>
    );
}
