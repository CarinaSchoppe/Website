import {Link, Navigate, useParams} from "react-router-dom";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

export default function BlogPostPage() {
    const {slug} = useParams();
    const {language} = useLanguage();
    const {blogPosts} = useSiteContent();
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) return <Navigate to="/blog" replace/>;

    const copy = language === "de"
        ? {
            back: "Zur Blog-Übersicht",
            takeaway: "Kernidee",
            sources: "Quellen und weiterführende Links",
            discuss: "Zu diesem Thema Kontakt aufnehmen",
            more: "Weitere Beiträge",
            read: "Lesen",
        }
        : {
            back: "Back to blog",
            takeaway: "Key takeaway",
            sources: "Sources and further reading",
            discuss: "Get in touch about this topic",
            more: "More articles",
            read: "Read",
        };
    const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <article className="mx-auto max-w-5xl">
                <Link to="/blog" className="text-sm font-black text-sky-100 transition hover:text-white">
                    &lt; {copy.back}
                </Link>

                <header className="mt-8">
                    <Badge tone="rose">{post.category}</Badge>
                    <div className="mt-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                        {post.title}
                    </h1>
                    <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                        {post.excerpt}
                    </p>
                </header>

                <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
                    <div className="space-y-8">
                        {post.body.map((section) => (
                            <section key={section.heading} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_22px_80px_rgba(0,0,0,.2)] backdrop-blur-2xl sm:p-8">
                                <h2 className="text-2xl font-black text-white">{section.heading}</h2>
                                <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">
                                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </div>
                            </section>
                        ))}
                    </div>

                    <aside className="space-y-5 lg:sticky lg:top-28">
                        <Card>
                            <Badge tone="emerald">{copy.takeaway}</Badge>
                            <p className="mt-5 text-sm leading-7 text-slate-300">{post.takeaway}</p>
                        </Card>

                        <Card>
                            <h2 className="text-lg font-black text-white">{copy.sources}</h2>
                            <div className="mt-4 space-y-3">
                                {post.sources.map((source) => (
                                    <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm font-bold leading-6 text-sky-100 transition hover:border-sky-200/35 hover:bg-white/[0.09]">
                                        {source.label}
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </aside>
                </div>

                <section className="mt-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-300/13 via-white/[0.06] to-blue-300/10 p-6 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-2xl sm:p-8">
                    <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <h2 className="text-2xl font-black text-white">{copy.discuss}</h2>
                            <p className="mt-2 text-sm leading-7 text-slate-300">{post.takeaway}</p>
                        </div>
                        <Button to="/contact#contact-options">{copy.discuss}</Button>
                    </div>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-black text-white">{copy.more}</h2>
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        {related.map((item) => (
                            <Link key={item.slug} to={`/blog/${item.slug}`} className="soft-link-card p-5">
                                <Badge tone="white">{item.category}</Badge>
                                <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item.excerpt}</p>
                                <div className="mt-5 text-sm font-black text-sky-100">{copy.read} &gt;</div>
                            </Link>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
