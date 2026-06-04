import { type LucideIcon } from "lucide-react";

interface ValueCardProps {
  index: number;
  icon?: LucideIcon;
  title: string;
  body: string;
  dark?: boolean;
}

export default function ValueCard({ index, icon: Icon, title, body, dark = false }: ValueCardProps) {
  return (
    <div className={`group relative overflow-hidden p-8 lg:p-10 cursor-default flex flex-col gap-5 border rounded-2xl h-full ${
      dark
        ? "bg-[var(--cream-ink)] border-transparent"
        : "bg-white border-[var(--cream-ink)]/8"
    }`}>
      {/* Bottom accent bar — grows on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--cream-accent)] w-0 group-hover:w-full transition-all duration-500 ease-out" />

      {/* Hover bg wash */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        dark ? "bg-[var(--cream-accent)]/[0.06]" : "bg-[var(--cream-accent)]/[0.03]"
      }`} />

      {/* Row 1: number */}
      <span className="relative [font-family:var(--font-instrument-serif)] italic text-4xl leading-none text-[var(--cream-accent)]">
        {String(index).padStart(2, "0")}
      </span>

      {/* Row 2: icon (optional) */}
      {Icon && (
        <div className={`relative size-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:skew-x-6 group-hover:-skew-y-6 ${
          dark ? "bg-[var(--cream-accent)]" : "bg-[var(--cream-ink)]"
        }`}>
          <Icon className="size-5 text-white" strokeWidth={1.5} />
        </div>
      )}

      {/* Row 3: title */}
      <h3 className={`relative [font-family:var(--font-instrument-serif)] italic text-[1.5rem] lg:text-[1.75rem] leading-snug group-hover:text-[var(--cream-accent)] transition-colors duration-300 ${
        dark ? "text-[#efe6d6]" : "text-[var(--cream-ink)]"
      }`}>
        {title}
      </h3>

      {/* Row 4: description */}
      <p className={`relative text-sm leading-relaxed ${
        dark ? "text-[#efe6d6]/45" : "text-[var(--cream-ink)]/45"
      }`}>
        {body}
      </p>
    </div>
  );
}
