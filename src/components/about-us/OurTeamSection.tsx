"use client";

import { useRevealObserver } from "@/hooks/useRevealObserver";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { team, teamSection } from "@/data/about";
import TeamMemberCard from "./TeamMemberCard";

export default function OurTeamSection() {
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
              {teamSection.overline}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--cream-ink)] lg:text-5xl">
              {teamSection.heading}
            </h2>
          </div>
          <div className="col-span-1 hidden lg:block" />
          <div
            className="col-span-3 flex items-end lofi-reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed">
              {teamSection.body}
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="lofi-reveal" style={{ transitionDelay: "200ms" }}>
          <Carousel opts={{ align: "start", dragFree: true }}>
            <CarouselContent className="-ml-3">
              {team.map((member) => (
                <CarouselItem
                  key={member.index}
                  className="pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4"
                >
                  <TeamMemberCard
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <div className="flex items-center justify-end gap-2 mt-6">
              <CarouselPrevious className="relative top-auto left-auto right-auto translate-x-0 translate-y-0 size-11 bg-[var(--cream-ink)] text-[#efe6d6] border-0 hover:bg-[var(--cream-accent)] hover:text-white transition-all duration-200 disabled:opacity-25" />
              <CarouselNext className="relative top-auto left-auto right-auto translate-x-0 translate-y-0 size-11 bg-[var(--cream-ink)] text-[#efe6d6] border-0 hover:bg-[var(--cream-accent)] hover:text-white transition-all duration-200 disabled:opacity-25" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
