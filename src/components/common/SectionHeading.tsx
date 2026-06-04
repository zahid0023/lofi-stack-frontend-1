import { ReactNode } from "react";
import CtaButton from "@/components/common/CtaButton";
import { cn } from "@/lib/utils";

interface CtaDef { label: string; href?: string }

interface SectionHeadingProps {
  overline: string;
  title: ReactNode;
  body: string;
  className?: string;
  overlineClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  variant?: "dark" | "cream";
  cta?: { primary: CtaDef; secondary: CtaDef };
}

export default function SectionHeading({
  overline,
  title,
  body,
  className,
  overlineClassName,
  titleClassName,
  bodyClassName,
  variant = "cream",
  cta,
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className={className}>
      <p className={cn(
        "m-0 mb-2 [font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.12em] uppercase",
        isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-muted)]",
        overlineClassName
      )}>
        {overline}
      </p>
      <h2 className={cn(
        "m-0 mb-3 [font-family:var(--font-space-grotesk)] font-semibold text-[clamp(24px,3vw,44px)] leading-[1.06] tracking-[-0.03em]",
        isDark ? "text-[var(--lofi-ink)]" : "text-[var(--cream-ink)]",
        titleClassName
      )}>
        {title}
      </h2>
      <p className={cn(
        "m-0 [font-family:var(--font-space-grotesk)] text-[clamp(14px,1.2vw,17px)] leading-[1.6] max-w-[42ch]",
        isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-muted)]",
        bodyClassName
      )}>
        {body}
      </p>
      {cta && (
        <div className="flex gap-2 mt-8">
          <CtaButton
            variant="primary"
            href={cta.primary.href}
            className={!isDark ? "border-[var(--cream-ink)] bg-[var(--cream-ink)] text-[var(--cream-bg)] hover:bg-[var(--cream-accent)] hover:border-[var(--cream-accent)] hover:text-white" : ""}
          >{cta.primary.label}</CtaButton>
          <CtaButton
            variant="ghost"
            href={cta.secondary.href}
            className={!isDark ? "border-[var(--cream-ink)] text-[var(--cream-ink)] hover:bg-[var(--cream-ink)] hover:text-[var(--cream-bg)]" : ""}
          >{cta.secondary.label}</CtaButton>
        </div>
      )}
    </div>
  );
}
