import {Link} from "react-router-dom";

export default function Button({href, to, children, variant = "primary", onClick, download, showArrow = true}) {
    const base = "ui-button group";
    const arrow = <span className="shrink-0 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>;
    const buttonProps = {"data-button-variant": variant};
    const opensNewTab = typeof href === "string" && /^https?:\/\//.test(href);

    if (to) return <Link to={to} onClick={onClick} className={base} {...buttonProps}>{children}{showArrow && arrow}</Link>;
    if (href) return <a href={href} onClick={onClick} target={opensNewTab ? "_blank" : undefined} rel={opensNewTab ? "noreferrer" : undefined} download={download} className={base} {...buttonProps}>{children}{showArrow && arrow}</a>;
    return <button onClick={onClick} className={base} {...buttonProps}>{children}{showArrow && arrow}</button>;
}
