"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/team/", label: "Team" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape") setOpen(false);
    }}>
      <div className="shell header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="BYU ECE Software, home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span className="brand-wordmark">BYU ECE <strong>SOFTWARE</strong></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <a className="nav-github" href="https://github.com/BYU-ECE-Software" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
