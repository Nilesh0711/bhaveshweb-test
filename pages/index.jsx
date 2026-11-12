import Link from "next/link";
import Layout from "../components/Layout";
import Publication from "../components/Publication";
import Portrait from "../components/Portrait";
import Quotes from "../components/Quotes";
import papers from "../data/publication/published_article.json";
import projects from "../data/publication/workinprogress.json";
import { profile } from "../lib/profile";
export default function Home() {
  return (
    <Layout>
      <header className="personal-masthead">
        <h1>
          Bhavesh <span>Gupta.</span>
        </h1>
        <div className="masthead-caption">
          <p>Quantum Information & Computation</p>
          <p>IIT Madras, Chennai</p>
        </div>
      </header>
      <section className="personal-opening" aria-label="Introduction">
        <div className="opening-letter">
          <p className="hello">Hi, I am Bhavesh.</p>
          <p>
            I am a PhD scholar in the{" "}
            <a
              href="https://physics.iitm.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Department of Physics
            </a>{" "}
            at the Indian Institute of Technology Madras and a Prime Minister
            Research Fellow. I work in{" "}
            <a
              href="https://quantum.iitm.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quantum Information and Computation
            </a>
            , under the supervision of{" "}
            <a
              href="https://physics.iitm.ac.in/~prabhamd/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Prabha Mandayam
            </a>{" "}
            and co-supervision of{" "}
            <Link href="/supervisor/">Dr. Siddharth Dhomkar</Link>.
          </p>
          <p>
            My research interests include noise models, decoherence mechanisms,
            quantum error correction, prevention, suppression and mitigation,
            and quantum fault tolerance in the NISQ era.
          </p>
          <p className="personal-aside">
            Away from research, I enjoy swimming and tennis, and take a keen
            interest in the equity market.{" "}
            <Link href="/about/">More about me.</Link>
          </p>
          <div className="personal-links">
            <a href={profile.cv} target="_blank" rel="noopener noreferrer">
              Curriculum vitae
            </a>
            <a
              href={
                profile.social.find((s) => s.label === "Google Scholar").href
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            <a href="mailto:bhavesh@physics.iitm.ac.in">Email me</a>
          </div>
        </div>
        <figure className="personal-photograph">
          <a
            href={profile.portrait}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the original photograph of Bhavesh Gupta"
          >
            <Portrait
              alt="Bhavesh Gupta at QTech 2024"
              sizes="(max-width: 640px) 160px, (max-width: 900px) 180px, 220px"
              eager
            />
          </a>
          <figcaption>
            <span>Bhavesh Gupta</span>
            <span>QTech, 2024</span>
          </figcaption>
        </figure>
      </section>
      <section className="home-publication">
        <div className="section-heading">
          <h2>Published work</h2>
          <Link className="text-link" href="/publication/">
            All publications & ongoing projects
          </Link>
        </div>
        {papers.map((paper) => (
          <Publication key={paper.doi} paper={paper} />
        ))}
      </section>
      <section className="home-project-section">
        <div className="section-heading">
          <h2>Work in progress</h2>
          <Link className="text-link" href="/research/">
            Research notes & semester reports
          </Link>
        </div>
        <ol className="personal-projects">
          {projects.map((project, index) => (
            <li key={project.title}>
              <Link href={"/publication/#project-" + (index + 1)}>
                {project.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <section className="home-elsewhere">
        <h2>Elsewhere on this site</h2>
        <div className="elsewhere-copy">
          <p>
            I keep a record of my{" "}
            <Link href="/teaching/">teaching activities</Link>,{" "}
            <Link href="/research/#reading-events">reading and references</Link>
            , and{" "}
            <Link href="/research/#reading-events">
              workshops and conferences
            </Link>
            .
          </p>
          <p>
            To get in touch, visit the{" "}
            <Link href="/contact/">contact page</Link>.
          </p>
        </div>
      </section>
      <Quotes />
    </Layout>
  );
}
