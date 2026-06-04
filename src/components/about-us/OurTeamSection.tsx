"use client";

import React from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { team, teamSection } from "@/data/about";
import TeamMemberCard from "./TeamMemberCard";

export default function OurTeamSection() {
  const ref = useRevealObserver(0.06);
  const [api, setApi] = React.useState<CarouselApi>();
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    return () => { api.off("select", update); };
  }, [api]);

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
          <div className="col-span-3 flex items-end lofi-reveal" style={{ transitionDelay: "100ms" }}>
            <p className="text-[var(--cream-ink)]/50 text-base leading-relaxed">
              {teamSection.body}
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="lofi-reveal" style={{ transitionDelay: "200ms" }}>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", dragFree: true }}
          >
            <CarouselContent className="-ml-3">
              {team.map((member) => (
                <CarouselItem key={member.index} className="pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                  <TeamMemberCard
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-end gap-2 lofi-reveal" style={{ transitionDelay: "280ms" }}>
          <button
            onClick={() => api?.scrollPrev()}
            disabled={!canPrev}
            className="size-11 bg-[var(--cream-ink)] flex items-center justify-center text-[#efe6d6] hover:bg-[var(--cream-accent)] transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            disabled={!canNext}
            className="size-11 bg-[var(--cream-ink)] flex items-center justify-center text-[#efe6d6] hover:bg-[var(--cream-accent)] transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
