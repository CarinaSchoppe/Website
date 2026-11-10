import {ArrowRight, ArrowUpRight, MapPin} from "lucide-react";
import {Link} from "react-router-dom";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {selectedWork} from "../data/selectedWork.js";
import {useLanguage} from "../i18n.jsx";
import "./about.css";

const prismaProject = selectedWork.find(({id}) => id === "prisma");

const copy = {
    de: {
        kicker: "Über mich",
        intro: "Ich entwickle Forschungssoftware und unterrichte IT und Wirtschaft. Mich interessiert, wie Menschen mit KI arbeiten und woran sie erkennen können, ob ein Ergebnis eine Entscheidung trägt.",
        location: "Brisbane, Australien",
        portrait: "Porträt von Carina Sophie Schoppe",
        tablet: "Carina hält im Stehen ein Tablet und einen Stift",
        career: "Lebenslauf ansehen",
        linkedin: "Mein LinkedIn-Profil",
        featureJump: "PRISMA ansehen",
        featureLabel: "Forschungssoftware · Eigenentwicklung",
        featureIntro: "Bei einem systematischen Literaturreview muss sich später nachvollziehen lassen, wie aus den Suchtreffern die ausgewerteten Studien wurden. Dafür habe ich eine quelloffene Python-Anwendung gebaut. Sie lässt sich am Desktop bedienen und über die Kommandozeile mit gespeicherten Einstellungen erneut ausführen.",
        featureSteps: [
            ["Literatur erschließen", "Die Pipeline sammelt Treffer aus wissenschaftlichen Quellen wie OpenAlex, Crossref und PubMed. Über Zitationen findet sie sowohl ältere Quellen als auch neuere Arbeiten, die darauf aufbauen."],
            ["Treffer prüfen", "Sie erkennt Dubletten anhand von DOI und Titel. Bei der Vorauswahl können Regeln oder KI helfen, Titel und Abstracts anhand festgelegter Kriterien zu bewerten."],
            ["Auswahl belegen", "Die Berichte halten die Gründe für Ein- und Ausschlüsse fest. Ein Flussdiagramm zeigt, wie viele Treffer nach den einzelnen Schritten übrig bleiben."],
        ],
        featureDetails: "Zum Projekt",
        featureSource: "Quellcode auf GitHub",
        facts: [
            ["Studium", "M. Sc. Wirtschaftsinformatik und MBA"],
            ["Berufliche Bildung", "Certificate IV in Training and Assessment (TAE40122)"],
            ["Unterrichtssprachen", "Deutsch und Englisch"],
        ],
        approachTitle: "Wie Forschung in meine Lehre einfließt",
        researchTitle: "Generative KI im Arbeitsalltag",
        research: "Für meine Masterarbeit habe ich Studien dazu ausgewertet, wie Beschäftigte in deutschen Unternehmen generative KI in der Kundenkommunikation, Softwareentwicklung und Datenanalyse einsetzen. In meiner MBA-Arbeit habe ich einen Rahmen dafür entwickelt, wie Führungskräfte Zuständigkeiten klären und Risiken beim Einsatz generativer KI beobachten können.",
        teachingTitle: "Sicherheitsentscheidungen begründen",
        teaching: "In meiner Bachelorarbeit habe ich untersucht, wie generative KI Phishing-Nachrichten glaubwürdiger machen kann. Im Unterricht beginne ich mit einem konkreten Fall. Die Teilnehmenden prüfen eine verdächtige E-Mail und begründen, ob sie sie melden würden. Mir ist wichtig, dass sie ihr Urteil auch auf eine anders aufgebaute Nachricht übertragen können.",
        publications: "Meine wissenschaftlichen Arbeiten",
        projects: "Meine Softwareprojekte",
        pathLabel: "Mein Werdegang",
        pathTitle: "Von Paderborn nach Brisbane",
        pathIntro: "Ich bin in Bodenwerder im Weserbergland aufgewachsen und lebe heute in Brisbane.",
        path: [
            ["2019", "Studium und erste Kurse", "An der Universität Paderborn begann ich mit Wirtschaftsinformatik. Im selben Jahr machte ich mich als Dozentin und Beraterin selbstständig."],
            ["2021", "IT-Sicherheit für kleine Unternehmen", "Im Projekt KMUeinfachSicher erarbeitete ich Lernmaterial zu Passwörtern und zum sicheren Umgang mit Daten."],
            ["2022", "Workshops zu Vielfalt", "Bei SCHLAU NRW habe ich ehrenamtlich Schulworkshops zu Vielfalt und Antidiskriminierung begleitet und moderiert."],
            ["2025", "Bachelor und Master", "Ich schloss den Bachelor an der Universität Paderborn und den Master an der IU ab, beide in Wirtschaftsinformatik."],
            ["2026", "Unterricht und Forschung von Brisbane aus", "Ich schloss meinen MBA ab, erwarb eine australische Lehrqualifikation und arbeitete als Forschungsassistentin an der University of Queensland zu Agentic AI."],
        ],
        fullPath: "Mein vollständiger Werdegang",
        nextLabel: "Mehr über meine Arbeit",
        next: [
            ["Kompetenzen", "Meine fachlichen Schwerpunkte", "/skills"],
            ["Qualifikationen", "Abschlüsse und berufliche Nachweise", "/credentials"],
            ["Texte", "Was ich über KI und Bildung schreibe", "/blog"],
            ["Referenzen", "Wo ich unterrichtet und geforscht habe", "/#referenzen"],
        ],
        business: "Luminovia ist das Unternehmen, das ich für Firmentrainings, Workshops und Beratung gegründet habe. Angebote und den Kontakt für Buchungsanfragen finden Sie auf der Unternehmenswebsite.",
        businessLink: "luminovia.org besuchen",
    },
    en: {
        kicker: "About me",
        intro: "I build research software and teach IT and business. I’m interested in how people work with AI and how they tell whether its results are sound enough to act on.",
        location: "Brisbane, Australia",
        portrait: "Portrait of Carina Sophie Schoppe",
        tablet: "Carina standing with a tablet and stylus",
        career: "View my CV",
        linkedin: "My LinkedIn profile",
        featureJump: "Explore PRISMA",
        featureLabel: "Research software I built",
        featureIntro: "A systematic literature review needs a record of how the initial search led to the studies that were analysed. I built an open-source Python application for that workflow. Researchers can use it on the desktop or rerun a review from the command line with saved settings.",
        featureSteps: [
            ["Find the literature", "The pipeline collects records from scholarly sources such as OpenAlex, Crossref and PubMed. It follows citations to find both earlier sources and newer studies that build on them."],
            ["Screen the records", "It identifies duplicates by DOI and title. Rules or AI can assist with screening titles and abstracts against defined criteria."],
            ["Document the selection", "Reports record the reasons for including or excluding studies. A flow diagram shows how many records remain after each stage."],
        ],
        featureDetails: "Project details",
        featureSource: "Source code on GitHub",
        facts: [
            ["Degrees", "MSc in Business Information Systems and MBA"],
            ["Vocational education", "Certificate IV in Training and Assessment (TAE40122)"],
            ["Teaching languages", "English and German"],
        ],
        approachTitle: "How my research informs my teaching",
        researchTitle: "Generative AI at work",
        research: "For my master’s thesis, I reviewed studies on how people in German companies use generative AI in customer communication, software development and data analysis. In my MBA thesis, I developed a framework for how leaders can assign responsibility and monitor risks when using generative AI.",
        teachingTitle: "Explaining a security decision",
        teaching: "My bachelor’s thesis examined how generative AI can make phishing emails more convincing. In class, I start with a case. Learners examine a suspicious email and explain whether they would report it. I want them to be able to apply that judgement when the next message looks different.",
        publications: "Read my academic work",
        projects: "My software projects",
        pathLabel: "My background",
        pathTitle: "From Paderborn to Brisbane",
        pathIntro: "I grew up in Bodenwerder in Germany’s Weserbergland region and now live in Brisbane.",
        path: [
            ["2019", "My degree and my first classes", "I began studying Business Information Systems at the University of Paderborn. That same year I started freelancing as a lecturer and consultant."],
            ["2021", "IT security for small businesses", "At KMUeinfachSicher, I helped write learning materials on password security and handling data safely."],
            ["2022", "Workshops on diversity", "I volunteered with SCHLAU NRW, helping run school workshops on diversity and anti-discrimination."],
            ["2025", "Bachelor’s and master’s degrees", "I completed my bachelor’s at the University of Paderborn and my master’s at IU, both in Business Information Systems."],
            ["2026", "Teaching and research from Brisbane", "I completed my MBA, gained an Australian teaching qualification and worked as a research assistant on agentic AI at The University of Queensland."],
        ],
        fullPath: "See my full timeline",
        nextLabel: "More about my work",
        next: [
            ["Skills", "What I specialise in", "/skills"],
            ["Credentials", "My degrees and professional qualifications", "/credentials"],
            ["Writing", "What I write about AI and education", "/blog"],
            ["References", "Where I’ve taught and worked in research", "/#referenzen"],
        ],
        business: "I founded Luminovia for company training, workshops and consulting. Visit the company website for course information and booking enquiries.",
        businessLink: "Visit luminovia.org",
    },
};

