import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CtaButtonProps {
  /**
   * "primary" — filled pill (lofi-ink bg → accent on hover)
   * "ghost"   — outlined pill (transparent bg → lofi-ink fill on hover)
   */
  variant: "primary" | "ghost";
  children: React.ReactNode;
  /** Renders an <a> tag when supplied; otherwise a <button> */
  href?: string;
  onClick?: () => void;
  className?: string;
}

const lofiBase =
  "font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.1em] uppercase " +
  "h-auto py-[11px] px-[18px] rounded-full border border-[var(--lofi-ink)] " +
  "transition-all duration-[180ms] ease-linear no-underline gap-2";

const lofiVariants: Record<CtaButtonProps["variant"], string> = {
  primary:
    "bg-[var(--lofi-ink)] text-[var(--lofi-bg)] " +
    "hover:bg-[var(--lofi-accent)] hover:border-[var(--lofi-accent)] hover:text-white",
  ghost:
    "bg-transparent text-[var(--lofi-ink)] " +
    "hover:bg-[var(--lofi-ink)] hover:text-[var(--lofi-bg)]",
};

export default function CtaButton({
  variant,
  children,
  href,
  onClick,
  className,
}: CtaButtonProps) {
  const cls = cn(lofiBase, lofiVariants[variant], className);

  if (href) {
    return (
      <Button asChild variant="ghost" className={cls}>
        <a href={href}>{children}</a>
      </Button>
    );
  }

  return (
    <Button variant="ghost" className={cls} onClick={onClick}>
      {children}
    </Button>
  );
}
