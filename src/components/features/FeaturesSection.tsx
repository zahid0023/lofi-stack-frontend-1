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

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = Math.max(0, -top);
      const total = Math.max(1, height - vh);
      const pct = Math.min(1, scrolled / total);
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal for cards
  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".lofi-reveal");
    if (!reveals) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          } else {
            e.target.classList.remove("in");
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--cream-bg)",
        color: "var(--cream-ink)",
        position: "relative",
      }}
    >
      {/* ── Main ── */}
      <main className="pt-[140px] pb-[160px]">

        {/* ── Header ── */}
        <header
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--cream-accent)",
            marginBottom: "56px",
            paddingLeft: "calc(100% / 12)",
            paddingRight: "calc(100% / 12)",
            paddingTop: "16px",
            paddingBottom: "16px",
            position: "sticky",
            top: "80px",
            zIndex: 5,
            background: "var(--cream-bg)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Label + progress bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span>[ 03 - Features ]</span>
            <div
              style={{
                flex: 1,
                height: "2px",
                background: "var(--cream-line)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "var(--cream-accent)",
                  width: `${progress * 100}%`,
                  transition: "width 100ms linear",
                }}
              />
            </div>
            <span
              style={{
                color: "var(--cream-ink-soft)",
                fontVariantNumeric: "tabular-nums",
                minWidth: "4ch",
                textAlign: "right",
              }}
            >
              {Math.round(progress * 100)}%
            </span>
          </div>
        </header>

        {/* ── Body ── */}
        <div style={{ paddingLeft: "calc(100% / 8)", paddingRight: "calc(100% / 8)" }}>

      {/* Section header */}
      <header
        className="lofi-reveal"
        style={{ marginBottom: "80px" }}
      >
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--cream-muted)",
            marginBottom: "32px",
          }}
        >
          What we do
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 600,
            fontSize: "clamp(40px, 5.6vw, 88px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--cream-ink)",
            margin: "0 0 24px",
            maxWidth: "18ch",
          }}
        >
          Innovation,{" "}
          <em
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--cream-accent)",
            }}
          >
            met with precision.
          </em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(16px, 1.6vw, 20px)",
            lineHeight: 1.45,
            color: "var(--cream-ink-soft)",
            maxWidth: "52ch",
            margin: 0,
          }}
        >
          Our expertise lies in seamlessly blending innovation with precision across
          App Development, CRM, Custom Solutions, VA Support, Integration &amp;
          Automation, Web Design, Branding, and Digital Marketing — ensuring
          solutions that propel your business forward.
        </p>
      </header>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
        }}
      >
        {FEATURES.map((f) => (
          <FeatureCard key={f.index} {...f} />
        ))}

        <TestimonialCard
          quote="Lofistack doesn't just ship deliverables — they understand the full arc, from first impression to lasting system. Across branding, web, automation, and support, everything coheres."
          author="Mara Osei"
          role="Founder, Kindred Studio"
        />
      </div>

      {/* Responsive styles via a style tag */}
      <style>{`
        @media (max-width: 1200px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          section[data-section="features"] { padding: 80px 24px 100px !important; }
        }
      `}</style>

        </div>{/* end body */}
      </main>
    </section>
  );
}
