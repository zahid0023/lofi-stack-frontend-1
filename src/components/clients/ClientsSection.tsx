"use client";

import { useEffect, useRef } from "react";
import { logos as LOGOS, clients as CLIENTS, clientStats as STATS, clientsHeadline } from "@/data/landing";
import SectionTag from "@/components/ui/SectionTag";
import SectionHeading from "@/components/ui/SectionHeading";
import ClientCard from "./ClientCard";
import LogoMarquee from "./LogoMarquee";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    <section ref={sectionRef} className="bg-[var(--cream-bg)] pb-[120px] px-[calc(100%/12)]">
      <SectionTag label="[ 04 — Clients ]" variant="cream" />

      <Card className="rounded-none ring-0 gap-0 py-0 bg-transparent overflow-visible">

        <CardHeader className="sticky top-[148px] z-10 flex justify-between items-start gap-20 pt-16 pb-8 px-0 rounded-none border-b border-[var(--cream-ink)]/10 bg-[var(--cream-bg)]">
            <SectionHeading
              className="self-start"
              overline="Clients We Collaborate With"
              title={<>We build the stack <em className="[font-family:var(--font-instrument-serif)] italic font-normal text-[var(--cream-accent)]">behind</em> ambitious teams.</>}
              body={clientsHeadline.body}
              cta={{ primary: { label: clientsHeadline.cta.primary.label, href: clientsHeadline.cta.primary.href }, secondary: { label: clientsHeadline.cta.secondary.label, href: clientsHeadline.cta.secondary.href } }}
            />

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
        </CardHeader>

        <CardContent className="px-0 overflow-visible">

          {/* Marquee */}
          <section className="lofi-reveal py-8">
            <LogoMarquee logos={LOGOS} duration="32s" />
          </section>

          {/* Cards grid */}
          <section className="lofi-reveal py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {CLIENTS.map((c) => (
                <ClientCard key={c.name} {...c} />
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section className="lofi-reveal py-8 pb-[120px]">
            <div className="flex flex-col justify-between rounded-2xl border border-[var(--cream-ink)]/10 bg-[var(--cream-bg-deep)] p-7 max-w-2xl">
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
          </section>

        </CardContent>
      </Card>
    </section>
  );
}
