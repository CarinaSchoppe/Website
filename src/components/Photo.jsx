import {useState} from "react";
import {useLanguage} from "../i18n.jsx";
import {cn} from "./utils.js";

export default function Photo({
                                  src,
                                  alt,
                                  className = "",
                                  imgClass = "",
                                  fallback = "CS",
                                  fallbackCopy,
                                  fetchPriority,
                                  loading,
                                  sizes = "(min-width: 1024px) 520px, 92vw",
                                  width = 960,
                                  height = 960,
                              }) {
    const {t} = useLanguage();
    const [failed, setFailed] = useState(false);
    const fallbackText = fallbackCopy || t.home.photoFallback;
    const responsiveWidths = src.includes("carina-headshot")
        ? [240, 320, 480, 640, 960]
        : src.includes("carina-outdoor")
            ? [320, 400, 480, 640, 960]
            : [480, 640, 960];
    const webpSrcSet = src.endsWith(".jpg")
        ? responsiveWidths.map((sourceWidth) => `${src.replace(/\.jpg$/, `-${sourceWidth}.webp`)} ${sourceWidth}w`).join(", ")
        : null;
    const priority = fetchPriority || "auto";
    const imageLoading = loading || (priority === "high" ? "eager" : "lazy");
    const decoding = "async";

    return (
        <div className={cn("ui-photo", className)}>
            {!failed ? (
                <picture>
                    {webpSrcSet && <source srcSet={webpSrcSet} sizes={sizes} type="image/webp"/>}
                    <img
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes={sizes}
                        loading={imageLoading}
                        fetchPriority={priority}
                        decoding={decoding}
                        className={cn("h-full w-full object-cover", imgClass)}
                        onError={() => setFailed(true)}
                    />
                </picture>
            ) : (
                <div className="ui-photo-fallback">
                    <strong>{fallback}</strong>
                    <p>{fallbackText}</p>
                </div>
            )}
        </div>
    );
}
