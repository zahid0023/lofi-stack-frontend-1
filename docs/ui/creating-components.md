# Creating UI Components — Reference Guide

Use this document as a checklist and copy-paste reference whenever adding a new component.

---

## 1. Where does the file live?

| What it is | Folder |
|---|---|
| Reusable primitive (button, badge, input…) | `src/components/ui/` |
| Shared layout/chrome (navbar, footer…) | `src/components/common/` |
| Specific to one page section | `src/components/landing/<section>/` |
| Custom React hook | `src/hooks/` |
| Page-level data | `src/data/<page>/` |

> **Rule:** if two different sections need it → move it to `ui/`. If only one section ever will → keep it co-located.

---

## 2. Server vs Client

Default to **server**. Add `"use client"` only when the component needs:

- `useState` / `useEffect` / `useRef` / other hooks
- Browser event handlers (`onClick`, `onMouseEnter`, etc.)
- Browser-only APIs (`window`, `document`, `IntersectionObserver`, `Audio`)

```tsx
// Server — no directive needed
export default function FeatureCard({ title }: Props) { ... }

// Client — directive must be the very first line
"use client";
import { useState } from "react";
export default function ToggleCard({ title }: Props) { ... }
```

---

## 3. shadcn components — what's installed

Import from `@/components/ui/<name>`.

| Component | Import | Use for |
|---|---|---|
| `Button` | `button` | Any clickable action element |
| `Card`, `CardHeader`, `CardContent`, `CardFooter` | `card` | Section wrappers, content tiles |
| `Badge` | `badge` | Tags, labels, status pills |
| `Avatar`, `AvatarFallback`, `AvatarImage` | `avatar` | Initials circles, user avatars |
| `Separator` | `separator` | Horizontal / vertical dividers |
| `Carousel`, `CarouselContent`, `CarouselItem` | `carousel` | Embla-powered slide sequences |

### Always override shadcn defaults with lofi palette

shadcn tokens (`--primary`, `--muted`, `--border`, etc.) are generic. Always restyle with lofi CSS variables via `className`:

```tsx
// ❌ will look wrong — uses generic shadcn colours
<Badge variant="outline">{tag}</Badge>

// ✅ override with project palette
<Badge variant="outline" className="border-[var(--cream-line)] text-[var(--cream-muted)] bg-transparent h-auto">
  {tag}
</Badge>
```

### Button — asChild pattern for links

```tsx
import { Button } from "@/components/ui/button";

// Renders <a> but with Button styling + focus/a11y from shadcn
<Button asChild variant="ghost" className="...your lofi styles...">
  <a href="/somewhere">Label</a>
</Button>
```

### Avatar — border is via ::after pseudo-element

Avatar uses `after:border-border` as an overlay. Override it:

```tsx
<Avatar className="size-9 bg-[var(--cream-bg)] after:border-[var(--cream-ink)]/15 hover:after:border-[var(--cream-accent)]/50 transition-colors">
  <AvatarFallback className="bg-transparent text-[var(--cream-accent)] [font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.08em] uppercase">
    AB
  </AvatarFallback>
</Avatar>
```

### Card — always reset defaults

shadcn Card has background, radius, and ring by default. Reset for custom layouts:

```tsx
<Card className="rounded-none ring-0 gap-0 py-0 bg-transparent overflow-visible">
  <CardContent className="px-0 overflow-visible">
    ...
  </CardContent>
</Card>
```

---

## 4. Design tokens

### Dark palette (default, dusk)

| Token | Value | Use for |
|---|---|---|
| `--lofi-bg` | `#1c1a23` | Section background |
| `--lofi-bg-deep` | `#15131b` | Inset / card background |
| `--lofi-ink` | `#efe6d6` | Primary text, headings |
| `--lofi-ink-soft` | `#bcb1a0` | Secondary text |
| `--lofi-muted` | `#7a7062` | Captions, labels, overlines |
| `--lofi-accent` | `#e08a5a` | Highlight colour, CTAs |
| `--lofi-accent-soft` | `#f0b88a` | Softer accent tint |
| `--lofi-line` | `rgba(239,230,214,0.10)` | Borders, dividers |

