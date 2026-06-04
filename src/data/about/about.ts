// ── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  index: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    index: "01",
    name: "Mara Yuen",
    role: "Founder & CEO",
    bio: "Shipped products at three unicorns before deciding the stack should be owned, not rented.",
    initials: "MY",
    image: "https://picsum.photos/seed/mara/400/500",
  },
  {
    index: "02",
    name: "Sol Okafor",
    role: "CTO",
    bio: "Former infrastructure lead at a top-10 fintech. Believes boring systems make exciting products.",
    initials: "SO",
    image: "https://picsum.photos/seed/sol/400/500",
  },
  {
    index: "03",
    name: "Léa Fontaine",
    role: "Design Lead",
    bio: "Type obsessive. Every pixel intentional, every interaction earned through real use.",
    initials: "LF",
    image: "https://picsum.photos/seed/lea/400/500",
  },
  {
    index: "04",
    name: "Aryan Mehta",
    role: "Head of Engineering",
    bio: "Open-source contributor turned builder. Writes code the same way he writes prose — once.",
    initials: "AM",
    image: "https://picsum.photos/seed/aryan/400/500",
  },
  {
    index: "05",
    name: "Zara Osei",
    role: "Head of Growth",
    bio: "Helped scale two startups from zero to Series B. Now she does it with considerably less chaos.",
    initials: "ZO",
    image: "https://picsum.photos/seed/zara/400/500",
  },
  {
    index: "06",
    name: "Tomás Reyes",
    role: "Operations",
    bio: "The logistics brain that keeps everything running on time, on budget, no excuses accepted.",
    initials: "TR",
    image: "https://picsum.photos/seed/tomas/400/500",
  },
];

export const teamSection = {
  overline: "The people",
  heading: "Meet the folks behind Lofistack.",
  body: "A small, senior team that wears many hats and shares one obsession: making things people love.",
};

// ── Our Story ─────────────────────────────────────────────────────────────────

export interface Milestone {
  year: string;
  title: string;
  body: string;
}

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Founded in a rented studio",
    body: "Three engineers, one designer, and a shared conviction that great software is built in relationships, not sprints. We opened our first studio in Singapore and took on our first client the same week.",
  },
  {
    year: "2021",
    title: "First enterprise engagement",
    body: "A Series B fintech came to us with a failing rebuild. We rearchitected their core platform in four months. That project became the blueprint for how we work — opinionated, lean, and accountable.",
  },
  {
    year: "2023",
    title: "The stack becomes a product",
    body: "After running the same foundational setup across a dozen clients, we codified it. LofiStack became our repeatable, owned-by-the-client delivery system — no vendor lock-in, no black boxes.",
  },
  {
    year: "2024",
    title: "30+ teams, one standard",
    body: "Today we work with founders, operators, and engineering leads across Southeast Asia and beyond. The team has grown to 30 people, but the standard hasn't changed: ship it right, or don't ship it.",
  },
];

export const ourStorySection = {
  overline: "Our Story",
  headingLight: "From a small studio ",
  headingAccent: "to a full-stack partner.",
  body: "We started with a single question: why do most software engagements end with the client owning less than they started with? Everything since has been our answer.",
};

// ── Values ────────────────────────────────────────────────────────────────────

export interface Value {
  iconName?: string;
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    iconName: "Target",
    title: "People first, always",
    body: "Every roadmap call starts with the human on the other side of the screen. Empathy isn't a phase — it's the spec.",
  },
  {
    iconName: "Sparkles",
    title: "Honesty over polish",
    body: "We'd rather show messy work early and tell the truth than ship a beautiful lie. Trust compounds; spin doesn't.",
  },
  {
    iconName: "Eye",
    title: "Sustainable pace",
    body: "Burnout is a bug, not a badge. We design our weeks the way we design our products — for the long run.",
  },
  {
    iconName: "MessageCircle",
    title: "Craft is the differentiator",
    body: "The last 10% is the part people feel. We sweat the details others skip because that's where delight hides.",
  },
  {
    iconName: "Layers",
    title: "Better together",
    body: "We hire kind, curious people and get out of their way. The best ideas rarely arrive solo — they arrive in conversation.",
  },
  {
    title: "…and a sense of humor",
    body: "Because building software is hard, and we'd rather laugh through the hard parts together than take ourselves too seriously.",
  },
];

export const ourValuesSection = {
  overline: "What we believe",
  heading: "Five values we actually live by.",
  body: "Not poster slogans — these are the defaults we return to when a decision is hard.",
};

// ── Life At ───────────────────────────────────────────────────────────────────

export interface Ritual {
  label: string;
  description: string;
}

export const rituals: Ritual[] = [
  {
    label: "Friday demos",
    description: "Every Friday, anyone can show what they shipped. No slides required — just a browser and something real.",
  },
  {
    label: "No-meeting Wednesdays",
    description: "A full day of uninterrupted deep work. No standups, no syncs. Just you and the problem in front of you.",
  },
  {
    label: "Recipe channel",
    description: "Our most active Slack channel. Turns out people who care about craft also care deeply about food.",
  },
];

export const lifeAtSection = {
  overline: "Life at Lofistack",
  heading: "Remote-first, never distant.",
  body: "We gather in person twice a year, ship async the rest of the time, and protect the rituals that keep us close.",
};

export interface LifePhoto {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall" | "normal";
}

export const lifePhotos: LifePhoto[] = [
  { src: "https://picsum.photos/seed/life1/800/600", alt: "Team offsite", caption: "Our annual offsite — somewhere with good coffee and bad wifi.", span: "wide" },
  { src: "https://picsum.photos/seed/life2/400/600", alt: "Friday demo", caption: "Friday demos. No decks, just browsers.", span: "tall" },
  { src: "https://picsum.photos/seed/life3/400/400", alt: "Workshop", caption: "A design sprint that turned into a whiteboard masterpiece.", span: "normal" },
  { src: "https://picsum.photos/seed/life4/400/400", alt: "Recipe night", caption: "The recipe channel, IRL.", span: "normal" },
  { src: "https://picsum.photos/seed/life5/400/600", alt: "No-meeting Wednesday", caption: "Wednesday. No meetings. Just flow.", span: "normal" },
  { src: "https://picsum.photos/seed/life6/800/400", alt: "Annual gathering", caption: "Twice a year, we close the laptops and just be together.", span: "normal" },
];
