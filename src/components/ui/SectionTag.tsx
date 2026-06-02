import { CSSProperties } from "react";

interface SectionTagProps {
  label: string;
  className?: string;
  style?: CSSProperties;
  variant?: "dark" | "cream";
  progress?: number;
}

export default function SectionTag({ label, className = "", style, variant = "dark", progress }: SectionTagProps) {
  const isDark = variant === "dark";

  return (
    <header
      className={[
        "sticky top-[80px] z-20 flex items-center py-4",
        isDark
          ? "bg-[var(--lofi-bg)]/90 text-[var(--lofi-accent)]"
          : "bg-[var(--cream-bg)] text-[var(--cream-accent)]",
        "backdrop-blur-[8px]",
        "font-[family-name:var(--font-jetbrains-mono)] text-[13px] tracking-[0.12em] uppercase",
        className,
      ].join(" ")}
      style={{ paddingLeft: "calc(100% / 12)", paddingRight: "calc(100% / 12)", ...style }}
    >
      <span className="shrink-0">{label}</span>
      {progress !== undefined && (
        <>
          <div className={["flex-1 mx-4 h-[2px] rounded-[2px] overflow-hidden", isDark ? "bg-[var(--lofi-muted)]/30" : "bg-[var(--cream-line)]"].join(" ")}>
            <div
              className={["h-full transition-[width] duration-[100ms] ease-linear", isDark ? "bg-[var(--lofi-accent)]" : "bg-[var(--cream-accent)]"].join(" ")}
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className={["tabular-nums min-w-[4ch] text-right", isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-ink-soft)]"].join(" ")}>
            {Math.round(progress * 100)}%
          </span>
        </>
      )}
    </header>
  );
}
