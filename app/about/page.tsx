import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about BYU ECE Software and this team site.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-intro shell">
        <p className="eyebrow"><span className="eyebrow-line" /> 03 / ABOUT US</p>
        <h1>Curious minds. <span>Shared work.</span></h1>
        <p>A little more about the people and purpose behind this space.</p>
      </section>
      <section className="shell about-layout content-section">
        <div className="about-index">WHO WE ARE <span>↘</span></div>
        <div className="about-main">
          <h2>Software is better when we build it together.</h2>
          <p>BYU ECE Software brings together people interested in building and exploring software within Brigham Young University&apos;s Electrical and Computer Engineering community. This site is a place to introduce the team, share selected projects, and publish ideas we find worth discussing.</p>
          <p>As our work grows, this space will grow with it: new faces, new projects, and new perspectives from the people behind them.</p>
          <Link className="text-link" href="/team/">Meet the team <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="shell about-principles" aria-label="What you will find here">
        <div><span>01 / PEOPLE</span><h3>Meet the makers.</h3><p>Get to know the individuals who make up the team.</p></div>
        <div><span>02 / PROJECTS</span><h3>See the work.</h3><p>Follow selected software projects as they take shape.</p></div>
        <div><span>03 / IDEAS</span><h3>Share the thinking.</h3><p>Read articles about topics that spark our curiosity.</p></div>
      </section>
    </main>
  );
}
