import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
export default function NotFound() {
  return (
    <Layout title="Page not found">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or doesn’t exist.
        </p>
        <div className="intro-actions">
          <Link href="/" className="button">
            Go to Home →
          </Link>
          <Link href="/contact/" className="text-link">
            Contact →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
