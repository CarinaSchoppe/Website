import {describe, expect, it} from "vitest";
import {createNotFoundReference, formatNotFoundPath} from "./notFound.js";

describe("not-found route identity", () => {
    it("creates a stable reference for the complete requested route", () => {
        expect(createNotFoundReference("/missing", "?source=test", "#section"))
            .toBe(createNotFoundReference("/missing", "?source=test", "#section"));
        expect(createNotFoundReference("/missing", "?source=test", "#section"))
            .not.toBe(createNotFoundReference("/missing", "?source=other", "#section"));
    });

    it("formats encoded paths without throwing on invalid input", () => {
        expect(formatNotFoundPath("/über-mich")).toBe("/über-mich");
        expect(formatNotFoundPath("/invalid/%E0%A4%A")).toBe("/invalid/%E0%A4%A");
    });
});
