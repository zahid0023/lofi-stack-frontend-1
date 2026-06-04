# FeaturesSection

**File:** `src/components/landing/features/FeaturesSection.tsx`
**Type:** Client component | **Palette:** Cream

Sticky left heading with stacked scroll-snapping feature cards on the right.

## Scroll stacking

Each `FeatureCard` is wrapped in a `100vh` container with a sticky inner card (`z-index: i + 1`). Cards layer on top of each other as the user scrolls.

## Progress bar

`SectionTag` receives a `progress` prop (0–1):

```ts
const scrolled = Math.max(0, -top);
setProgress(Math.min(1, scrolled / Math.max(1, height - vh)));
```

## Sub-components

- [`FeatureCard`](./feature-card.md)
- [`TestimonialCard`](./testimonial-card.md)

---

# FeatureCard

**File:** `src/components/landing/features/FeatureCard.tsx`
**Type:** Server component

## Props

| Prop | Type | Description |
|---|---|---|
| `index` | `string` | Large outlined number e.g. `"01"` |
| `tag` | `string` | Small pill label top-right |
| `title` | `string` | Card heading |
| `description` | `string` | Body paragraph |
| `stat` | `string` | Highlighted metric in footer |
| `statLabel` | `string` | Label beneath the metric |

Data source: `src/data/landing/features.ts`

---

# TestimonialCard

**File:** `src/components/landing/features/TestimonialCard.tsx`
**Type:** Server component

Full-width quote block with decorative quote mark, blockquote, author and role.

## Props

| Prop | Type | Description |
|---|---|---|
| `quote` | `string` | Quote text |
| `author` | `string` | Author name |
| `role` | `string` | Author role / company |

Also used (pending) in `ClientsSection` — see `docs/clean-code.md` Issue 5.
