"use client";

import { useEffect, useRef, useState } from "react";
import { moments as MOMENTS, galleryHeadline } from "@/data/landing";
import SectionTag from "@/components/ui/SectionTag";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryCard from "./GalleryCard";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    <section ref={sectionRef} className="relative bg-[var(--cream-bg)] text-[var(--cream-ink)] px-[calc(100%/12)]">
      <SectionTag label="[ 05 — Moments ]" variant="cream" />

      <Card className="rounded-none ring-0 gap-0 py-0 bg-transparent overflow-visible">

        {/* Heading */}
        <CardHeader className="px-0 rounded-none overflow-visible">
          <SectionHeading
            className="lofi-reveal pt-20 pb-16"
            overline={galleryHeadline.overline}
            overlineClassName="!mb-6"
            title={<>Real people.{" "}<em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">Real problems.</em>{" "}Solved.</>}
            titleClassName="!text-[clamp(32px,4vw,60px)] !leading-[1.05] !mb-5 max-w-[18ch]"
            body={galleryHeadline.body}
            bodyClassName="!text-[clamp(13px,1.1vw,15px)] !leading-[1.65] !text-[var(--cream-ink-soft)] !max-w-[44ch]"
            cta={{ primary: { label: "Book a Consultation", href: "#" }, secondary: { label: "Learn More", href: "#" } }}
          />
        </CardHeader>

        {/* Marquee rows — full-bleed (escape column padding) */}
        <CardContent className="px-0 -mx-[calc(100vw/12)] pb-[160px]">

          {/* Row 1 — scrolls left */}
          <div
            className="overflow-hidden [overflow-clip-margin:0] py-10"
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
            className="overflow-hidden [overflow-clip-margin:0] py-10"
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

        </CardContent>

      </Card>
    </section>
  );
}
