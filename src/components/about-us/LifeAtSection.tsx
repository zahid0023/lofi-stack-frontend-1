"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { lifeAtSection, lifePhotos, rituals } from "@/data/about";

const spanClass: Record<string, string> = {
  wide: "col-span-2",
  tall: "row-span-2",
  normal: "col-span-1",
};

export default function LifeAtSection() {
  const ref = useRevealObserver(0.06);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 border-t border-[var(--cream-ink)]/10"
    >
      <div className="container space-y-14">

        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
          <div className="col-span-2 lofi-reveal">
            <p className="[font-family:var(--font-instrument-serif)] italic text-5xl text-[var(--cream-accent)] lg:text-6xl mb-4">
              {lifeAtSection.overline}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--cream-ink)] lg:text-5xl">
              {lifeAtSection.heading}
            </h2>
          </div>
          <div className="col-span-1 hidden lg:block" />
          <div className="col-span-3 flex items-end lofi-reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed">
              {lifeAtSection.body}
            </p>
          </div>
        </div>

        {/* Rituals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--cream-ink)]/10">
          {rituals.map((ritual, i) => (
            <div
              key={ritual.label}
              className="group relative bg-[#faf7f2] p-8 lg:p-10 flex flex-col gap-5 lofi-reveal cursor-default"
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 bg-[var(--cream-accent)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--cream-accent)] w-0 group-hover:w-full transition-all duration-500 ease-out" />

              {/* Index */}
              <span className="relative [font-family:var(--font-instrument-serif)] italic text-4xl leading-none text-[var(--cream-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <h3 className="relative text-xl font-semibold tracking-tight text-[var(--cream-ink)] group-hover:text-[var(--cream-accent)] transition-colors duration-300">
                {ritual.label}
              </h3>

              {/* Description */}
              <p className="relative text-sm text-[var(--cream-ink)]/50 leading-relaxed">
                {ritual.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery grid — bento layout */}
        <div
          className="grid grid-cols-3 grid-rows-[380px_280px] gap-2 lofi-reveal"
          style={{ transitionDelay: "400ms" }}
        >
          {lifePhotos.slice(0, 5).map((photo, i) => (
            <div
              key={photo.src}
              className={[
                "group relative overflow-hidden",
                i === 0 ? "col-span-2 row-span-1" :
                i === 1 ? "col-span-1 row-span-2" :
                "col-span-1 row-span-1",
              ].join(" ")}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />

              {/* Warm tint — fades on hover */}
              <div className="absolute inset-0 bg-[var(--cream-accent)]/10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              {/* Caption overlay — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--cream-ink)]/70 to-transparent p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="[font-family:var(--font-jetbrains-mono)] text-[10px] tracking-[0.12em] text-[#efe6d6]/90 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
