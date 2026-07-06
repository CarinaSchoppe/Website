import {Link} from "react-router-dom";
import {cn} from "./utils.js";

export default function Button({href, to, children, variant = "primary", onClick, download, showArrow = true}) {
    const base = "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-black leading-tight transition duration-500 ease-out hover:-translate-y-1.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-300/70 sm:w-auto";
    const styles = variant === "primary"
        ? "glass-sheen rainbow-edge bg-gradient-to-r from-white via-slate-50 to-cyan-50 text-zinc-950 shadow-[0_16px_44px_rgba(0,0,0,.18),0_0_34px_rgba(255,255,255,.06)] hover:shadow-[0_24px_90px_rgba(0,0,0,.24),0_0_44px_rgba(255,255,255,.1)]"
        : variant === "dark"
            ? "bg-zinc-950/80 text-white ring-1 ring-white/10 hover:bg-zinc-900"
            : "rainbow-edge border border-white/14 bg-white/[0.075] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_14px_46px_rgba(0,0,0,.18)] backdrop-blur-xl hover:border-white/28 hover:bg-white/[0.12] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_22px_78px_rgba(0,0,0,.22)]";
    const arrow = <span className="shrink-0 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>;
    const buttonProps = {"data-button-variant": variant};

    if (to) return <Link to={to} onClick={onClick} className={cn("group", base, styles)} {...buttonProps}>{children}{showArrow && arrow}</Link>;
    if (href) return <a href={href} onClick={onClick} target="_blank" rel="noreferrer" download={download} className={cn("group", base, styles)} {...buttonProps}>{children}{showArrow && arrow}</a>;
    return <button onClick={onClick} className={cn("group", base, styles)} {...buttonProps}>{children}{showArrow && arrow}</button>;
}
