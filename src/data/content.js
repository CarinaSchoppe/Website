import {PROFILE} from "./profile.js";

export const trustStats = [
    {value: "10k+", label: "documented teaching hours"},
    {value: "4.7/5", label: "average learner rating"},
    {value: "DE / EN", label: "Delivery in German and English"},
    {value: "B.Sc. | M.Sc. | MBA | TAE", label: "business IT, management and VET training background"},
];

export const coreOffers = [
    {
        kicker: "Corporate training",
        title: "AI & Digital Skills Workshops",
        outcome: "Turn AI confusion into confident, practical use.",
        copy: "For companies that want their teams to understand generative AI, use it productively, assess risks, and apply it in everyday workflows without losing quality or control.",
        deliverables: [
            "AI literacy and responsible use training",
            "Prompt engineering for office and specialist workflows",
            "Role-based exercises for real business scenarios",
            "Workflow templates and practical checklists",
            "Optional executive briefing for leadership alignment",
        ],
        bestFor: "Companies, public-sector teams, education providers, SMEs",
        gradient: "from-sky-300/20 via-blue-400/10 to-violet-500/20",
    },
    {
        kicker: "Freelance lecturer",
        title: "IT & Business Courses",
        outcome: "Structured teaching for adult learners and professional education.",
        copy: "Remote-first course delivery for education providers, academies, universities, bootcamps and funded training programmes that need reliable, clear, practice-oriented instruction.",
        deliverables: [
            "Python, SQL, databases, AI, cloud and cybersecurity",
            "Theory blocks combined with hands-on exercises",
            "Learning checks, recap sessions and transfer tasks",
            "Prepared materials, labs and structured learning paths",
            "German or English teaching for mixed skill levels",
        ],
        bestFor: "Training providers, universities, academies, adult education",
        gradient: "from-blue-300/15 via-sky-300/10 to-blue-500/20",
    },
    {
        kicker: "Talks & lectures",
        title: "Keynotes, Expert Talks & Guest Lectures",
        outcome: "Clear, modern talks on IT security and digital transformation.",
        copy: "For events, internal knowledge days, leadership meetings and education programmes that need a speaker who can make complex technology engaging and business-relevant.",
        deliverables: [
            "AI in business: opportunities, limits and risks",
            "Responsible AI and governance in everyday work",
            "Cybersecurity awareness for non-technical teams",
            "Digital transformation and future skills",
            "Custom talk design for your audience and industry",
        ],
        bestFor: "Conferences, business events, schools, universities, internal events",
        gradient: "from-violet-400/18 via-blue-400/10 to-sky-300/18",
    },
];

export const formats = [
    {title: "90-minute impulse talk", label: "Fast orientation", copy: "Ideal for management briefings, internal learning days or event slots where the audience needs a strong overview and clear next steps."},
    {title: "Half-day / full-day workshop", label: "Practice-focused", copy: "Best for teams that should leave with practical tools, templates, workflows and enough confidence to apply the topic immediately."},
    {title: "2-5 day intensive training", label: "Skill building", copy: "For deeper upskilling in AI, Python, SQL, cybersecurity, cloud basics, business IT or digital transformation."},
    {title: "Multi-week course delivery", label: "Education provider format", copy: "Structured delivery for academies, online providers, vocational education, bootcamps and professional programmes."},
    {title: "Curriculum & material design", label: "Instructional design", copy: "Creation of course outlines, exercises, learning checks, slides, labs and learner-friendly documentation."},
    {title: "Exam / certification preparation", label: "Targeted readiness", copy: "Focused preparation around cybersecurity, AI, programming or business IT topics with structured practice and feedback loops."},
];

export const trainingTopics = [
    {group: "AI & Future Skills", items: ["AI literacy", "Prompt engineering", "Generative AI workflows", "Responsible AI", "AI governance basics", "AI for office productivity"]},
    {group: "Software & Data", items: ["Java / Python / C# / Kotlin", "SQL and databases", "APIs and automation", "Data analyst / scientist / engineer", "Big data concepts", "UI/UX basics"]},
    {group: "Cybersecurity", items: ["Cybersecurity awareness", "Web security", "SOC foundations", "CompTIA Pentest+ preparation", "Ethical hacking foundations", "Password and data security"]},
    {group: "Business IT", items: ["Business Computer Science", "IT service management", "Cloud concepts", "Digital transformation", "SCRUM and agile work", "Process optimisation"]},
    {group: "Vocational & IHK", items: ["Fachinformatiker Ausbildung", "Fachinformatiker Umschulung", "Bürokaufleute / Büromanagement", "Teilqualifikation", "IHK exam preparation", "Adult education"]},
    {group: "Law, Coaching & Talks", items: ["Digital law and GDPR", "AI Act and Cloud Act", "IT law awareness", "Coaching", "Keynote speaker", "Guest lectures"]},
];

