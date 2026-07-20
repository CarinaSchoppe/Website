import {useLanguage} from "../i18n.jsx";
import {
    audienceCards as enAudienceCards,
    blogPosts as enBlogPosts,
    capabilities as enCapabilities,
    credentialCategories as enCredentialCategories,
    credentials as enCredentials,
    faqs as enFaqs,
    featuredTrainingTopics as enFeaturedTrainingTopics,
    formats as enFormats,
    formerClients as enFormerClients,
    lifeMilestones as enLifeMilestones,
    selectedProjects as enSelectedProjects,
    serviceOfferings as enServiceOfferings,
    skillGroups as enSkillGroups,
    softwareProjects as enSoftwareProjects,
    teachingProof as enTeachingProof,
    testimonialProof as enTestimonialProof,
    timeline as enTimeline,
    trainingTopics as enTrainingTopics,
    trustSignals as enTrustSignals,
    trustStats as enTrustStats,
} from "./content.js";

const deCredentialCategoryLabels = {
    Teaching: "Lehre",
    Academic: "Akademisch",
    AI: "AI",
    Cybersecurity: "Cybersecurity",
    Entrepreneurship: "Unternehmertum",
    Language: "Sprache",
};

const deFormerClientCopy = {
    "AI certification training": {
        type: "AI-Zertifizierungstraining",
        work: "AI-CERTs-Kurse und zertifizierungsorientiertes AI-Training.",
    },
    "IT retraining and professional education": {
        type: "IT-Umschulung und Weiterbildung",
        work: "Fortbildungs- und Umschulungsdurchführung für Fachinformatiker-Lernende.",
    },
    "Higher education": {
        type: "Hochschule",
        work: "Kurse rund um Softwareentwicklung und angewandte digitale Bildung.",
    },
    "Software, mobile and game development": {
        type: "Software-, Mobile- und Spieleentwicklung",
        work: "Kurse zu Softwareentwicklung, Mobile Development und Unity-Spieleentwicklung.",
    },
    "Cybersecurity training": {
        type: "Cybersecurity-Training",
        work: "Kursdurchführung mit Fokus auf Ethical Hacking und CompTIA PenTest+.",
    },
    "Digital business education": {
        type: "Digitale Business-Bildung",
        work: "Breite Weiterbildungsformate rund um digitale, betriebswirtschaftliche und IT-nahe Themen.",
    },
    "IT seminars and funded training": {
        type: "IT-Seminare und geförderte Weiterbildung",
        work: "Professionelle Trainings zu Projektmanagement, Datenbanken und Softwareentwicklung.",
    },
    "Software and AI courses": {
        type: "Software- und AI-Kurse",
        work: "Softwareentwicklungs- und AI-Kurse für Weiterbildung und Umschulung.",
    },
    "Research assistance": {
        type: "Forschungsassistenz",
        work: "Senior-Research-Assistant-Tätigkeit im Bereich Agentic AI.",
    },
    "Bundeswehr ZAW education": {
        type: "Bundeswehr-ZAW-Bildung",
        work: "IT-nahe Lehre für Bachelor-Professional- und Master-Professional-Wege.",
    },
    "Apprentice training": {
        type: "Azubi-Weiterbildung",
        work: "Azubi-Weiterbildung und Fortbildung in verschiedenen IT- und Berufsbildungsformaten.",
    },
    "Current Scrum training": {
        type: "Aktuelles Scrum-Training",
        work: "Scrum- und Agile-Training für professionelle Teams.",
    },
};

const deCredentialCopy = {
    "DiBak Certified IT Lecturer": {
        title: "DiBak-zertifizierte IT-Dozentin",
        meta: "10k+ Unterrichtsstunden | durchschnittliche Teilnehmerbewertung 4,7/5",
        detail: "Didaktik, Methoden, Lernplattformen, Materialerstellung, Lernchecks und technologiegestützte Lehre.",
    },
    "Certificate IV in Training and Assessment TAE40122": {
        title: "Certificate IV in Training and Assessment TAE40122",
        meta: "RAM Training Services | abgeschlossen im Juni 2026",
        detail: "Australische VET-Qualifikation für Planung, Durchführung und Bewertung kompetenzbasierter Trainings.",
    },
    "SCHLAU NRW Educational Work": {
        title: "SCHLAU NRW Bildungsarbeit",
        meta: "Ehrenamtliche Bildungsarbeit | Dez. 2022 bis Nov. 2023",
        detail: "Workshops, Moderation, Reflexion und professionelle Jugendbildung im Kontext Vielfalt und Antidiskriminierung.",
    },
    "Software Innovation Lab Work Reference": {
        title: "Software Innovation Lab Arbeitsreferenz",
        meta: "Universität Paderborn | Projekt KMUeinfachSicher | 2021",
        detail: "Inhaltliche Arbeit zu IT-Sicherheit, Passwörtern, Passwortmanagern, Datenumgang und didaktischer Aufbereitung für KMU.",
    },
    "Master of Business Administration": {
        title: "Master of Business Administration",
        meta: "IU Internationale Hochschule | abgeschlossen im April 2026 | MBA ohne Major | Gesamtergebnis Gut (2,2)",
        detail: "Management-Kompetenz für IT, Consulting, Business-Strategie und kundennahe Beratung ohne ausgewiesenen Major.",
    },
    "Master of Science in Business Computer Science": {
        title: "Master of Science Wirtschaftsinformatik",
        meta: "IU Internationale Hochschule | abgeschlossen am 27.11.2025 | Gesamtergebnis Gut (2,3)",
        detail: "120 ECTS mit AI, Big Data, Forschungsmethoden, IT-Services, UI/UX, Cloud-Konzepten und Business-IT.",
    },
    "Bachelor of Science in Business Computer Science": {
        title: "Bachelor of Science Wirtschaftsinformatik",
        meta: "Universität Paderborn | abgeschlossen am 05.02.2025",
        detail: "Grundlage aus Business, IT und Informationssystemen für Training, Consulting und softwareorientierte Arbeit.",
    },
    "AI+ Developer™": {
        title: "AI+ Developer™",
        meta: "AI CERTs | verliehen am 05.03.2026",
        detail: "Zertifiziertes AI-Development-Profil für Erklärung und Aufbau AI-gestützter Systeme.",
    },
    "AI+ Researcher™": {
        title: "AI+ Researcher™",
        meta: "AI CERTs | verliehen am 13.03.2026",
        detail: "Research-orientierte AI-Zertifizierung für akademische und angewandte AI-Projektarbeit.",
    },
    "AI+ Prompt Engineer Level 1™": {
        title: "AI+ Prompt Engineer Level 1™",
        meta: "AI CERTs | verliehen am 05.03.2026",
        detail: "Prompt Design, AI-Interaktion und praktische Workflow-Befähigung.",
    },
    "AI+ Executive™": {
        title: "AI+ Executive™",
        meta: "AI CERTs | verliehen am 05.03.2026",
        detail: "AI-Orientierung auf Executive-Niveau für Führung, Adoption und Wertschöpfung.",
    },
    "AI+ Foundation™ / AI+ Everyone™": {
        title: "AI+ Foundation™ / AI+ Everyone™",
        meta: "AI CERTs | verliehen am 05.03.2026",
        detail: "Breite AI-Literacy und grundlegende AI-Kompetenz.",
    },
    "AI+ Project Management Office Practitioner™": {
        title: "AI+ Project Management Office Practitioner™",
        meta: "AI CERTs | verliehen am 14.04.2026",
        detail: "AI-Projektgovernance, PMO-Denken und Umsetzungskontrolle.",
    },
    "AI+ Ethical Hacker™": {
        title: "AI+ Ethical Hacker™",
        meta: "AI CERTs | verliehen am 05.03.2026",
        detail: "AI- und Cybersecurity-Positionierung für Ethical Hacking und defensive Awareness.",
    },
    "TryHackMe Learning Paths": {
        title: "TryHackMe Lernpfade",
        meta: "Web Fundamentals, Cyber Security, Pre Security, SOC Level 1, Complete Beginner, Pentest+, Jr Penetration Tester, Cyber Defense",
        detail: "Praktisches technisches Security-Lernen für Web, SOC, Cyber Defense und Pentest-Grundlagen.",
    },
    "Password Security Certificate": {
        title: "Password Security Certificate",
        meta: "KMU. Einfach Sicher. | 25.03.2021",
        detail: "Trainingszertifikat mit Fokus auf Passwortsicherheit für kleine und mittlere Unternehmen.",
    },
    "garage33 Founding Certificate": {
        title: "garage33 Gründungszertifikat",
        meta: "Design Thinking | Lean Startup | Business Model Canvas | agile Methoden",
        detail: "Entrepreneurship-Training mit Prototypvalidierung, USP, Markt, Finanzmodell und Preisgestaltung.",
    },
    "Top Talent Programme #4": {
        title: "Top Talent Programme #4",
        meta: "Universität Paderborn / garage33 | 2023",
        detail: "Design Thinking, Lean Startup, SDG-Geschäftsmodelle, Pitching, Teamarbeit und Persönlichkeitsentwicklung.",
    },
    "PTE Academic English": {
        title: "PTE Academic English",
        meta: "Overall 90 | gültig bis 18.02.2028",
        detail: "Englischnachweis auf hohem Niveau für internationale Lehre, Consulting und akademische Arbeit.",
    },
};

