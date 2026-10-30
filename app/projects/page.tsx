import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore projects from BYU ECE Software.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="page-intro shell">
        <p className="eyebrow"><span className="eyebrow-line" /> 02 / THE WORK</p>
        <h1>Ideas in motion. <span>Work in progress.</span></h1>
        <p>A curated home for the things we build and explore. We&apos;ll add project details as they&apos;re ready to share.</p>
      </section>
      <section className="shell content-section" aria-label="Projects">
        <div className="section-rule"><span>SELECTED PROJECTS</span><span>{String(projects.length).padStart(2, "0")} LISTED</span></div>
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project, index) => (
              <a href={project.href} target="_blank" rel="noreferrer" className="project-card" key={project.slug}>
                <div className="project-card-top"><span>{String(index + 1).padStart(2, "0")} / {project.category ?? "PROJECT"}</span><span aria-hidden="true">↗</span></div>
                <div><h2>{project.title}</h2><p>{project.summary}</p></div>
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-panel project-empty">
            <div className="empty-visual" aria-hidden="true"><span /><span /><span /><span /></div>
            <div><p className="eyebrow">THE WORK / 001</p><h2>Projects coming soon<span>.</span></h2><p>We&apos;re putting together a closer look at the software our team is working on. Check back for the first project stories.</p></div>
          </div>
        )}
      </section>
    </main>
  );
}
