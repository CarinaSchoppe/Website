const base = import.meta.env.BASE_URL;

export const selectedWork = [
    {
        id: "prisma",
        title: "PRISMA",
        href: "https://github.com/CarinaSchoppe/PRISMA-Literature-Review-Pipeline-Automation-Tool",
        tone: "lavender",
        type: {de: "Forschungssoftware", en: "Research software"},
        description: {
            de: "Meine quelloffene Anwendung für systematische Literaturreviews. Sie verbindet die Suche in wissenschaftlichen Quellen mit der Vorauswahl und dokumentiert die Gründe für Ein- und Ausschlüsse.",
            en: "My open-source application for systematic literature reviews. It connects scholarly searches with screening and records why studies were included or excluded.",
        },
        image: `${base}images/work-prisma.svg`,
        imageAlt: {
            de: "Skizze des PRISMA-Workflows mit Literatursuche, Screening und Reportdateien.",
            en: "Diagram of the PRISMA workflow with literature discovery, screening and report files.",
        },
        imageCaption: {de: "Ablaufskizze", en: "Workflow diagram"},
        stack: ["Python", "SQLite", "CLI / GUI"],
    },
    {
        id: "mail",
        title: "Automatic Mail Sender",
        href: "https://github.com/CarinaSchoppe/Automatic-Mail-Sender-System",
        tone: "coral",
        type: {de: "E-Mail-Automatisierung", en: "Email automation"},
        description: {
            de: "Ein Python-Workflow für personalisierte E-Mails aus Empfängerlisten und Vorlagen. Im Testlauf kann ich die Vorbereitung prüfen, bevor überhaupt etwas versendet wird.",
            en: "A Python workflow for personalised emails built from recipient lists and templates. A dry run lets me check the setup before any message is sent.",
        },
        image: `${base}images/work-mail.svg`,
        imageAlt: {
            de: "Schematische Ansicht mit CSV-Empfängerliste, E-Mail-Vorlage und aktiviertem Testlauf.",
            en: "Diagram with a CSV recipient list, an email template and dry run enabled.",
        },
        imageCaption: {de: "Ablaufskizze", en: "Workflow diagram"},
        stack: ["Python", "SMTPS", "CSV"],
    },
    {
        id: "openxlr",
        title: "OpenXLR",
        href: "https://github.com/emaspa/openxlr",
        tone: "mint",
        type: {de: "Open-Source-Beitrag", en: "Open-source contribution"},
        description: {
            de: "OpenXLR steuert Elgato-Audiointerfaces unter Linux. Ich habe unter anderem das Layout für breite Fenster und die Einstellung des Mikrofonpegels mitentwickelt.",
            en: "OpenXLR controls Elgato audio interfaces on Linux. My contributions include the wide-window layout and microphone gain controls in setup.",
        },
        image: `${base}images/work-openxlr.webp`,
        imageAlt: {
            de: "Ausschnitt aus dem OpenXLR-Mixer mit Eingängen, Lautstärkereglern und mehreren Audiomischungen.",
            en: "Detail of the OpenXLR mixer showing inputs, volume controls and multiple audio mixes.",
        },
        imageCaption: {de: "Screenshot aus dem OpenXLR-Projekt", en: "Screenshot from the OpenXLR project"},
        imageSource: "https://github.com/emaspa/openxlr/blob/a120307f6484309238fce8f55e6bd1b56274926b/docs/screenshot-mixer-0210.png",
        contribution: "https://github.com/emaspa/openxlr/pull/731",
        stack: ["Linux", "PipeWire", "C#"],
    },
];
