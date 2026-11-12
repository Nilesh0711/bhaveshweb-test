import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createBibtex, copyText } from "../lib/bibtex.mjs";
const paper = JSON.parse(
  fs.readFileSync(
    new URL("../data/publication/published_article.json", import.meta.url),
    "utf8",
  ),
)[0];
test("the published paper has complete, verified citation metadata", () => {
  const bib = createBibtex(paper);
  assert.match(bib, /^@article\{Gupta2025Expedited,\n/);
  for (const author of paper.authors.split(", "))
    assert.ok(bib.includes(author));
  assert.ok(bib.includes("title = {{" + paper.title + "}}"));
  for (const field of [
    "year = {2025}",
    "volume = {8}",
    "number = {11}",
    "pages = {e00109}",
    "doi = {10.1002/qute.202500109}",
    "url = {https://doi.org/10.1002/qute.202500109}",
  ])
    assert.ok(bib.includes(field), field);
  assert.equal((bib.match(/ and /g) || []).length, 5);
  assert.ok(!bib.includes("undefined"));
});
test("unknown papers do not inherit the published paper’s volume or article number", () => {
  const bib = createBibtex({
    ...paper,
    doi: "https://doi.org/10.1234/example",
    date: "January 2026",
  });
  assert.match(bib, /year = \{2026\}/);
  assert.ok(!bib.includes("volume ="));
  assert.ok(!bib.includes("pages ="));
});
test("citation titles escape TeX special characters and preserve capitalization", () => {
  const bib = createBibtex({ ...paper, title: "Noise & QEC_2" });
  assert.ok(bib.includes("title = {{Noise \\& QEC\\_2}}"));
});
test("clipboard success writes exactly the generated citation", async () => {
  const citation = createBibtex(paper);
  let written;
  const copied = await copyText(citation, {
    writeText: async (value) => {
      written = value;
    },
  });
  assert.equal(copied, true);
  assert.equal(written, citation);
});
test("clipboard denial requests the manual-copy fallback", async () => {
  assert.equal(
    await copyText("citation", {
      writeText: async () => {
        throw new Error("denied");
      },
    }),
    false,
  );
});
test("missing clipboard support requests the manual-copy fallback", async () => {
  assert.equal(await copyText("citation", null), false);
  assert.equal(await copyText("citation", {}), false);
});
