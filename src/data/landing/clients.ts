export interface Logo {
  name: string;
  initials: string;
}

export interface Client {
  initials: string;
  name: string;
  industry: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const logos: Logo[] = [
  { name: "Kindred Studio", initials: "KS" },
  { name: "Arc & Field",    initials: "AF" },
  { name: "Meridian Labs",  initials: "ML" },
  { name: "Vantage Group",  initials: "VG" },
  { name: "Beacon Digital", initials: "BD" },
  { name: "Ember Works",    initials: "EW" },
  { name: "Northlight Co",  initials: "NC" },
  { name: "Sable & Fox",    initials: "SF" },
  { name: "Carta Verde",    initials: "CV" },
  { name: "Reverie Labs",   initials: "RL" },
];

export const clients: Client[] = [
  { initials: "KS", name: "Kindred Studio",  industry: "Design",       description: "Visual identity and design systems for modern creative studios."          },
  { initials: "AF", name: "Arc & Field",     industry: "Architecture", description: "Spatial design and planning for sustainable built environments."          },
  { initials: "ML", name: "Meridian Labs",   industry: "Tech",         description: "Research-driven software tools for the next wave of the web."            },
  { initials: "VG", name: "Vantage Group",   industry: "Finance",      description: "Strategic advisory and financial infrastructure for growth-stage firms." },
  { initials: "BD", name: "Beacon Digital",  industry: "Marketing",    description: "Performance marketing built around clarity, data, and real results."     },
  { initials: "EW", name: "Ember Works",     industry: "Product",      description: "Thoughtful product development from zero to shipped."                    },
];

export const clientStats: Stat[] = [
  { value: "10+",  label: "Collaborations" },
  { value: "6",    label: "Industries"     },
  { value: "100+", label: "Apps shipped"   },
];

export const clientsHeadline = {
  overline: "Clients We Collaborate With",
  heading: "We build the stack behind ambitious teams.",
  body: "Eight capabilities, one quiet team. From product to pipeline — everything a modern business needs to run and grow.",
  quote: {
    text: "Lofistack doesn't just ship deliverables — they understand the full arc, from first impression to lasting system.",
    author: "Mara Osei",
    role: "Founder, Kindred Studio",
  },
  cta: {
    primary: { label: "Book a call", href: "#" },
    secondary: { label: "See our work", href: "#" },
  },
} as const;
