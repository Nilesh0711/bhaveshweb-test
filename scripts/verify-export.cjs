/* Verify the exported redesign against main. Run after npm run export.
 * For GitHub Pages subpath builds: node scripts/verify-export.cjs /bhaveshweb
 */
const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const babel = require("next/dist/compiled/babel/bundle");
const parse = babel.parser().parse;
const basePath = process.argv[2] || "";
const filesIn = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? filesIn(path.join(dir, entry.name))
        : [path.join(dir, entry.name)],
    );
const mainFiles = cp
  .execFileSync("git", ["ls-tree", "-r", "--name-only", "main"], {
    encoding: "utf8",
  })
  .trim()
  .split(/\r?\n/);
// The user explicitly removed the Other/Photographs section.
const removedSectionFiles = [
  "pages/other.jsx",
  "components/CampusNotes.jsx",
  "components/QuantumGallery.jsx",
  "data/gallery/gallery1.json",
  "data/gallery/gallery2.json",
  "data/gallery/gallery3.json",
  "data/gallery/gallery4.json",
  "public/img/galleryHome/chip.jpg",
  "public/img/galleryHome/ckt.jpg",
  "public/img/galleryHome/depth.jpg",
  "public/img/galleryHome/graph.jpg",
  "public/img/galleryHome/ibm_qiskit.jpg",
  "public/img/galleryHome/qcomputer.jpg",
  "public/img/slider/pic_1.jpg",
  "public/img/slider/pic_2.jpg",
  "public/img/slider/pic_3.jpg",
];
const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&rsquo;/g, "’")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
const normalize = (text) =>
  decode(text)
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
const htmlFiles = filesIn("out").filter((file) => file.endsWith(".html"));
const html = htmlFiles
  .map((file) =>
    fs
      .readFileSync(file, "utf8")
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, ""),
  )
  .join("\n");
