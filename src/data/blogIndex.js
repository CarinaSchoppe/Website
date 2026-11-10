const english = [
    {
        slug: "agentic-ai-from-demo-to-delegation",
        title: "Agentic AI: from impressive demos to delegated work",
        date: "2026-04-25",
        category: "Agentic AI",
        hubCategory: "AI & Governance",
        readTime: "8 min read",
        excerpt: "Agentic AI is not just a smarter chatbot. It is a shift from asking for answers to designing systems that can plan, use tools, ask for approval and move work forward."
    },
    {
        slug: "project-management-in-the-age-of-ai",
        title: "Project management in the age of AI: less administration, more judgement",
        date: "2026-04-25",
        category: "Project management",
        hubCategory: "Business Computer Science",
        readTime: "7 min read",
        excerpt: "AI is not removing project management. It is changing the centre of gravity from manual coordination to sensemaking, governance and stakeholder trust."
    },
    {
        slug: "teaching-with-ai-without-losing-learning",
        title: "Teaching with AI without losing the learning",
        date: "2026-04-25",
        category: "AI education",
        hubCategory: "Digital Education",
        readTime: "8 min read",
        excerpt: "AI can make education more adaptive and practical, but only if teachers design learning around thinking, feedback and transfer rather than shortcuts."
    },
    {
        slug: "from-industry-4-0-to-5-0-human-above-the-loop",
        title: "From Industry 4.0 to 5.0: when humans move above the loop",
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
        title: "Agentic AI: vom beeindruckenden Demo zur delegierten Arbeit",
        category: "Agentic AI",
        readTime: "8 Min. Lesezeit",
        excerpt: "Agentic AI ist nicht nur ein besserer Chatbot. Es ist der Wechsel von Antworten hin zu Systemen, die planen, Tools nutzen, Freigaben einholen und Arbeit in klaren Grenzen voranbringen."
    },
    "project-management-in-the-age-of-ai": {
        title: "Projektmanagement im Zeitalter von AI: weniger Verwaltung, mehr Urteilskraft",
        category: "Projektmanagement",
        readTime: "7 Min. Lesezeit",
        excerpt: "AI schafft Projektmanagement nicht ab. Sie verschiebt den Schwerpunkt von manueller Koordination hin zu Sinnstiftung, Governance und Vertrauen zwischen Stakeholdern."
    },
    "teaching-with-ai-without-losing-learning": {
        title: "Lehren mit KI, ohne das Lernen zu verlieren",
        category: "KI in Bildung",
        readTime: "8 Min. Lesezeit",
        excerpt: "KI kann Bildung adaptiver und praktischer machen, aber nur, wenn Lehrende Lernen rund um Denken, Feedback und Transfer gestalten statt rund um Abkürzungen."
    },
    "from-industry-4-0-to-5-0-human-above-the-loop": {
        title: "Von Industry 4.0 zu 5.0: wenn Menschen über den Loop steigen",
        category: "Industry 5.0",
        readTime: "8 Min. Lesezeit",
        excerpt: "Industry 4.0 hat Organisationen beigebracht, Maschinen, Daten und Prozesse zu verbinden. Industry 5.0 stellt die schwierigere Frage: Was sollen Menschen überwachen, gestalten und verantworten, wenn AI Arbeit koordiniert?"
    },
    "ai-automation-risks-hallucinations-token-burn-rate-limits": {
        title: "AI in automatisierten Prozessen: Halluzinationen, Tokenburn und Ratelimits",
        category: "AI Risiko",
        readTime: "8 Min. Lesezeit",
        excerpt: "AI-Automatisierung kann leise scheitern, bevor sie laut scheitert. Halluzinationen verzerren Entscheidungen, Tokenburn macht Workflows teuer und Ratelimits brechen Prozesse genau dann, wenn sie skalieren."
    }
};

const germanIndex = english.map((post) => ({...post, ...german[post.slug]}));

export function blogIndexForLanguage(language) {
    return language === "de" ? germanIndex : english;
}
