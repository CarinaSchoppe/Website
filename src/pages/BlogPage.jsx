import {useState} from "react";
import {ArrowRight} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
import {blogIndexForLanguage} from "../data/blogIndex.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";

const blogFilters = new Map();

const categoryLabels = {
    "AI & Governance": {de: "KI & Governance", en: "AI & Governance"},
    "Digital Education": {de: "Digitale Bildung", en: "Digital Education"},
    "Cybersecurity": {de: "Cybersicherheit", en: "Cybersecurity"},
    "Software Development": {de: "Softwareentwicklung", en: "Software Development"},
    "Business Computer Science": {de: "Wirtschaftsinformatik", en: "Business Computer Science"},
    "Teaching & Learning": {de: "Lehre & Lernen", en: "Teaching & Learning"},
    "Career / Thought Leadership": {de: "Karriere", en: "Career"},
};

const copy = {
    de: {
        title: "Texte zu KI, digitaler Bildung und Verantwortung.",
        intro: "Was verändert KI im Unterricht und am Arbeitsplatz? Hier schreibe ich über die Entscheidungen, die Menschen dabei treffen.",
        articles: "Beiträge",
        resultLabels: ["Beitrag", "Beiträge"],
        read: "Artikel lesen",
        filters: "Beiträge nach Thema filtern",
        all: "Alle",
        latest: "Neuester Beitrag",
    },
    en: {
        title: "Writing on AI, digital education and responsible technology.",
        intro: "What does AI change in the classroom and at work? I write about the decisions people face along the way.",
        articles: "Articles",
        resultLabels: ["article", "articles"],
        read: "Read article",
        filters: "Filter articles by topic",
        all: "All",
        latest: "Latest article",
    },
};

function getCategory(post) {
    return post.hubCategory || post.category;
}

function ArticleCard({post, labels, featured, dateFormatter}) {
    const titleId = `blog-title-${post.slug}`;
    return (
        <li className={featured ? "sm:col-span-2" : undefined}>
            <Link to={`/blog/${post.slug}`} aria-labelledby={titleId} className="soft-link-card flex h-full flex-col items-start p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Badge tone={featured ? "orange" : "white"}>{featured ? labels.latest : post.category}</Badge>
                    <span className="text-xs font-bold text-slate-400">
                        <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                        {" · "}{post.readTime}
                    </span>
                </div>
                <h3 id={titleId} className={`mt-4 max-w-3xl text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{post.title}</h3>
                <p className="mb-4 mt-2 max-w-[64ch] text-sm leading-6 text-slate-300">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-extrabold text-sky-100" aria-hidden="true">
                    {labels.read}<ArrowRight size={16}/>
                </span>
            </Link>
        </li>
    );
}

export default function BlogPage() {
    const {key} = useLocation();
    return <BlogIndex key={key} historyKey={key}/>;
}

function BlogIndex({historyKey}) {
    const {language} = useLanguage();
    const labels = copy[language];
    const [activeCategory, setActiveCategory] = useState(() => blogFilters.get(historyKey) ?? "All");
    const posts = blogIndexForLanguage(language);
    const categories = [...new Set(posts.map(getCategory))];
    const dateFormatter = new Intl.DateTimeFormat(language === "de" ? "de-DE" : "en-GB", {dateStyle: "medium", timeZone: "UTC"});
    const visible = (activeCategory === "All" ? [...posts] : posts.filter((post) => getCategory(post) === activeCategory))
        .sort((a, b) => b.date.localeCompare(a.date));

    function selectCategory(category) {
        blogFilters.delete(historyKey);
        blogFilters.set(historyKey, category);
        if (blogFilters.size > 32) blogFilters.delete(blogFilters.keys().next().value);
        setActiveCategory(category);
    }

    return (
        <main className="blog-page px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge tone="rose">Blog</Badge>
                <h1 className="mt-5 max-w-4xl text-5xl font-black text-white sm:text-6xl">{labels.title}</h1>
                <p className="mt-4 max-w-[62ch] text-base leading-7 text-slate-300 sm:text-lg">{labels.intro}</p>

                <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label={labels.filters}>
                    {["All", ...categories].map((category) => (
                        <button key={category} type="button" className="site-filter-button min-h-11 rounded-full border px-4 py-2 text-sm font-extrabold" aria-pressed={activeCategory === category} onClick={() => selectCategory(category)}>
                            {category === "All" ? labels.all : categoryLabels[category]?.[language] ?? category}
                        </button>
                    ))}
                </div>

                <section className="mt-8" aria-labelledby="blog-results-title">
                    <div className="mb-3 flex items-baseline justify-between gap-3">
                        <h2 id="blog-results-title" className="text-2xl text-white">{labels.articles}</h2>
                        <p className="text-sm text-slate-300" role="status">{visible.length} {labels.resultLabels[visible.length === 1 ? 0 : 1]}</p>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2" role="list">
                        {visible.map((post, index) => (
                            <ArticleCard key={post.slug} post={post} labels={labels} featured={index === 0 && activeCategory === "All"} dateFormatter={dateFormatter}/>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
