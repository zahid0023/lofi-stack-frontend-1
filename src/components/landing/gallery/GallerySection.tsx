"use client";

import { useMemo, useState } from "react";
import { moments as MOMENTS, galleryHeadline } from "@/data/landing";
import SectionTag from "@/components/common/SectionTag";
import SectionHeading from "@/components/common/SectionHeading";
import CtaButton from "@/components/common/CtaButton";
import GalleryCard from "./GalleryCard";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRevealObserver } from "@/hooks/useRevealObserver";

const ROW1 = MOMENTS;

export default function GallerySection() {
  const sectionRef = useRevealObserver();
  const row2 = useMemo(() => [...MOMENTS].reverse(), []);
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);

  return (
    <section ref={sectionRef} className="relative bg-[var(--cream-bg)] text-[var(--cream-ink)] px-[calc(100%/12)]">
      <SectionTag label="[ 05 — Moments ]" variant="cream" />

      <Card className="rounded-none ring-0 gap-0 py-0 bg-transparent overflow-visible">

        {/* Heading */}
        <CardHeader className="px-0 rounded-none overflow-visible">
          <SectionHeading
            className="lofi-reveal pt-20 pb-16"
            variant="cream"
            overline={galleryHeadline.overline}
            overlineClassName="mb-6"
            title={<>Real people.{" "}<em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">Real problems.</em>{" "}Solved.</>}
            titleClassName="text-[clamp(32px,4vw,60px)] leading-[1.05] mb-5 max-w-[18ch]"
            body={galleryHeadline.body}
            bodyClassName="text-[clamp(13px,1.1vw,15px)] leading-[1.65] text-[var(--cream-ink-soft)] max-w-[44ch]"
            cta={{ primary: { label: "Book a Consultation", href: "#" }, secondary: { label: "Learn More", href: "#" } }}
          />
        </CardHeader>

        {/* Marquee rows — full-bleed (escape column padding) */}
        <CardContent className="px-0 -mx-[calc(100vw/12)] pb-0">

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

          <Separator className="bg-[var(--cream-line)]" />

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
              {[...row2, ...row2].map((m, i) => (
                <GalleryCard key={`r2-${i}`} {...m} />
              ))}
            </div>
          </div>

        </CardContent>

        {/* Count + CTA */}
        <CardFooter className="px-0 pb-[160px] pt-10 border-0 bg-transparent rounded-none items-center justify-between">
          <span className="[font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.12em] uppercase text-[var(--cream-muted)]">
            {MOMENTS.length} {galleryHeadline.footer.countLabel}
          </span>
          <CtaButton variant="ghost" href={galleryHeadline.footer.cta.href} className="border-[var(--cream-ink)] text-[var(--cream-ink)] hover:bg-[var(--cream-ink)] hover:text-[var(--cream-bg)]">
            {galleryHeadline.footer.cta.label}
          </CtaButton>
        </CardFooter>

      </Card>
    </section>
  );
}
