import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMember, team } from "@/data/team";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = getMember((await params).slug);
  if (!member) notFound();
  return { title: member.name, description: `${member.name} — ${member.role} at BYU ECE Software.` };
}

export default async function MemberPage({ params }: Props) {
  const member = getMember((await params).slug);
  if (!member) notFound();
  const profileNumber = String(team.findIndex((person) => person.slug === member.slug) + 1).padStart(3, "0");

  return (
    <main id="main-content">
      <section className="shell profile-page">
        <Link className="back-link" href="/team/"><span aria-hidden="true">←</span> Back to team</Link>
        <div className="profile-layout">
          <div className="profile-portrait">
            {member.image ? <Image src={member.image} alt={member.name} fill sizes="(max-width: 800px) 100vw, 520px" /> : <span>{member.initials}</span>}
            <div className="portrait-label">BYU ECE / SOFTWARE</div>
          </div>
          <div className="profile-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> TEAM PROFILE / {profileNumber}</p>
            <h1>{member.name}<span className="profile-period">.</span></h1>
            <div className="profile-role">{member.role}</div>
            <div className="profile-rule" />
            <h2>About {member.name.split(" ")[0]}</h2>
            <p>{member.bio}</p>
            {member.links && member.links.length > 0 && (
              <div className="profile-links">{member.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>
            )}
            {member.isPlaceholder && <div className="profile-note">This is a sample profile. The team will add personal details later.</div>}
          </div>
        </div>
      </section>
    </main>
  );
}