export default function AboutPage() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <main className="about-page">
            <section className="about-hero" aria-labelledby="about-title">
                <div className="about-hero-copy">
                    <p className="about-kicker">{c.kicker}</p>
                    <h1 id="about-title">{PROFILE.name}</h1>
                    <p className="about-lede">{c.intro}</p>
                    <div className="about-hero-actions">
                        <Link className="site-button site-button-primary" to="#forschungssoftware">{c.featureJump}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <Link className="site-text-link" to="/my-way">{c.career}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <a className="site-text-link" href={PROFILE.linkedin}>{c.linkedin}<ArrowUpRight size={17} aria-hidden="true"/></a>
                    </div>
                </div>

                <figure className="about-hero-figure">
                    <Photo
                        src={IMAGES.headshot}
                        alt={c.portrait}
                        className="about-photo about-portrait"
                        width={1365}
                        height={2048}
                        fetchPriority="high"
                        sizes="(min-width: 1120px) 400px, (min-width: 821px) 35vw, (min-width: 540px) 416px, 90vw"
                    />
                    <figcaption>
                        <MapPin size={16} aria-hidden="true"/>{c.location}
                    </figcaption>
                </figure>
            </section>

            <section className="about-feature" id="forschungssoftware" aria-labelledby="about-feature-title" tabIndex={-1}>
                <div>
                    <p className="about-kicker">{c.featureLabel}</p>
                    <h2 id="about-feature-title">PRISMA Literature Review Pipeline</h2>
                    <p className="about-feature-intro">{c.featureIntro}</p>
                    <div className="about-hero-actions">
                        <Link className="site-text-link" to={`/projects#${prismaProject.id}`}>{c.featureDetails}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <a className="site-text-link" href={prismaProject.href}>{c.featureSource}<ArrowUpRight size={17} aria-hidden="true"/></a>
                    </div>
                </div>
                <ol className="about-feature-steps">
                    {c.featureSteps.map(([title, description]) => (
                        <li key={title}><h3>{title}</h3><p>{description}</p></li>
                    ))}
                </ol>
            </section>

            <dl className="about-facts">
                {c.facts.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
            </dl>

            <section className="about-method" aria-labelledby="about-method-title">
                <div className="about-method-art">
                    <Photo
                        src={IMAGES.fullBody}
                        alt={c.tablet}
                        className="about-photo about-fullbody"
                        width={1365}
                        height={2048}
                        sizes="(min-width: 900px) 280px, 250px"
                    />
                </div>
                <div className="about-method-copy">
                    <h2 id="about-method-title">{c.approachTitle}</h2>
                    <h3>{c.researchTitle}</h3>
                    <p>{c.research}</p>
                    <h3>{c.teachingTitle}</h3>
                    <p>{c.teaching}</p>
                    <div className="about-hero-actions about-method-links">
                        <Link className="site-text-link" to="/skills#publications">{c.publications}<ArrowRight size={17} aria-hidden="true"/></Link>
                        <Link className="site-text-link" to="/projects">{c.projects}<ArrowRight size={17} aria-hidden="true"/></Link>
                    </div>
                </div>
            </section>

            <section className="about-path" id="about-path" aria-labelledby="about-path-title" tabIndex={-1}>
                <div className="about-path-heading">
                    <p className="about-kicker">{c.pathLabel}</p>
                    <h2 id="about-path-title">{c.pathTitle}</h2>
                    <p className="about-path-intro">{c.pathIntro}</p>
                    <Link className="site-text-link about-path-link" to="/my-way">{c.fullPath}<ArrowRight size={18} aria-hidden="true"/></Link>
                </div>
                <ol className="about-path-list">
                    {c.path.map(([year, title, description]) => (
                        <li key={year}>
                            <time dateTime={year}>{year}</time>
                            <div><h3>{title}</h3><p>{description}</p></div>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="about-business" aria-labelledby="about-business-title">
                <img src={IMAGES.luminoviaLogoMark} alt="" width="58" height="58" loading="lazy"/>
                <div>
                    <h2 id="about-business-title">Luminovia Training &amp; Consulting</h2>
                    <p>{c.business}</p>
                </div>
                <a className="site-text-link" href={PROFILE.luminovia}>{c.businessLink}<ArrowUpRight size={17} aria-hidden="true"/></a>
            </section>

            <section className="about-next" aria-labelledby="about-next-title">
                <h2 id="about-next-title">{c.nextLabel}</h2>
                <div className="about-next-links">
                    {c.next.map(([title, description, to]) => (
                        <Link key={to} to={to}>
                            <span><strong>{title}</strong><small>{description}</small></span>
                            <ArrowRight size={20} aria-hidden="true"/>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