export const serviceOfferings = [
    {
        title: "AI & GenAI Training",
        description: "Practical training on generative AI concepts, business use cases, limits, risks and responsible day-to-day adoption.",
        audience: "Corporate teams, education providers, universities and public-sector teams",
        format: "Remote live workshop, training day or multi-day course",
        duration: "90 minutes to 3 days",
        outcomes: ["Understand core GenAI capabilities and limits", "Identify realistic use cases", "Apply quality and risk checks"],
    },
    {
        title: "AI Literacy for Teams",
        description: "A clear foundation for teams that need shared language, practical confidence and sensible AI usage rules.",
        audience: "Non-technical teams, L&D departments, managers and mixed learner groups",
        format: "Interactive workshop or internal enablement programme",
        duration: "Half day to 2 days",
        outcomes: ["Use AI tools more confidently", "Recognise weak outputs", "Build team-level usage guidelines"],
    },
    {
        title: "Prompt Engineering & Agentic Workflows",
        description: "Structured prompting, workflow decomposition and supervised agentic work patterns for real business processes.",
        audience: "Knowledge workers, project teams, AI champions and digital transformation teams",
        format: "Hands-on workshop with workflow exercises",
        duration: "1 to 3 days",
        outcomes: ["Design repeatable prompts", "Map agent-ready tasks", "Define human review points"],
    },
    {
        title: "AI Governance & Responsible AI",
        description: "Training on accountability, risk classes, data handling, human oversight and practical governance routines.",
        audience: "Leadership teams, PMOs, compliance-aware teams and education institutions",
        format: "Executive briefing, workshop or governance training",
        duration: "90 minutes to 2 days",
        outcomes: ["Assess AI risk more clearly", "Define governance responsibilities", "Create practical review routines"],
    },
    {
        title: "Python, SQL & Data Skills",
        description: "Applied programming and data training for learners who need practical skills for automation, analysis and databases.",
        audience: "Adult learners, bootcamps, retraining cohorts and internal upskilling groups",
        format: "Live course, bootcamp, lab series or exam preparation",
        duration: "2 days to multi-week course",
        outcomes: ["Write basic scripts", "Query and model data", "Build confidence with practical exercises"],
    },
    {
        title: "Software Development & APIs",
        description: "Foundations and applied training around programming, API thinking, backend concepts and software project structure.",
        audience: "Fachinformatiker cohorts, coding schools, junior developers and business IT learners",
        format: "Course delivery, lab training or project-based workshop",
        duration: "2 days to multi-week course",
        outcomes: ["Understand software architecture basics", "Work with APIs", "Connect code to real workflows"],
    },
    {
        title: "Fachinformatiker Ausbildung & Umschulung",
        description: "IHK-oriented training for Fachinformatiker learners across software development, systems, networks, databases, security, IT projects and exam preparation.",
        audience: "AZAV providers, apprentices, retraining cohorts, vocational schools and IHK-oriented programmes",
        format: "Full module delivery, Teilqualifikation support, project coaching or exam preparation",
        duration: "Single module to multi-week delivery",
        outcomes: ["Cover IHK-oriented IT learning fields", "Prepare project documentation", "Strengthen exam and job readiness"],
    },
    {
        title: "Bürokaufleute & Büromanagement IHK",
        description: "Training for Kaufmann/Kauffrau für Büromanagement, Bürokaufleute and office-management learners across business processes, communication and digital office work.",
        audience: "Office management learners, business retraining cohorts, Teilqualifikation groups and education providers",
        format: "Course delivery, exam preparation, digital office workshop or business process module",
        duration: "Single sessions to multi-week support",
        outcomes: ["Understand office and business processes", "Use digital tools responsibly", "Prepare IHK-style case tasks"],
    },
    {
        title: "Cybersecurity & Pentesting Fundamentals",
        description: "Security awareness and technical foundations for web security, ethical hacking, SOC basics and defensive thinking.",
        audience: "IT learners, retraining providers, companies and mixed technical groups",
        format: "Remote live training, lab course or certification preparation",
        duration: "1 day to multi-week course",
        outcomes: ["Recognise common attack paths", "Apply safer work habits", "Understand pentesting and SOC foundations"],
    },
    {
        title: "Scrum, Agile & Digital Project Work",
        description: "Practical project work training for teams that need clearer collaboration, delivery structure and AI-aware coordination.",
        audience: "Project teams, apprentices, SMEs, training providers and digital teams",
        format: "Workshop, training day or applied project lab",
        duration: "Half day to 2 days",
        outcomes: ["Use agile terms correctly", "Structure work visibly", "Improve team communication and reviews"],
    },
    {
        title: "Digital Law, GDPR & AI Act Awareness",
        description: "Awareness-oriented training around labour, business, private and IT law interfaces, GDPR/DSGVO, AI Act, Cloud Act and digital compliance questions.",
        audience: "AI adoption teams, education providers, project teams, public sector and non-lawyer professionals",
        format: "Awareness training, executive briefing, workshop or compliance-adjacent learning module",
        duration: "90 minutes to 2 days",
        outcomes: ["Recognise legal risk questions", "Connect governance with data protection", "Know when expert legal review is needed"],
    },
    {
        title: "Business Computer Science & Digital Transformation",
        description: "Business IT training connecting processes, systems, data, IT management and organisational change.",
        audience: "Universities, academies, companies and professional education programmes",
        format: "Lecture series, module delivery or corporate workshop",
        duration: "1 day to multi-week module",
        outcomes: ["Connect IT and business decisions", "Analyse digital processes", "Understand transformation trade-offs"],
    },
    {
        title: "Curriculum Design & Blended Learning",
        description: "Support for building learning paths, exercises, slides, labs, assessment logic and blended delivery formats.",
        audience: "Training providers, universities, bootcamps and corporate learning teams",
        format: "Consulting sprint, curriculum workshop or material design support",
        duration: "1 day to project-based support",
        outcomes: ["Create structured course plans", "Improve learner activation", "Align materials with outcomes"],
    },
    {
        title: "Coaching, Keynotes & Expert Talks",
        description: "Coaching, keynote speaking, guest lectures and expert talks across IT, cybersecurity, business computer science, digital transformation, digital law and modern education.",
        audience: "Companies, universities, conferences, leadership teams, education providers and event organisers",
        format: "Keynote, expert talk, guest lecture, coaching session, leadership briefing or panel input",
        duration: "30 minutes to full-day format",
        outcomes: ["Make complex topics accessible", "Give audiences clear next steps", "Support leaders, trainers and teams"],
    },
];

export const featuredTrainingTopics = serviceOfferings.filter((service) => [
    "AI Literacy for Teams",
    "Python, SQL & Data Skills",
    "Cybersecurity & Pentesting Fundamentals",
    "Prompt Engineering & Agentic Workflows",
    "Scrum, Agile & Digital Project Work",
    "AI Governance & Responsible AI",
].includes(service.title));

export const capabilities = [
    "AI literacy", "Prompt engineering", "Generative AI workflows", "Responsible AI", "AI governance basics", "Python", "Java", "C#", "Kotlin", "SQL", "Databases", "APIs & automation", "Fachinformatiker", "Bürokaufleute", "Data analyst", "Data scientist", "Data engineer", "Cybersecurity awareness", "Web security", "SOC foundations", "CompTIA Pentest+ prep", "Ethical hacking foundations", "GDPR", "AI Act", "Cloud Act", "IT law awareness", "Cloud concepts", "Business Computer Science", "IT service management", "Digital transformation", "SCRUM", "Project management", "New Work", "Blended learning", "Curriculum design", "Adult education", "Coaching", "Keynote speaker",
];

