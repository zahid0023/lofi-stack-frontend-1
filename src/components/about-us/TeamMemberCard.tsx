interface TeamMemberCardProps {
  name: string;
  role: string;
  image?: string;
}

export default function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <div className="group cursor-default">
      {/* Portrait image */}
      <div className="relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full aspect-[3/4] bg-[var(--cream-ink)]/8" />
        )}
      </div>

      {/* Name + role */}
      <div className="pt-4 space-y-1">
        <h3 className="text-base font-semibold tracking-tight text-[var(--cream-ink)] group-hover:text-[var(--cream-accent)] transition-colors duration-300">
          {name}
        </h3>
        <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--cream-ink)]/55">
          {role}
        </p>
      </div>
    </div>
  );
}
