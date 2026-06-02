"use client";

import { useEffect, useRef, useState } from "react";
import { moments as MOMENTS, galleryHeadline } from "@/data/landing";
import SectionTag from "@/components/ui/SectionTag";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryCard from "./GalleryCard";

const ROW1 = MOMENTS;
const ROW2 = [...MOMENTS].reverse();

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);

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
    <main ref={sectionRef} className="relative bg-[var(--cream-bg)] text-[var(--cream-ink)]">
      <SectionTag label="[ 05 — Moments ]" variant="cream" />

      <section style={{ paddingLeft: "calc(100% / 8)", paddingRight: "calc(100% / 8)" }}>
        <SectionHeading
          className="lofi-reveal pt-20 pb-16"
          overline={galleryHeadline.overline}
          overlineClassName="!mb-6"
          title={<>Real people.{" "}<em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">Real problems.</em>{" "}Solved.</>}
          titleClassName="!text-[clamp(32px,4vw,60px)] !leading-[1.05] !mb-5 max-w-[18ch]"
          body={galleryHeadline.body}
          bodyClassName="!text-[clamp(13px,1.1vw,15px)] !leading-[1.65] !text-[var(--cream-ink-soft)] !max-w-[44ch]"
        />
      </section>

      <section>
        {/* Row 1 — scrolls left */}
        <div
          className="overflow-hidden [overflow-clip-margin:0]"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
          onMouseEnter={() => setRow1Paused(true)}
          onMouseLeave={() => setRow1Paused(false)}
        >
          <div
            className="flex items-start gap-5 w-max"
            style={{ animation: "lofi-ticker 52s linear infinite", animationPlayState: row1Paused ? "paused" : "running" }}
          >
            {[...ROW1, ...ROW1].map((m, i) => (
              <GalleryCard key={`r1-${i}`} {...m} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div
          className="overflow-hidden [overflow-clip-margin:0] pb-[160px]"
          style={{ paddingTop: "40px" }}
          onMouseEnter={() => setRow2Paused(true)}
          onMouseLeave={() => setRow2Paused(false)}
        >
          <div
            className="flex items-start gap-5 w-max"
            style={{ animation: "lofi-ticker 60s linear infinite reverse", animationPlayState: row2Paused ? "paused" : "running" }}
          >
            {[...ROW2, ...ROW2].map((m, i) => (
              <GalleryCard key={`r2-${i}`} {...m} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
