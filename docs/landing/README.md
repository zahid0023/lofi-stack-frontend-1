# Landing Page — Component List

All components for the `/` route. Files live in `src/components/landing/`.

## Overview

| Component | File | Type | Palette | Doc |
|---|---|---|---|---|
| **HeroSection** | `landing/hero/HeroSection.tsx` | Client | Dark | [hero.md](./hero.md) |
| &nbsp;&nbsp;↳ AnimatedWordmark | `landing/hero/AnimatedWordmark.tsx` | Client | — | [animated-wordmark.md](./animated-wordmark.md) |
| **EthosSection** | `landing/ethos/EthosSection.tsx` | Client | Dark | [ethos.md](./ethos.md) |
| &nbsp;&nbsp;↳ ScrollParagraph | `landing/ethos/ScrollParagraph.tsx` | Server | — | [ethos.md](./ethos.md) |
| **FeaturesSection** | `landing/features/FeaturesSection.tsx` | Client | Cream | [features.md](./features.md) |
| &nbsp;&nbsp;↳ FeatureCard | `landing/features/FeatureCard.tsx` | Server | — | [features.md](./features.md) |
| &nbsp;&nbsp;↳ TestimonialCard | `landing/features/TestimonialCard.tsx` | Server | — | [features.md](./features.md) |
| **ClientsSection** | `landing/clients/ClientsSection.tsx` | Client | Cream | [clients.md](./clients.md) |
| &nbsp;&nbsp;↳ ClientCard | `landing/clients/ClientCard.tsx` | Server | — | [clients.md](./clients.md) |
| &nbsp;&nbsp;↳ LogoMarquee | `landing/clients/LogoMarquee.tsx` | Server | — | [clients.md](./clients.md) |
| &nbsp;&nbsp;↳ PillButton | `landing/clients/PillButton.tsx` | Server | — | [clients.md](./clients.md) |
| **GallerySection** | `landing/gallery/GallerySection.tsx` | Client | Cream | [gallery.md](./gallery.md) |
| &nbsp;&nbsp;↳ GalleryCard | `landing/gallery/GalleryCard.tsx` | Client | — | [gallery.md](./gallery.md) |

---

## HeroSection

**File:** `src/components/landing/hero/HeroSection.tsx` · Client · Dark palette

Full-viewport intro section. Runs a 10-phase entrance animation on mount and replays on demand.

### Animation phases

| Phase | Duration (ms from start) | What's visible |
|---|---|---|
| `idle` | 0 | Nothing |
| `wm-reveal` | 400 | Wordmark letters draw in one by one |
| `wm-collapse` | 2200 | Letters compress together |
| `wm-exit` | 3200 | Wordmark fades out |
| `tag-type` | 3900 | Tagline types in with cursor |
| `tag-park` | 5600 | Tagline slides to footer left |
| `desc-stagger` | 6300 | Description words stagger in |
| `desc-park` | 9000 | Description moves to footer right |
| `final-wm` | 9700 | Compact wordmark fades back in |
| `rest` | 10500 | CTA buttons visible, sequence complete |

### Features

- **Audio playback** — lazily creates an `<Audio>` node on first play, streams `public/lofi_sound.mp3`, cleans up on stop or track end
- **Now-playing indicator** — animated 4-bar equaliser shown while audio is active
- **Replay** — "▶ play intro" button re-runs the full sequence and restarts audio; "■ stop" halts audio without resetting
- **12-column grid lines** — decorative vertical rule overlay via `backgroundImage` repeating gradient
- **Typewriter tagline** — `useTypewriter` hook, 45 ms per character, cursor blink via `.tw-caret` CSS class
- **Staggered word reveal** — description split into words, each word animated with 130 ms stagger offset
- **Phase-aware SectionTag** — passes current `phase` string to `SectionTag` for live debug display

### Props

None — self-contained, data sourced from constants inside the file.

---

## AnimatedWordmark

**File:** `src/components/landing/hero/AnimatedWordmark.tsx` · Client

SVG-based animated wordmark for "LOFISTACK". Each letter is an independent SVG `<text>` element drawn via stroke-dashoffset animation.

### Props

| Prop | Type | Description |
|---|---|---|
| `mode` | `"idle" \| "spread" \| "collapsed" \| "final"` | Layout and animation mode |
| `revealedCount` | `number` | How many letters have drawn in (0–9) |
| `onFirstLetterLeft` | `(left: number) => void` | Optional callback with pixel offset of the first letter |

### Modes

| Mode | Layout | Letters |
|---|---|---|
| `idle` | — | All hidden |
| `spread` | Letters spaced to fill full container width with even gaps | Draw in one by one per `revealedCount` |
| `collapsed` | `justify-content: space-between` filling L→K | Drawn |
| `final` | Same as collapsed | All visible, no stagger delay |

### Features