const deSelectedProjects = [
    {title: "Digitale Bildungssysteme", tag: "Didaktisches Design", stack: "ADDIE | Blended Learning | Erwachsenenbildung", copy: "Kurskonzepte, praktische Übungen, Lernchecks und strukturierte Lernpfade für IT-, Business- und AI-Bildung.", link: enSelectedProjects[0].link},
    {title: "Cybersecurity Learning Labs", tag: "Praxisnachweis", stack: "TryHackMe | SOC | Web Security | Pentest+", copy: "Praktische Security-Lernpfade zu Web Security, SOC-Grundlagen und Penetration Testing.", link: enSelectedProjects[1].link},
    {title: "PISMA Literature Review Pipeline", tag: "AI-gestützte Forschungsautomatisierung", stack: "Python | AI | Forschungswerkzeuge | Datenpipelines", copy: "Ein Forschungswerkzeug für akademische Suche, Paper-Ranking, Abstract-Analyse und strukturierte Daten für systematische Literaturreviews.", link: enSelectedProjects[2].link},
    {title: "AI at Work Research", tag: "AI-Nutzung und HCI", stack: "Systematisches Literaturreview | AI-Nutzung | Mensch-Maschine-Interaktion", copy: "Forschung zu Chancen und Risiken generativer AI in Organisationen, mit Schwerpunkt auf der Mensch-Maschine-Interaktion im Arbeitsalltag.", link: enSelectedProjects[3].link},
];

const deSoftwareProjects = [
    {name: "Automatic Mail Sender System", type: "Python-Automatisierung", status: "Aktualisiert Apr. 2026", description: "SMTP-basiertes Outreach-Automationssystem für Empfängerlisten, Templates und Versandworkflows.", stack: ["Python", "SMTP", "Automatisierung", "GUI"], href: enSoftwareProjects[0].href},
    {name: "PISMA Literature Review Pipeline", type: "AI-gestützte Forschungsautomatisierung", status: "Aktualisiert Apr. 2026", description: "Literaturreview-Workflow für akademische Suche, Zitationsverfolgung und die Relevanzanalyse von Titeln und Abstracts.", stack: ["Python", "AI", "Forschung", "Datenpipelines"], href: enSoftwareProjects[1].href},
    {name: "OneDrive Duplicate Cleaner", type: "Datenbereinigungs-Notebook", status: "Aktualisiert März 2026", description: "Notebook zur Erkennung und Bereinigung doppelter Dateien, das den manuellen Wartungsaufwand in OneDrive reduziert.", stack: ["Jupyter Notebook", "Python", "Datenbereinigung"], href: enSoftwareProjects[2].href},
    {name: "Skylife", type: "Minecraft / PaperMC Plugin", status: "Aktualisiert Feb. 2026", description: "Umfangreiches PaperMC-PvP-Minispiel mit Lobby-to-Match-Flow, Loadouts, Ranking-UI, Coin-Rewards und Spielerprogression.", stack: ["Kotlin", "PaperMC", "Minecraft", "Game Systems"], href: enSoftwareProjects[3].href},
    {name: "theHunter", type: "Kotlin-Plugin-Recode", status: "Aktualisiert Juli 2025", description: "Überarbeiteter Kotlin-Recode eines theHunter-Plugins mit Game-Plugin-Architektur und Kotlin-Migrationsarbeit.", stack: ["Kotlin", "Pluginentwicklung", "Game Logic"], href: enSoftwareProjects[4].href},
    {name: "Soundboardz", type: "Android-App", status: "Archivprojekt", description: "Android-Soundboard-App und Beispiel für Mobile-Kotlin-Entwicklung aus früherer Portfolioarbeit.", stack: ["Kotlin", "Android", "Mobile App"], href: enSoftwareProjects[5].href},
    {name: "Color Sweaper", type: "Java-Desktopspiel", status: "Archivprojekt", description: "Swing-basiertes Minigame als ältere Java-Desktop-UI- und Game-Logic-Praxis.", stack: ["Java", "Swing", "Spieleentwicklung"], href: enSoftwareProjects[6].href},
    {name: "Remote Client Server", type: "Minecraft Remote Tooling", status: "Archivprojekt", description: "Remote-Access-Tooling für Minecraft-Paper-Umgebungen aus früherer Server- und Plugin-Experimentierarbeit.", stack: ["Kotlin", "Paper", "Remote Tooling"], href: enSoftwareProjects[7].href},
];

const deTimeline = [
    {year: "2021", title: "IT-Security-Lerninhalte", copy: "Didaktische IT-Security-Inhalte für KMU im Projekt KMUeinfachSicher an der Universität Paderborn."},
    {year: "2022-2023", title: "Bildung und Moderation", copy: "Cybersecurity-Grundlagen vermittelt und Bildungsworkshops sowie Moderationsarbeit bei SCHLAU NRW unterstützt."},
    {year: "2023-2024", title: "Unternehmertum und Lerndesign", copy: "Teilnahme am Top Talent Programme und an garage33 mit Design Thinking, Lean Startup, Pitching und agilen Arbeitsmethoden."},
    {year: "2025", title: "Akademisches Profil in Wirtschaftsinformatik", copy: "B.Sc. und M.Sc. mit Schwerpunkten in AI, Daten, HCI, IT-Management und Digitalisierung abgeschlossen."},
    {year: "2026", title: "Internationale Lehre aus Brisbane", copy: "MBA im April und Certificate IV in Training and Assessment TAE40122 im Juni abgeschlossen; seitdem Ausbau eines deutsch- und englischsprachigen Lehrprofils aus Brisbane."},
];

