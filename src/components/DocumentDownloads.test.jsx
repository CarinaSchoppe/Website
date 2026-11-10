import {screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";
import DocumentDownloads from "./DocumentDownloads.jsx";

describe("DocumentDownloads", () => {
    it("names the file and indicates the original language on the German site", () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        renderWithProviders(<DocumentDownloads documents={[{
            href: "/credentials/bachelor-en.pdf",
            language: "en",
            title: {de: "Bachelorurkunde", en: "Bachelor degree certificate"},
        }]}/>);

        const link = screen.getByRole("link", {name: "Bachelorurkunde (PDF · Englisch) – herunterladen"});
        expect(link).toHaveTextContent("Bachelorurkunde (PDF · Englisch)");
        expect(link).toHaveAttribute("href", "/credentials/bachelor-en.pdf");
        expect(link).toHaveAttribute("hreflang", "en");
        expect(link).toHaveAttribute("download");
    });

    it("uses the reference name when a separate document title is unavailable", () => {
        renderWithProviders(<DocumentDownloads title="Universität Paderborn" documents={[{
            href: "/references/paderborn-de.pdf",
            language: "de",
        }]}/>);

        expect(screen.getByRole("link", {name: "PDF · German – Download Universität Paderborn"})).toHaveTextContent("PDF · German");
    });

    it("renders no placeholder when no document is available", () => {
        renderWithProviders(<DocumentDownloads title="Unpublished document"/>);
        expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
});
