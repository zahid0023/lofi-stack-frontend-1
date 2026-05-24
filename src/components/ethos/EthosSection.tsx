"use client";

import { useEffect, useRef } from "react";

const PARAGRAPHS = [
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

export default function EthosSection() {
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const paragraphs = rightRef.current?.querySelectorAll("[data-lbl]");
    if (!paragraphs) return;

    const onScroll = () => {
      const vh = window.innerHeight;
      paragraphs.forEach((para) => {
        const words = para.querySelectorAll<HTMLElement>(".lofi-word");
        if (!words.length) return;
        const rect = para.getBoundingClientRect();
        const topFrac = (rect.top - vh * 0.28) / (vh * (0.82 - 0.28));
        const progress = Math.min(1, Math.max(0, 1 - topFrac));
        const visibleCount = Math.round(progress * words.length);
        words.forEach((w, i) => {
          if (i < visibleCount) w.classList.add("in");
          else w.classList.remove("in");
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-x-clip bg-[var(--lofi-bg)]">


      {/* ── Main (columns 1–11) ── */}
      <main className="pt-[140px] pb-[160px]">

        {/* ── Header ── */}
        <header className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] tracking-[0.12em] uppercase text-[var(--lofi-accent)] mb-14" style={{ paddingLeft: "calc(100% / 12)", paddingRight: "calc(100% / 12)" }}>
          [ 02 - Ethos ]
        </header>

        {/* ── Body (left + right) — midpoint col 1–2 → midpoint col 10–11 ── */}
        <div className="flex justify-between items-start gap-40" style={{ paddingLeft: "calc(100% / 8)", paddingRight: "calc(100% / 8)" }}>

          {/* Left: sticky */}
          <div className="sticky top-24 self-start shrink-0 w-[30%]">
            <div className="flex flex-col mb-7">
              <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal text-[clamp(28px,3.5vw,52px)] text-[var(--lofi-accent)] mb-1">
                Since
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(96px,14vw,220px)] leading-[0.84] tracking-[-0.05em] text-[var(--lofi-ink)]">
                2022
              </span>
            </div>
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.16em] uppercase text-[var(--lofi-muted)] pt-[14px] border-t border-[var(--lofi-line)] mt-7 max-w-[22em]">
              Small teams · Operated products · Low volume, high signal
            </p>
          </div>

          {/* Right: scroll-driven paragraphs */}
          <div ref={rightRef} className="pt-2">
            {PARAGRAPHS.map((p, i) => (
              <ScrollParagraph key={i} lead={p.lead} text={p.text} />
            ))}
          </div>

        </div>
      </main>
    </section>
  );
}

function ScrollParagraph({ text, lead }: { text: string; lead?: boolean }) {
  const words = text.split(" ");

  return (
    <p
      data-lbl
      className={[
        "font-[family-name:var(--font-space-grotesk)] font-normal",
        lead
          ? "text-[clamp(34px,3.8vw,60px)] leading-[1.18] tracking-[-0.025em] text-[var(--lofi-ink)] mb-24 max-w-[20ch]"
          : "text-[clamp(26px,2.8vw,44px)] leading-[1.28] tracking-[-0.02em] text-[var(--lofi-ink-soft)] mb-16 max-w-[24ch]",
      ].join(" ")}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="lofi-word"
          style={{ transitionDelay: `${i * 18}ms` }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
