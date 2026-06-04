"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { servicesHero, services } from "@/data/services";
import {
  Layers, Paintbrush, GitBranch, Users, Zap, type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Layers, Paintbrush, GitBranch, Users, Zap,
};

export default function ServicesSection() {
  const ref = useRevealObserver(0.06);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#faf7f2] px-[calc(100%/12)] pb-24"
    >
      {/* ── Hero ── */}
      <div className="py-32 container space-y-6 lofi-reveal">
        <p className="[font-family:var(--font-instrument-serif)] italic text-5xl text-[var(--cream-accent)] lg:text-6xl">
          {servicesHero.overline}
        </p>
        <h1 className="text-5xl font-semibold tracking-tight lg:text-7xl">
          <span className="text-[var(--cream-ink)]">{servicesHero.headingLight}</span>
          <span className="text-[var(--cream-accent)]">{servicesHero.headingAccent}</span>
        </h1>
        <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed max-w-xl" style={{ transitionDelay: "80ms" }}>
          {servicesHero.body}
        </p>
      </div>

      {/* ── Services list ── */}
      <div className="container border-t border-[var(--cream-ink)]/10">
        {services.map((service, i) => {
          const Icon = ICON_MAP[service.iconName];
          return (
            <div
              key={service.index}
              className="group relative border-b border-[var(--cream-ink)]/10 lofi-reveal cursor-default overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 bg-[var(--cream-accent)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 w-[3px] h-full bg-[var(--cream-accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="relative py-10 lg:py-12 lg:pl-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Index + icon */}
                <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                  <span className="[font-family:var(--font-instrument-serif)] italic text-4xl leading-none text-[var(--cream-accent)]">
                    {service.index}
                  </span>
                  {Icon && (
                    <div className="size-10 rounded-lg bg-[var(--cream-ink)] flex items-center justify-center transition-transform duration-300 group-hover:skew-x-6 group-hover:-skew-y-6">
                      <Icon className="size-4 text-white" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h2 className="[font-family:var(--font-instrument-serif)] italic text-2xl text-[var(--cream-ink)] lg:text-3xl group-hover:text-[var(--cream-accent)] transition-colors duration-300 leading-snug">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-[var(--cream-ink)]/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="lg:col-span-4">
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[var(--cream-ink)]/40">
                        <span className="size-1 rounded-full bg-[var(--cream-accent)]/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
