import {useState} from "react";
import {headshotWidths, outdoorWidths} from "../data/portrait.js";
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
    const [failure, setFailure] = useState(null);
    const fallbackText = fallbackCopy || t.home.photoFallback;
    const responsiveWidths = src.includes("carina-headshot")
        ? headshotWidths
        : src.includes("carina-outdoor")
            ? outdoorWidths
            : [480, 640, 960];
    const webpSrcSet = src.endsWith(".jpg")
        ? responsiveWidths.map((sourceWidth) => `${src.replace(/\.jpg$/, `-${sourceWidth}.webp`)} ${sourceWidth}w`).join(", ")
        : null;
    const currentFailure = failure?.src === src ? failure : null;
    const useWebp = Boolean(webpSrcSet && !currentFailure);
    const priority = fetchPriority || "auto";
    const imageLoading = loading || (priority === "high" ? "eager" : "lazy");
    const decoding = "async";

    return (
        <div className={cn("ui-photo", className)}>
            {!currentFailure?.showPlaceholder ? (
                <picture>
                    {useWebp && <source srcSet={webpSrcSet} sizes={sizes} type="image/webp"/>}
                    <img
                        key={useWebp ? "webp" : "original"}
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes={sizes}
                        loading={imageLoading}
                        fetchPriority={priority}
                        decoding={decoding}
                        className={cn("h-full w-full object-cover", imgClass)}
                        onError={({currentTarget}) => setFailure({
                            src,
                            showPlaceholder: !useWebp || currentTarget.currentSrc === currentTarget.src,
                        })}
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
