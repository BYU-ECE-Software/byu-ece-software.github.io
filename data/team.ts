export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
  links?: { label: string; href: string }[];
  isPlaceholder?: boolean;
};

// Replace this sample with real profiles as the team shares them.
export const team: TeamMember[] = [
  {
    slug: "first-last",
    name: "First Last",
    role: "Team member",
    bio: "This profile is ready for an introduction, interests, and a few words about this person's work with BYU ECE Software.",
    initials: "FL",
    isPlaceholder: true,
  },
];

export function getMember(slug: string) {
  return team.find((member) => member.slug === slug);
}
