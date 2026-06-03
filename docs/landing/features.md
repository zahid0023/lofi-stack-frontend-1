# Landing Page — Feature Documentation

## Common Components

These components are shared across all sections with consistent look and feel.

### SectionTag
**File:** `src/components/ui/SectionTag.tsx`

Sticky section label that floats over scrolling content.

| Prop | Type | Description |
|---|---|---|
| `label` | `string` | Section identifier e.g. `[ 01 - Hero ]` |
| `variant` | `"dark" \| "cream"` | Color palette |
| `progress` | `number` (0–1) | Optional progress bar (used in Features) |
| `phase` | `string` | Optional right-aligned phase indicator (used in Hero) |

- Always `sticky top-[80px] z-20`
- Full backdrop blur background so it floats cleanly over content
- Placed inside the outer `<section px-[calc(100%/12)]>` (content between grid lines 1–11)

---

### SectionHeading
**File:** `src/components/ui/SectionHeading.tsx`

Left-column heading block used in Ethos, Features, Clients, Moments.

| Prop | Type | Description |
|---|---|---|
| `overline` | `string` | Small label above the title |
| `title` | `ReactNode` | Primary heading (supports Instrument Serif italic accents) |
| `body` | `string` | Supporting paragraph |
| `variant` | `"dark" \| "cream"` | Color palette |
| `cta` | `{ primary, secondary }` | Optional CTA button pair |
| `className` | `string` | Layout overrides (e.g. `sticky top-[148px]`) |

- `cta.primary` renders a filled pill button
- `cta.secondary` renders a ghost pill button
- Button colors automatically match `variant` (lofi-ink for dark, cream-ink for cream)

---

### CtaButton
**File:** `src/components/ui/CtaButton.tsx`

Pill-style CTA button. Wraps shadcn `Button`.

| Prop | Type | Description |
|---|---|---|
| `variant` | `"primary" \| "ghost"` | Filled or outlined |
| `href` | `string` | Renders `<a>` via `asChild` |
| `onClick` | `() => void` | Renders `<button>` |
| `className` | `string` | Style overrides for cream theme etc. |

---

## Section Layout Pattern

Every section follows this structure:

```tsx
<section className="... px-[calc(100%/12)]">        {/* content cols 1–11 */}
  <SectionTag label="[ N - Name ]" variant="..." />  {/* sticky */}
  <Card className="rounded-none ring-0 bg-transparent overflow-visible">
    <CardHeader ...>   {/* optional sticky heading row */}
    <CardContent ...>  {/* main content */}
    <CardFooter ...>   {/* optional CTA / testimonial row */}
  </Card>
</section>
```

- `overflow-visible` on Card + CardContent is required to allow sticky children
- Do NOT use `overflow-x-clip` on sections containing sticky elements

---

## 01 — Hero Section

**File:** `src/components/hero/HeroSection.tsx`

### Features

| Feature | Description |
|---|---|
| SectionTag | `[ 01 - Hero ]` with live `phase` indicator on the right |
| Wordmark reveal | 9-letter SVG stroke-draw animation, staggered per letter |
| Wordmark collapse | Letters collapse to center, then exit |
| Tagline typewriter | Full-screen typewriter with blinking caret |
| Description stagger | Words blur-in one by one |
| Play Intro button | Ghost pill — restarts the full animation + audio sequence |
| Book a Consultation | Primary pill — shared CTA |

### Phase State Machine

```
idle → wm-reveal → wm-collapse → wm-exit → tag-type → tag-park
     → desc-stagger → desc-park → final-wm → rest
```

### Layout

```
CardContent   — animated wordmark / tagline / description (all absolute, vertically centered)
CardFooter    — left: parked tagline | right: parked description + CTA buttons
```

---

## 02 — Ethos Section

**File:** `src/components/ethos/EthosSection.tsx`

### Features

| Feature | Description |
|---|---|
| SectionTag | `[ 02 - Ethos ]` |
| SectionHeading | Sticky left column — overline "Since", large year title, tagline body + CTA pair |
| Scroll paragraphs | Right column — words blur-in as paragraph enters viewport |

### Scroll Word Reveal

Each word is wrapped in `.lofi-word`. A `scroll` listener calculates viewport progress per paragraph and toggles `.in` on words sequentially via `visibleCount`.

---

## 03 — Features Section

**File:** `src/components/features/FeaturesSection.tsx`

### Features

| Feature | Description |
|---|---|
| SectionTag | `[ 03 - Features ]` with scroll progress bar |
| SectionHeading | Sticky left column (1 grid column wide) — overline, title, body + CTA pair |
| Feature card carousel | Right column — each card occupies `100vh`, sticky inner div creates stacking scroll effect |
| Founder quote card | Full-width testimonial block below the carousel (`CardFooter`) |

### Progress Bar

`SectionTag progress` prop is driven by scroll position relative to the section's `top` and `height` via `sectionRef`.

---

## 04 — Clients Section

**File:** `src/components/clients/ClientsSection.tsx`

### Features

| Feature | Description |
|---|---|
| SectionTag | `[ 04 — Clients ]` |
| CardHeader (sticky) | SectionHeading (overline, title, body + CTA pair) + stats column |
| Logo marquee | Auto-scrolling logo strip (`LogoMarquee`) |
| Brand cards grid | 3-column grid of `ClientCard` components |
| Testimonial | Quote block with author attribution |

### CardContent sections

1. **Marquee** — `LogoMarquee` full width
2. **Cards grid** — all client cards
3. **Testimonial** — quote card

---

## 05 — Moments Section

**File:** `src/components/gallery/GallerySection.tsx`

### Features

| Feature | Description |
|---|---|
| SectionTag | `[ 05 — Moments ]` |
| CardHeader | `SectionHeading` — overline, title, body + CTA pair |
| Image carousel row 1 | Auto-scrolls left at 52s per loop, pauses on hover |
| Image carousel row 2 | Reversed order, auto-scrolls right at 60s per loop, pauses on hover |

### Marquee Rows

Carousel rows use `-mx-[calc(100vw/12)]` on `CardContent` to escape the section's column padding and render full-bleed. Each row wraps cards in a duplicated array (`[...ROW, ...ROW]`) for seamless looping via `lofi-ticker` keyframe animation.
