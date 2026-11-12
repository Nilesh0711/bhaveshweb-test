// Bibliographic fields verified against Wiley and Crossref for this DOI.
// https://doi.org/10.1002/qute.202500109
const verifiedDetails = {
  "10.1002/qute.202500109": {
    volume: "8",
    number: "11",
    pages: "e00109",
    month: "aug",
  },
};
const escapeTeX = (value) =>
  String(value).replace(/[&%$#_{}]/g, (character) => "\\" + character);
export function createBibtex(paper) {
  const doi = (paper.doi || "")
    .trim()
    .replace(/^(?:https?:\/\/(?:dx\.)?doi\.org\/|doi:\s*)/i, "");
  const authors = (paper.authors || "")
    .split(",")
    .map((author) => author.trim())
    .filter(Boolean);
  const year = (paper.date || "").match(/\b(?:19|20)\d{2}\b/)?.[0];
  const surname =
    authors[0]
      ?.split(/\s+/)
      .pop()
      .replace(/[^a-zA-Z0-9]/g, "") || "Article";
  const word = (paper.title || "").match(/[a-zA-Z]+/)?.[0] || "";
  const details = verifiedDetails[doi.toLowerCase()] || {};
  const fields = [
    ["title", "{" + escapeTeX(paper.title || "") + "}"],
    ["author", authors.map(escapeTeX).join(" and ")],
    ["journal", escapeTeX(paper.journal || "")],
    ["year", year],
    ...Object.entries(details),
    ["doi", doi],
    ["url", doi ? "https://doi.org/" + doi : paper.link],
  ].filter(([, value]) => value);
  return (
    "@article{" +
    surname +
    (year || "") +
    word +
    ",\n" +
    fields
      .map(([key, value]) => "  " + key + " = {" + value + "}")
      .join(",\n") +
    "\n}"
  );
}
export async function copyText(
  text,
  clipboard = globalThis.navigator?.clipboard,
) {
  if (typeof clipboard?.writeText !== "function") return false;
  try {
    await clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
