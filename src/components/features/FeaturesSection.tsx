"use client";

import { useEffect, useRef, useState } from "react";
import { features as FEATURES, featuresHeadline } from "@/data/landing";
import SectionTag from "@/components/ui/SectionTag";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "./FeatureCard";
import TestimonialCard from "./TestimonialCard";

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
    <main ref={sectionRef} className="relative bg-[var(--cream-bg)] text-[var(--cream-ink)]">
      <SectionTag label="[ 03 - Features ]" variant="cream" progress={progress} />

      <section
        className="grid grid-cols-2 gap-[60px] pt-20"
        style={{ paddingLeft: "calc(100% / 8)", paddingRight: "calc(100% / 8)" }}
      >
        <SectionHeading
          className="sticky top-[140px] self-start h-fit lofi-reveal"
          overline="What we do"
          title={<>Innovation, <em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">met with precision.</em></>}
          body="Eight capabilities, one team. We cover every layer a modern business runs on — from the product your users touch to the systems underneath — so nothing falls between the cracks."
        />

        <article className="relative">
          {FEATURES.map((f, i) => (
            <div key={f.index} className="relative h-[100vh]">
              <div className="sticky top-[140px] h-[480px]" style={{ zIndex: i + 1 }}>
                <FeatureCard {...f} />
              </div>
            </div>
          ))}
        </article>
      </section>

      <div className="pl-[calc(100%/8)] pr-[calc(100%/8)] pt-20 pb-[160px]">
        <TestimonialCard
          quote={featuresHeadline.testimonial.quote}
          author={featuresHeadline.testimonial.author}
          role={featuresHeadline.testimonial.role}
        />
      </div>
    </main>
  );
}
