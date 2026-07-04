import {readFileSync} from "node:fs";
import {join} from "node:path";
import {describe, expect, it} from "vitest";
import {localizedSiteContentForLanguage} from "./localizedContent.js";

const sourceFiles = [
    "src/i18n.jsx",
    "src/data/localizedContent.js",
    "src/pages/BlogPage.jsx",
    "src/pages/ContactPage.jsx",
    "src/pages/SkillsPage.jsx",
];

function readProjectFile(path) {
    return readFileSync(join(process.cwd(), path), "utf8");
}

describe("German localisation quality", () => {
    it("keeps German text free from common mojibake markers", () => {
        const badCharacterCodes = [0xc3, 0xc2, 0xe2];
        const badCharacters = badCharacterCodes.map((code) => String.fromCharCode(code));
        const sourceText = sourceFiles.map(readProjectFile).join("\n");
        const renderedData = JSON.stringify({
            site: localizedSiteContentForLanguage("de"),
        });

        for (const badCharacter of badCharacters) {
            expect(sourceText).not.toContain(badCharacter);
            expect(renderedData).not.toContain(badCharacter);
        }
    });
});
