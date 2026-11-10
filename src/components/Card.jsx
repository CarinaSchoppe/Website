import {cn} from "./utils.js";

export default function Card({children, className = "", shine = true, ...props}) {
    return (
        <div {...props} className={cn("ui-card flex flex-col", className)} data-rule={shine ? "" : undefined}>
            {children}
        </div>
    );
}
