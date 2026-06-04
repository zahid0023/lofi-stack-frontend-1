// ── Hero ──────────────────────────────────────────────────────────────────────

export const servicesHero = {
  overline: "What we do",
  headingLight: "We build the things ",
  headingAccent: "others find hard.",
  body: "From zero-to-one products to platform rewrites, we take on the work that requires both engineering depth and design conviction.",
};

// ── Services ──────────────────────────────────────────────────────────────────

export interface Service {
  index: string;
  iconName: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    index: "01",
    iconName: "Layers",
    title: "Product Engineering",
    description: "End-to-end product builds from concept to production. We own the stack, the delivery, and the outcome.",
    deliverables: ["Full-stack web apps", "API design & integration", "Performance optimisation", "CI/CD pipelines"],
  },
  {
    index: "02",
    iconName: "Paintbrush",
    title: "Design Systems",
    description: "Scalable, consistent component libraries that make your team faster and your product more coherent.",
    deliverables: ["Token-based design systems", "Component libraries", "Accessibility audits", "Documentation"],
  },
  {
    index: "03",
    iconName: "GitBranch",
    title: "Platform Modernisation",
    description: "We inherit legacy codebases and turn them into platforms teams are proud to work on.",
    deliverables: ["Architecture review", "Incremental rewrites", "Database migrations", "Observability setup"],
  },
  {
    index: "04",
    iconName: "Users",
    title: "Team Augmentation",
    description: "Senior engineers who embed with your team, raise the bar, and leave the codebase better than they found it.",
    deliverables: ["Embedded engineers", "Technical leadership", "Code review culture", "Mentorship"],
  },
  {
    index: "05",
    iconName: "Zap",
    title: "Rapid Prototyping",
    description: "From idea to testable product in weeks. We prototype at pace without cutting corners on the fundamentals.",
    deliverables: ["MVP builds", "Proof-of-concepts", "Investor demos", "User testing builds"],
  },
];

// ── Process ───────────────────────────────────────────────────────────────────

export interface ProcessStep {
  index: string;
  title: string;
  body: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    body: "We spend the first week understanding your problem, your users, and your constraints before writing a line of code.",
    details: ["Stakeholder interviews", "Codebase & tech audit", "User journey mapping", "Risk identification"],
  },
  {
    index: "02",
    title: "Define",
    body: "We scope the work honestly — no bloated proposals, no scope creep baked in. You know exactly what you're getting.",
    details: ["Milestone breakdown", "Fixed-scope proposal", "Success criteria", "Team & timeline plan"],
  },
  {
    index: "03",
    title: "Build",
    body: "We ship in weekly cycles with real demos. No black boxes, no surprises. You see the work as it happens.",
    details: ["Weekly demo calls", "Shared task board", "Continuous deployment", "Async progress updates"],
  },
  {
    index: "04",
    title: "Hand off",
    body: "You own everything we build. Full source code, documentation, and a team that actually knows how to run it.",
    details: ["Full source ownership", "Runbook & docs", "Knowledge transfer", "30-day post-launch support"],
  },
];

export const processSection = {
  overline: "How we work",
  heading: "A process built for trust.",
  body: "We've refined this over dozens of engagements. It's not perfect, but it's honest.",
};

// ── Process commitments ────────────────────────────────────────────────────────

export interface ProcessCommitment {
  stat: string;
  label: string;
  body: string;
}

export const processCommitments: ProcessCommitment[] = [
  {
    stat: "Week 1",
    label: "Kickoff, always.",
    body: "No lengthy onboarding rituals. We're in your codebase and talking to users within the first five days.",
  },
  {
    stat: "Weekly",
    label: "Real demos.",
    body: "Every Friday you see working software — not slide decks, not status reports. Actual product in a browser.",
  },
  {
    stat: "100%",
    label: "Yours to keep.",
    body: "Every line of code, every design asset, every doc. No lock-in, no licensing, no surprises at the end.",
  },
];

export const processCta = {
  quote: "We'd rather lose a deal than overpromise. That's a rare thing in this industry — and it's the only way we know how to work.",
  attribution: "— founding principle",
  buttonLabel: "Start a conversation",
  buttonHref: "#",
};

// ── Why choose us ─────────────────────────────────────────────────────────────

export const whyChooseUsSection = {
  overline: "Why us",
  heading: "Built different, on purpose.",
  body: "There are a lot of agencies. Here's what actually makes us different — and why it matters for your project.",
};

export interface Differentiator {
  index: string;
  title: string;
  body: string;
}

export const differentiators: Differentiator[] = [
  {
    index: "01",
    title: "Senior-only teams.",
    body: "No juniors learning on your budget. Every engineer we assign has shipped production software at scale and can own decisions independently.",
  },
  {
    index: "02",
    title: "No retainer trap.",
    body: "We work project-to-project. If we stop adding value, you stop paying. We earn every engagement by making the last one worth it.",
  },
  {
    index: "03",
    title: "Design-aware engineers.",
    body: "We don't hand off to a designer. Our engineers think in systems, spacing, and user experience — so the gap between design and code disappears.",
  },
  {
    index: "04",
    title: "Transparent pricing.",
    body: "Fixed scopes, fixed prices. No hourly billing that balloons without warning. You know the number before we start.",
  },
  {
    index: "05",
    title: "Opinionated, not precious.",
    body: "We have strong views on the right way to build software. We'll always explain our reasoning — and we're always open to being wrong.",
  },
  {
    index: "06",
    title: "You keep everything.",
    body: "Code, docs, designs, domain knowledge. Complete handover with no vendor lock-in, ever. The codebase is yours from day one.",
  },
];

export interface WhyStat {
  value: string;
  label: string;
}

export const whyStats: WhyStat[] = [
  { value: "40+", label: "Products shipped" },
  { value: "< 5%", label: "Scope overrun rate" },
  { value: "3 wks", label: "Avg. time to first deploy" },
  { value: "92%", label: "Clients who come back" },
];

// ── Our products ───────────────────────────────────────────────────────────────

export const ourProductsSection = {
  overline: "Our work",
  heading: "Products we're proud of.",
  body: "A selection of what we've shipped — from zero-to-one builds to platform rewrites. Every one of these is live and in use today.",
};

export interface Product {
  tag: string;
  title: string;
  body: string;
  year: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    tag: "Client portal",
    title: "Kindred",
    body: "A real-time collaboration portal that replaced 40+ weekly email threads for a 60-person consultancy. Built in 6 weeks, still running 3 years later with zero downtime.",
    year: "2021",
    featured: true,
  },
  {
    tag: "Design system",
    title: "Slate",
    body: "Token-based design system powering 12 products. Zero-config dark mode, fully accessible, ships with a living Storybook.",
    year: "2022",
  },
  {
    tag: "Field ops SaaS",
    title: "Fieldwork",
    body: "Scheduling and dispatch tool for a 200-person trades business. Replaced three legacy tools and cut admin time by 60%.",
    year: "2022",
  },
  {
    tag: "Analytics",
    title: "Orbit",
    body: "Executive metrics dashboard with drill-down to raw events. Processes 2M+ events per day on a remarkably modest infrastructure bill.",
    year: "2023",
  },
  {
    tag: "Internal tooling",
    title: "Runway",
    body: "Project and capacity planning tool built for a product studio. Teams refused to stop using it after the engagement ended — so we open-sourced it.",
    year: "2024",
  },
];
