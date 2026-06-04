"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { whyChooseUsSection, differentiators, whyStats } from "@/data/services";

export default function WhyChooseUsSection() {
  const ref = useRevealObserver(0.06);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[var(--cream-ink)] px-[calc(100%/12)] py-24"
    >
      <div className="container space-y-20">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
          <div className="col-span-2 lofi-reveal">
            <p className="[font-family:var(--font-instrument-serif)] italic text-5xl text-[var(--cream-accent)] lg:text-6xl mb-4">
              {whyChooseUsSection.overline}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#efe6d6] lg:text-5xl">
              {whyChooseUsSection.heading}
            </h2>
          </div>
          <div className="col-span-1 hidden lg:block" />
          <div className="col-span-3 flex items-end lofi-reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-[#efe6d6]/50 text-base leading-relaxed">
              {whyChooseUsSection.body}
            </p>
          </div>
        </div>

        {/* ── Differentiator cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#efe6d6]/[0.06]">
          {differentiators.map((item, i) => (
            <div
              key={item.index}
              className="group relative bg-[var(--cream-ink)] p-8 lg:p-10 flex flex-col gap-5 overflow-hidden lofi-reveal cursor-default"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--cream-accent)] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              {/* Ghost index */}
              <span className="absolute -bottom-4 right-4 [font-family:var(--font-instrument-serif)] italic text-[120px] leading-none text-[#efe6d6]/[0.04] select-none pointer-events-none group-hover:text-[#efe6d6]/[0.07] transition-colors duration-500">
                {item.index}
              </span>

              {/* Index pill */}
              <span className="relative w-fit [font-family:var(--font-jetbrains-mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--cream-accent)] border border-[var(--cream-accent)]/30 px-2.5 py-1 rounded-full">
                {item.index}
              </span>

              {/* Title */}
              <h3 className="relative [font-family:var(--font-instrument-serif)] italic text-2xl text-[#efe6d6] lg:text-3xl group-hover:text-[var(--cream-accent)] transition-colors duration-300 leading-snug">
                {item.title}
              </h3>

              {/* Body */}
              <p className="relative text-sm text-[#efe6d6]/45 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Stats ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#efe6d6]/10 border border-[#efe6d6]/10 lofi-reveal"
          style={{ transitionDelay: "300ms" }}
        >
          {whyStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative px-10 py-12 flex flex-col gap-3 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="relative [font-family:var(--font-instrument-serif)] italic text-6xl lg:text-7xl text-[var(--cream-accent)] leading-none">
                {stat.value}
              </span>
              <span className="relative [font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.12em] uppercase text-[#efe6d6]/35">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
