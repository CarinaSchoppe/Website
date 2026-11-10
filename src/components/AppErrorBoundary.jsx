import {Component} from "react";
import Button from "./Button.jsx";

export default class AppErrorBoundary extends Component {
    state = {error: null};

    static getDerivedStateFromError(error) {
        return {error};
    }

    componentDidCatch(error, info) {
        if (import.meta.env.DEV) {
            console.error(error, info);
        }
    }

    render() {
        if (!this.state.error) return this.props.children;
        if ("fallback" in this.props) return this.props.fallback;

        const isGerman = document.documentElement.lang === "de";
        const copy = isGerman
            ? {
                badge: "Seitenwiederherstellung",
                title: "Diese Seite konnte nicht sauber geladen werden.",
                body: "Die Website ist weiter erreichbar, aber diese Ansicht hatte ein Ladeproblem. Das kann nach einer frischen Veröffentlichung passieren, wenn der Browser noch eine ältere JavaScript-Datei im Cache hat.",
                reload: "Seite neu laden",
                contact: "Kontakt",
            }
            : {
                badge: "Page recovery",
                title: "This page could not load cleanly.",
                body: "The website is still available, but this view ran into a loading problem. This can happen after a fresh deployment while the browser still has an older JavaScript file cached.",
                reload: "Reload page",
                contact: "Contact",
            };

        return (
            <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center px-4 py-24 sm:px-6 lg:px-8">
                <section className="ui-card w-full p-8 sm:p-10">
                    <p className="site-kicker">
                        {copy.badge}
                    </p>
                    <h1 className="mt-5 text-4xl tracking-tight sm:text-5xl">
                        {copy.title}
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-8">
                        {copy.body}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button onClick={() => globalThis.location.reload()}>
                            {copy.reload}
                        </Button>
                        <Button href="/contact#contact-options" variant="secondary">
                            {copy.contact}
                        </Button>
                    </div>
                </section>
            </main>
        );
    }
}
