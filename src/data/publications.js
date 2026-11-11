const base = import.meta.env.BASE_URL;

export const publications = [
    {
        key: "executive-governance-genai",
        documents: [{href: `${base}publications/executive-governance-generative-ai-knowledge-intensive-organizations.pdf`, language: "en"}],
        year: "2026",
        type: {en: "MBA thesis", de: "MBA-Abschlussarbeit"},
        title: {
            en: "Executive Governance of Generative AI in Knowledge-Intensive Organizations",
            de: "Wie Unternehmen generative KI steuern können",
        },
        description: {
            en: "I reviewed the research to develop a framework for how leadership teams can assign responsibility, monitor risks and assess the value of generative AI.",
            de: "Aus der Forschung leite ich ab, wie Führungsteams Verantwortlichkeiten festlegen, Risiken im Blick behalten und den Nutzen generativer KI beurteilen können.",
        },
    },
    {
        key: "genai-workplace-risks",
        documents: [
            {href: `${base}publications/chancen-risiken-generativer-ki-deutsche-unternehmen-de.pdf`, language: "de"},
            {href: `${base}publications/opportunities-risks-generative-ai-german-companies-human-machine-interaction.pdf`, language: "en"},
        ],
        year: "2025",
        type: {en: "Master thesis", de: "Masterarbeit"},
        title: {
            en: "Opportunities and Risks for Employees from Generative AI Tools in German Companies",
            de: "Chancen und Risiken generativer KI für Mitarbeitende in deutschen Unternehmen",
        },
        description: {
            en: "I examined how generative AI changes everyday work, including customer communication, software development and data analysis.",
            de: "Ich habe untersucht, wie generative KI den Arbeitsalltag verändert, etwa im Kundenkontakt, in der Softwareentwicklung und bei der Datenanalyse.",
        },
    },
    {
        key: "chatgpt-phishing",
        documents: [{href: `${base}publications/chatgpt-authentic-context-specific-personalized-phishing-emails.pdf`, language: "en"}],
        year: "2024",
        type: {en: "Bachelor thesis", de: "Bachelorarbeit"},
        title: {
            en: "ChatGPT for Authentic, Context-Specific and Personalised Phishing Emails",
            de: "ChatGPT für authentisch wirkende, kontextspezifische und personalisierte Phishing-E-Mails",
        },
        description: {
            en: "I examined how ChatGPT can tailor phishing emails to someone’s work or interests and make the messages seem more convincing.",
            de: "Ich habe untersucht, wie ChatGPT Phishing-Mails auf den Beruf oder die Interessen einer Person zuschneiden und dadurch glaubwürdiger machen kann.",
        },
    },
];
