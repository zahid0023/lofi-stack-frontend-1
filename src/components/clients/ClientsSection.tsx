"use client";

import { useEffect, useRef } from "react";
import { logos as LOGOS, clients as CLIENTS, clientStats as STATS, clientsHeadline } from "@/data/landing";
import SectionTag from "@/components/ui/SectionTag";
import SectionHeading from "@/components/ui/SectionHeading";
import ClientCard from "./ClientCard";
import LogoMarquee from "./LogoMarquee";
import PillButton from "./PillButton";

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".lofi-reveal");
    if (!reveals) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting)),
      { threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main ref={sectionRef} className="bg-[var(--cream-bg)] pb-[120px]">
      <SectionTag label="[ 04 — Clients ]" variant="cream" />

      <section
        className="flex flex-col pt-16"
        style={{ paddingLeft: "calc(100% / 8)", paddingRight: "calc(100% / 8)" }}
      >
        {/* Section 1 — left: heading + CTAs | right: stats */}
        <section className="flex justify-between items-start gap-20 py-8 border-b border-[var(--cream-ink)]/10">
          {/* Left — heading + CTAs */}
          <section className="flex flex-col gap-6">
            <SectionHeading
              overline="Clients We Collaborate With"
              title={<>We build the stack <em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">behind</em> ambitious teams.</>}
              body={clientsHeadline.body}
            />
            <div className="flex flex-wrap gap-3">
              <PillButton primary href={clientsHeadline.cta.primary.href}>{clientsHeadline.cta.primary.label}</PillButton>
              <PillButton href={clientsHeadline.cta.secondary.href}>{clientsHeadline.cta.secondary.label}</PillButton>
            </div>
          </section>

          {/* Right — stats */}
          <section className="flex flex-col gap-0 shrink-0 self-stretch justify-between">
            {STATS.map((s, i) => (
              <div key={s.label} className={["flex items-baseline gap-4", i < STATS.length - 1 ? "pb-5 border-b border-[var(--cream-ink)]/10 mb-5" : ""].join(" ")}>
                <span className="[font-family:var(--font-space-grotesk)] font-bold text-[clamp(36px,3.5vw,56px)] leading-none tracking-[-0.05em] text-[var(--cream-ink)]">
                  {s.value}
                </span>
                <span className="[font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.16em] uppercase text-[var(--cream-muted)]">
                  {s.label}
                </span>
              </div>
            ))}
          </section>
        </section>

        {/* Section 2 — marquee + cards + quote */}
        <article className="lofi-reveal py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <LogoMarquee logos={LOGOS} duration="32s" />

            {CLIENTS.slice(0, 3).map((c) => (
              <ClientCard key={c.name} {...c} />
            ))}

            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between rounded-2xl border border-[var(--cream-ink)]/10 bg-[var(--cream-bg-deep)] p-7">
              <span className="[font-family:var(--font-instrument-serif)] italic text-[72px] leading-none text-[var(--cream-accent)] opacity-25 select-none">
                "
              </span>
              <blockquote className="m-0 flex-1 [font-family:var(--font-instrument-serif)] italic text-[clamp(15px,1.3vw,18px)] leading-[1.6] text-[var(--cream-ink-soft)]">
                {clientsHeadline.quote.text}
              </blockquote>
              <footer className="mt-6">
                <div className="h-px bg-[var(--cream-ink)]/10 mb-4" />
                <p className="m-0 [font-family:var(--font-space-grotesk)] font-medium text-[13px] tracking-[-0.01em] text-[var(--cream-ink-soft)]">
                  {clientsHeadline.quote.author}
                </p>
                <p className="m-0 [font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.14em] uppercase text-[var(--cream-muted)] mt-1">
                  {clientsHeadline.quote.role}
                </p>
              </footer>
            </div>

            {CLIENTS.slice(3, 6).map((c) => (
              <ClientCard key={c.name} {...c} />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
