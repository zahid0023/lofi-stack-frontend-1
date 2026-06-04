import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="m-0 w-full gap-0 py-0 ring-0 border-0 rounded-none bg-transparent">

      {/* Top rule */}
      <Separator className="mb-12 bg-[var(--cream-line)]" />

      {/* Quote */}
      <CardContent className="px-0 pb-10">
        <blockquote className="m-0">
          <p className="
            m-0
            [font-family:var(--font-instrument-serif)] italic
            text-[clamp(26px,3.2vw,52px)] leading-[1.2] tracking-[-0.01em]
            text-[var(--cream-ink)]
          ">
            {quote}
          </p>
        </blockquote>
      </CardContent>

      {/* Bottom rule + attribution */}
      <CardFooter className="px-0 pb-0 border-0 bg-transparent rounded-none items-center justify-between gap-8">
        <Separator className="flex-1 bg-[var(--cream-line)]" />
        <div className="flex items-baseline gap-3 shrink-0">
          <CardTitle className="[font-family:var(--font-space-grotesk)] font-semibold text-[clamp(14px,1.2vw,16px)] text-[var(--cream-ink)]">
            {author}
          </CardTitle>
          <span className="text-[var(--cream-line)] select-none">·</span>
          <CardDescription className="[font-family:var(--font-jetbrains-mono)] text-[10px] tracking-[0.14em] uppercase text-[var(--cream-muted)]">
            {role}
          </CardDescription>
        </div>
      </CardFooter>

    </Card>
  );
}
