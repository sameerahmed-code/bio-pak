export interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
  initials: string;
  color: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sajawal",
    name: "Sajawal Khan",
    role: "Chief Executive Officer",
    quote: "Leading innovation towards a plastic-free Pakistan.",
    avatarUrl: "/assets/generated/avatar-sajawal.jpg",
    initials: "SK",
    color: "#059669",
  },
  {
    id: "sameer",
    name: "Sameer Ahmed",
    role: "Operations Manager",
    quote: "Efficiency and sustainability go hand in hand.",
    avatarUrl: "/assets/generated/avatar-sameer.jpg",
    initials: "SA",
    color: "#78350f",
  },
  {
    id: "shahzeb",
    name: "Mir Shahzeb",
    role: "Technical Head",
    quote: "Technology can drive a greener future.",
    avatarUrl: "/assets/generated/avatar-shahzeb.jpg",
    initials: "MS",
    color: "#047857",
  },
  {
    id: "adeel",
    name: "Muhammad Adeel",
    role: "Marketing Manager",
    quote: "Spreading awareness, one campaign at a time.",
    avatarUrl: "/assets/generated/avatar-adeel.jpg",
    initials: "MA",
    color: "#92400e",
  },
];
