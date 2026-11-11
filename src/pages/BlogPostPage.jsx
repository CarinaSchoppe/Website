import {ArrowLeft} from "lucide-react";
import {Link, useLocation, useParams} from "react-router-dom";
import {blogArticlesForLanguage} from "../data/blogArticles.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

export default function BlogPostPage() {
    const {slug} = useParams();
    const {state} = useLocation();
    const {language} = useLanguage();
    const blogPosts = blogArticlesForLanguage(language);
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) return <NotFoundPage/>;

    const copy = language === "de"
        ? {
            back: "Zur Blog-Übersicht",
            takeaway: "Kernidee",
            sources: "Quellen und weiterführende Links",
            discuss: "Zu diesem Thema Kontakt aufnehmen",
            contact: "Persönlicher Kontakt",
            more: "Weitere Beiträge",
            read: "Lesen",
        }
        : {
            back: "Back to blog",
            takeaway: "Key takeaway",
            sources: "Sources and further reading",
            discuss: "Get in touch about this topic",
            contact: "Personal contact",
            more: "More articles",
            read: "Read",
        };
    const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <article className="mx-auto max-w-5xl">
                <Link to="/blog" state={state} className="site-text-link text-sky-100">
                    <ArrowLeft size={16} aria-hidden="true"/>{copy.back}
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

                <section className="soft-section mt-6 max-w-4xl p-5" aria-labelledby="article-takeaway">
                    <h2 id="article-takeaway" className="text-lg text-white">{copy.takeaway}</h2>
                    <p className="mt-2 text-base leading-7 text-slate-300">{post.takeaway}</p>
                </section>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
                    <div className="space-y-8">
                        {post.body.map((section) => (
                            <section key={section.heading} className="soft-section p-5 sm:p-8">
                                <h2 className="text-2xl font-black text-white">{section.heading}</h2>
                                <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">
                                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </div>
                            </section>
                        ))}
                    </div>

                    <aside className="blog-sources" aria-labelledby="article-sources">
                        <Card>
                            <h2 id="article-sources" className="text-lg font-black text-white">{copy.sources}</h2>
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

                <section className="soft-section mt-10 flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
                    <h2 className="text-xl text-white">{copy.discuss}</h2>
                    <Button to="/contact#contact-options">{copy.contact}</Button>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-black text-white">{copy.more}</h2>
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        {related.map((item) => (
                            <Link key={item.slug} to={`/blog/${item.slug}`} state={state} className="soft-link-card p-5">
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
