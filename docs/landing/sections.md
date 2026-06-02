# Section Structure & Conventions

## Section anatomy

Every section (except Hero) follows this two-part structure:

```
Section
├── Section Tag      sticky header — [ 02 - ETHOS ], [ 03 - FEATURES ], etc.
└── Section Content
    ├── Heading
    │   ├── Overline   — what the section represents (e.g. "since", "what we do")
    │   ├── Title      — primary heading (Space Grotesk bold + Instrument Serif italic accent)
    │   └── Body       — supporting paragraph (Space Grotesk regular)
    └── Content        — section-specific content (cards, scroll paragraphs, marquee, etc.)
```

The **Section Tag** is always sticky (`top: 80px`, which accounts for the Navbar height) with a semi-transparent background and backdrop blur so it floats over scrolling content.

---

## 01 — Hero

**File:** `src/components/hero/HeroSection.tsx`

The Hero is the only section that **shows the 12-column grid lines**. It does not follow the standard two-part structure — it is entirely driven by an intro animation sequence.

### Phase state machine

```
idle → wm-reveal → wm-collapse → wm-exit → tag-type → tag-park
     → desc-stagger → desc-park → final-wm → rest
```

### Layout zones

| Zone | Element | Position |
|---|---|---|
| Background | 12-column grid lines | `position: absolute, inset: 0` |
| Header | Section tag `[ 01 - Hero ]` + phase indicator | Top, full width within col 1–11 |
| Body | Animated wordmark / tagline typewriter / description stagger | Vertically centered |
| Footer | Parked tagline (left) + description + CTA buttons (right) | Bottom, full width within col 1–11 |

### Data

Static strings defined inline in the component:

```ts
const TAGLINE = "A quiet workspace for loud ideas";
const DESC_TEXT = "Lofistack is a stack of tools, sounds and small rituals...";
```

---

## 02 — Ethos

**File:** `src/components/ethos/EthosSection.tsx`
**Data:** `src/data/landing/ethos.ts`

### Heading

| Sub-part | Content | Style |
|---|---|---|
| Overline | "Since" | Instrument Serif italic, accent color |
| Title | Year (e.g. `2022`) | Space Grotesk bold, 96–220px, full ink |
| Body/tagline | Short tagline string | JetBrains Mono, 11px, uppercase, muted |

The heading is **sticky** (`top: 148px`) within the left column, visible while the right column scrolls.

### Content

Right column: scroll-driven word-reveal paragraphs. Each word is wrapped in `.lofi-word` and revealed as the paragraph enters the viewport (scroll progress drives `visibleCount`).

### Data shape

```ts
// src/data/landing/ethos.ts
ethosMeta: { since: string; tagline: string }
ethosParagraphs: Array<{ text: string; lead?: boolean }>
```

---

## 03 — Features

**File:** `src/components/features/FeaturesSection.tsx`
**Data:** `src/data/landing/features.ts`

### Heading (sticky left column)

| Sub-part | Content | Style |
|---|---|---|
| Overline | "What we do" | JetBrains Mono, 11px, uppercase, muted |
| Title | "Innovation, *met with precision.*" | Space Grotesk bold + Instrument Serif italic |
| Body | Supporting paragraph | Space Grotesk, 15–18px |

### Content (right column)

Stacking `FeatureCard` components — each card occupies `100vh` height with a sticky inner div so cards stack as you scroll. A scroll progress bar in the sticky tag header tracks position through the section.

Progress bar: `width: ${progress * 100}%`, driven by scroll position relative to section bounds.

### Data shape

```ts
// src/data/landing/features.ts
featuresHeadline: {
  overline: string;
  title: string;
  body: string;
  testimonial: { quote: string; author: string; role: string };
}
features: Array<Feature>  // rendered as FeatureCard
```

---

## 04 — Clients

**File:** `src/components/brands/BrandsSection.tsx`
**Data:** `src/data/landing/brands.ts`

### Heading (within sticky block)

| Sub-part | Content | Style |
|---|---|---|
| Overline | "Brands We Collaborate With" | Space Grotesk semibold, 11–13px, muted |
| Title | "We build the stack *behind* ambitious teams." | Space Grotesk bold + Instrument Serif italic |
| Body | Supporting paragraph | Space Grotesk, 12–15px, muted |

The sticky block contains both the section tag row and a 4-column hero row (3 cols heading + CTA, 1 col stats).

### Content

4-column grid: logo marquee + brand cards + quote block.

### Data shape

```ts
brandsHeadline: {
  body: string;
  cta: { primary: { label: string; href: string }; secondary: { label: string; href: string } };
  quote: { text: string; author: string; role: string };
}
logos: Logo[]
brands: Brand[]
brandStats: Stat[]
```

---

## 05 — Moments

**File:** `src/components/gallery/GallerySection.tsx`
**Data:** `src/data/landing/gallery.ts`

### Heading

| Sub-part | Content | Style |
|---|---|---|
| Overline | `galleryHeadline.overline` | JetBrains Mono, 11px, uppercase, muted |
| Title | "Real people. *Real problems.* Solved." | Space Grotesk semibold + Instrument Serif italic |
| Body | `galleryHeadline.body` | Space Grotesk, 13–15px |

### Content

Two auto-scrolling marquee rows of `GalleryCard` components:
- Row 1: scrolls left at 52s per loop
- Row 2: reversed order, scrolls right at 60s per loop

Both rows pause on hover (`animationPlayState: "paused"`).

### Data shape

```ts
galleryHeadline: { overline: string; body: string }
moments: Moment[]  // ROW1; ROW2 = [...moments].reverse()
```

---

## Navbar & BottomRail

| Component | File | Notes |
|---|---|---|
| Navbar | `src/components/Navbar.tsx` | Fixed, `height: 80px`, `z-index` above sections |
| BottomRail | `src/components/BottomRail.tsx` | Cassette icon, scrolling ticker, replay CTA |

The `80px` Navbar height is the reference offset for all sticky section headers (`top: 80px`).
