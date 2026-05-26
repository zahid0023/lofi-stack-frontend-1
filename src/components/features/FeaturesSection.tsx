"use client";

import { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";
import TestimonialCard from "./TestimonialCard";

const FEATURES = [
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

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = Math.max(0, -top);
      setProgress(Math.min(1, scrolled / Math.max(1, height - vh)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal for headline
  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".lofi-reveal");
    if (!reveals) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting)),
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--cream-bg)] text-[var(--cream-ink)]"
    >
      {/* Sticky progress bar */}
      <header className="
        sticky top-[80px] z-20 flex items-center
        pl-[calc(100%/12)] pr-[calc(100%/12)] py-4
        bg-[var(--cream-bg)] backdrop-blur-[8px]
        [font-family:var(--font-jetbrains-mono)] text-[13px] tracking-[0.12em] uppercase text-[var(--cream-accent)]
      ">
        <span className="shrink-0">[ 03 - Features ]</span>
        <div className="flex-1 mx-4 h-[2px] rounded-[2px] bg-[var(--cream-line)] overflow-hidden">
          <div
            className="h-full bg-[var(--cream-accent)] transition-[width] duration-[100ms] ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="tabular-nums min-w-[4ch] text-right text-[var(--cream-ink-soft)]">
          {Math.round(progress * 100)}%
        </span>
      </header>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-[60px] pl-[calc(100%/10)] pr-[calc(100%/10)] pt-[100px]">

        {/* Left — sticky headline */}
        <div className="sticky top-[140px] self-start h-fit">
          <header className="lofi-reveal">
            <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.12em] uppercase text-[var(--cream-muted)] mb-8">
              What we do
            </p>
            <h2 className="
              [font-family:var(--font-space-grotesk)] font-semibold
              text-[clamp(36px,4.8vw,72px)] leading-[1.05] tracking-[-0.03em]
              text-[var(--cream-ink)] m-0 mb-7
            ">
              Innovation,{" "}
              <em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">
                met with precision.
              </em>
            </h2>
            <p className="
              [font-family:var(--font-space-grotesk)]
              text-[clamp(15px,1.4vw,18px)] leading-[1.55]
              text-[var(--cream-ink-soft)] max-w-[38ch] m-0
            ">
              Eight capabilities, one team. We cover every layer a modern business
              runs on — from the product your users touch to the systems underneath —
              so nothing falls between the cracks.
            </p>
          </header>
        </div>

        {/* Right — stacking cards */}
        <div className="relative">
          {FEATURES.map((f, i) => (
            <div key={f.index} className="relative h-[100vh]">
              <div
                className="sticky top-[140px] h-[480px]"
                style={{ zIndex: i + 1 }}
              >
                <FeatureCard {...f} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Testimonial */}
      <div className="pl-[calc(100%/8)] pr-[calc(100%/8)] pt-20 pb-[160px]">
        <TestimonialCard
          quote="Lofistack doesn't just ship deliverables — they understand the full arc, from first impression to lasting system. Across branding, web, automation, and support, everything coheres."
          author="Mara Osei"
          role="Founder, Kindred Studio"
        />
      </div>
    </section>
  );
}
