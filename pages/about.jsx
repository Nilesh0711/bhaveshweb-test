import Link from "next/link";
import Layout, { PageHeading } from "../components/Layout";
import { Biography, Education } from "../components/Biography";
import responsibilities from "../data/about/position_responsibility.json";
import { profile } from "../lib/profile";
import Portrait from "../components/Portrait";
export default function About() {
  return (
    <Layout title="About">
      <PageHeading title="About">
        <p>Physics, quantum information, and the path that brought me here.</p>
      </PageHeading>
      <div className="about-layout">
        <div className="source-prose">
          <Biography />
          <Education />
          <section>
            <h2>Position of Responsibility</h2>
            <ul>
              {responsibilities.map((r, i) => (
                <li key={i}>
                  <strong>{r.head}</strong> {r.content}
                  {r.link && <a href={r.link}> ↗</a>}
                </li>
              ))}
            </ul>
          </section>
          <p className="note-link">
            My notes on quantum error correction, mitigation, suppression, and
            quantum noise channels are in{" "}
            <Link href="/research/#research-notes">research notes →</Link>.
          </p>
        </div>
        <aside className="profile-aside">
          <a href={profile.portrait} target="_blank" rel="noopener noreferrer">
            <Portrait sizes="(max-width: 640px) 170px, (max-width: 900px) 160px, (max-width: 1100px) 175px, 195px" />
          </a>
          <h2>Bhavesh Gupta</h2>
          <p>Ph.D. Scholar · PMRF Fellow</p>
          <p>PMRF ID: 2502421</p>
          <h3>Contact Details</h3>
          <div className="profile-links">
            {profile.social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
          <a
            className="button"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my CV ↗
          </a>
          <p>
            To contact me, visit the <Link href="/contact/">contact page</Link>.
          </p>
        </aside>
      </div>
    </Layout>
  );
}
