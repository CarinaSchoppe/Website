import {useState} from "react";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import {cn} from "../components/utils.js";

export default function CredentialsPage() {
    const {language} = useLanguage();
    const {credentials, credentialCategories} = useSiteContent();
    const [filter, setFilter] = useState(credentialCategories[0]);
    const activeFilter = credentialCategories.includes(filter) ? filter : credentialCategories[0];
    const visible = credentials.filter((credential) => activeFilter === credentialCategories[0] || activeFilter === "All" || credential.category === activeFilter);
    const copy = language === "de"
        ? {
            badge: "Nachweise & Lehrprofil",
            title: "Abschlüsse, Zertifikate und fachliche Nachweise.",
            intro: "Hier finden Sie meine akademischen Abschlüsse, die australische Trainingsqualifikation TAE40122, AI-Zertifikate, Cybersecurity-Lernpfade sowie Nachweise zu Lehr- und Sprachkompetenz.",
            allLabel: "Alle Nachweise",
        }
        : {
            badge: "Credentials & teaching proof",
            title: "Degrees, certificates and professional credentials.",
            intro: "This page brings together my academic degrees, the Australian TAE40122 training qualification, AI certifications, cybersecurity learning paths and evidence of teaching and language proficiency.",
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
                    {credentialCategories.map((cat) => (
                        <button key={cat} onClick={() => setFilter(cat)} className={cn("credential-filter-button rounded-full border px-4 py-2 text-sm font-black transition", activeFilter === cat ? "border-white bg-white text-slate-950" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white")}>{cat === "All" ? copy.allLabel : cat}</button>
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
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
