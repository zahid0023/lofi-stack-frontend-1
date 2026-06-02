"use client";

import { useEffect, useRef } from "react";
import { ethosParagraphs as PARAGRAPHS, ethosMeta } from "@/data/landing";
import SectionTag from "@/components/ui/SectionTag";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollParagraph from "./ScrollParagraph";

export default function EthosSection() {
  const rightRef = useRef<HTMLElement>(null);

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
        words.forEach((w, i) => w.classList.toggle("in", i < visibleCount));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative overflow-x-clip bg-[var(--lofi-bg)] pb-[160px]">

      <SectionTag label="[ 02 - Ethos ]" className="mb-14" />

      <section
        className="flex justify-between items-start gap-40"
        style={{ paddingLeft: "calc(100% / 8)", paddingRight: "calc(100% / 8)" }}
      >
        <SectionHeading
          variant="dark"
          className="sticky top-[148px] self-start shrink-0 w-[30%]"
          overline="Since"
          overlineClassName="![font-family:var(--font-instrument-serif)] italic !font-normal !text-[clamp(28px,3.5vw,52px)] !text-[var(--lofi-accent)] !tracking-normal !normal-case !mb-1"
          title={ethosMeta.since}
          titleClassName="!font-bold !text-[clamp(96px,14vw,220px)] !leading-[0.84] !tracking-[-0.05em] !mb-7"
          body={ethosMeta.tagline}
          bodyClassName="![font-family:var(--font-jetbrains-mono)] !text-[11px] tracking-[0.16em] uppercase pt-[14px] border-t border-[var(--lofi-line)] mt-7 !max-w-[22em]"
        />

        <section>
          <article ref={rightRef} className="pt-2">
            {PARAGRAPHS.map((p, i) => (
              <ScrollParagraph key={i} lead={p.lead} text={p.text} />
            ))}
          </article>
        </section>
      </section>
    </main>
  );
}
