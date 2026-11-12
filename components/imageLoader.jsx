import { useState } from "react";
import { getAssetPath } from "../lib/assets";
export default function ImageLoader({
  mainImageSrc,
  altImageSrc,
  altText,
  classValue,
  buttonReq = false,
}) {
  const [failed, setFailed] = useState(false);
  const main = getAssetPath(mainImageSrc);
  return (
    <figure className="loaded-image">
      <img
        src={failed ? getAssetPath(altImageSrc) : main}
        alt={altText || "Research figure"}
        className={classValue || ""}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      {failed && (
        <figcaption>
          Image unavailable.{" "}
          <a href={main} target="_blank" rel="noopener noreferrer">
            Open original image ↗
          </a>
        </figcaption>
      )}
      {buttonReq && !failed && (
        <figcaption>
          <a href={main} target="_blank" rel="noopener noreferrer">
            Open image in new tab ↗
          </a>
        </figcaption>
      )}
    </figure>
  );
}
