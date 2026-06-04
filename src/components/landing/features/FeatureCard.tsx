import { Card, CardHeader, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    <Card className="
      group relative h-full gap-0 py-0 ring-0
      rounded-[20px] border border-[var(--cream-line)]
      bg-[var(--cream-bg-deep)]
      transition-all duration-300 ease-out
      hover:shadow-[0_16px_56px_rgba(26,23,20,0.12)]
      hover:bg-[var(--cream-bg)]
    ">

      {/* Accent left stripe — grows in on hover */}
      <div className="
        absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full
        bg-[var(--cream-accent)]
        scale-y-0 group-hover:scale-y-100
        origin-bottom transition-transform duration-500 ease-out
      " />

      {/* Index + tag — CardAction gives the automatic [1fr auto] grid */}
      <CardHeader className="items-center px-8 pt-8 pb-0 rounded-none">
        <span className="
          [font-family:var(--font-space-grotesk)] font-bold leading-none tracking-[-0.04em]
          text-[clamp(52px,5.5vw,76px)]
          text-transparent [-webkit-text-stroke:1.5px_var(--cream-accent)]
        ">
          {index}
        </span>
        <CardAction className="self-center">
          <Badge variant="outline" className="[font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.14em] uppercase text-[var(--cream-muted)] border-[var(--cream-line)] rounded-full px-3 py-[5px] h-auto bg-transparent">
            {tag}
          </Badge>
        </CardAction>
      </CardHeader>

      {/* Title + divider + description */}
      <CardContent className="flex flex-col flex-1 px-8 pt-6 pb-0">
        <h3 className="
          m-0 mb-5 [font-family:var(--font-space-grotesk)] font-semibold
          text-[clamp(22px,2vw,30px)] tracking-[-0.03em] leading-[1.1]
          text-[var(--cream-ink)]
        ">
          {title}
        </h3>
        <Separator className="mb-5 bg-[var(--cream-line)]" />
        <p className="
          flex-1 m-0 [font-family:var(--font-space-grotesk)]
          text-[clamp(13px,1.05vw,15px)] leading-[1.8]
          text-[var(--cream-ink-soft)]
        ">
          {description}
        </p>
      </CardContent>

      {/* Stat + arrow */}
      <CardFooter className="px-8 pb-8 pt-5 mt-6 border-t border-[var(--cream-line)] bg-transparent rounded-none items-end justify-between">
        <div className="flex flex-col gap-[5px]">
          <span className="
            [font-family:var(--font-space-grotesk)] font-bold
            text-[clamp(17px,1.5vw,21px)] tracking-[-0.025em] leading-none
            text-[var(--cream-ink)]
          ">
            {stat}
          </span>
          <span className="
            [font-family:var(--font-jetbrains-mono)] text-[9px]
            tracking-[0.16em] uppercase text-[var(--cream-muted)]
          ">
            {statLabel}
          </span>
        </div>

        <svg
          className="
            shrink-0 text-[var(--cream-accent)]
            opacity-0 translate-x-2
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 ease-out
          "
          width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden
        >
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </CardFooter>

    </Card>
  );
}
