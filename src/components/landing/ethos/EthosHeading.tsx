interface EthosHeadingProps {
  since: string;
  tagline: string;
}

export default function EthosHeading({ since, tagline }: EthosHeadingProps) {
  return (
    <div className="sticky top-[148px] self-start shrink-0 w-[30%]">
      <div className="flex flex-col mb-7">
        <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal text-[clamp(28px,3.5vw,52px)] text-[var(--lofi-accent)] mb-1">
          Since
        </span>
        <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(96px,14vw,220px)] leading-[0.84] tracking-[-0.05em] text-[var(--lofi-ink)]">
          {since}
        </span>
      </div>
      <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.16em] uppercase text-[var(--lofi-muted)] pt-[14px] border-t border-[var(--lofi-line)] mt-7 max-w-[22em]">
        {tagline}
      </p>
    </div>
  );
}
