import {blogIndexForLanguage} from "./blogIndex.js";

const english = {
    "agentic-ai-from-demo-to-delegation": {
        body: [
            {
                heading: "The useful question is no longer 'can AI answer this?'",
                paragraphs: [
                    "The first wave of generative AI made knowledge work feel strangely elastic. Drafts became faster, summaries became cheaper and research started with a conversation instead of a blank page. Agentic AI changes the question again. Instead of asking whether a model can produce an answer, organisations now ask whether an AI system can move through a workflow: inspect context, choose tools, coordinate steps, ask for approval and leave behind an auditable result.",
                    "That sounds dramatic, but the practical version is often quite grounded. A useful agent does not need to 'run the company'. It may prepare a renewal-risk briefing, triage incoming support tickets, compare policy documents, draft a project update from live artefacts, or coordinate the boring middle of a research process. The difference is that the system is no longer just generating text. It is acting inside a bounded process."
                ]
            },
            {
                heading: "Agents are workflow design, not magic autonomy",
                paragraphs: [
                    "The strongest agentic AI projects start with a workflow map, not with a model choice. What information is needed? Which tools may be used? Where is human approval required? What counts as a correct result? What should be logged? These questions sound operational because they are. Agentic AI becomes valuable when it reduces handoffs, clarifies decisions and makes repeatable work more reliable.",
                    "This is also where many projects fail. A chatbot can survive fuzzy context because a human still interprets the output. An agent that triggers actions needs cleaner data, clearer permissions and stronger guardrails. If customer records are duplicated, knowledge bases are stale and process ownership is unclear, the agent will not magically fix the organisation. It will expose the mess faster."
                ]
            },
            {
                heading: "The new skill is delegation literacy",
                paragraphs: [
                    "People often learn prompt engineering as if the main task were wording. In agentic systems, the deeper skill is delegation literacy: knowing what to hand over, how much freedom to grant, which checks to require and how to review the result. A good human-in-the-loop setup is not a sign of weak automation. It is how serious automation earns trust.",
                    "For teams, this means training must move beyond tool tours. Learners need to practise decomposing work into agent-ready tasks, defining acceptance criteria, spotting risky autonomy and designing escalation points. In other words: the future user of AI is less like a passenger and more like a process designer."
                ]
            },
            {
                heading: "What I would build first",
                paragraphs: [
                    "For most organisations, I would not start with a fully autonomous agent. I would start with a narrow assistant that prepares work for a human decision: a meeting-prep agent, a training-material adaptation agent, a weekly project-risk agent or a research-screening agent. The agent should operate inside a small workflow, use approved sources, cite what it used and make it easy to accept, reject or correct its output.",
                    "That kind of project is less flashy than a 'digital employee', but it teaches the right muscles: data quality, governance, review habits and workflow redesign. Once those muscles exist, autonomy can increase carefully. Agentic AI is most powerful when it is treated as organisational design with software inside it."
                ]
            }
        ],
        takeaway: "The real promise of agentic AI is not replacing judgement. It is giving skilled people better ways to delegate repeatable work while keeping context, accountability and quality visible.",
        sources: [
            {
                label: "McKinsey: Seizing the agentic AI advantage",
                href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage"
            },
            {
                label: "Bain: Building the foundation for agentic AI",
                href: "https://www.bain.com/insights/building-the-foundation-for-agentic-ai-technology-report-2025/"
            },
            {
                label: "McKinsey: Trust in the age of agents",
                href: "https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/trust-in-the-age-of-agents"
            }
        ]
    },
    "project-management-in-the-age-of-ai": {
        body: [
            {
                heading: "The old project manager was a human integration layer",
                paragraphs: [
                    "For a long time, project management has carried a quiet contradiction. The work is supposed to be strategic, but the calendar is full of administration: status reports, meeting notes, risk registers, follow-up messages, budget checks, backlog grooming and stakeholder updates. Much of that work matters. Much of it is also repetitive enough that AI can now support it directly.",
                    "The shift is not simply that project managers get a faster writing assistant. The deeper shift is that AI can help maintain the nervous system of a project: what changed, what is blocked, what risk is emerging, who needs a decision and which assumptions no longer hold."
                ]
            },
            {
                heading: "From reporting the past to sensing the present",
                paragraphs: [
                    "Classic project reporting often describes what happened last week. AI-enabled project work can move closer to the present. Meeting transcripts can become decisions and actions. Long email threads can become stakeholder summaries. Jira or GitHub activity can be translated into delivery signals. Risk workshops can be supported by pattern libraries from previous projects.",
                    "That does not make the project manager less important. It makes weak project management more visible. If roles are unclear, success criteria are vague and governance is political theatre, AI will mostly create polished confusion. But if the project has clean artefacts and a culture of decision-making, AI can reduce friction dramatically."
                ]
            },
            {
                heading: "The role becomes more human, not less",
                paragraphs: [
                    "The valuable project manager of the AI era is not the person who manually formats the prettiest status deck. It is the person who can interpret weak signals, challenge unrealistic plans, mediate trade-offs and keep people aligned when the project becomes uncomfortable. AI can draft a stakeholder email. It cannot take responsibility for the trust relationship behind that email.",
                    "This is why AI literacy for project teams should include governance and communication, not just tool use. Teams need to know when AI output is good enough, when it needs evidence, when sensitive data must stay out of a tool and when a human conversation is the actual work."
                ]
            },
            {
                heading: "A practical AI project-management stack",
                paragraphs: [
                    "A useful starting stack is simple: automated meeting summaries, action extraction, risk-log drafting, stakeholder-update drafts, requirements comparison and project retrospectives. These are not glamorous use cases, but they remove the administrative drag that keeps project managers away from the work that needs judgement.",
                    "The next stage is more interesting: AI-assisted scenario planning, portfolio prioritisation, dependency analysis and early-warning systems for delivery risk. At that point, project management starts to look less like documentation maintenance and more like organisational intelligence."
                ]
            }
        ],
        takeaway: "AI will not make project management disappear. It will punish purely administrative project management and reward people who can combine delivery structure, communication, governance and judgement.",
        sources: [
            {
                label: "PMI: Artificial Intelligence in Project Management",
                href: "https://www.pmi.org/learning/ai-in-project-management"
            },
            {
                label: "PMI: Transforming Project Management with Generative AI Innovation",
                href: "https://www.pmi.org/learning/thought-leadership/transforming-project-management-with-generative-ai"
            },
            {
                label: "PMI: Transformation of the project management profession",
                href: "https://www.pmi.org/about/press-media/2024/pmi-leads-transformation-of-profession"
            }
        ]
    },
    "teaching-with-ai-without-losing-learning": {
        body: [
            {
                heading: "The uncomfortable truth: AI can help and harm at the same time",
                paragraphs: [
                    "AI in education is usually discussed in extremes. One side imagines personalised learning for everyone. The other sees plagiarism, dependency and the end of serious assessment. Both reactions contain a piece of truth. AI can support explanation, practice, feedback, accessibility and curriculum design. It can also flatten learning into answer collection if the didactic design is weak.",
                    "The question for educators is therefore not whether AI belongs in learning. Learners already use it. The real question is whether we teach them to use it in ways that build competence instead of hiding missing competence."
                ]
            },
            {
                heading: "Good AI teaching makes thinking visible",
                paragraphs: [
                    "The most useful AI learning formats do not simply ask students to generate a final answer. They ask learners to compare outputs, improve prompts, explain assumptions, critique mistakes, document sources and reflect on what changed in their own understanding. The output matters, but the learning lives in the process around it.",
                    "This is why AI can be powerful in adult education. A learner in an IT course can ask for a Python explanation, test it, break it, debug it and then explain the fix. A business learner can compare AI-generated stakeholder messages and decide which one would actually work in a real organisation. A cybersecurity learner can use AI to rehearse concepts while still being required to reason about risk."
                ]
            },
            {
                heading: "Assessment has to move closer to real work",
                paragraphs: [
                    "If an assignment can be solved perfectly by pasting the prompt into an AI tool, the assignment may no longer measure what we think it measures. That does not mean assessment becomes impossible. It means assessment needs to include oral defence, project logs, version history, applied scenarios, practical demonstrations and reflection on tool use.",
                    "In professional training, this can actually be a benefit. Real work is rarely a closed-book memory test. People use tools, ask colleagues, search documentation and revise their output. AI-aware assessment can become more authentic when it evaluates judgement, transfer and quality control rather than isolated recall."
                ]
            },
            {
                heading: "The teacher becomes a learning architect",
                paragraphs: [
                    "AI does not remove the need for teachers. It raises the standard for teaching design. The educator has to decide where AI supports learning, where it should be restricted, how learners disclose use and how feedback loops are structured. In strong courses, AI becomes part of the learning environment, not an invisible shortcut outside it.",
                    "For me, this is the exciting part. AI can help create differentiated exercises, generate examples, support multilingual learners, accelerate feedback and connect abstract concepts to practical work. But the human role remains central: setting the frame, challenging shallow answers, noticing confusion and turning tool use into real competence."
                ]
            }
        ],
        takeaway: "AI belongs in modern education, but not as a replacement for learning. The goal is to design tasks where AI supports practice, feedback and transfer while the learner still has to think.",
        sources: [
            {
                label: "UNESCO: Guidance for generative AI in education and research",
                href: "https://www.unesco.org/en/digital-education/ai-future-learning/guidance"
            },
            {
                label: "UNESCO: Artificial intelligence in education",
                href: "https://www.unesco.org/en/education/digital/artificial-intelligence"
            },
            {
                label: "UNESCO: Generation AI and education",
                href: "https://www.unesco.org/en/articles/generation-ai-navigating-opportunities-and-risks-artificial-intelligence-education"
            }
        ]
    },
    "from-industry-4-0-to-5-0-human-above-the-loop": {
        body: [
            {
                heading: "Industry 4.0 was about connected capability",
                paragraphs: [
                    "Industry 4.0 gave organisations a powerful operating idea: connect production, data, sensors, platforms and automation so that processes become more transparent and responsive. The human role in that story was often framed as adoption. People had to learn the dashboard, trust the data, use the platform and adjust their work around increasingly digital systems.",
                    "That was necessary, but it was not the end of the story. Once AI enters the process layer, the relationship changes. AI does more than display information; it can prioritise, recommend, draft, trigger, route and sometimes act. The question is no longer whether humans use technology. The question is where human judgement belongs when technology can coordinate parts of the work itself."
                ]
            },
            {
                heading: "Industry 5.0 brings the human back as a design principle",
                paragraphs: [
                    "The European Industry 5.0 discussion adds three words that matter: human-centricity, resilience and sustainability. That is not soft decoration. It is a correction to a purely efficiency-driven digitalisation narrative. If systems become faster but workers lose agency, if automation becomes optimised but brittle, or if AI decisions become impossible to challenge, the organisation has not become more mature. It has only become more automated.",
                    "A human-centric system does not mean humans do every task manually. It means the system is designed around human capability, wellbeing, accountability and meaningful control. That distinction is crucial for AI adoption. The goal is not to keep humans clicking approval buttons forever. The goal is to decide which decisions require human judgement, which can be delegated, and which should remain visible for review."
                ]
            },
            {
                heading: "From human in the loop to human above the loop",
                paragraphs: [
                    "Many AI governance conversations start with human-in-the-loop. That is useful, especially when decisions are high impact, uncertain or ethically sensitive. But if every AI-supported micro-action waits for a human, the system becomes slow and performative. People rubber-stamp outputs they cannot truly inspect, and the loop turns into theatre.",
                    "The more mature pattern is often human above the loop. Humans set the objectives, boundaries, escalation rules, quality criteria and review rhythm. The AI system can operate inside that frame, but the human supervises the system design and the exception patterns rather than manually touching every step. This is closer to air traffic control than factory-line approval: the human is not absent, but the human role moves upward."
                ]
            },
            {
                heading: "The skills shift: operators become supervisors of systems",
                paragraphs: [
                    "This changes training needs. Teams need more than tool literacy. They need process literacy, data literacy, risk literacy and delegation literacy. They must understand what good input looks like, what failure modes look like, when automation should stop, and how to audit decisions after the fact.",
                    "For business and education, this is a major shift. The future worker is not simply the person who uses a digital tool well. The future worker is someone who can supervise socio-technical systems: humans, AI, data, policy, workflow and accountability together. That is where Industry 5.0 becomes practically interesting. It does not reject automation. It asks automation to become worthy of human trust."
                ]
            }
        ],
        takeaway: "Industry 5.0 is not a rejection of Industry 4.0. It is the next maturity layer: connected systems still matter, but humans must move from passive technology users to supervisors of AI-enabled work systems.",
        sources: [
            {
                label: "European Commission: Industry 5.0",
                href: "https://research-and-innovation.ec.europa.eu/research-area/industrial-research-and-innovation/industry-50_en"
            },
            {
                label: "European Commission: human-centric, sustainable and resilient industry",
                href: "https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/industry-50-towards-more-sustainable-resilient-and-human-centric-industry-2021-01-07_en"
            },
            {
                label: "CORDIS: Human-centric manufacturing",
                href: "https://cordis.europa.eu/article/id/445250-human-centric-manufacturing-how-new-approaches-to-technology-design-can-transform-industry"
            }
        ]
    },
    "ai-automation-risks-hallucinations-token-burn-rate-limits": {
        body: [
            {
                heading: "Automation changes the risk profile of AI output",
                paragraphs: [
                    "A hallucination in a chat window is annoying. A hallucination inside an automated workflow can become an operational defect. The risk comes from the surrounding process as much as the model. When AI output moves directly into tickets, emails, CRM records, research tables, code changes or business decisions, mistakes become harder to notice and easier to multiply.",
                    "This is why AI automation should be treated as process engineering, not just prompting. The system needs input validation, source grounding, confidence thresholds, logging, review paths and stop conditions. Otherwise a fluent answer can travel through the process with more authority than it deserves."
                ]
            },
            {
                heading: "Hallucinations become dangerous when they are actionable",
                paragraphs: [
                    "The practical risk is not that a model sometimes says something false. Humans do that too. The practical risk is that generated content can look structurally correct while being semantically wrong. A fake source, a wrong customer detail, a misread policy clause or a confident but invalid technical recommendation can pass through a workflow because it has the right format.",
                    "The mitigation is not to demand perfect models. The mitigation is to design the process so that claims are grounded, important fields are verified, external actions require evidence, and high-impact outputs are reviewed. Retrieval, citations, deterministic checks and human review all matter, but none of them works alone. The control has to match the risk of the action."
                ]
            },
            {
                heading: "Token burn is more than a cost problem",
                paragraphs: [
                    "Token burn sounds like finance, but it is also architecture. Long prompts, repeated context, inefficient retries, verbose tool traces and poorly scoped agents can make an AI workflow slow, expensive and fragile. At small scale, nobody notices. At larger scale, the same design can turn into a denial-of-wallet problem: the workflow spends money and latency on work that should have been filtered, cached or simplified.",
                    "Good AI systems therefore need budget-aware design. Use smaller models where possible, trim context, cache stable information, summarise long histories, stop failed loops early and measure cost per successful outcome rather than cost per request. A cheap demo can become an expensive production process if nobody watches token economics."
                ]
            },
            {
                heading: "Rate limits are process limits",
                paragraphs: [
                    "Rate limits are often treated as a technical inconvenience: wait, retry, back off. In automated business processes, they are more than that. If a workflow depends on AI for triage, classification, enrichment or response generation, a rate limit can become a queue, a delay, a partial outage or a broken customer experience.",
                    "The solution is operational design: queues, fallbacks, degraded modes, batch windows, priority handling and clear user expectations. A system should know what to do when AI is unavailable, slow or too expensive. Human supervision is part of this. People should see when automation is operating normally, when it is degraded and when work needs manual handling."
                ]
            }
        ],
        takeaway: "AI automation becomes reliable only when hallucination control, cost control and availability control are designed into the workflow from the beginning. The model is only one part of the process.",
        sources: [
            {
                label: "NIST: AI RMF Generative AI Profile",
                href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
            },
            {
                label: "OWASP: Top 10 for Large Language Model Applications",
                href: "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
                label: "NIST AI Resource Center",
                href: "https://airc.nist.gov/"
            }
        ]
    }
};

