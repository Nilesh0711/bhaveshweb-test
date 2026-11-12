import CopyBibtex from "./CopyBibtex";
export default function Publication({ paper }) {
  return (
    <article className="publication">
      <div className="publication-year">{paper.date.split(" ").pop()}</div>
      <div>
        <p className="eyebrow">
          {paper.article} · {paper.journal}
        </p>
        <h3>
          <a href={paper.link} target="_blank" rel="noopener noreferrer">
            {paper.title}
          </a>
        </h3>
        <p className="authors">{paper.authors}</p>
        <p className="publication-meta">First published: {paper.date}</p>
        <div className="publication-links">
          <a href={paper.link} target="_blank" rel="noopener noreferrer">
            Read article
          </a>
          <a href={paper.doi} target="_blank" rel="noopener noreferrer">
            DOI: {paper.doi.replace("https://doi.org/", "")}
          </a>
          <CopyBibtex paper={paper} />
        </div>
      </div>
    </article>
  );
}
