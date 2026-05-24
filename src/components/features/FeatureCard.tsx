interface FeatureCardProps {
  index: string;
  tag: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export default function FeatureCard({
  index,
  tag,
  title,
  description,
  stat,
  statLabel,
}: FeatureCardProps) {
  return (
    <article
      className="lofi-reveal"
      style={{
        border: "1px solid var(--cream-line)",
        borderRadius: "18px",
        padding: "28px 24px 24px",
        background: "var(--cream-bg-deep)",
        display: "flex",
        flexDirection: "column",
        minHeight: "320px",
        transition: "border-color 240ms ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--cream-ink-soft)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--cream-line)")
      }
    >
      {/* Top row: index + tag */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "10px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--cream-muted)",
          marginBottom: "36px",
          gap: "8px",
        }}
      >
        <span style={{ color: "var(--cream-ink)", fontWeight: 500 }}>{index}</span>
        <span
          style={{
            textAlign: "right",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "60%",
          }}
        >
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 600,
          fontSize: "clamp(20px, 1.7vw, 24px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.12,
          margin: "0 0 12px",
          color: "var(--cream-ink)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(13px, 1vw, 14px)",
          lineHeight: 1.55,
          color: "var(--cream-ink-soft)",
          margin: "0 0 24px",
          flex: 1,
        }}
      >
        {description}
      </p>

      {/* Stat */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          borderTop: "1px solid var(--cream-line)",
          paddingTop: "18px",
          gap: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 600,
            fontSize: "clamp(16px, 1.4vw, 20px)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--cream-accent)",
          }}
        >
          {stat}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--cream-muted)",
          }}
        >
          {statLabel}
        </span>
      </div>
    </article>
  );
}
