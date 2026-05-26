"use client";

import { useEffect, useRef } from "react";
import BrandCard from "./BrandCard";
import LogoMarquee from "./LogoMarquee";
import PillButton from "./PillButton";

// ── Data ─────────────────────────────────────────────────────────────

const LOGOS = [
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

const BRANDS = [
  { initials: "KS", name: "Kindred Studio",  industry: "Design",       description: "Visual identity and design systems for modern creative studios."          },
  { initials: "AF", name: "Arc & Field",     industry: "Architecture", description: "Spatial design and planning for sustainable built environments."          },
  { initials: "ML", name: "Meridian Labs",   industry: "Tech",         description: "Research-driven software tools for the next wave of the web."            },
  { initials: "VG", name: "Vantage Group",   industry: "Finance",      description: "Strategic advisory and financial infrastructure for growth-stage firms." },
  { initials: "BD", name: "Beacon Digital",  industry: "Marketing",    description: "Performance marketing built around clarity, data, and real results."     },
  { initials: "EW", name: "Ember Works",     industry: "Product",      description: "Thoughtful product development from zero to shipped."                    },
];

const STATS = [
  { value: "10+",  label: "Collaborations" },
  { value: "6",    label: "Industries"     },
  { value: "100+", label: "Apps shipped"   },
];

// ── Section ───────────────────────────────────────────────────────────

export default function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".lofi-reveal");
    if (!reveals) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting)),
      { threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--cream-bg)] pb-[120px]">

      {/* ── Sticky block: tag + headline + CTA + stats ───────────── */}
      <div
        className="sticky top-[80px] z-20 bg-[var(--cream-bg)]/95 backdrop-blur-[10px] border-b border-[var(--cream-ink)]/10"
      >
        {/* Tag row */}
        <div
          className="flex items-center py-3 border-b border-[var(--cream-ink)]/10 [font-family:var(--font-jetbrains-mono)] text-[13px] tracking-[0.12em] uppercase text-[var(--cream-accent)]"
          style={{ paddingLeft: "calc(100% / 12)", paddingRight: "calc(100% / 12)" }}
        >
          [ 04 — Clients ]
        </div>

        {/* Hero row: headline + stats */}
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-0"
          style={{ paddingLeft: "calc(100% / 12)", paddingRight: "calc(100% / 12)" }}
        >
          {/* Headline + CTA — 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-5 py-8 lg:pr-12 lg:border-r border-[var(--cream-ink)]/10">
            <div>
              <p className="m-0 mb-2 [font-family:var(--font-space-grotesk)] font-semibold text-[clamp(11px,0.9vw,13px)] tracking-[0.02em] text-[var(--cream-muted)]">
                Brands We Collaborate With
              </p>
              <h2 className="
                m-0 mb-3
                [font-family:var(--font-space-grotesk)] font-semibold
                text-[clamp(24px,3vw,44px)] leading-[1.06] tracking-[-0.03em]
                text-[var(--cream-ink)]
              ">
                We build the stack{" "}
                <em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">
                  behind
                </em>{" "}
                ambitious teams.
              </h2>
              <p className="m-0 [font-family:var(--font-space-grotesk)] text-[clamp(12px,1vw,15px)] leading-[1.6] text-[var(--cream-muted)] max-w-[48ch]">
                Eight capabilities, one quiet team. From product to pipeline —
                everything a modern business needs to run and grow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PillButton primary href="#">Book a call</PillButton>
              <PillButton href="#">See our work</PillButton>
            </div>
          </div>

          {/* Stats — 1 col */}
          <div className="hidden lg:flex flex-col justify-between py-8 pl-10">
            {STATS.map((s, i) => (
              <div key={s.label}>
                {i > 0 && <div className="h-px bg-[var(--cream-ink)]/10 mb-5" />}
                <div className="[font-family:var(--font-space-grotesk)] font-semibold text-[clamp(28px,2.8vw,40px)] leading-none tracking-[-0.04em] text-[var(--cream-ink)] mb-1">
                  {s.value}
                </div>
                <div className="[font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.16em] uppercase text-[var(--cream-muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrollable: marquee + brand cards + quote ────────────── */}
      <div className="lofi-reveal px-[calc(100%/12)] pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

          {/* Logo marquee */}
          <LogoMarquee logos={LOGOS} duration="32s" />

          {/* Brand cards — row A */}
          {BRANDS.slice(0, 3).map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}

          {/* Quote */}
          <div className="
            md:col-span-2 lg:col-span-1 lg:row-span-2
            flex flex-col justify-between
            rounded-2xl border border-[var(--cream-ink)]/10
            bg-[var(--cream-bg-deep)] p-7
          ">
            <span className="[font-family:var(--font-instrument-serif)] italic text-[72px] leading-none text-[var(--cream-accent)] opacity-25 select-none">
              "
            </span>
            <blockquote className="m-0 flex-1 [font-family:var(--font-instrument-serif)] italic text-[clamp(15px,1.3vw,18px)] leading-[1.6] text-[var(--cream-ink-soft)]">
              Lofistack doesn't just ship deliverables — they understand the full arc, from first impression to lasting system.
            </blockquote>
            <footer className="mt-6">
              <div className="h-px bg-[var(--cream-ink)]/10 mb-4" />
              <p className="m-0 [font-family:var(--font-space-grotesk)] font-medium text-[13px] tracking-[-0.01em] text-[var(--cream-ink-soft)]">
                Mara Osei
              </p>
              <p className="m-0 [font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.14em] uppercase text-[var(--cream-muted)] mt-1">
                Founder, Kindred Studio
              </p>
            </footer>
          </div>

          {/* Brand cards — row B */}
          {BRANDS.slice(3, 6).map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}

        </div>
      </div>

    </section>
  );
}