### Cream palette (features, clients, gallery)

| Token | Value | Use for |
|---|---|---|
| `--cream-bg` | `#ece5d8` | Section background |
| `--cream-bg-deep` | `#e3dac6` | Inset / card background |
| `--cream-ink` | `#1a1714` | Primary text |
| `--cream-ink-soft` | `#3b3631` | Secondary text |
| `--cream-muted` | `#6f665b` | Captions, labels |
| `--cream-accent` | `#c2542a` | Highlight colour, CTAs |
| `--cream-line` | `rgba(26,23,20,0.12)` | Borders, dividers |

### Palette-aware component pattern

Use a `variant` prop to switch between palettes:

```tsx
interface Props {
  variant?: "dark" | "cream";
}

export default function MyComponent({ variant = "dark" }: Props) {
  const isDark = variant === "dark";
  return (
    <div className={isDark ? "text-[var(--lofi-ink)]" : "text-[var(--cream-ink)]"}>
      ...
    </div>
  );
}
```

---

## 5. Typography

### Font families

| CSS variable | Font | Use for |
|---|---|---|
| `var(--font-space-grotesk)` | Space Grotesk | Headings, body copy, numbers |
| `var(--font-jetbrains-mono)` | JetBrains Mono | Labels, tags, overlines, code |
| `var(--font-instrument-serif)` | Instrument Serif | Italic display, quotes |

Apply with:
```tsx
className="[font-family:var(--font-space-grotesk)]"
className="[font-family:var(--font-jetbrains-mono)]"
className="[font-family:var(--font-instrument-serif)] italic"
```

### Common type scales

```tsx
// Section overline
"[font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.12em] uppercase text-[var(--lofi-muted)]"

// Section title
"[font-family:var(--font-space-grotesk)] font-semibold text-[clamp(24px,3vw,44px)] leading-[1.06] tracking-[-0.03em]"

// Body paragraph
"[font-family:var(--font-space-grotesk)] text-[clamp(14px,1.2vw,17px)] leading-[1.6]"

// Small mono label / tag
"[font-family:var(--font-jetbrains-mono)] text-[9px] tracking-[0.14em] uppercase"

// Display / hero heading
"[font-family:var(--font-space-grotesk)] font-semibold text-[clamp(36px,5.6vw,84px)] tracking-[-0.025em] leading-[1.1]"

// Italic pull quote
"[font-family:var(--font-instrument-serif)] italic text-[clamp(26px,3.2vw,52px)] leading-[1.2] tracking-[-0.01em]"
```

---

## 6. Hover & interactive states

**Always use Tailwind `hover:` variants** — never `onMouseEnter`/`onMouseLeave` style mutations.

```tsx
// ❌
onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lofi-ink)")}

// ✅
className="text-[var(--lofi-ink-soft)] hover:text-[var(--lofi-ink)] transition-colors duration-150"
```

For grouped hover (parent triggers child styles), use the `group` / `group-hover:` pattern:

```tsx
<article className="group ...">
  <span className="text-[var(--cream-muted)] group-hover:text-[var(--cream-accent)] transition-colors duration-300">
    {label}
  </span>
</article>
```

---

## 7. Animation utilities (from globals.css)

### Scroll-reveal: `.lofi-reveal`

Add the class. The `useRevealObserver` hook toggles `.in` when the element enters the viewport.

```tsx
// In a section that uses useRevealObserver():
<div className="lofi-reveal">
  Fades + slides up when scrolled into view
</div>
```

Behaviour: `opacity: 0, translateY(28px), blur(6px)` → `opacity: 1, translateY(0), blur(0)` over ~720 ms.

### Scroll word-reveal: `.lofi-word`

