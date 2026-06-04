# ClientsSection

**File:** `src/components/landing/clients/ClientsSection.tsx`
**Type:** Client component | **Palette:** Cream

Sticky header with stats, logo marquee, client card grid, and testimonial.

## Layout

```
┌─ Sticky header ──────────────────────────────┐
│  SectionHeading (left)   Stats column (right) │
└──────────────────────────────────────────────┘
  LogoMarquee
  ClientCard grid  (1 col → 2 col → 3 col)
  Testimonial block
```

## Data

```ts
import { logos, clients, clientStats, clientsHeadline } from "@/data/landing";
```

## Sub-components

- [`ClientCard`](./client-card.md)
- [`LogoMarquee`](./logo-marquee.md)

## Known issues

- Inline testimonial block should use `TestimonialCard` — see `docs/clean-code.md` Issue 5

---

# ClientCard

**File:** `src/components/landing/clients/ClientCard.tsx`
**Type:** Server component

Client tile with initials avatar, industry tag, name and description.

## Props

| Prop | Type | Description |
|---|---|---|
| `initials` | `string` | 2-letter monogram in the logo circle |
| `name` | `string` | Company name |
| `industry` | `string` | Industry tag top-right |
| `description` | `string` | Short engagement description |

---

# LogoMarquee

**File:** `src/components/landing/clients/LogoMarquee.tsx`
**Type:** Server component

Horizontal auto-scrolling logo strip.

## Props

| Prop | Type | Description |
|---|---|---|
| `logos` | `Logo[]` | Logo data from `src/data/landing/clients.ts` |
| `duration` | `string` | CSS animation duration e.g. `"32s"` |