- **Per-letter SVG paths** — each letter uses a custom `dash` value tuned to its path length; `strokeDashoffset` animates from `dash → 0`
- **Accent ticks** — small accent-coloured vertical bar between each letter pair, visible in `spread` mode only
- **Responsive font size** — `ResizeObserver` computes the largest font size that fits the container width without overflow
- **Spread gap calculation** — distributes remaining width evenly between letters in spread mode
- **1000-unit em square** — SVG coordinate system maps 1000 units = 1em for font-size independence

---

## EthosSection

**File:** `src/components/landing/ethos/EthosSection.tsx` · Client · Dark palette

Two-column sticky layout. Left column pins the section heading; right column scrolls with word-by-word reveal paragraphs.

### Features

- **Sticky heading** — left column uses `sticky top-[148px]` so the heading stays in view while scrolling through paragraphs
- **Scroll-driven word reveal** — window scroll listener queries all `[data-lbl]` paragraphs, calculates each paragraph's position relative to 28%–82% of viewport height, and reveals words proportionally
- **`rightRef`** — attached to the `<article>` wrapping all `ScrollParagraph` elements; the scroll listener queries inside it for `[data-lbl]` nodes

### Data

```ts
import { ethosParagraphs, ethosMeta } from "@/data/landing";
```

`ethosMeta` supplies the `since` year (rendered as a massive typographic number) and `tagline`. `ethosParagraphs` is an array of `{ lead: boolean, text: string }`.

---

## ScrollParagraph

**File:** `src/components/landing/ethos/ScrollParagraph.tsx` · Server

Splits a string into individual `<span class="lofi-word">` tokens. The `.in` class is toggled by `EthosSection`'s scroll listener to drive the reveal animation.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | required | Paragraph content |
| `lead` | `boolean` | `false` | Lead size — `clamp(34px, 3.8vw, 60px)` vs `clamp(26px, 2.8vw, 44px)` |

### Features

- **`data-lbl` attribute** on root `<p>` — required for `EthosSection`'s scroll listener to find this paragraph; do not remove
- **Trailing space** — each word span includes a trailing `" "` to preserve natural line wrapping
- **Stagger delay** — each word span has `transitionDelay: i * 18ms` for a cascading reveal

---

## FeaturesSection

**File:** `src/components/landing/features/FeaturesSection.tsx` · Client · Cream palette

Two-column layout with a sticky heading on the left and a vertically stacked scroll sequence of feature cards on the right.

### Features

- **Scroll stacking** — each `FeatureCard` is wrapped in a `100vh` tall container; the inner card is `sticky top-[140px]` with `z-index: i + 1` so cards layer on top of each other as the user scrolls
- **Live progress bar** — scroll listener calculates how far through the section the user is (0–1) and passes it as `progress` prop to `SectionTag`, which renders an animated fill bar
- **Scroll-reveal** — uses `useRevealObserver()` hook; section heading has `.lofi-reveal` class

### Data

```ts
import { features, featuresHeadline } from "@/data/landing";
```

`features` is an array of `FeatureCard` props. `featuresHeadline` supplies heading copy and the testimonial at the bottom.

---

## FeatureCard

**File:** `src/components/landing/features/FeatureCard.tsx` · Server

Individual feature tile used in the scroll-stack sequence.

### Props

| Prop | Type | Description |
|---|---|---|
| `index` | `string` | Large outlined number e.g. `"01"` |
| `tag` | `string` | Small pill label top-right |
| `title` | `string` | Card heading |
| `description` | `string` | Body paragraph |
| `stat` | `string` | Highlighted metric in footer e.g. `"3×"` |
| `statLabel` | `string` | Label beneath the metric |

### Features

- **Accent left stripe** — 3px bar on the left edge, scales in from bottom on hover via `scaleY` transform
- **Hover arrow** — arrow icon in footer fades and slides in from the right on hover
- **Outlined index number** — rendered with `-webkit-text-stroke` (transparent fill, accent stroke)

---

## TestimonialCard

**File:** `src/components/landing/features/TestimonialCard.tsx` · Server

Full-width quote block. Used in `FeaturesSection` footer and `ClientsSection`.

### Props

| Prop | Type | Description |
|---|---|---|
| `quote` | `string` | Quote text |
| `author` | `string` | Author name |
| `role` | `string` | Author role / company |

### Features

- Top horizontal rule above the quote
- Bottom rule with right-aligned `author · role` attribution
- Instrument Serif italic for the quote text, fluid type `clamp(26px, 3.2vw, 52px)`

---

## ClientsSection

**File:** `src/components/landing/clients/ClientsSection.tsx` · Client · Cream palette

Sticky header with stats, followed by logo marquee, client card grid, and a testimonial.

### Layout

