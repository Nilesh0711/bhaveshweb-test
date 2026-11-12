import Layout, { PageHeading } from "../components/Layout";
import Publication from "../components/Publication";
import ImageLoader from "../components/imageLoader";
import papers from "../data/publication/published_article.json";
import work from "../data/publication/workinprogress.json";
export default function Publications() {
  return (
    <Layout title="Publications">
      <PageHeading title="Publications">
        <p>Published research and work in progress.</p>
      </PageHeading>
      <section className="content-section">
        <h2>Published Article</h2>
        {papers.map((p) => (
          <Publication key={p.doi} paper={p} />
        ))}
      </section>
      <section className="content-section" id="work-in-progress">
        <div className="section-heading">
          <h2>Work in progress</h2>
          <span className="subtle">Ongoing research</span>
        </div>
        <ol className="work-list">
          {work.map((w, i) => (
            <li key={w.title} id={"project-" + (i + 1)}>
              <div>
                <h3>{w.title}</h3>
                {w.description && (
                  <div
                    className="work-description"
                    dangerouslySetInnerHTML={{
                      __html: w.description,
                    }}
                  />
                )}
                {w.image && (
                  <ImageLoader
                    mainImageSrc={w.image}
                    altImageSrc="/img/loading.jpg"
                    altText={w.title}
                    classValue="research-image"
                    buttonReq
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="content-section">
        <h2>Colloquiums and Seminars</h2>
        <p className="subtle">To be updated soon.</p>
      </section>
    </Layout>
  );
}
