"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 48px",
        borderBottom: "1px solid var(--lofi-line)",
        fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
        fontSize: "12px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--lofi-ink-soft)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: "rgba(28, 26, 35, 0.85)",
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontWeight: 500,
          color: "var(--lofi-ink)",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--lofi-accent)",
            boxShadow: "0 0 0 4px rgba(224,138,90,0.15)",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        LOFISTACK
      </div>

      {/* Nav links */}
      <ul
        style={{
          display: "flex",
          gap: "28px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {["Home", "About Us", "Services", "Pricing", "Showcase", "Blogs"].map((item) => (
          <li key={item}>
            <a
              href="#"
              style={{
                color: "var(--lofi-ink-soft)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--lofi-ink)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--lofi-ink-soft)")
              }
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: coordinates */}
      <a
        href="https://www.google.com/maps?q=1.3521,103.8198"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "2px",
          color: "var(--lofi-muted)",
          textDecoration: "none",
          lineHeight: 1.4,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lofi-accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--lofi-muted)")}
      >
        <span>1.3521° N</span>
        <span>103.8198° E</span>
      </a>
    </nav>
  );
}
