import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="footer-name">
            Bhavesh Gupta
          </Link>
          <p>Ph.D. Scholar · Prime Minister Research Fellow</p>
          <p>PMRF ID: 2502421</p>
        </div>
        <div className="footer-affiliation">
          <a
            href="https://quantum.iitm.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            CQuICC — Center for Quantum Information,
            <br />
            Communication and Computing
          </a>
          <p>
            <a
              href="https://physics.iitm.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Department of Physics
            </a>{" "}
            ·{" "}
            <a
              href="https://www.iitm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IIT Madras
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Bhavesh Gupta. All rights reserved.
        </span>
        <span>Indian Institute of Technology Madras, Chennai, India</span>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
