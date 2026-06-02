import { ReactNode } from "react";

interface SectionHeadingProps {
  overline: string;
  title: ReactNode;
  body: string;
  className?: string;
  overlineClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  variant?: "dark" | "cream";
}

export default function SectionHeading({
  overline,
  title,
  body,
  className = "",
  overlineClassName = "",
  titleClassName = "",
  bodyClassName = "",
  variant = "cream",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className={className}>
      <p className={["m-0 mb-2 [font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.12em] uppercase", isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-muted)]", overlineClassName].join(" ")}>
        {overline}
      </p>
      <h2 className={["m-0 mb-3 [font-family:var(--font-space-grotesk)] font-semibold text-[clamp(24px,3vw,44px)] leading-[1.06] tracking-[-0.03em]", isDark ? "text-[var(--lofi-ink)]" : "text-[var(--cream-ink)]", titleClassName].join(" ")}>
        {title}
      </h2>
      <p className={["m-0 [font-family:var(--font-space-grotesk)] text-[clamp(14px,1.2vw,17px)] leading-[1.6] max-w-[42ch]", isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-muted)]", bodyClassName].join(" ")}>
        {body}
      </p>
    </div>
  );
}
