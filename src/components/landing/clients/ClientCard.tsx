import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface ClientCardProps {
  initials: string;
  name: string;
  industry: string;
  description: string;
}

export default function ClientCard({ initials, name, industry, description }: ClientCardProps) {
  return (
    <article className="
      group flex flex-col overflow-hidden rounded-2xl
      border border-[var(--cream-ink)]/12
      transition-all duration-300
      hover:border-[var(--cream-accent)]/40
      hover:shadow-[0_4px_24px_rgba(194,84,42,0.08)]
      cursor-default
    ">
      {/* Header */}
      <div className="
        relative flex items-center justify-between px-5 py-4
        bg-[var(--cream-bg-deep)] border-b border-[var(--cream-ink)]/10
        overflow-hidden
      ">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, var(--cream-ink) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />
        {/* Logo circle */}
        <Avatar className="size-9 bg-[var(--cream-bg)] after:border-[var(--cream-ink)]/15 group-hover:after:border-[var(--cream-accent)]/50 transition-colors duration-300">
          <AvatarFallback className="[font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.08em] uppercase text-[var(--cream-accent)] bg-transparent">
            {initials}
          </AvatarFallback>
        </Avatar>
        {/* Industry tag */}
        <Badge variant="ghost" className="relative [font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.16em] uppercase text-[var(--cream-muted)] h-auto py-0 px-0 hover:bg-transparent group-hover:text-[var(--cream-accent)] transition-colors duration-300">
          {industry}
        </Badge>
      </div>

      {/* Content */}
      <div className="
        flex flex-col gap-2 px-5 py-4 flex-1
        bg-[var(--cream-bg)]
        group-hover:bg-[var(--cream-ink)]/[0.02] transition-colors duration-300
      ">
        <h3 className="
          m-0 [font-family:var(--font-space-grotesk)] font-semibold
          text-[14px] leading-snug tracking-[-0.02em]
          text-[var(--cream-ink-soft)] group-hover:text-[var(--cream-ink)] transition-colors duration-300
        ">
          {name}
        </h3>
        <p className="
          m-0 [font-family:var(--font-space-grotesk)]
          text-[12px] leading-[1.55] text-[var(--cream-muted)]
        ">
          {description}
        </p>
      </div>
    </article>
  );
}
