interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <figure className="m-0 w-full">

      {/* Top rule */}
      <div className="h-px bg-[var(--cream-line)] mb-12" />

      {/* Quote */}
      <blockquote className="m-0 mb-10">
        <p className="
          m-0
          [font-family:var(--font-instrument-serif)] italic
          text-[clamp(26px,3.2vw,52px)] leading-[1.2] tracking-[-0.01em]
          text-[var(--cream-ink)]
        ">
          {quote}
        </p>
      </blockquote>

      {/* Bottom rule + attribution */}
      <div className="flex items-center justify-between gap-8">
        <div className="flex-1 h-px bg-[var(--cream-line)]" />
        <figcaption className="flex items-baseline gap-3 shrink-0">
          <span className="
            [font-family:var(--font-space-grotesk)] font-semibold
            text-[clamp(14px,1.2vw,16px)] text-[var(--cream-ink)]
          ">
            {author}
          </span>
          <span className="text-[var(--cream-line)] select-none">·</span>
          <span className="
            [font-family:var(--font-jetbrains-mono)] text-[10px]
            tracking-[0.14em] uppercase text-[var(--cream-muted)]
          ">
            {role}
          </span>
        </figcaption>
      </div>

    </figure>
  );
}
