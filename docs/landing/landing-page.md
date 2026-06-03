# LOFISTACK — Landing Page Component Reference

> Design language: lofi dusk (dark) / cream (light). Two font registers — display
> type in **Space Grotesk** or **Instrument Serif**, metadata/labels in **JetBrains Mono**.

---

## Page Structure

```
<Navbar />
<HeroSection />
<EthosSection />
<FeaturesSection />
<ClientsSection />
<GallerySection />
<BottomRail />
```

File: `src/app/page.tsx`

---

## Common Components

These components appear across **multiple sections** and must maintain the exact
same visual language everywhere they are used. Import from `src/components/ui/`.

---

### `SectionTag`

**File:** `src/components/ui/SectionTag.tsx`
**Type:** Server component

A sticky top-bar that labels the current section and optionally shows a
scroll-progress bar + percentage counter. Every section opens with one.

```tsx
import SectionTag from "@/components/ui/SectionTag";

// Minimal
<SectionTag label="[ 01 - Hero ]" />

// With scroll progress (pass a 0–1 float updated via scroll listener)
<SectionTag label="[ 03 - Features ]" variant="cream" progress={progress} />
```

| Prop        | Type                  | Default  | Description                                      |
|-------------|-----------------------|----------|--------------------------------------------------|
| `label`     | `string`              | required | Section identifier, e.g. `"[ 02 - Ethos ]"`     |
| `variant`   | `"dark" \| "cream"`   | `"dark"` | Palette — matches the section's background       |
| `progress`  | `number` (0–1)        | —        | When provided, renders the progress bar + `%`    |
| `className` | `string`              | `""`     | Extra Tailwind classes                           |
| `style`     | `CSSProperties`       | —        | Inline overrides                                 |

**Visual spec**
- Position: `sticky top-[80px] z-20`
- Padding: `calc(100% / 12)` on both sides (aligns with 12-col grid)
- Font: JetBrains Mono 13px · tracking 0.12em · uppercase
- Dark accent: `--lofi-accent` · Cream accent: `--cream-accent`
- Progress bar track: 2px rounded, `--lofi-muted/30` or `--cream-line`
- Progress bar fill transitions at 100ms linear

**Section index convention**

| Section       | Label                  | Variant  |
|---------------|------------------------|----------|
| Hero          | `[ 01 - Hero ]`        | `dark`   |
| Ethos         | `[ 02 - Ethos ]`       | `dark`   |
| Features      | `[ 03 - Features ]`    | `cream`  |
| Clients       | `[ 04 - Clients ]`     | `dark`   |
| Gallery       | `[ 05 - Gallery ]`     | `dark`   |

---

### `CtaButton`

**File:** `src/components/ui/CtaButton.tsx`
**Type:** Server component (no state/effects)

The standard pill call-to-action button. Used in the Hero section footer and
anywhere a primary or ghost action is needed. Renders an `<a>` when `href` is
supplied; otherwise a `<button>`.

```tsx
import CtaButton from "@/components/ui/CtaButton";

// Primary — filled, accent on hover
<CtaButton variant="primary" href="/book">
  Book a Consultation <span className="transition-transform duration-[220ms]">→</span>
</CtaButton>

// Ghost — outlined, fill on hover
<CtaButton variant="ghost" onClick={handleReplay}>
  ▶ play intro
</CtaButton>
```

| Prop        | Type                    | Default  | Description                              |
|-------------|-------------------------|----------|------------------------------------------|
| `variant`   | `"primary" \| "ghost"`  | required | Visual style                             |
| `children`  | `ReactNode`             | required | Button label (text, icons, arrows)       |
| `href`      | `string`                | —        | If set, renders `<a href={href}>`        |
| `onClick`   | `() => void`            | —        | Click handler (button mode only)         |
| `className` | `string`                | `""`     | Additional Tailwind classes              |

