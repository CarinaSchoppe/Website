export function createNotFoundReference(pathname, search = "", hash = "") {
    const route = `${pathname}${search}${hash}`;
    let value = 2166136261;

    for (let index = 0; index < route.length; index += 1) {
        value = Math.imul(value ^ route.charCodeAt(index), 16777619);
    }

    return `404-${(value >>> 0).toString(16).toUpperCase().padStart(8, "0")}`;
}

export function formatNotFoundPath(pathname) {
    try {
        return decodeURI(pathname);
    } catch {
        return pathname;
    }
}
