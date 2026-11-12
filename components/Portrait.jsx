import { getAssetPath } from "../lib/assets";
export default function Portrait({
  alt = "Bhavesh Gupta",
  eager = false,
  sizes = "(max-width: 640px) 128px, (max-width: 900px) 170px, 200px",
}) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={[240, 480, 720]
          .map(
            (width) =>
              getAssetPath("/img/bhavesh-gupta-" + width + ".webp") +
              " " +
              width +
              "w",
          )
          .join(", ")}
        sizes={sizes}
      />
      <img
        src={getAssetPath("/img/bhavesh-gupta-480.jpg")}
        width="480"
        height="980"
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={eager ? "high" : undefined}
      />
    </picture>
  );
}
