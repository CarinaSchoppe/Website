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
    paderborn,
};

export const referenceDocuments = {
    "Universität Paderborn": paderborn,
};