export const audienceCards = [
    {title: "Training providers", copy: "Reliable remote lecturer for structured IT, cybersecurity and business technology courses with adult learners.", bullets: ["multi-week courses", "clear material structure", "learner activation", "German / English delivery"]},
    {title: "Universities & higher education", copy: "Guest lectures, digital education formats and future-skills sessions that combine academic credibility with practical examples.", bullets: ["guest lectures", "AI and digitalisation", "student-friendly explanations", "modern learning design"]},
    {title: "Corporate L&D teams", copy: "Practical upskilling for teams that need to use AI, data, automation or cybersecurity more confidently at work.", bullets: ["team workshops", "hands-on workflows", "risk awareness", "transfer into daily work"]},
    {title: "Public sector organisations", copy: "Clear digital competence training for teams that need responsible AI use, security awareness and process understanding.", bullets: ["responsible AI", "data awareness", "clear governance", "accessible delivery"]},
    {title: "Startups & SMEs", copy: "Focused training for smaller teams that need practical digital skills without heavy enterprise training overhead.", bullets: ["compact formats", "business relevance", "tool confidence", "direct application"]},
    {title: "Bootcamps & coding schools", copy: "Course delivery and lab support for Python, SQL, APIs, software development and cybersecurity foundations.", bullets: ["hands-on labs", "learner support", "coding practice", "exam readiness"]},
    {title: "German-speaking providers", copy: "Remote lecturer support for German, Swiss and Austrian providers needing professional German delivery from abroad.", bullets: ["DE delivery", "remote classroom", "Europe-friendly planning", "education sector"]},
    {title: "International clients", copy: "English or German delivery for distributed teams and education partners across Europe, Australia and the world.", bullets: ["EN / DE", "time-zone aware", "remote-first", "international mindset"]},
];

export const teachingProof = [
    {title: "Certified IT lecturer", value: "DiBak Trainer Certification", copy: "Covers didactics, pedagogy, learning platforms, material creation, learning checks, technical troubleshooting and quality assurance."},
    {title: "Australian VET training", value: "TAE40122 Certificate IV", copy: "Completed Certificate IV in Training and Assessment with RAM Training Services in June 2026."},
    {title: "Learner rating", value: "4.7 / 5", copy: "Documented average rating after 10k+ teaching hours, showing strong learner satisfaction and practical delivery quality."},
    {title: "Adult education strength", value: "Theory + practice", copy: "Learning formats are built around examples, exercises, recaps, learner activation, transfer tasks and clear outcomes."},
    {title: "International delivery", value: "Remote-first", copy: "Based in Brisbane while delivering online training for European, Australian and global clients in German or English."},
];

export const trustSignals = [
    {title: "Academic background", copy: "B.Sc. and M.Sc. in Business Computer Science plus MBA without major, completed in April 2026."},
    {title: "Teaching experience", copy: "10k+ documented teaching hours with an average learner rating of 4.7/5."},
    {title: "Australian training qualification", copy: "Certificate IV in Training and Assessment TAE40122, completed with RAM Training Services in June 2026."},
    {title: "Expertise areas", copy: "AI, cybersecurity, software development, business computer science, data, agile work and digital education."},
    {title: "Languages", copy: "Training delivery in German and English, with Spanish language experience."},
    {title: "Remote delivery", copy: "Remote live training from Brisbane for Europe, Australia and the world education partners."},
    {title: "Sector fit", copy: "Experience with corporate training, higher education, retraining, bootcamps and professional academies."},
];

export const credentials = [
    {category: "Teaching", title: "DiBak Certified IT Lecturer", meta: "10k+ teaching hours | average learner rating 4.7/5", detail: "Didactics, methods, learning platforms, material creation, learning checks and technology-supported instruction."},
    {category: "Teaching", title: "Certificate IV in Training and Assessment TAE40122", meta: "RAM Training Services | completed Jun 2026", detail: "Australian vocational education and training qualification for planning, delivering and assessing competency-based learning."},
    {category: "Teaching", title: "SCHLAU NRW Educational Work", meta: "Volunteer educator | Dec 2022 to Nov 2023", detail: "Workshops, facilitation, reflection and professional youth education in diversity and anti-discrimination contexts."},
    {category: "Teaching", title: "Software Innovation Lab Work Reference", meta: "University of Paderborn | KMUeinfachSicher project | 2021", detail: "Content work around IT security, passwords, password managers, data handling and didactic preparation for SMEs."},
    {category: "Academic", title: "Master of Business Administration", meta: "IU International University | completed Apr 2026 | MBA without major | overall result Good (2.2)", detail: "Management credibility for IT, consulting, business strategy and client-facing advisory work without a declared major."},
    {category: "Academic", title: "Master of Science in Business Computer Science", meta: "IU International University | completed 27 Nov 2025 | overall result Good (2.3)", detail: "120 ECTS covering AI, big data, research methods, IT services, UI/UX, cloud concepts and business IT."},
    {category: "Academic", title: "Bachelor of Science in Business Computer Science", meta: "University of Paderborn | completed 05 Feb 2025", detail: "Business, IT and information systems foundation for training, consulting and software-oriented work."},
    {category: "AI", title: "AI+ Developer™", meta: "AI CERTs | granted 05 Mar 2026", detail: "Certified AI development profile for explaining and building AI-enabled systems."},
    {category: "AI", title: "AI+ Researcher™", meta: "AI CERTs | granted 13 Mar 2026", detail: "Research-facing AI certification supporting academic and applied AI project work."},
    {category: "AI", title: "AI+ Prompt Engineer Level 1™", meta: "AI CERTs | granted 05 Mar 2026", detail: "Prompt design, AI interaction and practical workflow enablement."},
    {category: "AI", title: "AI+ Executive™", meta: "AI CERTs | granted 05 Mar 2026", detail: "Executive-level AI orientation for leadership, adoption and value creation."},
    {category: "AI", title: "AI+ Foundation™ / AI+ Everyone™", meta: "AI CERTs | granted 05 Mar 2026", detail: "Broad AI literacy and foundation-level AI capability."},
    {category: "AI", title: "AI+ Project Management Office Practitioner™", meta: "AI CERTs | granted 14 Apr 2026", detail: "AI project governance, PMO thinking and implementation control."},
    {category: "Cybersecurity", title: "AI+ Ethical Hacker™", meta: "AI CERTs | granted 05 Mar 2026", detail: "AI and cybersecurity positioning for ethical hacking and defensive awareness."},
    {category: "Cybersecurity", title: "TryHackMe Learning Paths", meta: "Web Fundamentals, Cyber Security, Pre Security, SOC Level 1, Complete Beginner, Pentest+, Jr Penetration Tester, Cyber Defense", detail: "Hands-on technical security learning for web, SOC, cyber defence and pentest foundations."},
    {category: "Cybersecurity", title: "Password Security Certificate", meta: "KMU. Einfach Sicher. | 25 Mar 2021", detail: "Training certificate focused on password security for small and medium-sized businesses."},
    {category: "Entrepreneurship", title: "garage33 Founding Certificate", meta: "Design Thinking | Lean Startup | Business Model Canvas | agile methods", detail: "Entrepreneurship training with prototype validation, USP, market, financial model and pricing work."},
    {category: "Entrepreneurship", title: "Top Talent Programme #4", meta: "University of Paderborn / garage33 | 2023", detail: "Design Thinking, Lean Startup, SDG business models, pitching, teamwork and personal development."},
    {category: "Language", title: "PTE Academic English", meta: "Overall 90 | valid until 18 Feb 2028", detail: "High-level English proof for international teaching, consulting and academic work."},
];

