export interface Moment {
  id: string;
  caption: string;
  tag: string;
  photo: string;
}

export const moments: Moment[] = [
  {
    id: "01",
    caption: "The whiteboard session that rewrote the brief entirely.",
    tag: "Discovery",
    photo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "02",
    caption: "Two days before launch. One critical bug. All hands.",
    tag: "Engineering",
    photo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "03",
    caption: "When the client said no strategy — then needed strategy.",
    tag: "Strategy",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "04",
    caption: "A quiet session that turned into six months together.",
    tag: "Build",
    photo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "05",
    caption: "The presentation that changed what they thought they wanted.",
    tag: "Design",
    photo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "06",
    caption: "User testing that humbled everyone in the room.",
    tag: "Research",
    photo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "07",
    caption: "The midnight message that started with 'quick question'.",
    tag: "Operations",
    photo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop&crop=faces&q=80",
  },
  {
    id: "08",
    caption: "Retrospective. Honest. The kind that makes things better.",
    tag: "Review",
    photo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "09",
    caption: "The kickoff where we realised we'd solved this before.",
    tag: "Strategy",
    photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&crop=center&q=80",
  },
];

export const galleryHeadline = {
  overline: "Behind the work",
  heading: "Real people. Real problems. Solved.",
  body: "Not case studies. Just the actual moments — the sessions, the pivots, the late calls — where ideas became something real for our clients.",
  footer: {
    countLabel: "moments, counting",
    cta: { label: "Start your own", href: "#" },
  },
} as const;
