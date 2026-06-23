"use client";

import { useRevealObserver } from "@/hooks/useRevealObserver";
import { intro } from "@/data/about";

export default function IntroSection() {
  const sectionRef = useRevealObserver(0.06);

  return (
    <section ref={sectionRef} className="relative">
      <div className="container space-y-10 lg:space-y-20">
        <div className="w-full grid-cols-6 gap-10 space-y-5 lg:grid lg:space-y-0">
          <h1 className="col-span-6 text-5xl font-semibold tracking-tight lg:text-7xl">
            <span className="text-[var(--cream-ink)]">{intro.headline.light}</span>
            <span className="text-[var(--cream-accent)]">
              {intro.headline.accent}
            </span>
          </h1>
          <div />
        </div>

        <div>
          <img
            src={intro.cover.src}
            alt={intro.cover.alt}
            className="mt-4 h-132 w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 space-y-12 lg:grid-cols-6 lg:space-y-0">
          <p className="hidden text-foreground lg:block">
            {intro.crewLabel}
          </p>

          <div className="order-2 col-span-2 lg:order-none lg:pr-24 lg:pl-10">
            <p className="text-foreground/40">
              {intro.crewQuote}
            </p>
            <div className="mt-5 flex items-center gap-5 lg:mt-12">
              <img
                src={intro.avatar.src}
                className="size-12"
                alt={intro.avatar.alt}
              />
              <div>
                <h3 className="text-lg font-medium tracking-tight">{intro.avatar.name}</h3>
                <p className="text-sm text-foreground/40">{intro.avatar.role}</p>
              </div>
            </div>
          </div>

          <div className="order-1 col-span-3 lg:order-none lg:mt-0 lg:pl-10">
            <h2 className="text-2xl font-medium tracking-tight lg:text-3xl">
              {intro.body}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
