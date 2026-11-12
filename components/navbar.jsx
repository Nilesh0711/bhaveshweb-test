import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const links = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Research", "/research/"],
  ["Publications", "/publication/"],
  ["Teaching", "/teaching/"],
  ["Supervisors", "/supervisor/"],
  ["Contact", "/contact/"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => setOpen(false), [router.asPath]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close menu" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {links.map(([title, href]) => {
            const active =
              href === "/"
                ? ["/", "/home", "/starter"].includes(router.pathname)
                : router.pathname === href.slice(0, -1);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
              >
                {title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