```
┌─ Sticky header (top-[148px], z-10) ─────────────────────┐
│  SectionHeading (left)          Stats column (right)     │
└──────────────────────────────────────────────────────────┘
  LogoMarquee            (lofi-reveal)
  ClientCard grid        (lofi-reveal)  1 col → 2 col → 3 col
  TestimonialCard        (lofi-reveal)
```

### Features

- **Sticky header** — heading + stats stay pinned while cards scroll beneath; header has a bottom border and `bg-[var(--cream-bg)]` to mask content scrolling under it
- **Stats column** — renders `clientStats` array as stacked number/label pairs with dividers between rows
- **Scroll-reveal** — uses `useRevealObserver(0.08)` (lower threshold so the header's sticky position doesn't delay reveal)

### Data

```ts
import { logos, clients, clientStats, clientsHeadline } from "@/data/landing";
```

---

## ClientCard

**File:** `src/components/landing/clients/ClientCard.tsx` · Server

Client tile with a two-zone layout: a header strip and a content body.

### Props

| Prop | Type | Description |
|---|---|---|
| `initials` | `string` | 2-letter monogram shown in a circle |
| `name` | `string` | Company name |
| `industry` | `string` | Industry tag (top-right of header) |
| `description` | `string` | Short engagement description |

### Features

- **Dot-grid texture** — subtle `radial-gradient` dot pattern in the header strip at 4% opacity
- **Hover state** — border shifts to accent tint, shadow appears, industry tag changes to accent colour, name brightens — all via Tailwind `group-hover:` variants

---

## LogoMarquee

**File:** `src/components/landing/clients/LogoMarquee.tsx` · Server

Horizontal auto-scrolling logo strip inside a rounded card.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `logos` | `LogoItem[]` | required | Array of `{ name, initials }` |
| `duration` | `string` | `"32s"` | CSS animation duration |

### Features

- **Seamless loop** — logos array is doubled (`[...logos, ...logos]`) so the ticker wraps without a jump
- **Mask fade** — `mask-image` linear gradient fades the left and right 6% edges to transparent
- **`lofi-ticker` keyframe** — defined in `globals.css`, translates `translateX(0) → translateX(-50%)` so the doubled array scrolls exactly one full copy

---

## PillButton

**File:** `src/components/landing/clients/PillButton.tsx` · Server

Pill-shaped CTA button with primary and ghost variants. Renders as `<a>` when `href` is provided, `<button>` otherwise.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | Button label |
| `primary` | `boolean` | `false` | Filled style (dark bg) vs ghost style (outlined) |
| `href` | `string` | — | Renders as `<a>` link |
| `onClick` | `() => void` | — | Renders as `<button>` |

### Features

- **Arrow slide** — trailing `→` character shifts 3px right on hover via `group-hover:translate-x-[3px]`
- **Primary** — filled dark ink background, shifts to accent colour on hover
- **Ghost** — transparent background with muted border, border darkens on hover

---

## GallerySection

**File:** `src/components/landing/gallery/GallerySection.tsx` · Client · Cream palette

Section heading followed by two infinite-scroll marquee rows of polaroid-style `GalleryCard` components.

### Features

- **Dual rows** — Row 1 scrolls left (52 s), Row 2 scrolls right using `animation-direction: reverse` (60 s); different speeds create a parallax feel
- **Pause on hover** — each row tracks its own `paused` boolean state; `animationPlayState` is toggled on `mouseenter`/`mouseleave`
- **Seamless loop** — each row's array is doubled before render; `lofi-ticker` keyframe moves exactly −50% so the seam is invisible
- **`row2` via `useMemo`** — `[...MOMENTS].reverse()` is computed inside the component on mount, not at module level

### Data

```ts
import { moments, galleryHeadline } from "@/data/landing";
```

---

## GalleryCard

**File:** `src/components/landing/gallery/GalleryCard.tsx` · Client

Polaroid-style card used in the `GallerySection` marquee rows.

### Props

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | Numeric string used to pick a deterministic tilt and vertical offset |
| `caption` | `string` | Italic caption in the polaroid footer |
| `tag` | `string` | Small uppercase tag below the caption |
| `photo` | `string` | Image URL |

### Features

- **Deterministic tilt** — `TILTS` array of 9 values indexed by `(parseInt(id) - 1) % 9`; no random values, so server and client render identically
- **Vertical offset** — `OFFSETS` array staggers card heights in the strip so they don't sit on a single baseline
- **Hover lift** — `rotate(0) scale(1.07) translateY(-10px)`, fast in (280 ms) / slow out (520 ms) for a satisfying snap-back
- **Photo zoom** — image scales to 1.08 on hover via a separate slower transition (600 ms)
- **Film grain + vignette** — dot-grid overlay at 4% opacity and a radial vignette applied directly over the photo
- **Photo filter** — `sepia(20%) contrast(1.06) brightness(0.96) saturate(0.9)` for a lo-fi film look