export const credentialCategories = ["All", "Teaching", "Academic", "AI", "Cybersecurity", "Entrepreneurship", "Language"];

export const selectedProjects = [
    {title: "Digital Education Systems", tag: "Instructional design", stack: "ADDIE | blended learning | adult education", copy: "Course concepts, hands-on labs, learning checks and structured learning paths for IT, business and AI education contexts.", link: PROFILE.github},
    {title: "Cybersecurity Learning Labs", tag: "Teaching proof", stack: "TryHackMe | SOC | Web security | Pentest+", copy: "Hands-on security learning paths used to strengthen practical teaching capability in web security, SOC foundations and penetration-testing basics.", link: PROFILE.github},
    {title: "PISMA Literature Review Pipeline", tag: "AI research automation", stack: "Python | AI | research tooling | data pipelines", copy: "A research workflow project for academic search, paper ranking, abstract analysis and structured systematic literature-review datasets.", link: "https://github.com/CarinaSchoppe/PISMA-Literature-Review-Pipeline-Automation-Tool"},
    {title: "AI at Work Research", tag: "AI adoption and HCI", stack: "Systematic literature review | AI adoption | human-machine interaction", copy: "Research around opportunities and risks of generative AI tools in organisations, especially human-machine interaction in everyday work.", link: PROFILE.linkedin},
];

export const formerClients = [
    {
        name: "Fast Lane / AI CERTs",
        initials: "FL",
        type: "AI certification training",
        work: "AI CERTs courses and certification-oriented AI training.",
        href: "https://www.fastlaneus.com/ai-certs-training",
    },
    {
        name: "BBA Monchengladbach",
        initials: "BBA",
        type: "IT retraining and professional education",
        work: "Fortbildung and Umschulung delivery for Fachinformatiker learners.",
        href: "https://bba-info.de/it.html",
    },
    {
        name: "SIW Hochschule",
        initials: "SIW",
        type: "Higher education",
        work: "Courses around software development and applied digital education.",
        href: "https://siw.swiss/",
    },
    {
        name: "TEKO Switzerland",
        initials: "TK",
        type: "Software, mobile and game development",
        work: "Software development, mobile development and Unity game-development courses.",
        href: "https://www.teko.ch/technik",
    },
    {
        name: "COMCAVE",
        initials: "CC",
        type: "Cybersecurity training",
        work: "Ethical-hacker and CompTIA PenTest+ focused course delivery.",
        href: "https://www.comcave.de/weiterbildung/it-programmierung-systeme/it-sicherheit/it-sicherheit-ethical-hacker-comptia-pentest-plus",
    },
    {
        name: "DiBak Digital Business Academy",
        initials: "DB",
        type: "Digital business education",
        work: "Broad professional development formats across digital, business and IT topics.",
        href: "https://db-akademie.com/",
    },
    {
        name: "damago GmbH",
        initials: "DG",
        type: "IT seminars and funded training",
        work: "Professional training in project management, databases and software development.",
        href: "https://www.damago.de/",
    },
    {
        name: "GFU Cyrus AG",
        initials: "GFU",
        type: "Software and AI courses",
        work: "Software-development and AI courses for Weiterbildung and Umschulung contexts.",
        href: "https://www.gfu.net/",
    },
    {
        name: "University of Queensland",
        initials: "UQ",
        type: "Research assistance",
        work: "Senior Research Assistant work in the area of Agentic AI.",
        href: "https://ai.uq.edu.au/",
    },
    {
        name: "RSL Akademie",
        initials: "RSL",
        type: "Bundeswehr ZAW education",
        work: "IT-area instruction for Bachelor Professional and Master Professional pathways.",
        href: "https://www.rsl-akademie.de/ausbildung/",
    },
    {
        name: "GPDM Azubi Akademie",
        initials: "GP",
        type: "Apprentice training",
        work: "Azubi Weiterbildung and Fortbildung across IT and professional course formats.",
        href: "https://ausbildung-akademie.de/",
    },
    {
        name: "Stapelfux Akademie",
        initials: "SF",
        type: "Current Scrum training",
        work: "Scrum and agile working training for professional teams.",
        href: "https://stapelfux-akademie.de/",
    },
];

export const testimonialProof = [
    {
        title: "Trusted by education providers",
        quote: "Repeated bookings across Weiterbildung, Umschulung, academy and university settings show that my delivery works for structured adult education.",
    },
    {
        title: "Broad enough for mixed IT groups",
        quote: "From Fachinformatiker cohorts to AI certification learners, I can adapt depth, pace and examples to the group in front of me.",
    },
    {
        title: "Practical training, not slide reading",
        quote: "My courses focus on exercises, implementation thinking, learner activation and clear transfer into work or exams.",
    },
];

export const lifeMilestones = [
    {
        year: "2000",
        title: "Born and raised in Bodenwerder",
        category: "Origin",
        copy: "Raised in the Weserbergland region near Hameln, with an early mix of curiosity, independence and interest in technology.",
    },
    {
        year: "2019",
        title: "Business Computer Science studies",
        category: "Academic start",
        copy: "Started Business Computer Science at the University of Paderborn and connected business, IT, systems thinking and digital transformation from the beginning.",
    },
    {
        year: "2019",
        title: "Freelance lecturer and consultant for IT and business",
        category: "Freelance start",
        copy: "Started self-employment in October 2019 as a freelance lecturer and consultant for IT and business topics.",
    },
    {
        year: "2011-2019",
        title: "Gymnasium at Internat Solling",
        category: "School",
        copy: "Boarding-school education in Holzminden, combining academic breadth with independence, international orientation and early IT interest.",
    },
    {
        year: "2013-2018",
        title: "Language stays in Australia, England and Spain",
        category: "International",
        copy: "International language and culture stays that strengthened communication skills and a broader view of learning environments.",
    },
    {
        year: "2021",
        title: "Hotel management company",
        category: "Management",
        copy: "Contributed to business administration and restructuring work connected to Baron von Munchhausen Hotelverwaltungs-GmbH.",
    },
    {
        year: "2023",
        title: "bytes Coding GmbH",
        category: "Software and education",
        copy: "Expanded software-development and education work through bytes Coding, connecting practical implementation with teaching needs.",
    },
    {
        year: "2025",
        title: "Bachelor and Master in Business Computer Science",
        category: "Academic",
        copy: "Completed the B.Sc. and M.Sc. foundation for business IT, data, HCI, IT management and digital transformation topics.",
    },
    {
        year: "2026",
        title: "MBA, Australia and international training profile",
        category: "Current",
        copy: "Completed the MBA without major in April, completed Certificate IV in Training and Assessment TAE40122 with RAM Training Services in June, moved to Brisbane and aligned the work around international IT and business-technology education.",
    },
];

