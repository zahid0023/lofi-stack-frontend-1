# Grid System & Column Layout

## 12-Column Grid

The landing page is divided into **12 equal columns** separated by **11 vertical guide lines**. This mirrors classic editorial column layouts.

### Visual grid lines

Grid lines are only rendered visually in the **Hero section** (section 01). All other sections use the column measurements for spacing only — no visible lines.

Hero implementation (`src/components/hero/HeroSection.tsx`):

```tsx
<div
  aria-hidden
  className="absolute inset-0 pointer-events-none opacity-60"
  style={{
    backgroundImage: "linear-gradient(to right, var(--lofi-line) 1px, transparent 1px)",
    backgroundSize: "calc(100% / 12) 100%",
  }}
/>
```

---

## Column Spacing Reference

All sections use `calc(100% / 12)` as the base column unit.

| Usage | Value | Where |
|---|---|---|
| Section tag left edge | `padding-left: calc(100% / 12)` | All section sticky headers |
| Section tag right edge | `padding-right: calc(100% / 12)` | All section sticky headers |
| Content area (1 col inset) | `pl-[calc(100%/12)]` | Hero, Ethos, Features, Brands, Gallery |
| Content area (wider inset) | `pl-[calc(100%/8)]` | Ethos body, Features testimonial, Brands body |
| Hero main content | Dynamic `colWidth` via `ResizeObserver` | Hero section only |

### Hero column measurement

The Hero section measures the column width dynamically and applies it as inline padding, so the content sits precisely between column 1 and column 11:

```tsx
const measure = () => setColWidth(el.offsetWidth / 12);
// applied as:
style={{ paddingLeft: `${colWidth}px`, paddingRight: `${colWidth}px` }}
```

---

## Section Tag Alignment

Every section tag (`[ 01 - HERO ]`, `[ 02 - ETHOS ]`, etc.) must be left-aligned with the **first vertical line**. This means their left edge starts at exactly `calc(100% / 12)` from the viewport edge.

All sticky section headers use this rule:

```tsx
// Pattern used across all sections
style={{ paddingLeft: "calc(100% / 12)", paddingRight: "calc(100% / 12)" }}
// or via Tailwind:
className="pl-[calc(100%/12)] pr-[calc(100%/12)]"
```
