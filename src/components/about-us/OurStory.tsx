"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { milestones, ourStorySection } from "@/data/about";

export default function OurStory() {
  const ref = useRevealObserver(0.08);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 border-t border-[var(--cream-ink)]/10">
      <div className="container space-y-16">

        {/* Heading row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-5 space-y-1 lofi-reveal">
              <p className="[font-family:var(--font-instrument-serif)] text-5xl text-[var(--cream-accent)] lg:text-6xl">
                {ourStorySection.overline}
              </p>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl lofi-reveal" style={{ transitionDelay: "80ms" }}>
              <span className="text-[var(--cream-ink)]">{ourStorySection.headingLight}</span>
              <span className="text-[var(--cream-accent)]">{ourStorySection.headingAccent}</span>
            </h2>
          </div>

          <div className="col-span-1 hidden lg:block" />

          <div className="col-span-3 flex items-end lofi-reveal" style={{ transitionDelay: "160ms" }}>
            <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed">
              {ourStorySection.body}
            </p>
          </div>
        </div>

        {/* Timeline milestones */}
        <div className="space-y-0">
          {milestones.map((milestone, i) => (
            <div
              key={milestone.year}
              className="relative group overflow-hidden border-b border-[var(--cream-ink)]/10 last:border-b-0 lofi-reveal cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hover background wash */}
              <div className="absolute inset-0 bg-[var(--cream-accent)]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Left accent bar — slides down on hover */}
              <div className="absolute left-0 top-0 w-[3px] h-full bg-[var(--cream-accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="relative py-7 lg:py-8 lg:pl-8">
                {/* Year + title + body in one row */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                  <div className="col-span-1 flex items-center gap-3">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 [font-family:var(--font-instrument-serif)] italic leading-none text-[72px] lg:text-[88px] text-[var(--cream-accent)]/10 group-hover:text-[var(--cream-accent)]/20 transition-colors duration-500 select-none pointer-events-none">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--cream-ink)] lg:text-2xl group-hover:text-[var(--cream-accent)] transition-colors duration-300">
                      {milestone.title}
                    </h3>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-[var(--cream-ink)]/45 leading-relaxed">
                      {milestone.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
