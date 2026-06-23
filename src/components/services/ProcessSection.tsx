"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import CtaButton from "@/components/common/CtaButton";
import {
  processSteps,
  processSection,
  processCommitments,
  processCta,
} from "@/data/services";
import { ArrowRightIcon } from "lucide-react";

export default function ProcessSection() {
  const ref = useRevealObserver(0.06);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#faf7f2] px-[calc(100%/12)] py-24 border-t border-[var(--cream-ink)]/10"
    >
      <div className="container space-y-20">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
          <div className="col-span-2 lofi-reveal">
            <p className="[font-family:var(--font-instrument-serif)] italic text-5xl text-[var(--cream-accent)] lg:text-6xl mb-4">
              {processSection.overline}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--cream-ink)] lg:text-5xl">
              {processSection.heading}
            </h2>
          </div>
          <div className="col-span-1 hidden lg:block" />
          <div
            className="col-span-3 flex items-end lofi-reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed">
              {processSection.body}
            </p>
          </div>
        </div>

        {/* ── Steps ── */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-[var(--cream-ink)]/10">
          {processSteps.map((step, i) => (
            <div
              key={step.index}
              className="group relative bg-[#faf7f2] p-8 lg:p-10 flex flex-col gap-5 lofi-reveal cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 bg-[var(--cream-accent)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--cream-accent)] w-0 group-hover:w-full transition-all duration-500 ease-out" />

              <span className="relative [font-family:var(--font-instrument-serif)] italic text-4xl leading-none text-[var(--cream-accent)]">
                {step.index}
              </span>
              <h3 className="relative text-xl font-semibold tracking-tight text-[var(--cream-ink)] group-hover:text-[var(--cream-accent)] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="relative text-sm text-[var(--cream-ink)]/50 leading-relaxed">
                {step.body}
              </p>

              {/* Detail bullets */}
              <ul className="relative mt-auto space-y-2 pt-4 border-t border-[var(--cream-ink)]/10">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2 text-xs text-[var(--cream-ink)]/40"
                  >
                    <span className="size-1 rounded-full bg-[var(--cream-accent)]/50 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Commitments ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--cream-ink)]/10">
          {processCommitments.map((item, i) => (
            <div
              key={item.label}
              className="group relative bg-[#faf7f2] p-8 lg:p-10 flex flex-col gap-4 lofi-reveal cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 bg-[var(--cream-accent)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[var(--cream-accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <span className="relative [font-family:var(--font-instrument-serif)] italic text-5xl leading-none text-[var(--cream-accent)] lg:text-6xl">
                {item.stat}
              </span>
              <h3 className="relative text-lg font-semibold tracking-tight text-[var(--cream-ink)] group-hover:text-[var(--cream-accent)] transition-colors duration-300">
                {item.label}
              </h3>
              <p className="relative text-sm text-[var(--cream-ink)]/50 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className="lofi-reveal" style={{ transitionDelay: "200ms" }}>
          <div className="bg-[var(--cream-ink)] rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="[font-family:var(--font-instrument-serif)] italic text-2xl text-[#efe6d6]/90 leading-snug lg:text-3xl">
                &ldquo;{processCta.quote}&rdquo;
              </p>
              <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.1em] uppercase text-[#efe6d6]/40">
                {processCta.attribution}
              </p>
            </div>
            <CtaButton
              variant="primary"
              href={processCta.buttonHref}
              className="border-[var(--cream-accent)] group bg-[var(--cream-accent)] text-white hover:bg-[var(--cream-accent)]/80 hover:border-[var(--cream-accent)]/80 shrink-0"
            >
              {processCta.buttonLabel}
              <ArrowRightIcon className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5" />
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