const rendered = normalize(html);
const failures = [];
const counts = {
  pages: htmlFiles.length,
  prose: 0,
  records: 0,
  dataValues: 0,
  originalURLs: 0,
  localLinks: 0,
};
const fail = (kind, file, value) => failures.push({ kind, file, value });
const unchanged = [
  "data/about",
  "data/publication",
  "data/teaching",
  "next.config.js",
  "package.json",
  "package-lock.json",
  ".github",
];
cp.execFileSync("git", ["diff", "--exit-code", "main", "--", ...unchanged], {
  stdio: "pipe",
});
const jsxText = (node) => {
  if (node.type === "JSXText") return node.value;
  if (
    node.type === "JSXExpressionContainer" &&
    node.expression.type === "StringLiteral"
  )
    return node.expression.value;
  return (node.children || []).map(jsxText).join("");
};
const visit = (node, file, inTitle = false) => {
  if (!node || typeof node !== "object") return;
  // The six original home-gallery captions belonged to the removed section.
  if (
    file === "pages/home.jsx" &&
    node.type === "VariableDeclarator" &&
    node.id?.name === "Gallery"
  )
    return;
  const tag = node.openingElement?.name?.name;
  const skip = inTitle || tag === "title" || tag === "Head";
  if (!skip && node.type === "JSXText") {
    const text = normalize(node.value);
    // Rephrased homepage introduction and affiliation typography preserve the same facts.
    if (
      text.length >= 55 &&
      !text.startsWith("I am Bhavesh Gupta, a research scholar") &&
      !file.startsWith("components/")
    ) {
      counts.prose++;
      if (!rendered.includes(text)) fail("prose", file, text);
    }
  }
  if (
    !skip &&
    ["li", "th", "td"].includes(tag) &&
    !JSON.stringify(node).includes('"JSXSpreadChild"')
  ) {
    const text = normalize(jsxText(node));
    if (text && !JSON.stringify(node).includes('"CallExpression"')) {
      counts.records++;
      if (!rendered.includes(text)) fail("record", file, text);
    }
  }
  for (const [key, value] of Object.entries(node)) {
    if (["loc", "tokens", "comments"].includes(key)) continue;
    if (Array.isArray(value))
      value.forEach((child) => visit(child, file, skip));
    else if (value && typeof value === "object") visit(value, file, skip);
  }
};
const urls = new Set();
for (const file of mainFiles.filter(
  (file) =>
    /^(pages|components)\/.*\.(jsx|js)$/.test(file) &&
    file !== "pages/other.jsx",
)) {
  const source = cp.execFileSync("git", ["show", "main:" + file], {
    encoding: "utf8",
  });
  visit(parse(source, { sourceType: "module", plugins: ["jsx"] }), file);
  for (const match of source.matchAll(/(?:https?:\/\/|mailto:)[^\s"'<>}]+/g))
    urls.add(match[0]);
}
for (const url of urls) {
  counts.originalURLs++;
  if (!decode(html).includes(url)) fail("original URL", "", url);
}
const checkData = (value, file, key) => {
  if (typeof value === "string" && value) {
    // JSON field labels are spaced into readable words in the research notes.
    if (
      key === "key" ||
      (key === "title" && file.includes("data/about/quantum"))
    )
      return;
    counts.dataValues++;
    if (!rendered.includes(normalize(value)) && !decode(html).includes(value))
      fail("data value", file, value);
  } else if (Array.isArray(value))
    value.forEach((item) => checkData(item, file, key));
  else if (value && typeof value === "object")
    Object.entries(value).forEach(([k, v]) => checkData(v, file, k));
};
for (const file of mainFiles.filter(
  (file) =>
    file.startsWith("data/") &&
    !file.startsWith("data/gallery/") &&
    file.endsWith(".json"),
)) {
  checkData(JSON.parse(fs.readFileSync(file, "utf8")), file, "");
}
for (const file of htmlFiles) {
  const page = fs.readFileSync(file, "utf8");
  if (!page.includes('<html lang="en"')) fail("document language", file, "en");
  if ((page.match(/<h1(?:\s|>)/g) || []).length !== 1)
    fail("heading hierarchy", file, "Expected one h1");
  const styles = [...page.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(
    (match) => match[1],
  );
  if (styles.some((style) => style.includes("&quot;")))
    fail(
      "invalid escaped font CSS",
      file,
      "Raw style content must not contain HTML quote entities",
    );
  const fontURL = basePath + "/fonts/bricolage-grotesque-latin.woff2";
  if (!styles.some((style) => style.includes('url("' + fontURL + '")')))
    fail("font basePath", file, fontURL);
  for (const sourceSet of page.matchAll(/srcset="([^"]+)"/gi)) {
    for (const candidate of decode(sourceSet[1]).split(",")) {
      const asset = candidate.trim().split(/\s+/)[0];
      if (!asset.startsWith("/")) continue;
      if (basePath && !asset.startsWith(basePath + "/"))
        fail("responsive asset basePath", file, asset);
      if (!fs.existsSync(path.join("out", asset.slice(basePath.length))))
        fail("responsive asset missing", file, asset);
    }
  }
  for (const match of page.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    let url = decode(match[1]);
    if (url.startsWith("//")) continue;
    counts.localLinks++;
    if (basePath && !url.startsWith(basePath + "/") && url !== basePath) {
      fail("missing basePath", file, url);
      continue;
    }
    url = url.slice(basePath.length);
    if (!fs.existsSync(path.join("out", url)))
      fail("missing local asset or route", file, url);
  }
}

// Check section links too, including the homepage links into individual projects.
counts.sectionLinks = 0;
for (const file of htmlFiles) {
  const page = fs.readFileSync(file, "utf8");
  for (const match of page.matchAll(/href="([^"#]*#[^"]+)"/g)) {
    const href = decode(match[1]);
    if (
      !(href.startsWith("/") || href.startsWith("#")) ||
      href.startsWith("//")
    )
      continue;
    const separator = href.indexOf("#");
    const route = href.slice(0, separator);
    const anchor = decodeURIComponent(href.slice(separator + 1));
    if (!anchor) continue;
    let target = file;
    if (route) {
      let relative = route.slice(basePath.length).split("?")[0];
      if (relative.endsWith("/")) relative += "index.html";
      target = path.join("out", relative);
    }
    if (!fs.existsSync(target)) {
      fail("section route", file, href);
      continue;
    }
    const targetHTML = fs.readFileSync(target, "utf8");
    const identifiers = new Set(
      [...targetHTML.matchAll(/id="([^"]+)"/g)].map((item) => decode(item[1])),
    );
    counts.sectionLinks++;
    if (!identifiers.has(anchor)) fail("section anchor", file, href);
  }
}

// Guard against accidentally reintroducing removed code, assets, routes, or links.
for (const file of removedSectionFiles) {
  if (fs.existsSync(file)) fail("removed section source remains", file, file);
  if (
    file.startsWith("public/") &&
    fs.existsSync(path.join("out", file.slice(7)))
  )
    fail("removed section asset exported", file, file);
}
if (fs.existsSync("out/other/index.html") || fs.existsSync("out/other.html"))
  fail("removed section route exported", "out", "/other/");
if (/href="[^"#]*\/other(?:\/|"|#)/.test(html))
  fail("removed section link", "out", "/other/");
if (/\/other\//.test(fs.readFileSync("public/sitemap.xml", "utf8")))
  fail("removed section sitemap entry", "public/sitemap.xml", "/other/");

console.log(JSON.stringify({ basePath, checked: counts, failures }, null, 2));
if (failures.length) process.exitCode = 1;
