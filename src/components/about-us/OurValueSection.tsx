"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import ValueCard from "./ValueCard";
import { Target, Sparkles, Eye, MessageCircle, Layers, type LucideIcon } from "lucide-react";
import { values, ourValuesSection } from "@/data/about";

const ICON_MAP: Record<string, LucideIcon> = {
  Target, Sparkles, Eye, MessageCircle, Layers,
};

export default function OurValueSection() {
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
              {ourValuesSection.overline}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--cream-ink)] lg:text-5xl">
              {ourValuesSection.heading}
            </h2>
          </div>
          <div className="col-span-1 hidden lg:block" />
          <div className="col-span-3 flex items-end lofi-reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed">
              {ourValuesSection.body}
            </p>
          </div>
        </div>

        {/* Values — dark inverted cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="lofi-reveal h-full"
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <ValueCard
                index={i + 1}
                icon={value.iconName ? ICON_MAP[value.iconName] : undefined}
                title={value.title}
                body={value.body}
                dark={i === values.length - 1}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
