import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PillButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function PillButton({ children, primary, href, onClick }: PillButtonProps) {
  const baseClass = cn(
    "inline-flex items-center gap-2 group",
    "[font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.1em] uppercase",
    "h-auto px-5 py-[11px] rounded-full border",
    "transition-all duration-200 ease-out no-underline"
  );
  const variantClass = primary
    ? "bg-[var(--cream-ink)] text-[var(--cream-bg)] border-[var(--cream-ink)] hover:bg-[var(--cream-accent)] hover:border-[var(--cream-accent)] hover:text-white"
    : "bg-transparent text-[var(--cream-ink)] border-[var(--cream-ink)]/30 hover:border-[var(--cream-ink)] hover:bg-[var(--cream-ink)]/[0.06]";

  const inner = (
    <>
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
    </>
  );

  if (href) {
    return (
      <Button asChild variant="ghost" className={cn(baseClass, variantClass)}>
        <a href={href}>{inner}</a>
      </Button>
    );
  }
  return (
    <Button variant="ghost" className={cn(baseClass, variantClass)} onClick={onClick}>
      {inner}
    </Button>
  );
}
