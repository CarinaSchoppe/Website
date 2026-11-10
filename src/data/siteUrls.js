export const SITE_URL = "https://carinaschoppe.com";

const projectAliases = new Set(["/software", "/portfolio"]);

export function canonicalUrl(pathname) {
    const path = pathname.replace(/\/+$/, "");
    const canonicalPath = projectAliases.has(path) ? "/projects" : path;
    return `${SITE_URL}${canonicalPath}/`;
}
