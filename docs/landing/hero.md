# Hero Section

**File:** `src/components/hero/HeroSection.tsx`
**Type:** `"use client"` — owns the intro sequence state machine

---

## Feature Breakdown

| # | Feature | Common? | Description |
|---|---------|---------|-------------|
| 1 | **Section Tag** | No — inline in `CardHeader` | `[ 01 - Hero ]` label rendered directly; not using the shared `SectionTag` component |
| 2 | **Phase indicator** | No | Top-right `<span>` in `CardHeader` showing the current phase name |
| 3 | **Wordmark reveal** | No | SVG stroke-draw across 9 letters: spread → collapse → exit |
| 4 | **Tagline typewriter** | No | Text typed at 45 ms/char with a blinking `.tw-caret` |
| 5 | **Tagline park** | No | Collapses to bottom-left in Instrument Serif italic |
| 6 | **Desc stagger** | No | Words blur-in with 130 ms stagger using `.sw-word` |
| 7 | **Desc park** | No | Collapses to bottom-right in JetBrains Mono caption size |
| 8 | **Play Intro / stop** | Yes — `CtaButton` | Ghost variant; replays sequence and audio |
| 9 | **Book a Consultation** | Yes — `CtaButton` | Primary variant; main conversion CTA |
| 10 | **Now playing bars** | No | 4-bar `.now-playing-bars` animation while audio plays |

---

## Phase State Machine

```
idle
 └─ wm-reveal      letters stroke-draw in, staggered 150 ms each
     └─ wm-collapse   wordmark collapses to centre
         └─ wm-exit      wordmark fades out
             └─ tag-type     tagline typewriter starts
                 └─ tag-park     tagline shrinks to footer left
                     └─ desc-stagger  description words blur in
                         └─ desc-park    description shrinks to footer right
                             └─ final-wm   wordmark reappears in final mode
                                 └─ rest       sequence complete, CTAs visible
```

All transitions are `setTimeout` chains registered in `timersRef` and cleared
on re-run. The sequence starts automatically on mount and can be replayed via
`runSequence()`.

### Timing constants (`T`)

| Constant | ms (from INIT_DELAY) | Triggers |
|---|---|---|
| `INIT_DELAY` | 400 | Sequence start |
| `LETTER_STAGGER` | 150 × i | Each wordmark letter |
| `COLLAPSE_AFTER` | 1 800 | `wm-collapse` |
| `EXIT_AFTER` | 2 800 | `wm-exit` |
| `TAG_TYPE_AFTER` | 3 500 | `tag-type` |
| `TAG_PARK_AFTER` | 5 200 | `tag-park` |
| `DESC_STAGGER_AFTER` | 5 900 | `desc-stagger` |
| `DESC_PARK_AFTER` | 8 500 | `desc-park` |
| `FINAL_WM_AFTER` | 9 300 | `final-wm` |
| `REST_AFTER` | 10 100 | `rest` |

---

## Visibility Map

Each UI layer's `opacity` is driven by phase membership:

| Layer | Visible in phases |
|---|---|
| Wordmark | `wm-reveal`, `wm-collapse`, `final-wm`, `rest` |
| Big tagline (typewriter) | `tag-type` |
| Small tagline (parked) | `tag-park`, `desc-stagger`, `desc-park`, `final-wm`, `rest` |
| Big description (stagger) | `desc-stagger` |
| Small description (parked) | `desc-park`, `final-wm`, `rest` |
| CTA buttons | `desc-park`, `final-wm`, `rest` |

Transitions use Tailwind `opacity-100/0`, `pointer-events-auto/none`, and `delay-[Xms]/delay-0`
toggled via `cn()` — no layout shift, no inline `style` props.

---

## Layout

- Full-width `<section>` with `min-height: calc(100vh - 65px)` (accounts for Navbar)
- Horizontal padding `px-[calc(100%/12)]` on `<section>` pins content between grid lines 1 and 11 — pure CSS, no JS measurement
- 12-column grid lines as an `aria-hidden` absolute overlay — `bg-[linear-gradient(...)] bg-[size:calc(100%/12)_100%]`
- **Header strip** (top): `[ 01 - Hero ]` label left · phase indicator right — both inline in `CardHeader`
- **Body** (flex-1): all animated layers are `position: absolute`, vertically centred
- **Footer strip** (bottom): parked tagline left · parked desc + CTAs right

### Tailwind visibility pattern

All phase-driven show/hide is handled entirely with Tailwind via `cn()`:

```tsx
cn(
  "transition-opacity duration-[650ms] ease-in-out",
  show ? "opacity-100 pointer-events-auto delay-[220ms]"
       : "opacity-0 pointer-events-none delay-0",
)
```

The only remaining `style` prop is the per-word stagger on `.sw-word` spans, which
sets a CSS custom property since Tailwind cannot generate per-index values at runtime:

```tsx
style={{ "--delay": showDescBig ? `${i * 130}ms` : "0ms" } as React.CSSProperties}
```

`.sw-word` in `globals.css` consumes it via `transition-delay: var(--delay, 0ms)`.

### shadcn Card structure

The inner layout uses shadcn `Card` primitives. All default Card styles are
neutralised so the lofi layout and palette are fully preserved.

```
<section>  px-[calc(100%/12)]       outer shell — grid padding + grid lines overlay
  <Card>                            flex-col, transparent bg, no ring/radius
    <CardHeader>                    section label + phase indicator (inline, no SectionTag)
    <CardContent>                   flex-1, animated layers (wordmark, tagline, desc)
    <CardFooter>                    parked tagline (left) + desc + CTA buttons (right)
```

| Primitive | Key overrides |
|---|---|
| `Card` | `rounded-none ring-0 gap-0 py-0 bg-transparent text-[var(--lofi-ink)]` |
| `CardHeader` | `flex justify-between px-0 rounded-none gap-0` (removes default grid layout) |
| `CardContent` | `flex-1 px-0 relative z-[2]` (removes default horizontal padding) |
| `CardFooter` | `px-0 border-0 bg-transparent rounded-none` (removes border-t and muted bg) |

---

## Sub-components

### `AnimatedWordmark`

**File:** `src/components/hero/AnimatedWordmark.tsx`
**Type:** `"use client"`

Draws the LOFISTACK wordmark as individual SVG `<path>` elements with
stroke-draw animation.

| Prop | Type | Description |
|---|---|---|
| `mode` | `"spread" \| "collapsed" \| "final"` | Layout and size state |
| `revealedCount` | `number` (0–9) | How many letters are currently drawn in |

- `stroke-dasharray` / `stroke-dashoffset` set in `em` units — scales with
  `font-size` rather than px so it stays crisp at any viewport width.
- Letter paths transition individually; `revealedCount` controls which ones
  are visible.

---

## Common Components Used

| Component | Import | Usage |
|---|---|---|
| `Card`, `CardHeader`, `CardContent`, `CardFooter` | `@/components/ui/card` | Inner layout structure |
| `CtaButton` | `@/components/ui/CtaButton` | Ghost ("play intro") + Primary ("Book a Consultation") |

See [`../landing-page.md`](../landing-page.md) for full props reference on
each common component.

---

## Audio

- Audio is loaded lazily (`new Audio(...)`) on first play via `playAudio()`.
- `audioRef` holds the instance; it is nulled out on stop so the next play
  always starts fresh.
- `audioPlaying` state drives the `.now-playing` visibility class and the
  ghost button label toggle (`▶ play intro` / `■ stop`).
