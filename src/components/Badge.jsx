export default function Badge({children, tone = "cyan"}) {
    return <span data-accent={tone} className="ui-badge">{children}</span>;
}
