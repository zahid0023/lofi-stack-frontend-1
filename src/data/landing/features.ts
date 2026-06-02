export interface Feature {
  index: string;
  tag: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const features: Feature[] = [
  {
    index: "01",
    tag: "Engineering",
    title: "App Development",
    description:
      "From concept to deployment — we build web and mobile applications that scale. Clean architecture, thoughtful UX, and performance that ships.",
    stat: "100+",
    statLabel: "Apps shipped",
  },
  {
    index: "02",
    tag: "Relationships",
    title: "CRM",
    description:
      "Customer relationship systems tailored to your workflow. We configure, customize, and integrate CRMs so your team spends time on people, not process.",
    stat: "3×",
    statLabel: "Avg. retention lift",
  },
  {
    index: "03",
    tag: "Solutions",
    title: "Custom Solutions",
    description:
      "When off-the-shelf doesn't cut it. We scope, architect, and build bespoke tools that fit your exact operational needs.",
    stat: "∞",
    statLabel: "Edge cases handled",
  },
  {
    index: "04",
    tag: "Support",
    title: "VA Support",
    description:
      "Skilled virtual assistants embedded in your processes. Research, coordination, inbox zero — we extend your team without the overhead.",
    stat: "40h+",
    statLabel: "Saved per month",
  },
  {
    index: "05",
    tag: "Automation",
    title: "Integration & Automation",
    description:
      "Connect your stack and eliminate repetitive work. We wire up APIs, build workflows, and automate the manual tasks eating your day.",
    stat: "80%",
    statLabel: "Manual work eliminated",
  },
  {
    index: "06",
    tag: "Design",
    title: "Web Design",
    description:
      "Purposeful design grounded in clarity. Interfaces that guide users, reflect your brand, and convert — without the noise.",
    stat: "2.4×",
    statLabel: "Avg. conversion uplift",
  },
  {
    index: "07",
    tag: "Identity",
    title: "Branding",
    description:
      "Brand systems built to last. Logo, color, type, voice — cohesive identities that communicate who you are before you say a word.",
    stat: "From",
    statLabel: "First impression",
  },
  {
    index: "08",
    tag: "Growth",
    title: "Digital Marketing",
    description:
      "Strategy-led marketing across channels. SEO, content, paid, and analytics — we grow your audience with a quiet, consistent signal.",
    stat: "5×",
    statLabel: "Avg. organic growth",
  },
];

export const featuresHeadline = {
  overline: "What we do",
  heading: "Innovation, met with precision.",
  body: "Eight capabilities, one team. We cover every layer a modern business runs on — from the product your users touch to the systems underneath — so nothing falls between the cracks.",
  testimonial: {
    quote:
      "Lofistack doesn't just ship deliverables — they understand the full arc, from first impression to lasting system. Across branding, web, automation, and support, everything coheres.",
    author: "Mara Osei",
    role: "Founder, Kindred Studio",
  },
} as const;
