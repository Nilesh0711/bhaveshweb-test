import { useEffect, useRef, useState } from "react";
import { createBibtex, copyText } from "../lib/bibtex.mjs";
export default function CopyBibtex({ paper }) {
  const [status, setStatus] = useState("idle");
  const timer = useRef(null);
  const manualField = useRef(null);
  const bibtex = createBibtex(paper);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (status === "manual") {
      manualField.current?.focus();
      manualField.current?.select();
    }
  }, [status]);
  async function handleCopy() {
    clearTimeout(timer.current);
    setStatus("copying");
    const copied = await copyText(bibtex);
    setStatus(copied ? "copied" : "manual");
    if (copied) timer.current = setTimeout(() => setStatus("idle"), 2500);
  }
  return (
    <>
      <button
        type="button"
        className="copy-bibtex"
        onClick={handleCopy}
        disabled={status === "copying"}
        aria-label={"Copy BibTeX for " + paper.title}
      >
        {status === "copied"
          ? "Copied!"
          : status === "copying"
            ? "Copying…"
            : "Copy BibTeX"}
      </button>
      <span className="sr-only" role="status">
        {status === "copied"
          ? "BibTeX citation copied to clipboard."
          : status === "manual"
            ? "Select and copy the citation below."
            : ""}
      </span>
      {status === "manual" && (
        <div className="bibtex-manual">
          <p>
            Automatic copying is unavailable. Select and copy this citation:
          </p>
          <textarea
            ref={manualField}
            value={bibtex}
            readOnly
            rows={10}
            aria-label={"BibTeX citation for " + paper.title}
          />
        </div>
      )}
    </>
  );
}
