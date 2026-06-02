# Design Tokens

Defined in `src/app/globals.css` under `:root`.

## Palettes

Two palettes are used across the landing page. Sections alternate between them.

### Dusk (dark) — sections 01, 02, 05

Used for Hero, Ethos, and Gallery sections.

| Token | Value | Usage |
|---|---|---|
| `--lofi-bg` | `#1c1a23` | Section background |
| `--lofi-bg-deep` | `#15131b` | Deeper background variant |
| `--lofi-ink` | `#efe6d6` | Primary text |
| `--lofi-ink-soft` | `#bcb1a0` | Secondary text |
| `--lofi-muted` | `#7a7062` | Muted text, overlines |
| `--lofi-accent` | `#e08a5a` | Accent color, section tags, italic highlights |
| `--lofi-accent-soft` | `#f0b88a` | Soft accent variant |
| `--lofi-line` | `rgba(239,230,214,0.10)` | Grid lines, dividers |

### Cream (light) — sections 03, 04

Used for Features and Clients sections.

| Token | Value | Usage |
|---|---|---|
| `--cream-bg` | `#ece5d8` | Section background |
| `--cream-bg-deep` | `#e3dac6` | Card backgrounds |
| `--cream-ink` | `#1a1714` | Primary text |
| `--cream-ink-soft` | `#3b3631` | Secondary text |
| `--cream-muted` | `#6f665b` | Muted text, overlines |
| `--cream-accent` | `#c2542a` | Accent color, section tags |
| `--cream-line` | `rgba(26,23,20,0.12)` | Dividers, borders |

---

## Typography

Font variables are set on `<html>` via `next/font/google` in `src/app/layout.tsx`.

| CSS Variable | Font | Usage |
|---|---|---|
| `--font-space-grotesk` | Space Grotesk | Headings, body text, UI labels |
| `--font-jetbrains-mono` | JetBrains Mono | Section tags, overlines, monospace UI |
| `--font-instrument-serif` | Instrument Serif | Italic accent phrases in headings |

### Type scale patterns

| Role | Size | Font | Weight |
|---|---|---|---|
| Section tag | 13px, `tracking-[0.12em]`, uppercase | JetBrains Mono | — |
| Overline | 11px, `tracking-[0.12em–0.16em]`, uppercase | JetBrains Mono | — |
| Display heading | `clamp(36px, 4.8vw, 72px)` | Space Grotesk | semibold |
| Heading italic accent | same as display | Instrument Serif | italic normal |
| Body | `clamp(13px, 1.1vw, 15px)`, `leading-[1.6]` | Space Grotesk | regular |

---

## Animation Utilities

Defined in `src/app/globals.css`.

| Class | Trigger | Effect |
|---|---|---|
| `.lofi-reveal` | Add `.in` | Fade + translateY(28px→0) + blur(6px→0) over 720–820ms |
| `.lofi-word` | Add `.in` | Fade + translateY(0.5em→0) + blur per word, 380–460ms |
| `.sw-word` | Add `.in` | Fade + blur per word (Hero desc stagger), 520ms |
| `.tw-caret` | Always | Blinking cursor, 700ms step animation |

### Keyframes

| Name | Used by |
|---|---|
| `caret-blink` | `.tw-caret` in Hero typewriter |
| `lofi-bar` | `.now-playing-bars` music visualizer in Hero |
| `lofi-spin` | Cassette reel in BottomRail |
| `lofi-ticker` | Gallery marquee rows, BottomRail ticker |

---

## Page-level Overlays

Applied to `.lofi-page` wrapper in `src/app/page.tsx`.

| Pseudo-element | Effect | z-index |
|---|---|---|
| `::before` | Film grain texture (SVG noise, `opacity: 0.10`, `mix-blend-mode: multiply`) | 100 |
| `::after` | Radial vignette (dark edges) | 99 |
