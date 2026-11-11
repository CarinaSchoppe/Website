const english = [
    {
        slug: "agentic-ai-from-demo-to-delegation",
        title: "Agentic AI: from impressive demos to delegated work",
        date: "2026-04-25",
        category: "Agentic AI",
        hubCategory: "AI & Governance",
        readTime: "8 min read",
        excerpt: "When an AI agent prepares a briefing or triages support tickets, who decides which tools it can use and when it needs approval? Those choices shape what teams can safely delegate."
    },
    {
        slug: "project-management-in-the-age-of-ai",
        title: "Project management in the age of AI: less administration, more judgement",
        date: "2026-04-25",
        category: "Project management",
        hubCategory: "Business Computer Science",
        readTime: "7 min read",
        excerpt: "AI can draft a status report or flag a delay. A project lead still has to check what caused the problem, weigh the options and agree on a response with the team."
    },
    {
        slug: "teaching-with-ai-without-losing-learning",
        title: "Teaching with AI without losing the learning",
        date: "2026-04-25",
        category: "AI education",
        hubCategory: "Digital Education",
        readTime: "8 min read",
        excerpt: "How do I know someone has learnt a skill when AI can solve the exercise? I ask learners to explain their choices and apply the same idea to a new case."
    },
    {
        slug: "from-industry-4-0-to-5-0-human-above-the-loop",
        title: "From Industry 4.0 to 5.0: who decides when AI coordinates work?",
        date: "2026-04-26",
        category: "Industry 5.0",
        hubCategory: "Business Computer Science",
        readTime: "8 min read",
        excerpt: "Industry 4.0 taught organisations to connect machines, data and processes. Industry 5.0 asks a harder question: what should humans supervise, shape and be accountable for when AI starts coordinating work?"
    },
    {
        slug: "ai-automation-risks-hallucinations-token-burn-rate-limits",
        title: "AI in automated processes: hallucinations, token burn and rate limits",
        date: "2026-04-26",
        category: "AI risk",
        hubCategory: "AI & Governance",
        readTime: "8 min read",
        excerpt: "AI automation can fail quietly before it fails loudly. Hallucinations corrupt decisions, token burn turns workflows expensive, and rate limits can break processes at exactly the moment they scale."
    }
];

const german = {
    "agentic-ai-from-demo-to-delegation": {
        title: "KI-Agenten im Arbeitsalltag: Was lässt sich delegieren?",
        category: "KI-Agenten",
        readTime: "8 Min. Lesezeit",
        excerpt: "Ein KI-Agent kann ein Briefing vorbereiten oder Supportanfragen sortieren. Welche Werkzeuge darf er dafür einsetzen, und wann braucht er eine Freigabe?"
    },
    "project-management-in-the-age-of-ai": {
        title: "Projektmanagement mit KI: weniger Verwaltung, mehr Urteilskraft",
        category: "Projektmanagement",
        readTime: "7 Min. Lesezeit",
        excerpt: "KI kann einen Statusbericht schreiben oder auf eine Verzögerung hinweisen. Die Projektleitung prüft die Ursache und entscheidet mit dem Team, was sich ändern muss."
    },
    "teaching-with-ai-without-losing-learning": {
        title: "Lehren mit KI, ohne das Lernen zu verlieren",
        category: "KI in Bildung",
        readTime: "8 Min. Lesezeit",
        excerpt: "Woran erkenne ich, dass jemand etwas gelernt hat, wenn KI die Aufgabe lösen kann? Ich lasse Teilnehmende ihre Entscheidungen begründen und das Gelernte auf einen neuen Fall anwenden."
    },
    "from-industry-4-0-to-5-0-human-above-the-loop": {
        title: "Industrie 5.0: Wer entscheidet, wenn KI die Arbeit koordiniert?",
        category: "Industrie 5.0",
        readTime: "8 Min. Lesezeit",
        excerpt: "Industrie 4.0 hat Maschinen, Daten und Abläufe vernetzt. Wenn KI Aufgaben priorisiert und Entscheidungen vorbereitet, müssen Menschen festlegen, wer eingreifen kann und wer Verantwortung trägt."
    },
    "ai-automation-risks-hallucinations-token-burn-rate-limits": {
        title: "KI-Automatisierung: falsche Antworten, hohe Kosten und API-Limits",
        category: "KI-Risiken",
        readTime: "8 Min. Lesezeit",
        excerpt: "Eine falsche Zusammenfassung kann eine Entscheidung verzerren, Wiederholungen treiben die Kosten hoch, und zu viele API-Anfragen können einen Ablauf stoppen. Was lässt sich schon vor dem Start absichern?"
    }
};

const germanIndex = english.map((post) => ({...post, ...german[post.slug]}));

export function blogIndexForLanguage(language) {
    return language === "de" ? germanIndex : english;
}
