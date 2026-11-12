import Layout, { PageHeading } from "../components/Layout";
import pmrf from "../data/teaching/pmrf_teaching.json";
import responsibilities from "../data/teaching/teaching_responsibility.json";
import institute from "../data/teaching/institue_teaching.json";
export default function Teaching() {
  return (
    <Layout title="Teaching">
      <PageHeading title="Teaching">
        <p>My teaching activities, assistantships, and outreach.</p>
      </PageHeading>
      <nav className="section-nav" aria-label="Teaching sections">
        <a href="#nptel">NPTEL</a>
        <a href="#responsibility">Teaching responsibility</a>
        <a href="#institute">Institute assistantship</a>
        <a href="#resources">Lecture resources</a>
      </nav>
      {[
        ["nptel", "PMRF TA work for NPTEL", pmrf],
        ["responsibility", "Teaching Responsibility", responsibilities],
      ].map(([id, title, records]) => (
        <section className="content-section" id={id} key={id}>
          <h2>{title}</h2>
          <ul className="teaching-list">
            {records.map((r, i) => (
              <li key={i}>
                <p>
                  <strong>{r.head}</strong> {r.content}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section className="content-section" id="institute">
        <h2>Institute Teaching Assistantship</h2>
        {institute.map((r) => (
          <div className="institute-record" key={r.year}>
            <span className="eyebrow">{r.year}</span>
            <div>
              {r.teaching.map((t) => (
                <p key={t.title}>{t.title}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="content-section" id="resources">
        <h2>Lecture resources</h2>
        <div className="resource-links">
          <div>
            <h3>Lecture playlist</h3>
            <p>Find the full lecture playlist on YouTube.</p>
            <a
              href="https://www.youtube.com/@bhaveshgupta2760"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube ↗
            </a>
          </div>
          <div>
            <h3>Lecture notes</h3>
            <p>Find the lecture notes on Drive.</p>
            <a
              href="https://drive.google.com/drive/folders/1TFuXh8dulq5Tb5U-VaXw32W9AwTXhCD8?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drive ↗
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
