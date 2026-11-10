import {ArrowDownToLine} from "lucide-react";
import {useLanguage} from "../i18n.jsx";

const copy = {
    de: {download: "herunterladen", de: "Deutsch", en: "Englisch"},
    en: {download: "Download", de: "German", en: "English"},
};

export default function DocumentDownloads({documents, title}) {
    const {language} = useLanguage();
    if (!documents?.length) return null;

    const labels = copy[language];

    return (
        <div className="flex flex-wrap gap-x-4">
            {documents.map((document) => {
                const format = document.href.split(".").at(-1).toUpperCase();
                const formatLabel = `${format} · ${labels[document.language]}`;
                const documentTitle = document.title?.[language];
                const label = documentTitle ? `${documentTitle} (${formatLabel})` : formatLabel;
                const action = documentTitle
                    ? labels.download
                    : language === "de" ? `${title} ${labels.download}` : `${labels.download} ${title}`;

                return (
                    <a key={document.href} href={document.href} download hrefLang={document.language} className="site-text-link" aria-label={`${label} – ${action}`}>
                        <ArrowDownToLine size={15} aria-hidden="true"/>
                        {label}
                    </a>
                );
            })}
        </div>
    );
}
