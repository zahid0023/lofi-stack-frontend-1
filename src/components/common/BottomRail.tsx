"use client";

const TICKER_ITEMS = [
  { label: "App Development" },
  { label: "CRM" },
  { label: "Web Design" },
  { label: "Integration & Automation" },
  { label: "Branding" },
  { label: "VA Support" },
  { label: "Digital Marketing" },
  { label: "Custom Solutions" },
];

export default function BottomRail() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-center px-12 py-5 border-t border-[var(--lofi-line)] font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.1em] uppercase text-[var(--lofi-muted)] relative z-[5]">
      {/* Cassette icon */}
      <Cassette />

      {/* Scrolling ticker */}
      <div
        className="overflow-hidden whitespace-nowrap"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="inline-flex gap-12 animate-[lofi-ticker_38s_linear_infinite]">
          {items.map((item, i) => (
            <span key={`${item.label}-${i}`} className="inline-flex items-center gap-3">
              <em className="not-italic text-[var(--lofi-ink)] font-medium">{item.label}</em>
              <span className="w-[6px] h-[6px] bg-[var(--lofi-accent)] rounded-full inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* Placeholder to preserve grid columns */}
      <div />
    </div>
  );
}

function Cassette() {
  return (
    <div className="w-16 h-[38px] border border-[var(--lofi-ink)] rounded-[6px] relative bg-[var(--lofi-bg-deep)] shrink-0">
      {/* Left reel */}
      <span className="absolute top-1/2 left-3 w-[10px] h-[10px] rounded-full bg-[var(--lofi-bg)] border border-[var(--lofi-ink)] -translate-y-1/2 animate-[lofi-spin_4s_linear_infinite] block" />
      {/* Right reel */}
      <span className="absolute top-1/2 right-3 w-[10px] h-[10px] rounded-full bg-[var(--lofi-bg)] border border-[var(--lofi-ink)] -translate-y-1/2 animate-[lofi-spin_4s_linear_infinite] block" />
    </div>
  );
}