Used by `ScrollParagraph`. Each word gets this class and a `transitionDelay`. EthosSection's scroll listener adds `.in` per word based on scroll progress. The `data-lbl` attribute on the parent `<p>` is required.

### Hero stagger: `.sw-word`

Used in `HeroSection` for the description stagger. Add `.in` to reveal.

### Typewriter caret: `.tw-caret`

```tsx
<span className="tw-caret" />  {/* blinking | cursor */}
```

### Ticker: `lofi-ticker` keyframe

```tsx
// Infinite left-scroll. Duplicate the array ([...arr, ...arr]) first.
className="animate-[lofi-ticker_38s_linear_infinite]"
```

### Cassette spin: `lofi-spin` keyframe

```tsx
className="animate-[lofi-spin_4s_linear_infinite]"
```

---

## 8. Section layout pattern

Every landing section follows this structure:

```tsx
<section className="relative bg-[var(--lofi-bg)] px-[calc(100%/12)]">

  {/* SectionTag MUST be inside the padded section */}
  <SectionTag label="[ 0N - Name ]" variant="dark" />

  <Card className="rounded-none ring-0 gap-0 py-0 bg-transparent overflow-visible">
    <CardContent className="px-0 overflow-visible">
      {/* content */}
    </CardContent>

    {/* optional */}
    <CardFooter className="px-0 border-0 rounded-none bg-transparent">
      {/* CTA row */}
    </CardFooter>
  </Card>

</section>
```

Key rules:
- `px-[calc(100%/12)]` gives one column of padding on each side (12-col grid)
- `overflow-visible` on `Card` + `CardContent` is required when children use `sticky`
- `CardFooter` has a top border and muted bg by default — always add `border-0 bg-transparent`
- `CardHeader` stacks vertically by default — add `flex flex-row` if you need a horizontal layout

---

## 9. `cn()` — class merging utility

Use `cn()` (from `@/lib/utils`) whenever you merge conditional classes or accept a `className` prop. It combines `clsx` + `tailwind-merge` so conflicting Tailwind classes resolve correctly.

```tsx
import { cn } from "@/lib/utils";

// Conditional classes
<div className={cn("base-class", isActive && "active-class", className)} />

// Variant map
const variants = {
  dark:  "bg-[var(--lofi-bg)] text-[var(--lofi-ink)]",
  cream: "bg-[var(--cream-bg)] text-[var(--cream-ink)]",
};
<div className={cn("rounded-xl p-6", variants[variant], className)} />
```

---

## 10. Minimal component template

```tsx
// src/components/ui/MyComponent.tsx
import { cn } from "@/lib/utils";

interface MyComponentProps {
  children: React.ReactNode;
  variant?: "dark" | "cream";
  className?: string;
}

export default function MyComponent({
  children,
  variant = "dark",
  className,
}: MyComponentProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        // base
        "[font-family:var(--font-jetbrains-mono)] text-[11px] tracking-[0.12em] uppercase",
        // palette
        isDark ? "text-[var(--lofi-muted)]" : "text-[var(--cream-muted)]",
        // caller override
        className
      )}
    >
      {children}
    </div>
  );
}
```

---

## 11. Checklist before shipping a component

- [ ] **File location** matches the decision table in §1
- [ ] `"use client"` only if the component genuinely needs it (§2)
- [ ] Uses shadcn primitive as base where one fits (§3)
- [ ] Colours come from lofi/cream CSS variables — no raw hex except in AnimatedWordmark/GalleryCard polaroid (§4)
- [ ] Hover effects are `hover:` variants, not JS handlers (§6)
- [ ] `className` prop accepted and merged with `cn()` so callers can extend it (§9)
- [ ] No array `key={i}` — use a stable content-based key (§6 of clean-code.md)
- [ ] No layout-only `<section>` — use `<div>` (§7 of clean-code.md)
- [ ] No inline `style={}` for static values that Tailwind can express (§3 of clean-code.md)
