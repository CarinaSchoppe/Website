import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import {useLanguage} from "../i18n.jsx";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    const {t} = useLanguage();
    const paths = [
        ["/projects", t.nav.software],
        ["/skills", t.nav.skills],
        ["/blog", t.nav.blog],
        ["/contact", t.nav.book],
    ];

    return (
        <main className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <section>
                    <Badge tone="cyan">{t.notFound.badge}</Badge>
                    <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                        {t.notFound.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        {t.notFound.copy}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Button to="/">{t.notFound.home}</Button>
                        <Button to="/contact#contact-options" variant="secondary">{t.notFound.contact}</Button>
                        <Button to="/projects" variant="secondary">{t.nav.software}</Button>
                    </div>
                </section>

                <Card className="relative overflow-hidden p-6 sm:p-8">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/70 to-transparent"/>
                    <div className="grid h-24 w-24 place-items-center rounded-[2rem] border border-sky-100/25 bg-sky-100 text-3xl font-black text-slate-950 shadow-[0_18px_70px_rgba(56,189,248,.22)]">
                        404
                    </div>
                    <p className="mt-6 text-base leading-8 text-slate-300">{t.notFound.hint}</p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {paths.map(([to, label]) => (
                            <Link
                                key={to}
                                to={to}
                                className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-200/35 hover:bg-white/[0.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-200/80"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </main>
    );
}