**Visual spec**
- Shape: `rounded-full`
- Padding: `py-[11px] px-[18px]`
- Font: JetBrains Mono 11px · tracking 0.1em · uppercase
- Border: 1px `--lofi-ink`
- **Primary** rest: bg `--lofi-ink`, text `--lofi-bg`
- **Primary** hover: bg `--lofi-accent`, border `--lofi-accent`, text white
- **Ghost** rest: bg transparent, text `--lofi-ink`
- **Ghost** hover: bg `--lofi-ink`, text `--lofi-bg`
- Transition: `all 180ms ease-linear`

> **Note on `BookConsultation`:** For full CTA sections/cards built around this
> button, use `src/components/BookConsultation.tsx` — it wraps `CtaButton` and
> adds heading, description, and layout options (`section`, `card`, `button`).

---

### `SectionHeading`

**File:** `src/components/ui/SectionHeading.tsx`
**Type:** Server component

Three-level typographic block (overline → h2 → body copy) used as the sticky
left column in Ethos and Features. Every className prop appends to the default
so callers can override size or colour without replacing base styles.

```tsx
import SectionHeading from "@/components/ui/SectionHeading";

<SectionHeading
  variant="dark"
  overline="Since"
  title="2019"
  body="A quiet workspace for loud ideas."
/>
```

| Prop                | Type              | Default    | Description                            |
|---------------------|-------------------|------------|----------------------------------------|
| `overline`          | `string`          | required   | Small label above the title            |
| `title`             | `ReactNode`       | required   | Main h2 — accepts JSX for mixed styles |
| `body`              | `string`          | required   | Supporting paragraph                   |
| `variant`           | `"dark"\|"cream"` | `"cream"`  | Palette                                |
| `className`         | `string`          | `""`       | Wrapper div classes                    |
| `overlineClassName` | `string`          | `""`       | Appended to overline `<p>`             |
| `titleClassName`    | `string`          | `""`       | Appended to `<h2>`                     |
| `bodyClassName`     | `string`          | `""`       | Appended to body `<p>`                 |

---

## Section-Specific Components

These components are scoped to a single section and should not be reused
outside of it.

---

### Hero Section

> Full reference: [`./landing/hero.md`](./landing/hero.md)

**File:** `src/components/hero/HeroSection.tsx` · `"use client"`

Phase state machine (idle → wm-reveal → wm-collapse → wm-exit → tag-type →
tag-park → desc-stagger → desc-park → final-wm → rest) drives all animated
layers. Common components used: `SectionTag` + `CtaButton` (ghost and primary).

---

### Ethos Section

**File:** `src/components/ethos/EthosSection.tsx`
**Type:** `"use client"` — scroll-driven word reveal

| Feature              | What it does                                                     |
|----------------------|------------------------------------------------------------------|
| **Section Tag**      | `<SectionTag label="[ 02 - Ethos ]" />` — common component      |
| **SectionHeading**   | Sticky left column; year, bold numerals, tagline caption         |
| **ScrollParagraph**  | Right column paragraphs; words gain `.in` class as they enter viewport |

`ScrollParagraph` (`src/components/ethos/ScrollParagraph.tsx`) splits each
paragraph into `.lofi-word` spans. The parent `EthosSection` drives a single
`scroll` listener that updates all paragraphs together.

---

### Features Section

**File:** `src/components/features/FeaturesSection.tsx`
**Type:** `"use client"` — scroll progress + IntersectionObserver

| Feature             | What it does                                                      |
|---------------------|-------------------------------------------------------------------|
| **Section Tag**     | `<SectionTag label="[ 03 - Features ]" variant="cream" progress={progress} />` |
| **SectionHeading**  | Sticky left column; cream variant with inline `<em>` accent text |
| **FeatureCard**     | Server component; stacks with `position: sticky` for card-deck scroll effect |
| **TestimonialCard** | Server component; full-width quote block at section end          |

**`FeatureCard`** props: `index`, `tag`, `title`, `description`, `stat`, `statLabel`.
On hover: accent left-stripe scales in, arrow slides in from right.

---

### Bottom Rail

**File:** `src/components/BottomRail.tsx`
**Type:** `"use client"`

Fixed footer strip: cassette SVG icon (spins when playing), infinite scrolling
ticker tape, and a replay button. Independent of the hero audio — manages its
own audio state.

---

## Design Tokens

