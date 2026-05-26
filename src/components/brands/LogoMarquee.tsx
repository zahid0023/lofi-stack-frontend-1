export interface LogoItem {
  name: string;
  initials: string;
}

function LogoItem({ name, initials }: LogoItem) {
  return (
    <span className="inline-flex items-center gap-3 px-7 cursor-default select-none group">
      <span className="
        inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0
        border border-[var(--cream-ink)]/15 bg-[var(--cream-bg-deep)]
        group-hover:border-[var(--cream-accent)]/50 transition-colors duration-300
      ">
        <span className="[font-family:var(--font-jetbrains-mono)] text-[8px] tracking-[0.06em] uppercase text-[var(--cream-accent)]">
          {initials}
        </span>
      </span>
      <span className="
        [font-family:var(--font-space-grotesk)] font-medium text-[12px]
        tracking-[-0.01em] whitespace-nowrap
        text-[var(--cream-ink-soft)] group-hover:text-[var(--cream-ink)] transition-colors duration-300
      ">
        {name}
      </span>
      <span className="w-px h-3.5 bg-[var(--cream-ink)]/12 mx-1 shrink-0" />
    </span>
  );
}

export interface LogoMarqueeProps {
  logos: LogoItem[];
  duration?: string;
}

export default function LogoMarquee({ logos, duration = "32s" }: LogoMarqueeProps) {
  return (
    <div
      className="
        md:col-span-2 lg:col-span-4
        rounded-2xl border border-[var(--cream-ink)]/10
        bg-[var(--cream-bg-deep)] overflow-hidden relative py-[18px]
      "
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max"
        style={{ animation: `lofi-ticker ${duration} linear infinite` }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <LogoItem key={i} {...logo} />
        ))}
      </div>
    </div>
  );
}