const de = {
    trustStats: [
        {value: "10k+", label: "dokumentierte Unterrichtsstunden"},
        {value: "4,7/5", label: "durchschnittliche Teilnehmerbewertung"},
        {value: "DE / EN", label: "Durchführung auf Deutsch & Englisch"},
        {value: "B.Sc. | M.Sc. | MBA | TAE", label: "Wirtschaftsinformatik, Management und VET-Training"},
    ],
    formats: [
        {title: "90-Minuten-Impulsvortrag", label: "Schnelle Orientierung", copy: "Ideal für Management-Briefings, interne Lerntage oder Events, bei denen ein klarer Überblick und nächste Schritte gebraucht werden."},
        {title: "Halbtages- / Tagesworkshop", label: "Praxisfokus", copy: "Für Teams, die mit Tools, Vorlagen, Workflows und genug Sicherheit für die direkte Anwendung rausgehen sollen."},
        {title: "2-5 Tage Intensivtraining", label: "Skill-Aufbau", copy: "Für tieferes Upskilling in AI, Python, SQL, Cybersecurity, Cloud Basics, Business IT oder digitaler Transformation."},
        {title: "Mehrwöchige Kursdurchführung", label: "Bildungsanbieter-Format", copy: "Strukturierte Durchführung für Akademien, Online-Anbieter, berufliche Bildung, Bootcamps und Weiterbildungsprogramme."},
        {title: "Curriculum & Materialdesign", label: "Instructional Design", copy: "Konzeption von Kursplänen, Übungen, Lernchecks, Slides, Labs und verständlicher Dokumentation."},
        {title: "Prüfungs- / Zertifikatsvorbereitung", label: "Gezielte Vorbereitung", copy: "Fokussierte Vorbereitung auf Cybersecurity-, AI-, Programmier- oder Business-IT-Themen mit Übungen und Feedback."},
    ],
    trainingTopics: [
        {group: "AI & Zukunftskompetenzen", items: ["AI Literacy", "Prompt Engineering", "Generative AI Workflows", "Responsible AI", "AI Governance Basics", "AI für Office-Produktivitaet"]},
        {group: "Software & Daten", items: ["Java / Python / C# / Kotlin", "SQL und Datenbanken", "APIs und Automatisierung", "Data Analyst / Scientist / Engineer", "Big-Data-Konzepte", "UI/UX-Grundlagen"]},
        {group: "Cybersecurity", items: ["Cybersecurity Awareness", "Web Security", "SOC-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Ethical-Hacking-Grundlagen", "Passwort- und Datensicherheit"]},
        {group: "Business IT", items: ["Wirtschaftsinformatik", "IT Service Management", "Cloud-Konzepte", "Digitale Transformation", "SCRUM und agiles Arbeiten", "Prozessoptimierung"]},
        {group: "Berufliche Bildung & IHK", items: ["Fachinformatiker Ausbildung", "Fachinformatiker Umschulung", "Bürokaufleute / Büromanagement", "Teilqualifikation", "IHK Prüfungsvorbereitung", "Erwachsenenbildung"]},
        {group: "Recht, Coaching & Vortraege", items: ["Digitales Recht und DSGVO", "AI Act und Cloud Act", "IT-Recht Awareness", "Coaching", "Keynote Speaker", "Gastvorträge"]},
    ],
    serviceOfferings: [
        {title: "AI & GenAI Training", description: "Praxisnahes Training zu generativer AI, Business Use Cases, Grenzen, Risiken und verantwortungsvoller Nutzung im Arbeitsalltag.", audience: "Unternehmen, Bildungsanbieter, Hochschulen und öffentliche Teams", format: "Remote-Live-Workshop, Trainingstag oder mehrtägiger Kurs", duration: "90 Minuten bis 3 Tage", outcomes: ["GenAI-Fähigkeiten und Grenzen verstehen", "realistische Use Cases erkennen", "Qualitäts- und Risikochecks anwenden"]},
        {title: "AI Literacy für Teams", description: "Eine klare Grundlage für Teams, die gemeinsame Sprache, praktische Sicherheit und sinnvolle AI-Nutzungsregeln brauchen.", audience: "Nicht-technische Teams, L&D, Führungskräfte und gemischte Lerngruppen", format: "Interaktiver Workshop oder internes Enablement-Programm", duration: "Halbtags bis 2 Tage", outcomes: ["AI-Tools sicherer nutzen", "schwache Outputs erkennen", "teamweite Nutzungsleitlinien entwickeln"]},
        {title: "Prompt Engineering & Agentische Workflows", description: "Strukturiertes Prompting, Workflow-Zerlegung und betreute agentische Arbeitsmuster für reale Business-Prozesse.", audience: "Wissensarbeitende, Projektteams, AI Champions und Transformationsteams", format: "Praxisworkshop mit Workflow-Übungen", duration: "1 bis 3 Tage", outcomes: ["wiederholbare Prompts entwerfen", "agentenfähige Aufgaben strukturieren", "menschliche Review-Punkte definieren"]},
        {title: "AI Governance & Responsible AI", description: "Training zu Verantwortlichkeit, Risikoklassen, Datenhandhabung, menschlicher Aufsicht und praktischen Governance-Routinen.", audience: "Leadership, PMOs, Compliance-nahe Teams und Bildungseinrichtungen", format: "Executive Briefing, Workshop oder Governance-Training", duration: "90 Minuten bis 2 Tage", outcomes: ["AI-Risiken klarer bewerten", "Governance-Verantwortung definieren", "praktische Review-Routinen aufbauen"]},
        {title: "Python, SQL & Datenkompetenz", description: "Angewandtes Programmier- und Datentraining für Automatisierung, Analyse und Datenbanken.", audience: "Erwachsene Lernende, Bootcamps, Umschulungen und interne Upskilling-Gruppen", format: "Live-Kurs, Bootcamp, Lab-Serie oder Prüfungsvorbereitung", duration: "2 Tage bis mehrwöchiger Kurs", outcomes: ["einfache Skripte schreiben", "Daten abfragen und modellieren", "Praxisvertrauen durch Übungen aufbauen"]},
        {title: "Softwareentwicklung & APIs", description: "Grundlagen und angewandte Trainings zu Programmierung, API-Denken, Backend-Konzepten und Softwareprojekt-Struktur.", audience: "Fachinformatiker-Kohorten, Coding Schools, Junior Developer und Business-IT-Lernende", format: "Kursdurchführung, Lab-Training oder Projektworkshop", duration: "2 Tage bis mehrwöchiger Kurs", outcomes: ["Softwarearchitektur-Grundlagen verstehen", "mit APIs arbeiten", "Code mit realen Workflows verbinden"]},
        {title: "Fachinformatiker Ausbildung & Umschulung", description: "IHK-nahes Training für Fachinformatiker-Lernende zu Softwareentwicklung, Systemen, Netzwerken, Datenbanken, Security, IT-Projekten und Prüfungsvorbereitung.", audience: "AZAV-Anbieter, Auszubildende, Umschulungskohorten, Berufsschulen und IHK-nahe Programme", format: "Moduldurchführung, Teilqualifikation, Projektcoaching oder Prüfungsvorbereitung", duration: "Einzelmodul bis mehrwöchige Durchführung", outcomes: ["IHK-nahe IT-Lernfelder abdecken", "Projektdokumentation vorbereiten", "Prüfungs- und Berufsfähigkeit stärken"]},
        {title: "Bürokaufleute & Büromanagement IHK", description: "Training für Kaufmann/Kauffrau für Büromanagement, Bürokaufleute und Office-Management-Lernende rund um Geschäftsprozesse, Kommunikation und digitale Büroarbeit.", audience: "Office-Management-Lernende, kaufmännische Umschulungen, Teilqualifikationsgruppen und Bildungsanbieter", format: "Kursdurchführung, Prüfungsvorbereitung, digitaler Office-Workshop oder Geschäftsprozess-Modul", duration: "Einzeltermine bis mehrwöchige Begleitung", outcomes: ["Büro- und Geschäftsprozesse verstehen", "digitale Tools verantwortungsvoll nutzen", "IHK-nahe Fallaufgaben vorbereiten"]},
        {
            title: "Cybersecurity & Pentesting-Grundlagen",
            description: "Security Awareness und technische Grundlagen für Web Security, Ethical Hacking, SOC-Grundlagen und defensive Denkweise.",
            audience: "IT-Lernende, Umschulungsanbieter, Unternehmen und gemischte technische Gruppen",
            format: "Remote-Live-Training, Lab-Kurs oder Zertifikatsvorbereitung",
            duration: "1 Tag bis mehrwöchiger Kurs",
            outcomes: ["häufige Angriffspfade erkennen", "sichere Arbeitsgewohnheiten anwenden", "Pentesting- und SOC-Grundlagen verstehen"]
        },
        {title: "Scrum, Agile & digitale Projektarbeit", description: "Praktisches Projektarbeitstraining für klarere Zusammenarbeit, Delivery-Struktur und AI-bewusste Koordination.", audience: "Projektteams, Auszubildende, KMU, Bildungsanbieter und digitale Teams", format: "Workshop, Trainingstag oder angewandtes Projekt-Lab", duration: "Halbtags bis 2 Tage", outcomes: ["agile Begriffe korrekt nutzen", "Arbeit sichtbar strukturieren", "Kommunikation und Reviews verbessern"]},
        {title: "Digitales Recht, DSGVO & AI Act Awareness", description: "Awareness-Training zu Arbeitsrecht-, Wirtschaftsrecht-, Privatrecht- und IT-Recht-Schnittstellen, DSGVO/GDPR, AI Act, Cloud Act und digitalen Compliance-Fragen.", audience: "AI-Adoption-Teams, Bildungsanbieter, Projektteams, Öffentliche Organisationen und Nicht-Juristinnen", format: "Awareness-Training, Executive Briefing, Workshop oder compliance-nahes Lernmodul", duration: "90 Minuten bis 2 Tage", outcomes: ["rechtliche Risikofragen erkennen", "Governance mit Datenschutz verbinden", "wissen, wann juristische Prüfung nötig ist"]},
        {title: "Wirtschaftsinformatik & digitale Transformation", description: "Business-IT-Training zu Prozessen, Systemen, Daten, IT-Management und organisatorischem Wandel.", audience: "Hochschulen, Akademien, Unternehmen und berufliche Weiterbildung", format: "Vorlesungsreihe, Moduldurchführung oder Corporate Workshop", duration: "1 Tag bis mehrwöchiges Modul", outcomes: ["IT- und Business-Entscheidungen verbinden", "digitale Prozesse analysieren", "Transformations-Trade-offs verstehen"]},
        {
            title: "Curriculum Design & Blended Learning",
            description: "Unterstützung beim Aufbau von Lernpfaden, Übungen, Slides, Labs, Assessment-Logik und Blended-Learning-Formaten.",
            audience: "Bildungsanbieter, Hochschulen, Bootcamps und Corporate Learning Teams",
            format: "Consulting-Sprint, Curriculum-Workshop oder Materialdesign",
            duration: "1 Tag bis projektbasierte Begleitung",
            outcomes: ["strukturierte Kurspläne entwickeln", "Lernaktivierung verbessern", "Materialien an Outcomes ausrichten"]
        },
        {title: "Coaching, Keynotes & Expert Talks", description: "Coaching, Keynotes, Gastvorträge und Expert Talks zu IT, Cybersecurity, Wirtschaftsinformatik, digitaler Transformation, digitalem Recht und moderner Bildung.", audience: "Unternehmen, Hochschulen, Konferenzen, Leadership-Teams, Bildungsanbieter und Veranstalterinnen", format: "Keynote, Expert Talk, Gastvortrag, Coaching Session, Leadership Briefing oder Panel Input", duration: "30 Minuten bis Tagesformat", outcomes: ["komplexe Themen verständlich machen", "klare nächste Schritte geben", "Führungskräfte, Trainerinnen und Teams unterstützen"]},
    ],
    featuredTrainingTopics: [],
    trustSignals: [
        {title: "Akademischer Hintergrund", copy: "B.Sc. und M.Sc. in Wirtschaftsinformatik sowie MBA ohne Major, abgeschlossen im April 2026."},
        {title: "Lehrerfahrung", copy: "10k+ dokumentierte Unterrichtsstunden mit einer durchschnittlichen Teilnehmerbewertung von 4,7/5."},
        {title: "Australische Trainingsqualifikation", copy: "Certificate IV in Training and Assessment TAE40122, abgeschlossen bei RAM Training Services im Juni 2026."},
        {title: "Expertisebereiche", copy: "AI, Cybersecurity, Softwareentwicklung, Wirtschaftsinformatik, Daten, agile Arbeit und digitale Bildung."},
        {title: "Sprachen", copy: "Training auf Deutsch und Englisch, ergänzt durch Spanisch-Erfahrung."},
        {title: "Remote-Unterricht", copy: "Remote-Live-Training aus Brisbane für Europa, Australien und die Welt."},
        {title: "Sektor-Fit", copy: "Erfahrung mit Corporate Training, Hochschulen, Umschulung, Bootcamps und professionellen Akademien."},
    ],
    capabilities: ["AI Literacy", "Prompt Engineering", "Generative AI Workflows", "Responsible AI", "AI Governance", "Python", "Java", "C#", "Kotlin", "SQL", "Datenbanken", "APIs & Automatisierung", "Fachinformatiker", "Bürokaufleute", "Data Analyst", "Data Scientist", "Data Engineer", "Cybersecurity Awareness", "Web Security", "SOC-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Ethical Hacking", "DSGVO", "AI Act", "Cloud Act", "IT-Recht Awareness", "Cloud-Konzepte", "Wirtschaftsinformatik", "IT Service Management", "Digitale Transformation", "SCRUM", "Projektmanagement", "New Work", "Blended Learning", "Curriculum Design", "Erwachsenenbildung", "Coaching", "Keynote Speaker"],
    teachingProof: [
        {title: "Zertifizierte IT-Dozentin", value: "DiBak Trainer Certification", copy: "Umfasst Didaktik, Pädagogik, Lernplattformen, Materialerstellung, Lernchecks, technisches Troubleshooting und Qualitätssicherung."},
        {title: "Australisches VET-Training", value: "TAE40122 Certificate IV", copy: "Certificate IV in Training and Assessment bei RAM Training Services im Juni 2026 abgeschlossen."},
        {title: "Teilnehmerbewertung", value: "4,7 / 5", copy: "Dokumentierte Durchschnittsbewertung nach 10k+ Unterrichtsstunden und starke Rückmeldung zur praktischen Vermittlung."},
        {title: "Stärke in Erwachsenenbildung", value: "Theorie + Praxis", copy: "Lernformate mit Beispielen, Übungen, Recaps, Aktivierung, Transferaufgaben und klaren Ergebnissen."},
        {title: "Internationale Durchführung", value: "Remote-first", copy: "Sitz in Brisbane, Online-Trainings für Europa, Australien und die Welt auf Deutsch oder Englisch."},
    ],
    audienceCards: [
        {title: "Bildungsanbieter", copy: "Zuverlässige Remote-Dozentin für strukturierte IT-, Cybersecurity- und Business-Technology-Kurse mit Erwachsenen.", bullets: ["mehrwöchige Kurse", "klare Materialstruktur", "Lernaktivierung", "Deutsch / Englisch"]},
        {title: "Hochschulen", copy: "Gastvorträge und Future-Skills-Formate mit akademischer Glaubwürdigkeit und praktischen Beispielen.", bullets: ["Gastvorträge", "AI und Digitalisierung", "verständliche Erklärungen", "moderne Lernformate"]},
        {title: "Corporate-Learning-Teams", copy: "Praxisnahes Upskilling für Teams, die AI, Daten, Automatisierung oder Cybersecurity sicherer im Alltag einsetzen wollen.", bullets: ["Team-Workshops", "Hands-on-Workflows", "Risikobewusstsein", "Transfer"]},
        {title: "Öffentliche Organisationen", copy: "Klare digitale Kompetenzentwicklung für Teams mit Bedarf an Responsible AI, Security Awareness und Prozessverständnis.", bullets: ["Responsible AI", "Datenbewusstsein", "Governance", "zugänglich"]},
        {title: "Startups & KMU", copy: "Fokussierte Trainings für kleinere Teams, die digitale Skills ohne schwerfällige Enterprise-Formate brauchen.", bullets: ["kompakt", "businessnah", "Tool-Sicherheit", "direkt anwendbar"]},
        {title: "Bootcamps & Coding-Schulen", copy: "Kursdurchführung und Lab-Support für Python, SQL, APIs, Softwareentwicklung und Cybersecurity-Grundlagen.", bullets: ["Hands-on-Labs", "Lernsupport", "Coding-Praxis", "Prüfungsvorbereitung"]},
        {title: "DACH-Bildungsanbieter", copy: "Remote-Dozentin für deutsche, schweizerische und österreichische Anbieter, die professionelle deutschsprachige Lehre brauchen.", bullets: ["deutsche Durchführung", "Remote-Kursraum", "Europa-Zeiten", "Bildungssektor"]},
        {title: "Internationale Kunden", copy: "Durchführung auf Deutsch & Englisch für verteilte Teams und Bildungspartner in Europa, Australien und weltweit.", bullets: ["Deutsch & Englisch", "zeitzonenbewusst", "remote-first", "international"]},
    ],
    credentials: enCredentials.map((credential) => ({
        ...credential,
        category: deCredentialCategoryLabels[credential.category] || credential.category,
        ...(deCredentialCopy[credential.title] || {}),
    })),
    credentialCategories: ["Alle", "Lehre", "Akademisch", "AI", "Cybersecurity", "Unternehmertum", "Sprache"],
    selectedProjects: deSelectedProjects,
    formerClients: enFormerClients.map((client) => ({
        ...client,
        type: deFormerClientCopy[client.type]?.type || client.type,
        work: deFormerClientCopy[client.type]?.work || client.work,
    })),
    testimonialProof: [
        {title: "Vertrauen von Bildungsanbietern", quote: "Wiederholte Buchungen in Weiterbildung, Umschulung, Akademien und Hochschulen zeigen, dass meine Durchführung für strukturierte Erwachsenenbildung funktioniert."},
        {title: "Breit genug für gemischte IT-Gruppen", quote: "Von Fachinformatiker-Kohorten bis AI-Zertifikatsgruppen kann ich Tiefe, Tempo und Beispiele an die Gruppe anpassen."},
        {title: "Praxis statt Folienvorlesen", quote: "Meine Kurse fokussieren Übungen, Implementation Thinking, Lernaktivierung und klaren Transfer in Arbeit oder Prüfung."},
    ],
    lifeMilestones: [
        {year: "2000", title: "Aufgewachsen in Bodenwerder", category: "Herkunft", copy: "Aufgewachsen im Weserbergland nahe Hameln, mit früher Neugier für Technik, Lernen und eigenständiges Arbeiten."},
        {year: "2019", title: "Wirtschaftsinformatik-Studium", category: "Akademischer Start", copy: "Wirtschaftsinformatik an der Universität Paderborn begonnen und Wirtschaft, IT, Systemdenken und digitale Transformation von Anfang an verbunden."},
        {year: "2019", title: "Freelance Dozentin und Consultant für IT und Wirtschaft", category: "Start Selbstständigkeit", copy: "Im Oktober 2019 selbstständig gestartet als Freelance Lecturer und Consultant für IT- und Wirtschaftsthemen."},
        {year: "2011-2019", title: "Gymnasium am Internat Solling", category: "Schule", copy: "Schulzeit in Holzminden mit breiter Allgemeinbildung, Selbstständigkeit, internationaler Orientierung und frühem IT-Interesse."},
        {year: "2013-2018", title: "Sprachaufenthalte in Australien, England und Spanien", category: "International", copy: "Mehrere Sprach- und Kulturaufenthalte haben Kommunikation, Perspektivwechsel und internationales Arbeiten geprägt."},
        {year: "2021", title: "Hotelverwaltung und Unternehmensstruktur", category: "Management", copy: "Mitwirkung an administrativen und strukturellen Aufgaben im Umfeld der Baron von Münchhausen Hotelverwaltungs-GmbH."},
        {year: "2023", title: "bytes Coding GmbH", category: "Software und Bildung", copy: "Softwareentwicklung und Bildungsarbeit über bytes Coding erweitert und technische Umsetzung stärker mit Trainingsbedarf verbunden."},
        {year: "2025", title: "Bachelor und Master in Wirtschaftsinformatik", category: "Akademisch", copy: "Akademische Grundlage in Wirtschaftsinformatik, AI, Daten, HCI, IT-Management und digitaler Transformation abgeschlossen."},
        {year: "2026", title: "MBA, TAE40122 und internationales Trainingsprofil", category: "Aktuell", copy: "MBA ohne Major im April abgeschlossen, Certificate IV in Training and Assessment TAE40122 im Juni bei RAM Training Services abgeschlossen, nach Brisbane gezogen und die Arbeit auf internationale IT- und Business-Technology-Bildung ausgerichtet."},
    ],
    skillGroups: [
        {group: "Didaktik und Lerndesign", items: ["Erwachsenenbildung", "Curriculum Design", "Blended Learning", "Prüfungsvorbereitung", "Lernaktivierung", "Workshop-Facilitation", "Materialdesign", "Remote-Unterricht"]},
        {group: "AI und Automatisierung", items: ["AI Literacy", "Prompt Engineering", "Agentic AI", "Generative AI Workflows", "Responsible AI", "AI Governance Basics", "LangChain-Konzepte", "Research Automation"]},
        {group: "Softwareentwicklung", items: ["Python", "Java", "Kotlin", "C#", "Rust", "Dart", "Flutter", "Android", "APIs", "Microservices", "Spring", "React-Grundlagen"]},
        {group: "Daten und Systeme", items: ["SQL", "MySQL", "MongoDB", "Redis", "Datenmodellierung", "Data Pipelines", "Docker", "Kubernetes", "Ubuntu", "Cloud-Konzepte"]},
        {group: "Cybersecurity", items: ["Security Awareness", "Ethical-Hacking-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Web Security", "SOC-Grundlagen", "Kali Linux", "Passwortsicherheit", "Risikokommunikation"]},
        {group: "Business und Management", items: ["Digitale Transformation", "Wirtschaftsinformatik", "Projektmanagement", "SCRUM", "IT Service Management", "Prozessoptimierung", "Entrepreneurship", "Stakeholder-Kommunikation"]},
        {group: "Berufliche Bildung, Recht und Vortraege", items: ["Fachinformatiker Ausbildung", "Fachinformatiker Umschulung", "Bürokaufleute", "DSGVO", "AI Act", "Cloud Act", "IT-Recht Awareness", "Coaching", "Keynote Speaker", "Gastvorträge"]},
        {group: "Kreativ- und Webtools", items: ["WordPress", "Elementor", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Audition", "UI/UX-Grundlagen"]},
        {group: "Sprachen und Kommunikation", items: ["Deutsch", "Englisch", "Spanisch-Grundlagen", "Technische Erklärung", "Akademisches Schreiben", "Business-Kommunikation", "Präsentation", "Public Speaking"]},
    ],
    blogPosts: [
        {
            ...enBlogPosts[0],
            title: "Agentic AI: vom beeindruckenden Demo zur delegierten Arbeit",
            category: "Agentic AI",
            readTime: "8 Min. Lesezeit",
            excerpt: "Agentic AI ist nicht nur ein besserer Chatbot. Es ist der Wechsel von Antworten hin zu Systemen, die planen, Tools nutzen, Freigaben einholen und Arbeit in klaren Grenzen voranbringen.",
            body: [
                {
                    heading: "Die wichtige Frage lautet nicht mehr: Kann AI darauf antworten?",
                    paragraphs: ["Die erste Welle generativer AI hat Wissensarbeit elastischer gemacht. Entwürfe wurden schneller, Zusammenfassungen billiger und Recherche begann plötzlich mit einem Dialog statt mit einer leeren Seite. Agentic AI verschiebt die Frage erneut. Es geht nicht mehr nur darum, ob ein Modell eine gute Antwort erzeugt, sondern ob ein AI-System einen Workflow durchlaufen kann: Kontext prüfen, Werkzeuge auswählen, Schritte koordinieren, Freigaben anfordern und ein nachvollziehbares Ergebnis hinterlassen.", "Das klingt groß, ist in der Praxis aber oft sehr konkret. Ein brauchbarer Agent muss nicht das Unternehmen führen. Er kann ein Renewal-Risk-Briefing vorbereiten, Support-Tickets vorsortieren, Richtlinien vergleichen, Projektupdates aus vorhandenen Artefakten entwerfen oder die Mitte eines Research-Prozesses koordinieren. Der Unterschied: Das System erzeugt nicht mehr nur Text. Es handelt innerhalb eines begrenzten Prozesses."]
                },
                {
                    heading: "Agents sind Workflow-Design, keine magische Autonomie",
                    paragraphs: ["Die stärksten Agentic-AI-Projekte starten mit einer Workflow-Karte, nicht mit der Modellwahl. Welche Informationen werden gebraucht? Welche Tools dürfen genutzt werden? Wo ist menschliche Freigabe nötig? Was gilt als korrektes Ergebnis? Was muss geloggt werden? Diese Fragen klingen operativ, weil sie operativ sind. Agentic AI wird wertvoll, wenn sie Handoffs reduziert, Entscheidungen klarer macht und wiederholbare Arbeit verlässlicher gestaltet.", "Genau hier scheitern viele Projekte. Ein Chatbot kann unscharfen Kontext überleben, weil ein Mensch das Ergebnis interpretiert. Ein Agent, der Aktionen auslöst, braucht sauberere Daten, klarere Berechtigungen und bessere Leitplanken. Wenn Kundendaten doppelt sind, Wissensdatenbanken veraltet und Verantwortlichkeiten unklar sind, repariert der Agent nicht die Organisation. Er macht das Chaos nur schneller sichtbar."]
                },
                {
                    heading: "Die neue Fähigkeit heißt Delegationskompetenz",
                    paragraphs: ["Prompt Engineering wird oft so vermittelt, als ginge es hauptsächlich um Formulierungen. In agentischen Systemen ist die tiefere Fähigkeit Delegationskompetenz: wissen, was man abgibt, wie viel Freiheit sinnvoll ist, welche Prüfungen nötig sind und wie Ergebnisse bewertet werden. Ein Human-in-the-loop-Design ist kein Zeichen schwacher Automatisierung. Es ist der Weg, wie ernsthafte Automatisierung Vertrauen verdient.", "Für Teams heißt das: Training muss über Tool-Demos hinausgehen. Lernende müssen üben, Arbeit in agentenfähige Aufgaben zu zerlegen, Akzeptanzkriterien zu definieren, riskante Autonomie zu erkennen und Eskalationspunkte zu gestalten. Der zukünftige AI-Nutzer ist weniger Passagier und mehr Prozessdesigner."]
                },
                {
                    heading: "Womit ich anfangen würde",
                    paragraphs: ["In den meisten Organisationen würde ich nicht mit einem vollautonomen Agenten starten. Ich würde mit einem engen Assistenten beginnen, der Arbeit für eine menschliche Entscheidung vorbereitet: Meeting-Prep, Trainingsmaterial-Anpassung, wöchentliche Projektrisikoanalyse oder Research-Screening. Der Agent sollte in einem kleinen Workflow arbeiten, freigegebene Quellen nutzen, seine Grundlage sichtbar machen und Annahme, Ablehnung oder Korrektur einfach machen.", "Das ist weniger spektakulär als ein digitaler Mitarbeiter, trainiert aber die richtigen Muskeln: Datenqualität, Governance, Review-Routinen und Workflow-Redesign. Wenn diese Muskeln da sind, kann Autonomie vorsichtig wachsen. Agentic AI ist am stärksten, wenn sie als Organisationsdesign mit Software darin verstanden wird."]
                },
            ],
            takeaway: "Das eigentliche Versprechen von Agentic AI ist nicht, Urteilskraft zu ersetzen. Es geht darum, kompetenten Menschen bessere Delegation zu ermöglichen, während Kontext, Verantwortung und Qualität sichtbar bleiben.",
        },
        {
            ...enBlogPosts[1],
            title: "Projektmanagement im Zeitalter von AI: weniger Verwaltung, mehr Urteilskraft",
            category: "Projektmanagement",
            readTime: "7 Min. Lesezeit",
            excerpt: "AI schafft Projektmanagement nicht ab. Sie verschiebt den Schwerpunkt von manueller Koordination hin zu Sinnstiftung, Governance und Vertrauen zwischen Stakeholdern.",
            body: [
                {
                    heading: "Der alte Projektmanager war eine menschliche Integrationsschicht",
                    paragraphs: ["Projektmanagement trägt seit langem einen leisen Widerspruch in sich. Die Arbeit soll strategisch sein, aber der Kalender ist voller Administration: Statusberichte, Meetingnotizen, Risikoregister, Follow-ups, Budgetchecks, Backlog-Pflege und Stakeholder-Updates. Viel davon ist wichtig. Vieles davon ist aber auch wiederholbar genug, dass AI es direkt unterstützen kann.", "Die Veränderung besteht nicht nur darin, dass Projektmanager schneller schreiben können. Tiefer geht es darum, dass AI das Nervensystem eines Projekts pflegen kann: Was hat sich verändert? Was ist blockiert? Welches Risiko entsteht gerade? Wer braucht eine Entscheidung? Welche Annahme stimmt nicht mehr?"]
                },
                {
                    heading: "Von Vergangenheitsbericht zu Gegenwartssinn",
                    paragraphs: ["Klassisches Reporting beschreibt oft, was letzte Woche passiert ist. AI-gestützte Projektarbeit kann näher an die Gegenwart rücken. Meetingtranskripte werden zu Entscheidungen und Aufgaben. Lange Mailthreads werden zu Stakeholder-Zusammenfassungen. Jira- oder GitHub-Aktivität wird zu Delivery-Signalen. Risiko-Workshops können durch Muster aus früheren Projekten unterstützt werden.", "Dadurch wird Projektmanagement nicht unwichtiger. Schwaches Projektmanagement wird sichtbarer. Wenn Rollen unklar, Erfolgskriterien vage und Governance nur Theater sind, erzeugt AI vor allem polierte Verwirrung. Wenn Artefakte sauber sind und Entscheidungen wirklich getroffen werden, kann AI Reibung deutlich senken."]
                },
                {
                    heading: "Die Rolle wird menschlicher, nicht weniger menschlich",
                    paragraphs: ["Der wertvolle Projektmanager der AI-Ära ist nicht die Person, die die schönsten Statusfolien manuell formatiert. Es ist die Person, die schwache Signale interpretiert, unrealistische Pläne herausfordert, Trade-offs moderiert und Menschen ausrichtet, wenn das Projekt unbequem wird. AI kann eine Stakeholder-Mail entwerfen. Sie übernimmt nicht die Verantwortung für die Beziehung hinter dieser Mail.", "Deshalb muss AI Literacy für Projektteams Governance und Kommunikation enthalten, nicht nur Toolnutzung. Teams müssen wissen, wann AI-Output gut genug ist, wann Evidenz fehlt, wann sensible Daten draußen bleiben und wann ein menschliches Gespräch die eigentliche Arbeit ist."]
                },
                {
                    heading: "Ein praktischer AI-Stack für Projektmanagement",
                    paragraphs: ["Ein guter Start ist einfach: automatische Meetingzusammenfassungen, Action-Extraction, Risikolog-Entwürfe, Stakeholder-Update-Drafts, Requirements-Vergleiche und Retrospektiven. Das sind keine glamourösen Use Cases, aber sie entfernen administrativen Ballast, der Projektmanager von Urteilskraftarbeit fernhält.", "Die nächste Stufe ist spannender: AI-gestützte Szenarioplanung, Portfolio-Priorisierung, Abhängigkeitsanalyse und Frühwarnsysteme für Delivery-Risiken. Dann sieht Projektmanagement weniger nach Dokumentationspflege aus und mehr nach organisationaler Intelligenz."]
                },
            ],
            takeaway: "AI wird Projektmanagement nicht verschwinden lassen. Sie bestraft rein administrative Projektarbeit und belohnt Menschen, die Struktur, Kommunikation, Governance und Urteilskraft verbinden.",
        },
        {
            ...enBlogPosts[2],
            title: "Lehren mit KI, ohne das Lernen zu verlieren",
            category: "KI in Bildung",
            readTime: "8 Min. Lesezeit",
            excerpt: "KI kann Bildung adaptiver und praktischer machen, aber nur, wenn Lehrende Lernen rund um Denken, Feedback und Transfer gestalten statt rund um Abkürzungen.",
            body: [
                {
                    heading: "Die unbequeme Wahrheit: KI kann gleichzeitig helfen und schaden",
                    paragraphs: ["KI in der Bildung wird oft in Extremen diskutiert. Die eine Seite sieht personalisiertes Lernen für alle. Die andere sieht Plagiate, Abhängigkeit und das Ende ernsthafter Prüfung. Beide Reaktionen enthalten Wahrheit. KI kann Erklärung, Übung, Feedback, Barrierefreiheit und Curriculum Design unterstützen. Sie kann Lernen aber auch auf Antwortsammlung reduzieren, wenn die Didaktik schwach ist.", "Für Lehrende lautet die Frage deshalb nicht, ob KI in Lernprozesse gehört. Lernende nutzen sie bereits. Die eigentliche Frage ist, ob wir ihnen beibringen, KI so zu nutzen, dass Kompetenz entsteht, statt fehlende Kompetenz zu verstecken."]
                },
                {
                    heading: "Gute KI-Didaktik macht Denken sichtbar",
                    paragraphs: ["Die besten KI-Lernformate fragen nicht nur nach einem finalen Ergebnis. Sie lassen Lernende Outputs vergleichen, Prompts verbessern, Annahmen erklären, Fehler kritisieren, Quellen dokumentieren und reflektieren, was sich am eigenen Verständnis verändert hat. Das Ergebnis ist wichtig, aber das Lernen liegt im Prozess darum herum.", "Gerade in der Erwachsenenbildung ist das stark. Ein Lernender im IT-Kurs kann sich Python erklären lassen, den Code testen, brechen, debuggen und dann den Fix erklären. Eine Business-Lernerin kann AI-generierte Stakeholder-Mails vergleichen und entscheiden, welche in einer echten Organisation funktionieren würde. Ein Cybersecurity-Lerner kann Konzepte mit KI wiederholen und muss trotzdem über Risiko nachdenken."]
                },
                {
                    heading: "Prüfung muss näher an echte Arbeit rücken",
                    paragraphs: ["Wenn eine Aufgabe perfekt gelöst werden kann, indem man sie in ein KI-Tool kopiert, misst die Aufgabe vielleicht nicht mehr das, was sie messen soll. Das macht Prüfung nicht unmöglich. Es bedeutet, dass Prüfung mündliche Verteidigung, Projektlogs, Versionsverlauf, Anwendungsszenarien, praktische Demonstrationen und Reflexion über Toolnutzung einbeziehen muss.", "In beruflicher Weiterbildung kann das sogar ein Vorteil sein. Echte Arbeit ist selten ein Closed-Book-Gedächtnistest. Menschen nutzen Tools, fragen Kolleginnen, suchen Dokumentation und überarbeiten Ergebnisse. KI-bewusste Prüfung kann authentischer werden, wenn sie Urteilskraft, Transfer und Qualitätskontrolle bewertet statt isoliertes Erinnern."]
                },
                {
                    heading: "Lehrende werden Lernarchitekten",
                    paragraphs: ["KI ersetzt Lehrende nicht. Sie erhöht den Anspruch an Learning Design. Lehrende müssen entscheiden, wo KI Lernen unterstützt, wo sie begrenzt wird, wie Nutzung offengelegt wird und wie Feedbackschleifen aussehen. In starken Kursen wird KI Teil der Lernumgebung, nicht die unsichtbare Abkürzung außerhalb davon.", "Genau das finde ich spannend. KI kann differenzierte Übungen erzeugen, Beispiele liefern, mehrsprachige Lernende unterstützen, Feedback beschleunigen und abstrakte Konzepte mit Praxis verbinden. Die menschliche Rolle bleibt zentral: Rahmen setzen, flache Antworten herausfordern, Verwirrung bemerken und Toolnutzung in echte Kompetenz verwandeln."]
                },
            ],
            takeaway: "KI gehört in moderne Bildung, aber nicht als Ersatz für Lernen. Ziel sind Aufgaben, in denen KI Übung, Feedback und Transfer unterstützt, während Lernende weiterhin denken müssen.",
        },
        {
            ...enBlogPosts[3],
            title: "Von Industry 4.0 zu 5.0: wenn Menschen über den Loop steigen",
            category: "Industry 5.0",
            readTime: "8 Min. Lesezeit",
            excerpt: "Industry 4.0 hat Organisationen beigebracht, Maschinen, Daten und Prozesse zu verbinden. Industry 5.0 stellt die schwierigere Frage: Was sollen Menschen überwachen, gestalten und verantworten, wenn AI Arbeit koordiniert?",
            body: [
                {
                    heading: "Industry 4.0 war vernetzte Fähigkeit",
                    paragraphs: ["Industry 4.0 gab Organisationen eine starke operative Idee: Produktion, Daten, Sensoren, Plattformen und Automatisierung werden verbunden, damit Prozesse transparenter und reaktionsfähiger werden. Die menschliche Rolle wurde dabei oft als Adaption beschrieben. Menschen sollten das Dashboard lernen, den Daten vertrauen, die Plattform nutzen und ihre Arbeit an digitale Systeme anpassen.", "Das war notwendig, aber nicht das Ende der Geschichte. Sobald AI in die Prozessebene einzieht, verändert sich die Beziehung. AI zeigt nicht nur Informationen an; sie kann priorisieren, empfehlen, entwerfen, auslösen, weiterleiten und manchmal handeln. Die Frage lautet nicht mehr nur, ob Menschen Technologie nutzen. Die Frage lautet, wo menschliche Urteilskraft hingehört, wenn Technologie selbst Teile der Arbeit koordiniert."]
                },
                {
                    heading: "Industry 5.0 bringt den Menschen als Designprinzip zurück",
                    paragraphs: ["Die europäische Diskussion zu Industry 5.0 betont drei Begriffe: Human-centricity, Resilienz und Nachhaltigkeit. Das ist keine weiche Dekoration. Es ist eine Korrektur einer rein effizienzgetriebenen Digitalisierungslogik. Wenn Systeme schneller werden, aber Menschen Handlungsmacht verlieren, wenn Automatisierung optimiert, aber fragil wird, oder wenn AI-Entscheidungen nicht mehr herausgefordert werden können, ist die Organisation nicht reifer geworden. Sie ist nur automatisierter.", "Ein human-zentriertes System bedeutet nicht, dass Menschen jede Aufgabe manuell erledigen. Es bedeutet, dass das System um menschliche Fähigkeit, Wohlbefinden, Verantwortung und sinnvolle Kontrolle gestaltet wird. Genau dieser Unterschied ist für AI-Adoption wichtig. Ziel ist nicht, Menschen für immer Approval-Buttons klicken zu lassen. Ziel ist zu entscheiden, welche Entscheidungen menschliche Urteilskraft brauchen, welche delegiert werden können und welche für Review sichtbar bleiben müssen."]
                },
                {
                    heading: "Von human in the loop zu human above the loop",
                    paragraphs: ["Viele AI-Governance-Gespräche beginnen mit human-in-the-loop. Das ist sinnvoll, besonders bei Entscheidungen mit hoher Wirkung, Unsicherheit oder ethischer Sensibilität. Aber wenn jede AI-gestützte Mikroaktion auf einen Menschen wartet, wird das System langsam und performativ. Menschen stempeln Outputs ab, die sie nicht wirklich prüfen können, und der Loop wird zum Theater.", "Das reifere Muster ist oft human above the loop. Menschen definieren Ziele, Grenzen, Eskalationsregeln, Qualitätskriterien und Review-Rhythmen. Das AI-System darf innerhalb dieses Rahmens arbeiten, aber der Mensch überwacht Systemdesign und Ausnahmemuster statt jeden Schritt manuell zu berühren. Das ist eher Flugverkehrskontrolle als Fließbandfreigabe: Der Mensch ist nicht weg, aber seine Rolle wandert nach oben."]
                },
                {
                    heading: "Der Skill Shift: Operatoren werden Supervisoren von Systemen",
                    paragraphs: ["Das verändert Trainingsbedarf. Teams brauchen mehr als Tool Literacy. Sie brauchen Prozessverständnis, Datenkompetenz, Risikokompetenz und Delegationskompetenz. Sie müssen verstehen, wie guter Input aussieht, wie Fehlerbilder aussehen, wann Automatisierung stoppen sollte und wie Entscheidungen nachträglich auditiert werden.", "Für Business und Bildung ist das ein großer Wechsel. Die Arbeitskraft der Zukunft ist nicht nur die Person, die ein digitales Tool gut nutzt. Es ist jemand, der soziotechnische Systeme beaufsichtigen kann: Menschen, AI, Daten, Regeln, Workflow und Verantwortung zusammen. Genau dort wird Industry 5.0 praktisch spannend. Sie lehnt Automatisierung nicht ab. Sie fordert, dass Automatisierung menschliches Vertrauen verdient."]
                },
            ],
            takeaway: "Industry 5.0 ist keine Absage an Industry 4.0. Es ist die nächste Reifestufe: Vernetzte Systeme bleiben wichtig, aber Menschen müssen von passiven Technologie-Nutzern zu Supervisoren AI-gestützter Arbeitssysteme werden.",
        },
        {
            ...enBlogPosts[4],
            title: "AI in automatisierten Prozessen: Halluzinationen, Tokenburn und Ratelimits",
            category: "AI Risiko",
            readTime: "8 Min. Lesezeit",
            excerpt: "AI-Automatisierung kann leise scheitern, bevor sie laut scheitert. Halluzinationen verzerren Entscheidungen, Tokenburn macht Workflows teuer und Ratelimits brechen Prozesse genau dann, wenn sie skalieren.",
            body: [
                {
                    heading: "Automatisierung verändert das Risikoprofil von AI-Output",
                    paragraphs: ["Eine Halluzination in einem Chatfenster ist ärgerlich. Eine Halluzination in einem automatisierten Workflow kann ein operativer Defekt werden. Das Risiko entsteht genauso durch den Prozesskontext wie durch das Modell. Wenn AI-Output direkt in Tickets, E-Mails, CRM-Datensätze, Research-Tabellen, Codeänderungen oder Business-Entscheidungen fließt, werden Fehler schwerer sichtbar und leichter vervielfacht.", "Deshalb sollte AI-Automatisierung als Prozessengineering behandelt werden, nicht nur als Prompting. Das System braucht Input-Validierung, Quellenbindung, Confidence-Grenzen, Logging, Review-Pfade und Stop-Bedingungen. Sonst kann eine flüssige Antwort mit mehr Autorität durch den Prozess laufen, als sie verdient."]
                },
                {
                    heading: "Halluzinationen werden gefährlich, wenn sie handlungsrelevant sind",
                    paragraphs: ["Das praktische Risiko ist nicht, dass ein Modell manchmal etwas Falsches sagt. Menschen tun das auch. Das praktische Risiko ist, dass generierter Inhalt strukturell korrekt aussieht, aber semantisch falsch ist. Eine erfundene Quelle, ein falsches Kundendetail, eine falsch gelesene Policy-Klausel oder eine selbstbewusste, aber ungültige technische Empfehlung kann durch einen Workflow rutschen, weil sie formal richtig aussieht.", "Die Lösung ist nicht, perfekte Modelle zu verlangen. Die Lösung ist Prozessdesign: Aussagen müssen geerdet sein, wichtige Felder werden geprüft, externe Aktionen brauchen Evidenz und Outputs mit hoher Wirkung werden reviewed. Retrieval, Zitationen, deterministische Checks und menschliche Prüfung sind wichtig, aber keines davon reicht allein. Die Kontrolle muss zum Risiko der Aktion passen."]
                },
                {
                    heading: "Tokenburn ist mehr als ein Kostenproblem",
                    paragraphs: ["Tokenburn klingt nach Finanzen, ist aber auch Architektur. Lange Prompts, wiederholter Kontext, ineffiziente Retries, ausufernde Tool-Traces und schlecht begrenzte Agents können einen AI-Workflow langsam, teuer und fragil machen. Im kleinen Demo-Setup merkt das niemand. In größerem Maßstab wird dasselbe Design zum Denial-of-Wallet-Problem: Der Workflow verbrennt Geld und Latenz für Arbeit, die vorher gefiltert, gecacht oder vereinfacht gehört hätte.", "Gute AI-Systeme brauchen deshalb budgetbewusstes Design. Kleinere Modelle nutzen, wo es geht; Kontext kürzen; stabile Informationen cachen; lange Historien zusammenfassen; fehlerhafte Loops früh stoppen; und Kosten pro erfolgreichem Ergebnis messen statt nur Kosten pro Request. Eine billige Demo kann ein teurer Produktionsprozess werden, wenn niemand Token-Ökonomie beobachtet."]
                },
                {
                    heading: "Ratelimits sind Prozesslimits",
                    paragraphs: ["Ratelimits werden oft als technisches Ärgernis behandelt: warten, retry, backoff. In automatisierten Business-Prozessen sind sie mehr als das. Wenn ein Workflow für Triage, Klassifikation, Anreicherung oder Antwortgenerierung von AI abhängt, kann ein Ratelimit zu einer Warteschlange, Verzögerung, Teilausfall oder gebrochenen Kundenerfahrung werden.", "Die Antwort ist operatives Design: Queues, Fallbacks, Degraded Modes, Batch-Fenster, Priorisierung und klare Erwartungen. Ein System sollte wissen, was passiert, wenn AI nicht verfügbar, langsam oder zu teuer ist. Menschliche Aufsicht gehört dazu. Menschen sollten sehen, wann Automatisierung normal läuft, wann sie degradiert ist und wann Arbeit manuell übernommen werden muss."]
                },
            ],
            takeaway: "AI-Automatisierung wird erst verlässlich, wenn Halluzinationskontrolle, Kostenkontrolle und Verfügbarkeitskontrolle von Anfang an in den Workflow eingebaut werden. Das Modell ist nur ein Teil des Prozesses.",
        },
    ],
    softwareProjects: deSoftwareProjects,
    timeline: deTimeline,
    faqs: [
        {q: "Wofür kann man dich buchen?", a: "Buchbar bin ich für IT- und Business-Consulting, Einzelprojekte, größere Enablement-Programme, AI Governance, Cybersecurity Awareness, Softwareentwicklungsthemen, Wirtschaftsinformatik, digitale Transformation und Digital-Education-Trainings. Typische Formate sind Consulting-Sprints, Workshops, Live-Online-Kurse, Keynotes, Curriculum Support und Projektunterstützung."},
        {q: "Mit welchen Kundengruppen arbeitest du?", a: "Ich arbeite mit Bildungsanbietern, Hochschulen, Corporate-Learning-Teams, Bootcamps, Öffentlichen Organisationen, Startups, KMU und internationalen Bildungspartnern, die strukturierte Remote-Durchführung auf Deutsch oder Englisch brauchen."},
        {q: "Machst du ganze Kurse oder nur kurze Workshops?", a: "Beides. Möglich sind 90-Minuten-Expert-Sessions, Halbtagesworkshops, Trainingstage, Consulting-Sprints, mehrtägige Intensivtrainings, mehrwöchige Kursdurchführung und größere Projektprogramme für professionelle Bildungsanbieter oder Organisationen."},
        {q: "Welche AI-Themen werden besonders häufig angefragt?", a: "Häufige Themen sind AI Literacy, GenAI für Teams, Prompt Engineering, Agentic Workflows, Responsible AI, AI Governance, Automatisierungsrisiken und praktische AI-Adoption für Business- oder Bildungskontexte."},
        {q: "Unterrichtest du technische Themen wie Python, SQL oder Cybersecurity?", a: "Ja. Ich unterrichte Python, SQL, Datenbanken, APIs, Softwareentwicklungsgrundlagen, Cybersecurity Awareness, Web Security, SOC Basics, Ethical-Hacking-Grundlagen und CompTIA-PenTest+-Vorbereitungskontexte."},
        {q: "Unterrichtest du auf Deutsch oder Englisch?", a: "Ja. Trainings können auf Deutsch oder Englisch durchgeführt werden. Spanisch-Erfahrung gehört ebenfalls zum Profil, die primären Trainingssprachen sind aber Deutsch und Englisch."},
        {q: "Wie funktioniert Remote-Unterricht aus Brisbane?", a: "Remote-Durchführung wird nach Zielgruppe und Zeitzone geplant. Ich positioniere Live-Online-Trainings für deutschsprachige und internationale Kunden in Europa, Australien und die Welt."},
        {q: "Was macht deine Trainings praktisch?", a: "Sessions verbinden klare Lernziele, Beispiele, Übungen, Recaps, Aktivierung und Transferaufgaben. Teilnehmende hören nicht nur von Tools, sondern üben, wie sie diese in Arbeit, Studium oder Kurskontexten sinnvoll einsetzen."},
        {q: "Kannst du Materialien oder ein Curriculum entwickeln?", a: "Ja. Ich kann Curriculum Design, Blended-Learning-Konzepte, Slides, Übungen, Lernchecks, Labs, Consulting-Dokumentation, AI-Use-Case-Maps, Roadmaps und Trainingsstrukturen für Akademien, Hochschulen und Corporate-Learning-Teams unterstützen."},
        {q: "Wie startet eine Buchungsanfrage?", a: "Senden Sie Thema, Zielgruppe, Wissensstand, Projektkontext, Wunschformat, Zeitraum und Ziel per E-Mail oder buchen Sie einen kurzen Termin. Danach schlage ich ein passendes Consulting-, Trainings- oder Projektformat und die nächsten Schritte vor."},
    ],
};

de.featuredTrainingTopics = de.serviceOfferings.filter((service) => [
    "AI Literacy für Teams",
    "Python, SQL & Datenkompetenz",
    "Cybersecurity & Pentesting-Grundlagen",
    "Prompt Engineering & Agentische Workflows",
    "Scrum, Agile & digitale Projektarbeit",
    "AI Governance & Responsible AI",
].includes(service.title));

export function localizedSiteContentForLanguage(language) {
    if (language === "de") return de;

    return {
        trustStats: enTrustStats,
        formats: enFormats,
        trainingTopics: enTrainingTopics,
        serviceOfferings: enServiceOfferings,
        featuredTrainingTopics: enFeaturedTrainingTopics,
        trustSignals: enTrustSignals,
        capabilities: enCapabilities,
        audienceCards: enAudienceCards,
        teachingProof: enTeachingProof,
        credentials: enCredentials,
        credentialCategories: enCredentialCategories,
        selectedProjects: enSelectedProjects,
        formerClients: enFormerClients,
        testimonialProof: enTestimonialProof,
        lifeMilestones: enLifeMilestones,
        skillGroups: enSkillGroups,
        blogPosts: enBlogPosts,
        softwareProjects: enSoftwareProjects,
        timeline: enTimeline,
        faqs: enFaqs,
    };
}

export function useSiteContent() {
    const {language} = useLanguage();
    return localizedSiteContentForLanguage(language);
}
