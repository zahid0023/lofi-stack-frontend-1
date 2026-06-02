export interface EthosParagraph {
  lead?: boolean;
  text: string;
}

export const ethosMeta = {
  since: "2022",
  tagline: "Small teams · Operated products · Low volume, high signal",
} as const;

export const ethosParagraphs: EthosParagraph[] = [
  {
    lead: true,
    text: "Since 2022, we've been building digital products. Not to sell on, but to own and operate for the long term.",
  },
  {
    text: "The transformations we make are often deep — designed to speed up innovation, benefit customers, and strengthen business performance.",
  },
  {
    text: "Here, hierarchy is minimal and teams are small and talent-dense. We operate established products with the ambition, agility, and urgency of a startup.",
  },
];
