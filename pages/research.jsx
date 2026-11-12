import Link from "next/link";
import Layout, { PageHeading } from "../components/Layout";
import {
  ResearchInterest,
  NoiseSpectroscopy,
  ReadingAndEvents,
} from "../components/ResearchContent";
import ImageLoader from "../components/imageLoader";
import Publication from "../components/Publication";
import correction from "../data/about/quantum_correction.json";
import mitigation from "../data/about/quantum_mitigation.json";
import suppression from "../data/about/quantum_suppression.json";
import papers from "../data/publication/published_article.json";
import work from "../data/publication/workinprogress.json";
import { profile } from "../lib/profile";
import {
  QuantumIntroduction,
  QuantumChannel,
} from "../components/QuantumNotes";

const humanize = (text) => text.replace(/([a-z])([A-Z])/g, "$1 $2");

export default function Research() {
  return (
    <Layout title="Research">
      <PageHeading title="Research">
        <p>Noise, decoherence, and protecting quantum information.</p>
      </PageHeading>
      <nav className="section-nav" aria-label="Research sections">
        <a href="#projects">Projects</a>
        <a href="#research-notes">Research notes</a>
        <a href="#progress-reports">Semester reports</a>
        <a href="#reading-events">Reading & events</a>
      </nav>
      <section className="content-section" id="projects">
        <div className="section-heading">
          <h2>Research interests</h2>
          <Link className="text-link" href="/publication/">
            Publications & work in progress →
          </Link>
        </div>
        <details className="essay">
          <summary>
            Quantum error correction: motivation and research interest
          </summary>
          <div className="source-prose">
            <ResearchInterest />
          </div>
        </details>
        <div className="research-figures">
          {[
            "205fad92-2999-4dd1-ac0c-5161a0b5c66a-f0oqnc.png",
            "4fc221f3-dcb6-4bd9-97a3-aea4e840e295-f0oqnb.png",
          ].map((id, i) => (
            <ImageLoader
              key={id}
              mainImageSrc={"https://utfs.io/f/" + id}
              altImageSrc="/img/loading.jpg"
              altText={
                "Quantum error correction research overview, figure " + (i + 1)
              }
              classValue="research-image"
              buttonReq
            />
          ))}
        </div>
        <article className="research-project" id="error-correction">
          <h2>{work[0].title}</h2>
          <div
            className="reading-width"
            dangerouslySetInnerHTML={{
              __html: work[0].description,
            }}
          />
          <ImageLoader
            mainImageSrc={work[0].image}
            altImageSrc="/img/loading.jpg"
            altText={work[0].title}
            classValue="research-image"
            buttonReq
          />
        </article>
        <article className="research-project" id="noise-spectroscopy">
          <h2>Noise Spectroscopy</h2>
          <details className="essay">
            <summary>Read the full research overview</summary>
            <div className="source-prose">
              <NoiseSpectroscopy />
            </div>
          </details>
          {papers.map((p) => (
            <Publication paper={p} key={p.doi} />
          ))}
        </article>
        <article className="research-project" id="dynamical-decoupling">
          <h2>{work[3].title}</h2>
          <div
            className="reading-width"
            dangerouslySetInnerHTML={{
              __html: work[3].description,
            }}
          />
          <ImageLoader
            mainImageSrc={work[2].image}
            altImageSrc="/img/loading.jpg"
            altText="Noise spectroscopy and dynamical decoupling research"
            classValue="research-image"
            buttonReq
          />
        </article>
      </section>
      <section className="content-section" id="research-notes">
        <p className="eyebrow">Notes</p>
        <h2>Quantum Error Correction and Mitigation</h2>
        <div className="source-prose">
          <QuantumIntroduction />
        </div>
        {[
          ["Quantum Error Correction", correction],
          ["Quantum Error Mitigation", mitigation],
          ["Error Suppression", suppression],
        ].map(([title, data]) => (
          <details className="essay" key={title}>
            <summary>{title}</summary>
            <div className="notes-body">
              {data.map((s) => (
                <section key={s.title}>
                  <h3>{humanize(s.title)}</h3>
                  <dl>
                    {s.items.map((item) => (
                      <div key={item.key}>
                        <dt>{humanize(item.key)}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          </details>
        ))}
        <div className="source-prose">
          <QuantumChannel />
        </div>
      </section>
      <section className="content-section" id="progress-reports">
        <div className="section-heading">
          <h2>Semester Progress Report</h2>
          <span className="subtle">PMRF</span>
        </div>
        <div className="reports">
          {profile.reports.map((r) => (
            <div key={r.title}>
              {r.link ? (
                <a href={r.link} target="_blank" rel="noopener noreferrer">
                  {r.title}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="report-pending">
                  {r.title}
                  <small>Semester not yet completed.</small>
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
      <section
        className="content-section source-prose reading-events"
        id="reading-events"
      >
        <ReadingAndEvents />
      </section>
    </Layout>
  );
}
