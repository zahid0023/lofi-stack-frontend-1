"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { ourProductsSection, products } from "@/data/services";

export default function OurProductsSection() {
  const ref = useRevealObserver(0.06);

  const featured = products.find((p) => p.featured);
  const rest = products.filter((p) => !p.featured);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#faf7f2] px-[calc(100%/12)] py-24 border-t border-[var(--cream-ink)]/10"
    >
      <div className="container space-y-14">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
          <div className="col-span-2 lofi-reveal">
            <p className="[font-family:var(--font-instrument-serif)] italic text-5xl text-[var(--cream-accent)] lg:text-6xl mb-4">
              {ourProductsSection.overline}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--cream-ink)] lg:text-5xl">
              {ourProductsSection.heading}
            </h2>
          </div>
          <div className="col-span-1 hidden lg:block" />
          <div className="col-span-3 flex items-end lofi-reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed">
              {ourProductsSection.body}
            </p>
          </div>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--cream-ink)]/10">

          {/* Featured card — spans 2 cols, dark bg */}
          {featured && (
            <div className="group relative lg:col-span-2 bg-[var(--cream-ink)] p-10 lg:p-14 flex flex-col justify-between gap-10 lofi-reveal cursor-default min-h-[380px]">
              {/* Hover wash */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--cream-accent)] w-0 group-hover:w-full transition-all duration-500 ease-out" />

              <div className="flex items-start justify-between gap-4">
                <span className="[font-family:var(--font-jetbrains-mono)] text-[10px] tracking-[0.12em] uppercase text-[#efe6d6]/40 border border-[#efe6d6]/15 px-3 py-1 rounded-full">
                  {featured.tag}
                </span>
                <span className="[font-family:var(--font-jetbrains-mono)] text-[10px] tracking-[0.1em] text-[#efe6d6]/30">
                  {featured.year}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="[font-family:var(--font-instrument-serif)] italic text-4xl text-[#efe6d6] lg:text-5xl group-hover:text-[var(--cream-accent)] transition-colors duration-300 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-sm text-[#efe6d6]/50 leading-relaxed max-w-lg">
                  {featured.body}
                </p>
              </div>
            </div>
          )}

          {/* Regular cards */}
          {rest.map((product, i) => (
            <div
              key={product.title}
              className="group relative bg-[#faf7f2] p-8 lg:p-10 flex flex-col justify-between gap-8 lofi-reveal cursor-default"
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 bg-[var(--cream-accent)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--cream-accent)] w-0 group-hover:w-full transition-all duration-500 ease-out" />

              <div className="flex items-start justify-between gap-4">
                <span className="[font-family:var(--font-jetbrains-mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--cream-ink)]/40 border border-[var(--cream-ink)]/15 px-3 py-1 rounded-full">
                  {product.tag}
                </span>
                <span className="[font-family:var(--font-jetbrains-mono)] text-[10px] tracking-[0.1em] text-[var(--cream-ink)]/30">
                  {product.year}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="[font-family:var(--font-instrument-serif)] italic text-3xl text-[var(--cream-ink)] group-hover:text-[var(--cream-accent)] transition-colors duration-300 leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-[var(--cream-ink)]/50 leading-relaxed">
                  {product.body}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
