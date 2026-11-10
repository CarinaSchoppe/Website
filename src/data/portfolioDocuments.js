const base = import.meta.env.BASE_URL;

function document(folder, filename, language, de, en) {
    return {href: `${base}${folder}/${filename}`, language, title: {de, en}};
}

const paderborn = [document("references", "universitaet-paderborn-arbeitszeugnis-de.pdf", "de", "Arbeitszeugnis", "Employment reference")];

export const credentialDocuments = {
    bsc: [
        document("credentials", "bachelor-urkunde-zeugnis-de.pdf", "de", "Bachelorurkunde und Zeugnis", "Bachelor certificate and exam results"),
        document("credentials", "bachelor-degree-certificate-en.pdf", "en", "Bachelorurkunde", "Bachelor degree certificate"),
    ],
    msc: [
        document("credentials", "master-urkunde-zeugnis-de.pdf", "de", "Masterurkunde und Zeugnis", "Master certificate and exam results"),
        document("credentials", "master-completion-confirmation-en.pdf", "en", "Abschlussbescheinigung", "Confirmation of completion"),
        document("credentials", "master-transcript-en.pdf", "en", "Leistungsübersicht", "Transcript of records"),
    ],
    mba: [
        document("credentials", "mba-completion-confirmation-en.pdf", "en", "MBA-Abschlussbescheinigung", "MBA confirmation of completion"),
    ],
    tae: [
        document("credentials", "certificate-iv-tae40122-en.pdf", "en", "Qualifikationsurkunde", "Qualification certificate"),
    ],
    dibak: [
        document("credentials", "dibak-trainerzertifikat-de.pdf", "de", "Trainerzertifikat", "Trainer certificate"),
    ],
    schlau: [
        document("credentials", "schlau-nrw-ehrenamt-de.pdf", "de", "Ehrenamtsnachweis", "Volunteer work reference"),
    ],
    aiDeveloper: [
        document("credentials", "ai-certs-developer-en.pdf", "en", "AI+ Developer-Zertifikat", "AI+ Developer certificate"),
    ],
    aiResearcher: [
        document("credentials", "ai-certs-researcher-en.pdf", "en", "AI+ Researcher-Zertifikat", "AI+ Researcher certificate"),
    ],
    aiPromptEngineer: [
        document("credentials", "ai-certs-prompt-engineer-level-1-en.pdf", "en", "Prompt-Engineer-Zertifikat", "Prompt Engineer certificate"),
    ],
    aiExecutive: [
        document("credentials", "ai-certs-executive-en.pdf", "en", "AI+ Executive-Zertifikat", "AI+ Executive certificate"),
    ],
    aiLiteracy: [
        document("credentials", "ai-certs-foundation-en.pdf", "en", "Foundation-Zertifikat", "Foundation certificate"),
        document("credentials", "ai-certs-everyone-en.pdf", "en", "Everyone-Zertifikat", "Everyone certificate"),
    ],
    aiPmo: [
        document("credentials", "ai-certs-pmo-practitioner-en.pdf", "en", "PMO-Practitioner-Zertifikat", "PMO Practitioner certificate"),
    ],
    aiEthicalHacker: [
        document("credentials", "ai-certs-ethical-hacker-en.pdf", "en", "Ethical-Hacker-Zertifikat", "Ethical Hacker certificate"),
    ],
    tryHackMe: [
        document("credentials", "tryhackme-learning-paths-en.pdf", "en", "Nachweise zu acht Lernpfaden", "Eight learning path certificates"),
    ],
    passwordSecurity: [
        document("credentials", "kmu-passwortsicherheit-de.pdf", "de", "Passwortsicherheitszertifikat", "Password security certificate"),
    ],
    garage33: [
        document("credentials", "garage33-gruendungszertifikat-de.pdf", "de", "Gründungszertifikat", "Founding certificate"),
    ],
    topTalent: [
        document("credentials", "garage33-top-talent-de.pdf", "de", "Programmzertifikat", "Programme certificate"),
    ],
    pte: [
        document("credentials", "pte-academic-score-report-en.pdf", "en", "Ergebnisbericht", "Score report"),
    ],
    paderborn,
};

export const referenceDocuments = {
    "Universität Paderborn": paderborn,
};
