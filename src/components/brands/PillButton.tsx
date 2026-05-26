export interface PillButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function PillButton({ children, primary, href, onClick }: PillButtonProps) {
  const base = `
    inline-flex items-center gap-2 group
    [font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.1em] uppercase
    px-5 py-[11px] rounded-full border
    transition-all duration-200 ease-out cursor-pointer no-underline
  `;
  const style = primary
    ? "bg-[var(--cream-ink)] text-[var(--cream-bg)] border-[var(--cream-ink)] hover:bg-[var(--cream-accent)] hover:border-[var(--cream-accent)] hover:text-white"
    : "bg-transparent text-[var(--cream-ink)] border-[var(--cream-ink)]/30 hover:border-[var(--cream-ink)] hover:bg-[var(--cream-ink)]/[0.06]";

  const inner = (
    <>
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
    </>
  );

  return href
    ? <a href={href} className={`${base} ${style}`}>{inner}</a>
    : <button onClick={onClick} className={`${base} ${style}`}>{inner}</button>;
}
