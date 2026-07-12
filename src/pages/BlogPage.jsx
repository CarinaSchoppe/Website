import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";

function BlogCard({post, readLabel, className = ""}) {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className={`soft-link-card group flex min-h-[22rem] w-[82vw] shrink-0 snap-start flex-col p-5 focus:outline-none focus:ring-2 focus:ring-sky-200/80 sm:w-[25rem] lg:w-[28rem] ${className}`}
        >
            <Badge tone="white">{post.category}</Badge>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
            </div>
            <h2 className="mt-5 text-2xl font-black leading-tight text-white">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
            <span className="mt-auto pt-6 text-sm font-black text-sky-100">{readLabel} →</span>
        </Link>
    );
}

function BlogCarousel({posts, readLabel, label, previousLabel, nextLabel}) {
    const scrollerRef = useRef(null);
    const dragState = useRef({active: false, startX: 0, scrollLeft: 0});
    const [dragging, setDragging] = useState(false);

    function scrollByCards(direction) {
        const node = scrollerRef.current;
        if (!node) return;
        node.scrollBy({left: direction * Math.min(520, node.clientWidth * 0.82), behavior: "smooth"});
    }

    function startDrag(event) {
        const node = scrollerRef.current;
        if (!node) return;
        dragState.current = {active: true, startX: event.clientX, scrollLeft: node.scrollLeft};
        setDragging(true);
        node.setPointerCapture?.(event.pointerId);
    }

    function moveDrag(event) {
        const node = scrollerRef.current;
        if (!node || !dragState.current.active) return;
        event.preventDefault();
        node.scrollLeft = dragState.current.scrollLeft - (event.clientX - dragState.current.startX);
    }

    function endDrag(event) {
        const node = scrollerRef.current;
        dragState.current.active = false;
        setDragging(false);
        node?.releasePointerCapture?.(event.pointerId);
    }

    function handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollByCards(1);
        }
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollByCards(-1);
        }
    }

    return (
        <section className="mt-10">
            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <h2 id="blog-carousel-title" className="text-2xl font-black text-white">{label}</h2>
                <div className="flex gap-2">
                    <button type="button" onClick={() => scrollByCards(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.07] text-lg font-black text-white transition hover:border-sky-200/45 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-sky-200/80" aria-label={previousLabel}>&lt;</button>
                    <button type="button" onClick={() => scrollByCards(1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.07] text-lg font-black text-white transition hover:border-sky-200/45 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-sky-200/80" aria-label={nextLabel}>&gt;</button>
                </div>
            </div>
            <div
                ref={scrollerRef}
                role="region"
                aria-label={label}
                tabIndex="0"
                onKeyDown={handleKeyDown}
                onPointerDown={startDrag}
                onPointerMove={moveDrag}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className={`blog-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 pr-4 [scrollbar-color:rgba(125,211,252,.46)_rgba(255,255,255,.06)] [scrollbar-width:thin] focus:outline-none focus:ring-2 focus:ring-sky-200/70 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            >
                {posts.map((post) => <BlogCard key={post.slug} post={post} readLabel={readLabel}/>)}
            </div>
        </section>
    );
}

export default function BlogPage() {
    const {language} = useLanguage();
    const {blogPosts} = useSiteContent();
    const [activeCategory, setActiveCategory] = useState("All");
    const filterTrackRef = useRef(null);
    const hubCategories = [
        {value: "All", label: language === "de" ? "Alle" : "All"},
        {value: "AI & Governance", label: "AI & Governance"},
        {value: "Digital Education", label: language === "de" ? "Digitale Bildung" : "Digital Education"},
        {value: "Cybersecurity", label: "Cybersecurity"},
        {value: "Software Development", label: language === "de" ? "Softwareentwicklung" : "Software Development"},
        {value: "Business Computer Science", label: language === "de" ? "Wirtschaftsinformatik" : "Business Computer Science"},
        {value: "Teaching & Learning", label: language === "de" ? "Lehre & Lernen" : "Teaching & Learning"},
        {value: "Career / Thought Leadership", label: language === "de" ? "Karriere / fachliche Positionierung" : "Career / Thought Leadership"},
    ];
    const visiblePosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => (post.hubCategory || post.category) === activeCategory);
    const sortedPosts = [...visiblePosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const featuredPost = sortedPosts[0];
    const remainingPosts = sortedPosts.slice(1);
    const copy = language === "de"
        ? {
            title: "Blog zu AI, digitaler Bildung und verantwortungsvoller Technologie.",
            intro: "Der Blog ist der editoriale Teil des persönlichen Portfolios. Hier ordne ich Entwicklungen rund um Agentic AI, AI Governance, digitale Bildung, Projektarbeit, Cybersecurity und verantwortungsvolle Automatisierung ein.",
            featured: "Neuester Beitrag",
            latest: "Alle Blogbeiträge",
            read: "Artikel lesen",
            suggest: "Kontakt aufnehmen",
            filters: "Kategorien",
            filterRail: "Scrollbare Blog-Kategorien",
            empty: "Zu dieser Kategorie gibt es noch keinen Beitrag.",
            previous: "Blogbeiträge nach links scrollen",
            next: "Blogbeiträge nach rechts scrollen",
        }
        : {
            title: "Blog on AI, digital education and responsible technology.",
            intro: "The blog is the editorial part of the personal portfolio. I use it to analyse developments in agentic AI, AI governance, digital education, project work, cybersecurity and responsible automation.",
            featured: "Featured latest post",
            latest: "All blog posts",
            read: "Read article",
            suggest: "Get in touch",
            filters: "Categories",
            filterRail: "Scrollable blog categories",
            empty: "There is no article in this category yet.",
            previous: "Scroll blog posts left",
            next: "Scroll blog posts right",
        };

    function handleFilterKeyDown(event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

        event.preventDefault();
        filterTrackRef.current?.scrollBy({
            left: event.key === "ArrowRight" ? 220 : -220,
            behavior: "smooth",
        });
    }

    return (
        <main className="blog-page px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="rose">Blog</Badge>
                <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
                        {copy.title}
                    </h1>
                    <p className="text-lg leading-8 text-slate-300">
                        {copy.intro}
                    </p>
                </div>

                <section className="mt-10 max-w-full" aria-label={copy.filters}>
                    <h2 className="mb-4 text-xl font-black text-white">{copy.filters}</h2>
                    <div
                        ref={filterTrackRef}
                        className="blog-filter-track -mx-4 flex max-w-none flex-nowrap gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:w-full sm:px-0"
                        role="region"
                        aria-label={copy.filterRail}
                        tabIndex="0"
                        onKeyDown={handleFilterKeyDown}
                    >
                        {hubCategories.map((category) => (
                            <button
                                key={category.value}
                                type="button"
                                onClick={() => setActiveCategory(category.value)}
                                className={activeCategory === category.value
                                    ? "shrink-0 rounded-full bg-sky-100 px-4 py-2 text-sm font-black text-slate-950"
                                    : "shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-black text-slate-200 transition hover:border-sky-100/40 hover:bg-white/[0.1]"}
                                aria-pressed={activeCategory === category.value}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </section>

                {!featuredPost && (
                    <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-slate-300">{copy.empty}</div>
                )}

                {featuredPost && (
                    <section className="mt-12">
                        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <Badge tone="orange">{copy.featured}</Badge>
                            <Button to="/contact#contact-options" variant="secondary">{copy.suggest}</Button>
                        </div>
                        <Link to={`/blog/${featuredPost.slug}`} className="soft-link-card group flex min-h-[360px] flex-col p-6 sm:p-8">
                            <Badge tone="orange">{copy.featured}</Badge>
                            <div className="mt-6 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                                <span>{featuredPost.category}</span>
                                <span>{featuredPost.date}</span>
                                <span>{featuredPost.readTime}</span>
                            </div>
                            <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">{featuredPost.title}</h2>
                            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{featuredPost.excerpt}</p>
                            <span className="mt-auto pt-8 text-sm font-black text-sky-100">{copy.read} →</span>
                        </Link>
                    </section>
                )}

                {remainingPosts.length > 0 && <BlogCarousel posts={remainingPosts} readLabel={copy.read} label={copy.latest} previousLabel={copy.previous} nextLabel={copy.next}/>}
            </div>
        </main>
    );
}