export const skillGroups = [
    {
        group: "Teaching and learning design",
        items: ["Adult education", "Curriculum design", "Blended learning", "Exam preparation", "Learner activation", "Workshop facilitation", "Course material design", "Remote classroom delivery"],
    },
    {
        group: "AI and automation",
        items: ["AI literacy", "Prompt engineering", "Agentic AI", "Generative AI workflows", "Responsible AI", "AI governance basics", "LangChain concepts", "Research automation"],
    },
    {
        group: "Software development",
        items: ["Python", "Java", "Kotlin", "C#", "Rust", "Dart", "Flutter", "Android", "APIs", "Microservices", "Spring", "React basics"],
    },
    {
        group: "Data and systems",
        items: ["SQL", "MySQL", "MongoDB", "Redis", "Database modelling", "Data pipelines", "Docker", "Kubernetes", "Ubuntu", "Cloud concepts"],
    },
    {
        group: "Cybersecurity",
        items: ["Security awareness", "Ethical hacking foundations", "CompTIA PenTest+ prep", "Web security", "SOC basics", "Kali Linux", "Password security", "Risk communication"],
    },
    {
        group: "Business and management",
        items: ["Digital transformation", "Business Computer Science", "Project management", "SCRUM", "IT service management", "Process optimisation", "Entrepreneurship", "Stakeholder communication"],
    },
    {
        group: "Vocational, law and talks",
        items: ["Fachinformatiker Ausbildung", "Fachinformatiker Umschulung", "Bürokaufleute", "GDPR", "AI Act", "Cloud Act", "IT law awareness", "Coaching", "Keynote speaker", "Guest lectures"],
    },
    {
        group: "Creative and web tools",
        items: ["WordPress", "Elementor", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Audition", "UI/UX basics"],
    },
    {
        group: "Languages and communication",
        items: ["German", "English", "Spanish basics", "Technical explanation", "Academic writing", "Business communication", "Presentation", "Public speaking"],
    },
];

export const blogPosts = [
    {
        slug: "agentic-ai-from-demo-to-delegation",
        title: "Agentic AI: from impressive demos to delegated work",
        date: "2026-04-25",
        category: "Agentic AI",
        hubCategory: "AI & Governance",
        readTime: "8 min read",
        excerpt: "Agentic AI is not just a smarter chatbot. It is a shift from asking for answers to designing systems that can plan, use tools, ask for approval and move work forward.",
        body: [
            {
                heading: "The useful question is no longer 'can AI answer this?'",
                paragraphs: [
                    "The first wave of generative AI made knowledge work feel strangely elastic. Drafts became faster, summaries became cheaper and research started with a conversation instead of a blank page. Agentic AI changes the question again. Instead of asking whether a model can produce an answer, organisations now ask whether an AI system can move through a workflow: inspect context, choose tools, coordinate steps, ask for approval and leave behind an auditable result.",
                    "That sounds dramatic, but the practical version is often quite grounded. A useful agent does not need to 'run the company'. It may prepare a renewal-risk briefing, triage incoming support tickets, compare policy documents, draft a project update from live artefacts, or coordinate the boring middle of a research process. The difference is that the system is no longer just generating text. It is acting inside a bounded process.",
                ],
            },
            {
                heading: "Agents are workflow design, not magic autonomy",
                paragraphs: [
                    "The strongest agentic AI projects start with a workflow map, not with a model choice. What information is needed? Which tools may be used? Where is human approval required? What counts as a correct result? What should be logged? These questions sound operational because they are. Agentic AI becomes valuable when it reduces handoffs, clarifies decisions and makes repeatable work more reliable.",
                    "This is also where many projects fail. A chatbot can survive fuzzy context because a human still interprets the output. An agent that triggers actions needs cleaner data, clearer permissions and stronger guardrails. If customer records are duplicated, knowledge bases are stale and process ownership is unclear, the agent will not magically fix the organisation. It will expose the mess faster.",
                ],
            },
            {
                heading: "The new skill is delegation literacy",
                paragraphs: [
                    "People often learn prompt engineering as if the main task were wording. In agentic systems, the deeper skill is delegation literacy: knowing what to hand over, how much freedom to grant, which checks to require and how to review the result. A good human-in-the-loop setup is not a sign of weak automation. It is how serious automation earns trust.",
                    "For teams, this means training must move beyond tool tours. Learners need to practise decomposing work into agent-ready tasks, defining acceptance criteria, spotting risky autonomy and designing escalation points. In other words: the future user of AI is less like a passenger and more like a process designer.",
                ],
            },
            {
                heading: "What I would build first",
                paragraphs: [
                    "For most organisations, I would not start with a fully autonomous agent. I would start with a narrow assistant that prepares work for a human decision: a meeting-prep agent, a training-material adaptation agent, a weekly project-risk agent or a research-screening agent. The agent should operate inside a small workflow, use approved sources, cite what it used and make it easy to accept, reject or correct its output.",
                    "That kind of project is less flashy than a 'digital employee', but it teaches the right muscles: data quality, governance, review habits and workflow redesign. Once those muscles exist, autonomy can increase carefully. Agentic AI is most powerful when it is treated as organisational design with software inside it.",
                ],
            },
        ],
        takeaway: "The real promise of agentic AI is not replacing judgement. It is giving skilled people better ways to delegate repeatable work while keeping context, accountability and quality visible.",
        sources: [
            {label: "McKinsey: Seizing the agentic AI advantage", href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage"},
            {label: "Bain: Building the foundation for agentic AI", href: "https://www.bain.com/insights/building-the-foundation-for-agentic-ai-technology-report-2025/"},
            {label: "McKinsey: Trust in the age of agents", href: "https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/trust-in-the-age-of-agents"},
        ],
    },
    {
        slug: "project-management-in-the-age-of-ai",
        title: "Project management in the age of AI: less administration, more judgement",
        date: "2026-04-25",
        category: "Project management",
        hubCategory: "Business Computer Science",
        readTime: "7 min read",
        excerpt: "AI is not removing project management. It is changing the centre of gravity from manual coordination to sensemaking, governance and stakeholder trust.",
        body: [
            {
                heading: "The old project manager was a human integration layer",
                paragraphs: [
                    "For a long time, project management has carried a quiet contradiction. The work is supposed to be strategic, but the calendar is full of administration: status reports, meeting notes, risk registers, follow-up messages, budget checks, backlog grooming and stakeholder updates. Much of that work matters. Much of it is also repetitive enough that AI can now support it directly.",
                    "The shift is not simply that project managers get a faster writing assistant. The deeper shift is that AI can help maintain the nervous system of a project: what changed, what is blocked, what risk is emerging, who needs a decision and which assumptions no longer hold.",
                ],
            },
            {
                heading: "From reporting the past to sensing the present",
                paragraphs: [
                    "Classic project reporting often describes what happened last week. AI-enabled project work can move closer to the present. Meeting transcripts can become decisions and actions. Long email threads can become stakeholder summaries. Jira or GitHub activity can be translated into delivery signals. Risk workshops can be supported by pattern libraries from previous projects.",
                    "That does not make the project manager less important. It makes weak project management more visible. If roles are unclear, success criteria are vague and governance is political theatre, AI will mostly create polished confusion. But if the project has clean artefacts and a culture of decision-making, AI can reduce friction dramatically.",
                ],
            },
            {
                heading: "The role becomes more human, not less",
                paragraphs: [
                    "The valuable project manager of the AI era is not the person who manually formats the prettiest status deck. It is the person who can interpret weak signals, challenge unrealistic plans, mediate trade-offs and keep people aligned when the project becomes uncomfortable. AI can draft a stakeholder email. It cannot take responsibility for the trust relationship behind that email.",
                    "This is why AI literacy for project teams should include governance and communication, not just tool use. Teams need to know when AI output is good enough, when it needs evidence, when sensitive data must stay out of a tool and when a human conversation is the actual work.",
                ],
            },
            {
                heading: "A practical AI project-management stack",
                paragraphs: [
                    "A useful starting stack is simple: automated meeting summaries, action extraction, risk-log drafting, stakeholder-update drafts, requirements comparison and project retrospectives. These are not glamorous use cases, but they remove the administrative drag that keeps project managers away from the work that needs judgement.",
                    "The next stage is more interesting: AI-assisted scenario planning, portfolio prioritisation, dependency analysis and early-warning systems for delivery risk. At that point, project management starts to look less like documentation maintenance and more like organisational intelligence.",
                ],
            },
        ],
        takeaway: "AI will not make project management disappear. It will punish purely administrative project management and reward people who can combine delivery structure, communication, governance and judgement.",
        sources: [
            {label: "PMI: Artificial Intelligence in Project Management", href: "https://www.pmi.org/learning/ai-in-project-management"},
            {label: "PMI: AI in Project Management resources", href: "https://www.pmi.org/explore/ai-in-project-management"},
            {label: "PMI: Transformation of the project management profession", href: "https://www.pmi.org/about/press-media/2024/pmi-leads-transformation-of-profession"},
        ],
    },
    {
        slug: "teaching-with-ai-without-losing-learning",
        title: "Teaching with AI without losing the learning",
        date: "2026-04-25",
        category: "AI education",
        hubCategory: "Digital Education",
        readTime: "8 min read",
        excerpt: "AI can make education more adaptive and practical, but only if teachers design learning around thinking, feedback and transfer rather than shortcuts.",
        body: [
            {
                heading: "The uncomfortable truth: AI can help and harm at the same time",
                paragraphs: [
                    "AI in education is usually discussed in extremes. One side imagines personalised learning for everyone. The other sees plagiarism, dependency and the end of serious assessment. Both reactions contain a piece of truth. AI can support explanation, practice, feedback, accessibility and curriculum design. It can also flatten learning into answer collection if the didactic design is weak.",
                    "The question for educators is therefore not whether AI belongs in learning. Learners already use it. The real question is whether we teach them to use it in ways that build competence instead of hiding missing competence.",
                ],
            },
            {
                heading: "Good AI teaching makes thinking visible",
                paragraphs: [
                    "The most useful AI learning formats do not simply ask students to generate a final answer. They ask learners to compare outputs, improve prompts, explain assumptions, critique mistakes, document sources and reflect on what changed in their own understanding. The output matters, but the learning lives in the process around it.",
                    "This is why AI can be powerful in adult education. A learner in an IT course can ask for a Python explanation, test it, break it, debug it and then explain the fix. A business learner can compare AI-generated stakeholder messages and decide which one would actually work in a real organisation. A cybersecurity learner can use AI to rehearse concepts while still being required to reason about risk.",
                ],
            },
            {
                heading: "Assessment has to move closer to real work",
                paragraphs: [
                    "If an assignment can be solved perfectly by pasting the prompt into an AI tool, the assignment may no longer measure what we think it measures. That does not mean assessment becomes impossible. It means assessment needs to include oral defence, project logs, version history, applied scenarios, practical demonstrations and reflection on tool use.",
                    "In professional training, this can actually be a benefit. Real work is rarely a closed-book memory test. People use tools, ask colleagues, search documentation and revise their output. AI-aware assessment can become more authentic when it evaluates judgement, transfer and quality control rather than isolated recall.",
                ],
            },
            {
                heading: "The teacher becomes a learning architect",
                paragraphs: [
                    "AI does not remove the need for teachers. It raises the standard for teaching design. The educator has to decide where AI supports learning, where it should be restricted, how learners disclose use and how feedback loops are structured. In strong courses, AI becomes part of the learning environment, not an invisible shortcut outside it.",
                    "For me, this is the exciting part. AI can help create differentiated exercises, generate examples, support multilingual learners, accelerate feedback and connect abstract concepts to practical work. But the human role remains central: setting the frame, challenging shallow answers, noticing confusion and turning tool use into real competence.",
                ],
            },
        ],
        takeaway: "AI belongs in modern education, but not as a replacement for learning. The goal is to design tasks where AI supports practice, feedback and transfer while the learner still has to think.",
        sources: [
            {label: "UNESCO: Guidance for generative AI in education and research", href: "https://www.unesco.org/en/digital-education/ai-future-learning/guidance"},
            {label: "UNESCO: Artificial intelligence in education", href: "https://www.unesco.org/en/education/digital/artificial-intelligence"},
            {label: "UNESCO: Generation AI and education", href: "https://www.unesco.org/en/articles/generation-ai-navigating-opportunities-and-risks-artificial-intelligence-education"},
        ],
    },
    {
        slug: "from-industry-4-0-to-5-0-human-above-the-loop",
        title: "From Industry 4.0 to 5.0: when humans move above the loop",
        date: "2026-04-26",
        category: "Industry 5.0",
        hubCategory: "Business Computer Science",
        readTime: "8 min read",
        excerpt: "Industry 4.0 taught organisations to connect machines, data and processes. Industry 5.0 asks a harder question: what should humans supervise, shape and be accountable for when AI starts coordinating work?",
        body: [
            {
                heading: "Industry 4.0 was about connected capability",
                paragraphs: [
                    "Industry 4.0 gave organisations a powerful operating idea: connect production, data, sensors, platforms and automation so that processes become more transparent and responsive. The human role in that story was often framed as adoption. People had to learn the dashboard, trust the data, use the platform and adjust their work around increasingly digital systems.",
                    "That was necessary, but it was not the end of the story. Once AI enters the process layer, the relationship changes. AI does more than display information; it can prioritise, recommend, draft, trigger, route and sometimes act. The question is no longer whether humans use technology. The question is where human judgement belongs when technology can coordinate parts of the work itself.",
                ],
            },
            {
                heading: "Industry 5.0 brings the human back as a design principle",
                paragraphs: [
                    "The European Industry 5.0 discussion adds three words that matter: human-centricity, resilience and sustainability. That is not soft decoration. It is a correction to a purely efficiency-driven digitalisation narrative. If systems become faster but workers lose agency, if automation becomes optimised but brittle, or if AI decisions become impossible to challenge, the organisation has not become more mature. It has only become more automated.",
                    "A human-centric system does not mean humans do every task manually. It means the system is designed around human capability, wellbeing, accountability and meaningful control. That distinction is crucial for AI adoption. The goal is not to keep humans clicking approval buttons forever. The goal is to decide which decisions require human judgement, which can be delegated, and which should remain visible for review.",
                ],
            },
            {
                heading: "From human in the loop to human above the loop",
                paragraphs: [
                    "Many AI governance conversations start with human-in-the-loop. That is useful, especially when decisions are high impact, uncertain or ethically sensitive. But if every AI-supported micro-action waits for a human, the system becomes slow and performative. People rubber-stamp outputs they cannot truly inspect, and the loop turns into theatre.",
                    "The more mature pattern is often human above the loop. Humans set the objectives, boundaries, escalation rules, quality criteria and review rhythm. The AI system can operate inside that frame, but the human supervises the system design and the exception patterns rather than manually touching every step. This is closer to air traffic control than factory-line approval: the human is not absent, but the human role moves upward.",
                ],
            },
            {
                heading: "The skills shift: operators become supervisors of systems",
                paragraphs: [
                    "This changes training needs. Teams need more than tool literacy. They need process literacy, data literacy, risk literacy and delegation literacy. They must understand what good input looks like, what failure modes look like, when automation should stop, and how to audit decisions after the fact.",
                    "For business and education, this is a major shift. The future worker is not simply the person who uses a digital tool well. The future worker is someone who can supervise socio-technical systems: humans, AI, data, policy, workflow and accountability together. That is where Industry 5.0 becomes practically interesting. It does not reject automation. It asks automation to become worthy of human trust.",
                ],
            },
        ],
        takeaway: "Industry 5.0 is not a rejection of Industry 4.0. It is the next maturity layer: connected systems still matter, but humans must move from passive technology users to supervisors of AI-enabled work systems.",
        sources: [
            {label: "European Commission: Industry 5.0", href: "https://research-and-innovation.ec.europa.eu/research-area/industrial-research-and-innovation/industry-50_en"},
            {label: "European Commission: human-centric, sustainable and resilient industry", href: "https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/industry-50-towards-more-sustainable-resilient-and-human-centric-industry-2021-01-07_et"},
            {label: "CORDIS: Human-centric manufacturing", href: "https://cordis.europa.eu/article/id/445250-human-centric-manufacturing-how-new-approaches-to-technology-design-can-transform-industry"},
        ],
    },
    {
        slug: "ai-automation-risks-hallucinations-token-burn-rate-limits",
        title: "AI in automated processes: hallucinations, token burn and rate limits",
        date: "2026-04-26",
        category: "AI risk",
        hubCategory: "AI & Governance",
        readTime: "8 min read",
        excerpt: "AI automation can fail quietly before it fails loudly. Hallucinations corrupt decisions, token burn turns workflows expensive, and rate limits can break processes at exactly the moment they scale.",
        body: [
            {
                heading: "Automation changes the risk profile of AI output",
                paragraphs: [
                    "A hallucination in a chat window is annoying. A hallucination inside an automated workflow can become an operational defect. The risk comes from the surrounding process as much as the model. When AI output moves directly into tickets, emails, CRM records, research tables, code changes or business decisions, mistakes become harder to notice and easier to multiply.",
                    "This is why AI automation should be treated as process engineering, not just prompting. The system needs input validation, source grounding, confidence thresholds, logging, review paths and stop conditions. Otherwise a fluent answer can travel through the process with more authority than it deserves.",
                ],
            },
            {
                heading: "Hallucinations become dangerous when they are actionable",
                paragraphs: [
                    "The practical risk is not that a model sometimes says something false. Humans do that too. The practical risk is that generated content can look structurally correct while being semantically wrong. A fake source, a wrong customer detail, a misread policy clause or a confident but invalid technical recommendation can pass through a workflow because it has the right format.",
                    "The mitigation is not to demand perfect models. The mitigation is to design the process so that claims are grounded, important fields are verified, external actions require evidence, and high-impact outputs are reviewed. Retrieval, citations, deterministic checks and human review all matter, but none of them works alone. The control has to match the risk of the action.",
                ],
            },
            {
                heading: "Token burn is more than a cost problem",
                paragraphs: [
                    "Token burn sounds like finance, but it is also architecture. Long prompts, repeated context, inefficient retries, verbose tool traces and poorly scoped agents can make an AI workflow slow, expensive and fragile. At small scale, nobody notices. At larger scale, the same design can turn into a denial-of-wallet problem: the workflow spends money and latency on work that should have been filtered, cached or simplified.",
                    "Good AI systems therefore need budget-aware design. Use smaller models where possible, trim context, cache stable information, summarise long histories, stop failed loops early and measure cost per successful outcome rather than cost per request. A cheap demo can become an expensive production process if nobody watches token economics.",
                ],
            },
            {
                heading: "Rate limits are process limits",
                paragraphs: [
                    "Rate limits are often treated as a technical inconvenience: wait, retry, back off. In automated business processes, they are more than that. If a workflow depends on AI for triage, classification, enrichment or response generation, a rate limit can become a queue, a delay, a partial outage or a broken customer experience.",
                    "The solution is operational design: queues, fallbacks, degraded modes, batch windows, priority handling and clear user expectations. A system should know what to do when AI is unavailable, slow or too expensive. Human supervision is part of this. People should see when automation is operating normally, when it is degraded and when work needs manual handling.",
                ],
            },
        ],
        takeaway: "AI automation becomes reliable only when hallucination control, cost control and availability control are designed into the workflow from the beginning. The model is only one part of the process.",
        sources: [
            {label: "NIST: AI RMF Generative AI Profile", href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"},
            {label: "OWASP: Top 10 for Large Language Model Applications", href: "https://owasp.org/www-project-top-10-for-large-language-model-applications/"},
            {label: "NIST AI Resource Center", href: "https://airc.nist.gov/"},
        ],
    },
];

export const softwareProjects = [
    {
        name: "Automatic Mail Sender System",
        type: "Python automation",
        status: "Updated Apr 2026",
        description: "SMTP-based outreach automation system that organises recipients, templates and sending workflows.",
        stack: ["Python", "SMTP", "Automation", "GUI"],
        href: "https://github.com/CarinaSchoppe/Automatic-Mail-Sender-System",
    },
    {
        name: "PISMA Literature Review Pipeline",
        type: "AI research automation",
        status: "Updated Apr 2026",
        description: "AI-powered literature-review workflow for academic search, citation expansion and title/abstract relevance analysis.",
        stack: ["Python", "AI", "Research", "Data pipelines"],
        href: "https://github.com/CarinaSchoppe/PISMA-Literature-Review-Pipeline-Automation-Tool",
    },
    {
        name: "OneDrive Duplicate Cleaner",
        type: "Data cleanup notebook",
        status: "Updated Mar 2026",
        description: "Notebook-based utility for cleaning duplicate files and reducing manual OneDrive maintenance.",
        stack: ["Jupyter Notebook", "Python", "File cleanup"],
        href: "https://github.com/CarinaSchoppe/OneDriveDublicateCleaner",
    },
    {
        name: "Skylife",
        type: "Minecraft / PaperMC plugin",
        status: "Updated Feb 2026",
        description: "Feature-rich PaperMC PvP minigame with lobby-to-match flow, loadouts, ranked UI, coin rewards and player progression.",
        stack: ["Kotlin", "PaperMC", "Minecraft", "Game systems"],
        href: "https://github.com/CarinaSchoppe/Skylife",
    },
    {
        name: "theHunter",
        type: "Kotlin plugin recode",
        status: "Updated Jul 2025",
        description: "A remastered Kotlin recode of a theHunter plugin, showing game-plugin architecture and Kotlin migration work.",
        stack: ["Kotlin", "Plugin development", "Game logic"],
        href: "https://github.com/CarinaSchoppe/theHunter",
    },
    {
        name: "Soundboardz",
        type: "Android app",
        status: "Archive project",
        description: "Android soundboard app project and an example of mobile Kotlin development from earlier portfolio work.",
        stack: ["Kotlin", "Android", "Mobile app"],
        href: "https://github.com/CarinaSchoppe/Soundboardz",
    },
    {
        name: "Color Sweaper",
        type: "Java desktop game",
        status: "Archive project",
        description: "Swing-based mini game showing older Java desktop UI and game-logic practice.",
        stack: ["Java", "Swing", "Game development"],
        href: "https://github.com/CarinaSchoppe/Color-Sweaper",
    },
    {
        name: "Remote Client Server",
        type: "Minecraft remote tooling",
        status: "Archive project",
        description: "Remote access tooling for Minecraft Paper environments, reflecting earlier server and plugin experimentation.",
        stack: ["Kotlin", "Paper", "Remote tooling"],
        href: "https://github.com/CarinaSchoppe/Remote-Client-Server",
    },
];

export const timeline = [
    {year: "2021", title: "IT security learning content", copy: "Worked on didactic IT security content for SMEs in the KMUeinfachSicher project at University of Paderborn."},
    {year: "2022-2023", title: "Education and facilitation", copy: "Built cyber learning foundations and contributed to SCHLAU NRW educational workshops and facilitation."},
    {year: "2023-2024", title: "Entrepreneurship and learning design", copy: "Top Talent Programme and garage33 with Design Thinking, Lean Startup, pitching and agile working methods."},
    {year: "2025", title: "Business IT academic profile", copy: "Completed B.Sc. and M.Sc. with AI, data, HCI, IT management and digitalisation focus areas."},
    {year: "2026", title: "International lecturer and AI trainer", copy: "MBA without major completed in April, TAE40122 Certificate IV completed in June and remote-first teaching profile based in Brisbane for Europe, Australia and the world."},
];

export const faqs = [
    {q: "What can I book you for?", a: "You can book me for IT and business consulting, individual projects, larger enablement programmes, AI governance work, cybersecurity awareness, software development topics, business computer science, digital transformation and digital education training. Typical formats are consulting sprints, workshops, live online courses, keynotes, curriculum support and project implementation support."},
    {q: "Who do you usually work with?", a: "I work with training providers, universities, corporate learning teams, bootcamps, public-sector organisations, startups, SMEs and international education partners that need structured remote delivery in English or German."},
    {q: "Do you deliver full courses or only short workshops?", a: "Both. I can deliver 90-minute expert sessions, half-day workshops, full training days, consulting sprints, multi-day intensives, multi-week course delivery and larger project programmes for professional education providers or organisations."},
    {q: "Which AI topics are most requested?", a: "Common requests include AI literacy, GenAI for teams, prompt engineering, agentic workflows, responsible AI, AI governance, automation risks and practical AI adoption for business or education contexts."},
    {q: "Can you teach technical topics like Python, SQL or cybersecurity?", a: "Yes. I teach Python, SQL, databases, APIs, software development foundations, cybersecurity awareness, web security, SOC basics, ethical hacking foundations and CompTIA PenTest+ preparation contexts."},
    {q: "Do you teach in German or English?", a: "Yes. Training can be delivered in English or German. Spanish language experience is also part of my profile, but the primary training languages are English and German."},
    {q: "How does remote delivery from Brisbane work?", a: "Remote delivery is planned around the target audience and time zone. I regularly position remote live sessions for German-speaking and international clients across Europe, Australia and the world."},
    {q: "What makes your training practical?", a: "Sessions combine clear outcomes, examples, exercises, recaps, learner activation and transfer tasks. Participants do not only hear about tools; they practise how to use them in work, study or course contexts."},
    {q: "Can you design materials or a curriculum?", a: "Yes. I can support curriculum design, blended learning concepts, slides, exercises, learning checks, labs, consulting documentation, AI use-case maps, roadmaps and training structures for academies, universities and corporate learning teams."},
    {q: "How do we start a booking request?", a: "Send the topic, audience, learner level, project context, desired format, timeframe and outcome by email or book a short appointment. I will suggest a suitable consulting, training or project format and next steps."},
];
