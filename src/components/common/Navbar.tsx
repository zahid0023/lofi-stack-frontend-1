export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-6 border-b border-[var(--lofi-line)] font-[family-name:var(--font-jetbrains-mono)] text-[12px] tracking-[0.06em] uppercase text-[var(--lofi-ink-soft)] sticky top-0 z-50 backdrop-blur-[12px] bg-[rgba(28,26,35,0.85)]">

      {/* Logo mark */}
      <div className="flex items-center gap-[10px] font-medium text-[var(--lofi-ink)]">
        <span className="w-2 h-2 rounded-full bg-[var(--lofi-accent)] shadow-[0_0_0_4px_rgba(224,138,90,0.15)] inline-block shrink-0" />
        LOFISTACK
      </div>

      {/* Nav links */}
      <ul className="flex gap-7 list-none m-0 p-0">
        {["Home", "About Us", "Services", "Pricing", "Showcase", "Blogs"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[var(--lofi-ink-soft)] no-underline hover:text-[var(--lofi-ink)] transition-colors duration-150"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Coordinates */}
      <a
        href="https://www.google.com/maps?q=1.3521,103.8198"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-end gap-[2px] text-[var(--lofi-muted)] no-underline leading-[1.4] hover:text-[var(--lofi-accent)] transition-colors duration-150"
      >
        <span>1.3521° N</span>
        <span>103.8198° E</span>
      </a>
    </nav>
  );
}
