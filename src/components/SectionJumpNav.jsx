import {cn} from "./utils.js";

export default function SectionJumpNav({items, label, fixed = false, className = ""}) {
    const variantClass = fixed
        ? "relative z-30 border-b border-t border-white/10 bg-[#070B16]/78 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,.18)] backdrop-blur-2xl sm:px-6 sm:py-4 lg:px-8"
        : "relative z-30 rounded-[1.35rem] border border-white/10 bg-[#070B16]/82 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,.18)] backdrop-blur-2xl sm:rounded-[1.65rem] sm:px-4 sm:py-4";

    return (
        <nav className={cn("section-jump-nav", variantClass, className)} aria-label={label}>
            <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:gap-3 lg:flex-row lg:items-center lg:gap-9">
                <span className="section-jump-label shrink-0 whitespace-nowrap border-white/10 text-[10px] font-black uppercase tracking-[0.12em] text-sky-100 sm:text-xs sm:tracking-[0.16em] lg:border-r lg:pr-9">
                    {label}
                </span>
                <div className="section-jump-track flex min-w-0 flex-1 snap-x items-center gap-2 overflow-x-auto py-0.5 pl-[2px] sm:gap-3 sm:py-1 sm:pl-[5px] lg:gap-4 [scrollbar-color:rgba(125,211,252,.42)_rgba(255,255,255,.06)] [scrollbar-width:thin]">
                    {items.map(([href, text]) => (
                        <a
                            key={href}
                            href={href}
                            className="shrink-0 snap-start rounded-full border border-white/10 bg-white/[0.065] px-3.5 py-2 text-xs font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-200/40 hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-200/80 sm:px-5 sm:py-2.5 sm:text-sm"
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
