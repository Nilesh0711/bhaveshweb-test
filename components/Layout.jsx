import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { getAssetPath } from "../lib/assets";
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? title + " — Bhavesh Gupta"
            : "Bhavesh Gupta — Quantum Information & Computation"}
        </title>
        <meta
          name="description"
          content="Bhavesh Gupta, PhD scholar and Prime Minister Research Fellow at the Department of Physics and CQuICC, IIT Madras. Research in quantum information, noise spectroscopy, and quantum error correction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={getAssetPath("/favicon/favicon.ico")} />
        <link
          rel="preload"
          href={getAssetPath("/fonts/bricolage-grotesque-latin.woff2")}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-weight:400 800;font-display:swap;src:url("${getAssetPath("/fonts/bricolage-grotesque-latin.woff2")}") format("woff2")}`,
          }}
        />
      </Head>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-shell">
        <Navbar />
        <div className="reading-pane">
          <main id="main-content" className="site-main">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
export function PageHeading({ title, children }) {
  return (
    <header className="page-heading">
      <h1>{title}</h1>
      {children && <div className="page-intro">{children}</div>}
    </header>
  );
}
