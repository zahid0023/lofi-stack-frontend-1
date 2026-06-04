"use client";

import { useEffect, useState } from "react";
import { features as FEATURES, featuresHeadline } from "@/data/landing";
import SectionTag from "@/components/ui/SectionTag";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "./FeatureCard";
import TestimonialCard from "./TestimonialCard";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRevealObserver } from "@/hooks/useRevealObserver";

export default function FeaturesSection() {
  const sectionRef = useRevealObserver();
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

  return (
    <section ref={sectionRef} className="relative bg-[var(--cream-bg)] text-[var(--cream-ink)] px-[calc(100%/12)]">
      <SectionTag label="[ 03 - Features ]" variant="cream" progress={progress} />

      <Card className="rounded-none ring-0 gap-0 py-0 bg-transparent overflow-visible">
        <CardContent className="px-0 overflow-visible">
          <section className="grid grid-cols-2 gap-[60px] pt-20">
            <SectionHeading
              className="sticky top-[140px] self-start h-fit lofi-reveal"
              overline="What we do"
              title={<>Innovation, <em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">met with precision.</em></>}
              body="Eight capabilities, one team. We cover every layer a modern business runs on — from the product your users touch to the systems underneath — so nothing falls between the cracks."
              cta={{ primary: { label: "Book a Consultation", href: "#" }, secondary: { label: "Learn More", href: "#" } }}
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
        </CardContent>

        <CardFooter className="px-0 pt-20 pb-[160px] border-0 rounded-none bg-transparent">
          <TestimonialCard
            quote={featuresHeadline.testimonial.quote}
            author={featuresHeadline.testimonial.author}
            role={featuresHeadline.testimonial.role}
          />
        </CardFooter>
      </Card>
    </section>
  );
}
