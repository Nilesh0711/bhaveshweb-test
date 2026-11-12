# Local academic redesign

Worktree: `C:\Nilesh-DOS\bhaveshweb-academic-redesign`  
Branch: `academic-redesign-main`  
Baseline: `main` (`2091f43`)

The original checkout and its uncommitted changes are preserved. This redesign has no commits, pushes, or deployments.

## Design direction

A personal academic website centred on the author: a compact name masthead, the supplied conference photograph, an introduction drawn from the original biography, readable serif prose, and brick-red links. Project titles and publication metadata come directly from the original JSON files. The homepage includes the detailed introduction, research interests, personal interests, publication, all four ongoing project titles, and links to teaching and reading records. Full project descriptions remain on Publications, and the complete biography remains on About. Inner pages share the same reading-focused typography.

The supplied academic text and academic external links are retained. The Other/Photographs section, its route, exclusive components, gallery JSON, images, styles, and links were removed at the user’s request. All three original quotations and their photographs are always visible on the homepage: a prominent Feynman pull quote followed by the Deutsch quote and QBronze workshop reflection.

## Preview

Run `preview-redesign.cmd` from this worktree (or double-click it). The launcher selects the correct directory automatically and uses port 3002. If another preview is already on port 3002, stop that preview first with Ctrl+C.

Or, from this worktree:

```powershell
npm.cmd run dev -- -p 3002
```

Open http://localhost:3002. On shells without the Windows PowerShell script restriction, `npm run dev -- -p 3002` is equivalent.

## Content map

- `/`, `/home/`, `/starter/`: academic introduction, supervisors, research overview, published article, all three original quotes and accompanying images. The original PMRF identifier appears in the shared footer.
- `/about/`: complete biography and motivation, education, achievements, contact profiles and CV. Both position-of-responsibility entries are now visible.
- `/research/`: complete research-interest and noise-spectroscopy essays (expandable), all original figures and project explanations, all three JSON research-note collections, the original quantum-computing introduction and quantum-channel explanation, ten semester entries with all seven available report links, six reading topics, six references, two workshops, and five conferences.
- `/publication/`: the published article with all original metadata and both article/DOI links, all four work-in-progress records, and the existing seminar placeholder.
- `/teaching/`: all five PMRF/NPTEL entries, nine teaching-responsibility entries, institute assistantship, YouTube playlist and Drive notes.
- `/supervisor/`: both complete profiles, photographs, research interests, and external profile links.
- `/contact/`: all three emails, phone, address, and original embedded map.

All remaining original routes remain available. Academic data, shared images, package/dependency configuration, export configuration, and the deployment workflow remain unchanged. The full-resolution local portrait and original external link are preserved. The homepage and About use responsive 240/480/720-pixel WebP derivatives with a 480-pixel JPEG fallback; the 480-pixel WebP is 34,842 bytes versus the original 830,168 bytes.

## Citation controls

Every shared publication listing includes Copy BibTeX with success feedback. If the browser clipboard is unavailable or denied, a selectable citation field opens automatically. The existing paper’s volume, issue, and article number were checked against [Wiley](https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/qute.202500109) and [Crossref](https://api.crossref.org/works/10.1002/qute.202500109). Citation generation and clipboard fallbacks have focused unit tests.

## Verification

```powershell
npm.cmd run export
node scripts/verify-export.cjs
node --test scripts/bibtex.test.mjs
```

The verifier compares exported prose, list/table records, JSON values, and original external URLs against `main`. It also checks document language, one page heading, local assets/routes, and unchanged source data/configuration.

For a GitHub Pages project subpath:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/bhaveshweb'
npm.cmd run export
node scripts/verify-export.cjs /bhaveshweb
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

The active display font is a self-hosted Bricolage Grotesque variable font (44.9 kB), with the SIL Open Font License at `public/fonts/Bricolage-OFL.txt`. Reading text uses Georgia. There are no new application dependencies or third-party font requests. Images retain their full proportions, tables scroll within their own region, navigation collapses below 900px, and reduced-motion preferences are respected.

Browser visual inspection is unavailable in this session because no browser surface is connected. Build, content, path, and local HTTP checks are performed separately; they do not substitute for a visual inspection at desktop and mobile widths.
