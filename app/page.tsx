import Link from "next/link";
import HeroArt from "./components/hero-art";

const destinations = [
  {
    number: "01",
    label: "The people",
    title: "Meet the team.",
    description: "The individuals and perspectives behind BYU ECE Software.",
    href: "/team/",
  },
  {
    number: "02",
    label: "The work",
    title: "Explore projects.",
    description: "A growing collection of software ideas, experiments, and builds.",
    href: "/projects/",
  },
  {
    number: "03",
    label: "The ideas",
    title: "Read the blog.",
    description: "Notes, discoveries, and topics we find worth sharing.",
    href: "/blog/",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> BYU ECE / SOFTWARE TEAM</div>
          <h1>Where ideas become <span>reality.</span></h1>
          <p className="hero-description">
            A home for the people, projects, and ideas behind BYU ECE Software.
            Get to know the team and follow what we&apos;re exploring.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/team/">Meet the team <span aria-hidden="true">↗</span></Link>
            <Link className="button button-secondary" href="/about/">About us <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-caption"><span className="caption-cross" aria-hidden="true">✳</span> Built for curiosity. Made to be shared.</div>
        </div>
        <HeroArt />
      </section>

      <div className="section-divider shell"><span>EXPLORE THE SITE</span><span>SCROLL TO DISCOVER ↓</span></div>

      <section className="home-explore shell" aria-labelledby="explore-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> OUR SPACE</p>
            <h2 id="explore-title">People. Projects. <span>Perspective.</span></h2>
          </div>
          <p>Everything starts somewhere. This is where we introduce our people, collect our work, and share what we learn along the way.</p>
        </div>
        <div className="destination-grid">
          {destinations.map((item) => (
            <Link className="destination-card" href={item.href} key={item.number}>
              <div className="card-top"><span>{item.number} / {item.label}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
              <div className="card-icon" aria-hidden="true"><span /><span /><span /></div>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-statement" aria-labelledby="statement-title">
        <div className="shell statement-inner">
          <div className="statement-mark" aria-hidden="true">&lt;/&gt;</div>
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> ABOUT THE TEAM</p>
            <h2 id="statement-title">A place to build, learn, and share what comes next.</h2>
            <Link className="text-link" href="/about/">Get to know us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
