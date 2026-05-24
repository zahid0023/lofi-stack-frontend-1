interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <blockquote
      className="lofi-reveal"
      style={{
        gridColumn: "1 / -1",
        border: "1px solid var(--cream-line)",
        borderRadius: "20px",
        padding: "64px 64px 56px",
        background:
          "linear-gradient(180deg, rgba(194,84,42,0.06) 0%, var(--cream-bg-deep) 100%)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        margin: 0,
      }}
    >
      {/* Decorative quotation mark */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "16px",
          left: "56px",
          fontFamily: "var(--font-instrument-serif), serif",
          fontSize: "140px",
          lineHeight: 1,
          color: "var(--cream-accent)",
          opacity: 0.35,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p
        style={{
          fontFamily: "var(--font-instrument-serif), serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(28px, 3.4vw, 52px)",
          lineHeight: 1.16,
          color: "var(--cream-ink)",
          margin: "64px 0 36px",
          maxWidth: "30ch",
          position: "relative",
          zIndex: 1,
        }}
      >
        {quote}
      </p>

      {/* Attribution */}
      <footer
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "baseline",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "14px",
          zIndex: 1,
        }}
      >
        <span style={{ color: "var(--cream-muted)" }}>—</span>
        <span style={{ fontWeight: 500, color: "var(--cream-ink)" }}>{author}</span>
        <span style={{ color: "var(--cream-muted)" }}>{role}</span>
      </footer>
    </blockquote>
  );
}
