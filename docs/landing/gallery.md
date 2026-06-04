# GallerySection

**File:** `src/components/landing/gallery/GallerySection.tsx`
**Type:** Client component | **Palette:** Cream

Section heading with two auto-scrolling `GalleryCard` marquee rows.

## Marquee rows

| Row | Direction | Duration |
|---|---|---|
| Row 1 | Left | 52 s |
| Row 2 | Right (reverse) | 60 s |

Both rows pause on `mouseenter` and resume on `mouseleave` via `animationPlayState`. Cards are duplicated (`[...arr, ...arr]`) for seamless looping.

## Data

```ts
import { moments, galleryHeadline } from "@/data/landing";
```

## Sub-components

- [`GalleryCard`](./gallery-card.md)

---

# GalleryCard

**File:** `src/components/landing/gallery/GalleryCard.tsx`
**Type:** Server component

Single moment card used in the marquee rows. Displays an image, caption, and tag.
