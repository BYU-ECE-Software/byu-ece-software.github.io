import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the people behind BYU ECE Software.",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <section className="page-intro shell">
        <p className="eyebrow"><span className="eyebrow-line" /> 01 / THE PEOPLE</p>
        <h1>Good work starts <span>with people.</span></h1>
        <p>Meet the individuals behind BYU ECE Software. More profiles will appear here as the team adds them.</p>
      </section>
      <section className="shell content-section" aria-label="Team members">
        <div className="section-rule"><span>TEAM DIRECTORY</span><span>{String(team.length).padStart(2, "0")} PROFILE{team.length === 1 ? "" : "S"}</span></div>
        <div className="team-grid">
          {team.map((member) => (
            <Link href={`/team/${member.slug}/`} className="member-card" key={member.slug}>
              <div className="member-image">
                {member.image ? <Image src={member.image} alt={member.name} fill sizes="(max-width: 700px) 100vw, 400px" /> : <span>{member.initials}</span>}
                <span className="member-image-corner" aria-hidden="true">↗</span>
              </div>
              <div className="member-info"><div><h2>{member.name}</h2><p>{member.role}</p></div><span aria-hidden="true">↗</span></div>
            </Link>
          ))}
        </div>
        {team.some((member) => member.isPlaceholder) && (
          <p className="content-note">The first profile is a template. Individual biographies and photos will be added as the team shares them.</p>
        )}
      </section>
    </main>
  );
}
