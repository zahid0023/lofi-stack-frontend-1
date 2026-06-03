import React from "react";

// ── Types ──────────────────────────────────────────────────────────

export interface BookConsultationProps {
  /**
   * "section"  — full-width CTA strip (dark or cream)
   * "card"     — contained card, fits inside a grid
   * "button"   — just the pill button, inline-usable anywhere
   */
  variant?: "section" | "card" | "button";
  /**
   * "dark"  — uses the lofi dusk palette (default)
   * "cream" — uses the cream palette (features section style)
   */
  theme?: "dark" | "cream";
  /** Override heading text */
  heading?: string;
  /** Override sub-copy */
  description?: string;
  /** Where the button navigates */
  href?: string;
  /** Button label */
  label?: string;
}

// ── Sub-components ─────────────────────────────────────────────────

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-[220ms] group-hover:translate-x-[3px]"
    >
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PillButtonProps {
  href: string;
  label: string;
  theme: "dark" | "cream";
}

function PillButton({ href, label, theme }: PillButtonProps) {
  const styles =
    theme === "cream"
      ? "bg-[var(--cream-ink)] text-[var(--cream-bg)] border-[var(--cream-ink)] hover:bg-[var(--cream-accent)] hover:border-[var(--cream-accent)] hover:text-white"
      : "bg-[var(--lofi-ink)] text-[var(--lofi-bg)] border-[var(--lofi-ink)] hover:bg-[var(--lofi-accent)] hover:border-[var(--lofi-accent)] hover:text-white";

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.1em] uppercase py-[11px] px-[18px] rounded-full border transition-all duration-[180ms] ease-linear no-underline ${styles}`}
    >
      {label}
      <Arrow />
    </a>
  );
}

// ── Main component ─────────────────────────────────────────────────

export default function BookConsultation({
  variant = "section",
  theme = "dark",
  heading = "Let's build something quiet.",
  description = "One session. No decks. Just an honest conversation about what you're making.",
  href = "#",
  label = "Book a Consultation",
}: BookConsultationProps) {
  const isDark = theme === "dark";

  // ── Button-only variant ──────────────────────────────────────────
  if (variant === "button") {
    return <PillButton href={href} label={label} theme={theme} />;
  }

  // ── Card variant ─────────────────────────────────────────────────
  if (variant === "card") {
    const cardBg = isDark ? "bg-[var(--lofi-bg-deep)]" : "bg-[var(--cream-bg-deep)]";
    const border = isDark ? "border-[var(--lofi-line)]" : "border-[var(--cream-line)]";
    const inkColor = isDark ? "text-[var(--lofi-ink)]" : "text-[var(--cream-ink)]";
    const mutedColor = isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-muted)]";
    const accentColor = isDark ? "text-[var(--lofi-accent)]" : "text-[var(--cream-accent)]";

    return (
      <div
        className={`relative flex flex-col gap-5 rounded-[4px] border p-8 overflow-hidden ${cardBg} ${border}`}
      >
        {/* corner label */}
        <span
          className={`font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.12em] uppercase ${accentColor} opacity-70`}
        >
          [ consultation ]
        </span>

        <div className="flex flex-col gap-2">
          <h3
            className={`font-[family-name:var(--font-instrument-serif)] italic text-[clamp(22px,2.4vw,32px)] leading-[1.15] tracking-[-0.01em] ${inkColor}`}
          >
            {heading}
          </h3>
          <p
            className={`font-[family-name:var(--font-jetbrains-mono)] text-[11px] leading-[1.7] tracking-[0.01em] max-w-[36ch] ${mutedColor}`}
          >
            {description}
          </p>
        </div>

        <PillButton href={href} label={label} theme={theme} />

        {/* subtle decorative rule */}
        <div
          className={`absolute bottom-0 left-8 right-8 h-px ${isDark ? "bg-[var(--lofi-line)]" : "bg-[var(--cream-line)]"}`}
          aria-hidden
        />
      </div>
    );
  }

  // ── Section variant (default) ────────────────────────────────────
  const sectionBg = isDark ? "bg-[var(--lofi-bg-deep)]" : "bg-[var(--cream-bg-deep)]";
  const borderTop = isDark ? "border-t border-[var(--lofi-line)]" : "border-t border-[var(--cream-line)]";
  const inkColor = isDark ? "text-[var(--lofi-ink)]" : "text-[var(--cream-ink)]";
  const mutedColor = isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-muted)]";
  const accentColor = isDark ? "text-[var(--lofi-accent)]" : "text-[var(--cream-accent)]";

  return (
    <section className={`relative w-full ${sectionBg} ${borderTop}`}>
      {/* 12-col grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, var(--lofi-line) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-[1400px] px-[calc(100%/14)] py-20 flex flex-col md:flex-row md:items-end justify-between gap-10">

        {/* Left — copy */}
        <div className="flex flex-col gap-4 max-w-[48ch]">
          <span
            className={`font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.14em] uppercase ${accentColor} opacity-80`}
          >
            — consultation
          </span>
          <h2
            className={`font-[family-name:var(--font-instrument-serif)] italic text-[clamp(30px,4vw,56px)] leading-[1.12] tracking-[-0.015em] ${inkColor}`}
          >
            {heading}
          </h2>
          <p
            className={`font-[family-name:var(--font-jetbrains-mono)] text-[11px] leading-[1.75] tracking-[0.01em] ${mutedColor}`}
          >
            {description}
          </p>
        </div>

        {/* Right — CTA */}
        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
          <PillButton href={href} label={label} theme={theme} />
          <span
            className={`font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.08em] uppercase ${mutedColor} opacity-60`}
          >
            no commitment required
          </span>
        </div>

      </div>
    </section>
  );
}