### Dark (dusk) palette

| Token                | Value                      | Usage                           |
|----------------------|----------------------------|---------------------------------|
| `--lofi-bg`          | `#1c1a23`                  | Page background                 |
| `--lofi-bg-deep`     | `#15131b`                  | Elevated surfaces, cards        |
| `--lofi-ink`         | `#efe6d6`                  | Primary text, button bg         |
| `--lofi-ink-soft`    | `#bcb1a0`                  | Secondary text                  |
| `--lofi-muted`       | `#7a7062`                  | Labels, captions, borders       |
| `--lofi-accent`      | `#e08a5a`                  | Highlights, section tags, hovers|
| `--lofi-accent-soft` | `#f0b88a`                  | Softer accent moments           |
| `--lofi-line`        | `rgba(239,230,214, 0.10)`  | Dividers, grid lines            |

### Cream (light) palette

| Token              | Value                     | Usage                           |
|--------------------|---------------------------|---------------------------------|
| `--cream-bg`       | `#ece5d8`                 | Section background              |
| `--cream-bg-deep`  | `#e3dac6`                 | Cards, elevated surfaces        |
| `--cream-ink`      | `#1a1714`                 | Primary text                    |
| `--cream-ink-soft` | `#3b3631`                 | Secondary text                  |
| `--cream-muted`    | `#6f665b`                 | Labels, captions                |
| `--cream-accent`   | `#c2542a`                 | Highlights, hovers              |
| `--cream-line`     | `rgba(26,23,20, 0.12)`    | Dividers                        |

### Typography

| Role            | Font              | Weight   | Notes                              |
|-----------------|-------------------|----------|------------------------------------|
| Display / headings | Space Grotesk  | 600–700  | `var(--font-space-grotesk)`        |
| Serif accent    | Instrument Serif  | 400 italic | `var(--font-instrument-serif)`   |
| Labels / mono   | JetBrains Mono    | 400–500  | `var(--font-jetbrains-mono)`       |

---

## Animation Utilities (globals.css)

| Class         | Effect                                     | Trigger          |
|---------------|--------------------------------------------|------------------|
| `.lofi-reveal`| Fade + translateY(28px) + blur(6px) → in  | Add `.in` class  |
| `.lofi-word`  | Fade + translateY(0.5em) + blur(5px) → in | Add `.in` class  |
| `.sw-word`    | Fade + blur(6px) → in (no translate)       | Add `.in` class  |
| `.tw-caret`   | Blinking cursor bar (700ms steps)          | Always on        |

Apply `.in` via `IntersectionObserver`, a scroll listener, or the hero
sequence timers depending on the context.

---

## File Map

```
src/
├── app/
│   ├── page.tsx                        # Root — composes all sections
│   ├── layout.tsx                      # Font loading, CSS variables
│   └── globals.css                     # Design tokens, animation utilities
│
├── components/
│   ├── ui/
│   │   ├── CtaButton.tsx               # COMMON — pill CTA button
│   │   ├── SectionTag.tsx              # COMMON — sticky section label + progress
│   │   └── SectionHeading.tsx          # COMMON — overline / h2 / body block
│   │
│   ├── hero/
│   │   ├── HeroSection.tsx             # Phase state machine, intro sequence
│   │   └── AnimatedWordmark.tsx        # SVG stroke-draw wordmark
│   │
│   ├── ethos/
│   │   ├── EthosSection.tsx            # Sticky heading + scroll word reveal
│   │   └── ScrollParagraph.tsx         # Word-split paragraph
│   │
│   ├── features/
│   │   ├── FeaturesSection.tsx         # Scroll progress + card-deck layout
│   │   ├── FeatureCard.tsx             # Individual feature card (server)
│   │   └── TestimonialCard.tsx         # Quote block (server)
│   │
│   ├── BookConsultation.tsx            # COMMON — CTA section / card / button
│   ├── Navbar.tsx                      # Sticky nav, blur backdrop
│   └── BottomRail.tsx                  # Fixed footer, ticker, cassette
│
└── data/
    └── landing.ts                      # All copy: ethos paragraphs, features, etc.
```
