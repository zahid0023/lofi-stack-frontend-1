"use client";

interface BottomRailProps {
  onReplay?: () => void;
}

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

export default function BottomRail({ onReplay }: BottomRailProps) {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: "32px",
        alignItems: "center",
        padding: "20px 48px",
        borderTop: "1px solid var(--lofi-line)",
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--lofi-muted)",
        position: "relative",
        zIndex: 5,
      }}
    >
      {/* Cassette icon */}
      <Cassette />

      {/* Scrolling ticker */}
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "48px",
            animation: "lofi-ticker 38s linear infinite",
          }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}
            >
              <em style={{ fontStyle: "normal", color: "var(--lofi-ink)", fontWeight: 500 }}>
                {item.label}
              </em>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  background: "var(--lofi-accent)",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Replay button */}
      {onReplay && (
        <button
          onClick={onReplay}
          style={{
            background: "transparent",
            border: "1px solid var(--lofi-line)",
            color: "var(--lofi-ink-soft)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "8px 12px",
            borderRadius: "999px",
            cursor: "pointer",
            transition: "all 180ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--lofi-ink)";
            e.currentTarget.style.color = "var(--lofi-ink)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--lofi-line)";
            e.currentTarget.style.color = "var(--lofi-ink-soft)";
          }}
        >
          ↺ replay sequence
        </button>
      )}
    </div>
  );
}

function Cassette() {
  return (
    <div
      style={{
        width: "64px",
        height: "38px",
        border: "1px solid var(--lofi-ink)",
        borderRadius: "6px",
        position: "relative",
        background: "var(--lofi-bg-deep)",
        flexShrink: 0,
      }}
    >
      {/* Left reel */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "12px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "var(--lofi-bg)",
          border: "1px solid var(--lofi-ink)",
          transform: "translateY(-50%)",
          animation: "lofi-spin 4s linear infinite",
          display: "block",
        }}
      />
      {/* Right reel */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          right: "12px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "var(--lofi-bg)",
          border: "1px solid var(--lofi-ink)",
          transform: "translateY(-50%)",
          animation: "lofi-spin 4s linear infinite",
          display: "block",
        }}
      />
    </div>
  );
}