const german = {
    "agentic-ai-from-demo-to-delegation": {
        body: [
            {
                heading: "Die wichtige Frage lautet nicht mehr: Kann AI darauf antworten?",
                paragraphs: [
                    "Die erste Welle generativer AI hat Wissensarbeit elastischer gemacht. Entwürfe wurden schneller, Zusammenfassungen billiger und Recherche begann plötzlich mit einem Dialog statt mit einer leeren Seite. Agentic AI verschiebt die Frage erneut. Es geht nicht mehr nur darum, ob ein Modell eine gute Antwort erzeugt, sondern ob ein AI-System einen Workflow durchlaufen kann: Kontext prüfen, Werkzeuge auswählen, Schritte koordinieren, Freigaben anfordern und ein nachvollziehbares Ergebnis hinterlassen.",
                    "Das klingt groß, ist in der Praxis aber oft sehr konkret. Ein brauchbarer Agent muss nicht das Unternehmen führen. Er kann ein Renewal-Risk-Briefing vorbereiten, Support-Tickets vorsortieren, Richtlinien vergleichen, Projektupdates aus vorhandenen Artefakten entwerfen oder die Mitte eines Research-Prozesses koordinieren. Der Unterschied: Das System erzeugt nicht mehr nur Text. Es handelt innerhalb eines begrenzten Prozesses."
                ]
            },
            {
                heading: "Agents sind Workflow-Design, keine magische Autonomie",
                paragraphs: [
                    "Die stärksten Agentic-AI-Projekte starten mit einer Workflow-Karte, nicht mit der Modellwahl. Welche Informationen werden gebraucht? Welche Tools dürfen genutzt werden? Wo ist menschliche Freigabe nötig? Was gilt als korrektes Ergebnis? Was muss geloggt werden? Diese Fragen klingen operativ, weil sie operativ sind. Agentic AI wird wertvoll, wenn sie Handoffs reduziert, Entscheidungen klarer macht und wiederholbare Arbeit verlässlicher gestaltet.",
                    "Genau hier scheitern viele Projekte. Ein Chatbot kann unscharfen Kontext überleben, weil ein Mensch das Ergebnis interpretiert. Ein Agent, der Aktionen auslöst, braucht sauberere Daten, klarere Berechtigungen und bessere Leitplanken. Wenn Kundendaten doppelt sind, Wissensdatenbanken veraltet und Verantwortlichkeiten unklar sind, repariert der Agent nicht die Organisation. Er macht das Chaos nur schneller sichtbar."
                ]
            },
            {
                heading: "Die neue Fähigkeit heißt Delegationskompetenz",
                paragraphs: [
                    "Prompt Engineering wird oft so vermittelt, als ginge es hauptsächlich um Formulierungen. In agentischen Systemen ist die tiefere Fähigkeit Delegationskompetenz: wissen, was man abgibt, wie viel Freiheit sinnvoll ist, welche Prüfungen nötig sind und wie Ergebnisse bewertet werden. Ein Human-in-the-loop-Design ist kein Zeichen schwacher Automatisierung. Es ist der Weg, wie ernsthafte Automatisierung Vertrauen verdient.",
                    "Für Teams heißt das: Training muss über Tool-Demos hinausgehen. Lernende müssen üben, Arbeit in agentenfähige Aufgaben zu zerlegen, Akzeptanzkriterien zu definieren, riskante Autonomie zu erkennen und Eskalationspunkte zu gestalten. Der zukünftige AI-Nutzer ist weniger Passagier und mehr Prozessdesigner."
                ]
            },
            {
                heading: "Womit ich anfangen würde",
                paragraphs: [
                    "In den meisten Organisationen würde ich nicht mit einem vollautonomen Agenten starten. Ich würde mit einem engen Assistenten beginnen, der Arbeit für eine menschliche Entscheidung vorbereitet: Meeting-Prep, Trainingsmaterial-Anpassung, wöchentliche Projektrisikoanalyse oder Research-Screening. Der Agent sollte in einem kleinen Workflow arbeiten, freigegebene Quellen nutzen, seine Grundlage sichtbar machen und Annahme, Ablehnung oder Korrektur einfach machen.",
                    "Das ist weniger spektakulär als ein digitaler Mitarbeiter, trainiert aber die richtigen Muskeln: Datenqualität, Governance, Review-Routinen und Workflow-Redesign. Wenn diese Muskeln da sind, kann Autonomie vorsichtig wachsen. Agentic AI ist am stärksten, wenn sie als Organisationsdesign mit Software darin verstanden wird."
                ]
            }
        ],
        takeaway: "Wer einem KI-Agenten Arbeit überträgt, legt vorher fest, welche Schritte er selbst ausführen darf, wo Menschen freigeben und woran sie ein gutes Ergebnis erkennen."
    },
    "project-management-in-the-age-of-ai": {
        body: [
            {
                heading: "Der alte Projektmanager war eine menschliche Integrationsschicht",
                paragraphs: [
                    "Projektmanagement trägt seit langem einen leisen Widerspruch in sich. Die Arbeit soll strategisch sein, aber der Kalender ist voller Administration: Statusberichte, Meetingnotizen, Risikoregister, Follow-ups, Budgetchecks, Backlog-Pflege und Stakeholder-Updates. Viel davon ist wichtig. Vieles davon ist aber auch wiederholbar genug, dass AI es direkt unterstützen kann.",
                    "Die Veränderung besteht nicht nur darin, dass Projektmanager schneller schreiben können. Tiefer geht es darum, dass AI das Nervensystem eines Projekts pflegen kann: Was hat sich verändert? Was ist blockiert? Welches Risiko entsteht gerade? Wer braucht eine Entscheidung? Welche Annahme stimmt nicht mehr?"
                ]
            },
            {
                heading: "Von Vergangenheitsbericht zu Gegenwartssinn",
                paragraphs: [
                    "Klassisches Reporting beschreibt oft, was letzte Woche passiert ist. AI-gestützte Projektarbeit kann näher an die Gegenwart rücken. Meetingtranskripte werden zu Entscheidungen und Aufgaben. Lange Mailthreads werden zu Stakeholder-Zusammenfassungen. Jira- oder GitHub-Aktivität wird zu Delivery-Signalen. Risiko-Workshops können durch Muster aus früheren Projekten unterstützt werden.",
                    "Dadurch wird Projektmanagement nicht unwichtiger. Schwaches Projektmanagement wird sichtbarer. Wenn Rollen unklar, Erfolgskriterien vage und Governance nur Theater sind, erzeugt AI vor allem polierte Verwirrung. Wenn Artefakte sauber sind und Entscheidungen wirklich getroffen werden, kann AI Reibung deutlich senken."
                ]
            },
            {
                heading: "Die Rolle wird menschlicher, nicht weniger menschlich",
                paragraphs: [
                    "Der wertvolle Projektmanager der AI-Ära ist nicht die Person, die die schönsten Statusfolien manuell formatiert. Es ist die Person, die schwache Signale interpretiert, unrealistische Pläne herausfordert, Trade-offs moderiert und Menschen ausrichtet, wenn das Projekt unbequem wird. AI kann eine Stakeholder-Mail entwerfen. Sie übernimmt nicht die Verantwortung für die Beziehung hinter dieser Mail.",
                    "Deshalb muss AI Literacy für Projektteams Governance und Kommunikation enthalten, nicht nur Toolnutzung. Teams müssen wissen, wann AI-Output gut genug ist, wann Evidenz fehlt, wann sensible Daten draußen bleiben und wann ein menschliches Gespräch die eigentliche Arbeit ist."
                ]
            },
            {
                heading: "Ein praktischer AI-Stack für Projektmanagement",
                paragraphs: [
                    "Ein guter Start ist einfach: automatische Meetingzusammenfassungen, Action-Extraction, Risikolog-Entwürfe, Stakeholder-Update-Drafts, Requirements-Vergleiche und Retrospektiven. Das sind keine glamourösen Use Cases, aber sie entfernen administrativen Ballast, der Projektmanager von Urteilskraftarbeit fernhält.",
                    "Die nächste Stufe ist spannender: AI-gestützte Szenarioplanung, Portfolio-Priorisierung, Abhängigkeitsanalyse und Frühwarnsysteme für Delivery-Risiken. Dann sieht Projektmanagement weniger nach Dokumentationspflege aus und mehr nach organisationaler Intelligenz."
                ]
            }
        ],
        takeaway: "KI kann Projektinformationen zusammenfassen und Risiken markieren. Projektleitungen müssen einschätzen, welche Hinweise belastbar sind und was sie gemeinsam mit dem Team entscheiden."
    },
    "teaching-with-ai-without-losing-learning": {
        body: [
            {
                heading: "Die unbequeme Wahrheit: KI kann gleichzeitig helfen und schaden",
                paragraphs: [
                    "KI in der Bildung wird oft in Extremen diskutiert. Die eine Seite sieht personalisiertes Lernen für alle. Die andere sieht Plagiate, Abhängigkeit und das Ende ernsthafter Prüfung. Beide Reaktionen enthalten Wahrheit. KI kann Erklärung, Übung, Feedback, Barrierefreiheit und Curriculum Design unterstützen. Sie kann Lernen aber auch auf Antwortsammlung reduzieren, wenn die Didaktik schwach ist.",
                    "Für Lehrende lautet die Frage deshalb nicht, ob KI in Lernprozesse gehört. Lernende nutzen sie bereits. Die eigentliche Frage ist, ob wir ihnen beibringen, KI so zu nutzen, dass Kompetenz entsteht, statt fehlende Kompetenz zu verstecken."
                ]
            },
            {
                heading: "Gute KI-Didaktik macht Denken sichtbar",
                paragraphs: [
                    "Die besten KI-Lernformate fragen nicht nur nach einem finalen Ergebnis. Sie lassen Lernende Outputs vergleichen, Prompts verbessern, Annahmen erklären, Fehler kritisieren, Quellen dokumentieren und reflektieren, was sich am eigenen Verständnis verändert hat. Das Ergebnis ist wichtig, aber das Lernen liegt im Prozess darum herum.",
                    "Gerade in der Erwachsenenbildung ist das stark. Ein Lernender im IT-Kurs kann sich Python erklären lassen, den Code testen, brechen, debuggen und dann den Fix erklären. Eine Business-Lernerin kann AI-generierte Stakeholder-Mails vergleichen und entscheiden, welche in einer echten Organisation funktionieren würde. Ein Cybersecurity-Lerner kann Konzepte mit KI wiederholen und muss trotzdem über Risiko nachdenken."
                ]
            },
            {
                heading: "Prüfung muss näher an echte Arbeit rücken",
                paragraphs: [
                    "Wenn eine Aufgabe perfekt gelöst werden kann, indem man sie in ein KI-Tool kopiert, misst die Aufgabe vielleicht nicht mehr das, was sie messen soll. Das macht Prüfung nicht unmöglich. Es bedeutet, dass Prüfung mündliche Verteidigung, Projektlogs, Versionsverlauf, Anwendungsszenarien, praktische Demonstrationen und Reflexion über Toolnutzung einbeziehen muss.",
                    "In beruflicher Weiterbildung kann das sogar ein Vorteil sein. Echte Arbeit ist selten ein Closed-Book-Gedächtnistest. Menschen nutzen Tools, fragen Kolleginnen, suchen Dokumentation und überarbeiten Ergebnisse. KI-bewusste Prüfung kann authentischer werden, wenn sie Urteilskraft, Transfer und Qualitätskontrolle bewertet statt isoliertes Erinnern."
                ]
            },
            {
                heading: "Lehrende werden Lernarchitekten",
                paragraphs: [
                    "KI ersetzt Lehrende nicht. Sie erhöht den Anspruch an Learning Design. Lehrende müssen entscheiden, wo KI Lernen unterstützt, wo sie begrenzt wird, wie Nutzung offengelegt wird und wie Feedbackschleifen aussehen. In starken Kursen wird KI Teil der Lernumgebung, nicht die unsichtbare Abkürzung außerhalb davon.",
                    "Genau das finde ich spannend. KI kann differenzierte Übungen erzeugen, Beispiele liefern, mehrsprachige Lernende unterstützen, Feedback beschleunigen und abstrakte Konzepte mit Praxis verbinden. Die menschliche Rolle bleibt zentral: Rahmen setzen, flache Antworten herausfordern, Verwirrung bemerken und Toolnutzung in echte Kompetenz verwandeln."
                ]
            }
        ],
        takeaway: "Eine gute Aufgabe mit KI zeigt, wie Lernende zu ihrer Lösung kommen, wie sie diese prüfen und ob sie das Gelernte auf einen anderen Fall übertragen können."
    },
    "from-industry-4-0-to-5-0-human-above-the-loop": {
        body: [
            {
                heading: "Industry 4.0 war vernetzte Fähigkeit",
                paragraphs: [
                    "Industry 4.0 gab Organisationen eine starke operative Idee: Produktion, Daten, Sensoren, Plattformen und Automatisierung werden verbunden, damit Prozesse transparenter und reaktionsfähiger werden. Die menschliche Rolle wurde dabei oft als Adaption beschrieben. Menschen sollten das Dashboard lernen, den Daten vertrauen, die Plattform nutzen und ihre Arbeit an digitale Systeme anpassen.",
                    "Das war notwendig, aber nicht das Ende der Geschichte. Sobald AI in die Prozessebene einzieht, verändert sich die Beziehung. AI zeigt nicht nur Informationen an; sie kann priorisieren, empfehlen, entwerfen, auslösen, weiterleiten und manchmal handeln. Die Frage lautet nicht mehr nur, ob Menschen Technologie nutzen. Die Frage lautet, wo menschliche Urteilskraft hingehört, wenn Technologie selbst Teile der Arbeit koordiniert."
                ]
            },
            {
                heading: "Industry 5.0 bringt den Menschen als Designprinzip zurück",
                paragraphs: [
                    "Die europäische Diskussion zu Industry 5.0 betont drei Begriffe: Human-centricity, Resilienz und Nachhaltigkeit. Das ist keine weiche Dekoration. Es ist eine Korrektur einer rein effizienzgetriebenen Digitalisierungslogik. Wenn Systeme schneller werden, aber Menschen Handlungsmacht verlieren, wenn Automatisierung optimiert, aber fragil wird, oder wenn AI-Entscheidungen nicht mehr herausgefordert werden können, ist die Organisation nicht reifer geworden. Sie ist nur automatisierter.",
                    "Ein human-zentriertes System bedeutet nicht, dass Menschen jede Aufgabe manuell erledigen. Es bedeutet, dass das System um menschliche Fähigkeit, Wohlbefinden, Verantwortung und sinnvolle Kontrolle gestaltet wird. Genau dieser Unterschied ist für AI-Adoption wichtig. Ziel ist nicht, Menschen für immer Approval-Buttons klicken zu lassen. Ziel ist zu entscheiden, welche Entscheidungen menschliche Urteilskraft brauchen, welche delegiert werden können und welche für Review sichtbar bleiben müssen."
                ]
            },
            {
                heading: "Von human in the loop zu human above the loop",
                paragraphs: [
                    "Viele AI-Governance-Gespräche beginnen mit human-in-the-loop. Das ist sinnvoll, besonders bei Entscheidungen mit hoher Wirkung, Unsicherheit oder ethischer Sensibilität. Aber wenn jede AI-gestützte Mikroaktion auf einen Menschen wartet, wird das System langsam und performativ. Menschen stempeln Outputs ab, die sie nicht wirklich prüfen können, und der Loop wird zum Theater.",
                    "Das reifere Muster ist oft human above the loop. Menschen definieren Ziele, Grenzen, Eskalationsregeln, Qualitätskriterien und Review-Rhythmen. Das AI-System darf innerhalb dieses Rahmens arbeiten, aber der Mensch überwacht Systemdesign und Ausnahmemuster statt jeden Schritt manuell zu berühren. Das ist eher Flugverkehrskontrolle als Fließbandfreigabe: Der Mensch ist nicht weg, aber seine Rolle wandert nach oben."
                ]
            },
            {
                heading: "Der Skill Shift: Operatoren werden Supervisoren von Systemen",
                paragraphs: [
                    "Das verändert Trainingsbedarf. Teams brauchen mehr als Tool Literacy. Sie brauchen Prozessverständnis, Datenkompetenz, Risikokompetenz und Delegationskompetenz. Sie müssen verstehen, wie guter Input aussieht, wie Fehlerbilder aussehen, wann Automatisierung stoppen sollte und wie Entscheidungen nachträglich auditiert werden.",
                    "Für Business und Bildung ist das ein großer Wechsel. Die Arbeitskraft der Zukunft ist nicht nur die Person, die ein digitales Tool gut nutzt. Es ist jemand, der soziotechnische Systeme beaufsichtigen kann: Menschen, AI, Daten, Regeln, Workflow und Verantwortung zusammen. Genau dort wird Industry 5.0 praktisch spannend. Sie lehnt Automatisierung nicht ab. Sie fordert, dass Automatisierung menschliches Vertrauen verdient."
                ]
            }
        ],
        takeaway: "Wenn KI Arbeit koordiniert, brauchen Teams klare Zuständigkeiten. Sie müssen wissen, wer Entscheidungen überprüft, wann jemand eingreifen kann und wer die Folgen verantwortet."
    },
    "ai-automation-risks-hallucinations-token-burn-rate-limits": {
        body: [
            {
                heading: "Automatisierung verändert das Risikoprofil von AI-Output",
                paragraphs: [
                    "Eine Halluzination in einem Chatfenster ist ärgerlich. Eine Halluzination in einem automatisierten Workflow kann ein operativer Defekt werden. Das Risiko entsteht genauso durch den Prozesskontext wie durch das Modell. Wenn AI-Output direkt in Tickets, E-Mails, CRM-Datensätze, Research-Tabellen, Codeänderungen oder Business-Entscheidungen fließt, werden Fehler schwerer sichtbar und leichter vervielfacht.",
                    "Deshalb sollte AI-Automatisierung als Prozessengineering behandelt werden, nicht nur als Prompting. Das System braucht Input-Validierung, Quellenbindung, Confidence-Grenzen, Logging, Review-Pfade und Stop-Bedingungen. Sonst kann eine flüssige Antwort mit mehr Autorität durch den Prozess laufen, als sie verdient."
                ]
            },
            {
                heading: "Halluzinationen werden gefährlich, wenn sie handlungsrelevant sind",
                paragraphs: [
                    "Das praktische Risiko ist nicht, dass ein Modell manchmal etwas Falsches sagt. Menschen tun das auch. Das praktische Risiko ist, dass generierter Inhalt strukturell korrekt aussieht, aber semantisch falsch ist. Eine erfundene Quelle, ein falsches Kundendetail, eine falsch gelesene Policy-Klausel oder eine selbstbewusste, aber ungültige technische Empfehlung kann durch einen Workflow rutschen, weil sie formal richtig aussieht.",
                    "Die Lösung ist nicht, perfekte Modelle zu verlangen. Die Lösung ist Prozessdesign: Aussagen müssen geerdet sein, wichtige Felder werden geprüft, externe Aktionen brauchen Evidenz und Outputs mit hoher Wirkung werden reviewed. Retrieval, Zitationen, deterministische Checks und menschliche Prüfung sind wichtig, aber keines davon reicht allein. Die Kontrolle muss zum Risiko der Aktion passen."
                ]
            },
            {
                heading: "Tokenburn ist mehr als ein Kostenproblem",
                paragraphs: [
                    "Tokenburn klingt nach Finanzen, ist aber auch Architektur. Lange Prompts, wiederholter Kontext, ineffiziente Retries, ausufernde Tool-Traces und schlecht begrenzte Agents können einen AI-Workflow langsam, teuer und fragil machen. Im kleinen Demo-Setup merkt das niemand. In größerem Maßstab wird dasselbe Design zum Denial-of-Wallet-Problem: Der Workflow verbrennt Geld und Latenz für Arbeit, die vorher gefiltert, gecacht oder vereinfacht gehört hätte.",
                    "Gute AI-Systeme brauchen deshalb budgetbewusstes Design. Kleinere Modelle nutzen, wo es geht; Kontext kürzen; stabile Informationen cachen; lange Historien zusammenfassen; fehlerhafte Loops früh stoppen; und Kosten pro erfolgreichem Ergebnis messen statt nur Kosten pro Request. Eine billige Demo kann ein teurer Produktionsprozess werden, wenn niemand Token-Ökonomie beobachtet."
                ]
            },
            {
                heading: "Ratelimits sind Prozesslimits",
                paragraphs: [
                    "Ratelimits werden oft als technisches Ärgernis behandelt: warten, retry, backoff. In automatisierten Business-Prozessen sind sie mehr als das. Wenn ein Workflow für Triage, Klassifikation, Anreicherung oder Antwortgenerierung von AI abhängt, kann ein Ratelimit zu einer Warteschlange, Verzögerung, Teilausfall oder gebrochenen Kundenerfahrung werden.",
                    "Die Antwort ist operatives Design: Queues, Fallbacks, Degraded Modes, Batch-Fenster, Priorisierung und klare Erwartungen. Ein System sollte wissen, was passiert, wenn AI nicht verfügbar, langsam oder zu teuer ist. Menschliche Aufsicht gehört dazu. Menschen sollten sehen, wann Automatisierung normal läuft, wann sie degradiert ist und wann Arbeit manuell übernommen werden muss."
                ]
            }
        ],
        takeaway: "Wer einen KI-gestützten Ablauf entwickelt, plant von Anfang an Prüfungen für kritische Ergebnisse, ein Kostenlimit und einen Ersatzweg für Ausfälle ein."
    }
};

const englishArticles = blogIndexForLanguage("en").map((post) => ({...post, ...english[post.slug]}));
const germanArticles = blogIndexForLanguage("de").map((post) => ({...post, ...english[post.slug], ...german[post.slug]}));

export function blogArticlesForLanguage(language) {
    return language === "de" ? germanArticles : englishArticles;
}
