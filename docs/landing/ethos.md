# EthosSection

**File:** `src/components/landing/ethos/EthosSection.tsx`
**Type:** Client component | **Palette:** Dark

Sticky left heading with scroll-driven word-reveal paragraphs on the right.

## How word reveal works

1. `ScrollParagraph` splits each paragraph into `<span class="lofi-word">` tokens
2. A `window` scroll listener measures each `[data-lbl]` paragraph's position
3. Words reveal between `28%–82%` of the viewport height
4. `.in` class is toggled on each word span

## Sub-components

- [`ScrollParagraph`](./scroll-paragraph.md)

---

# ScrollParagraph

**File:** `src/components/landing/ethos/ScrollParagraph.tsx`
**Type:** Server component

Splits a string into individual word spans for scroll-driven reveal.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | required | Paragraph content |
| `lead` | `boolean` | `false` | Larger lead size (`clamp(34px,3.8vw,60px)`) |

## Notes

- The `data-lbl` attribute on the root `<p>` is queried by `EthosSection` — do not remove it
- Words are spaced with a trailing `" "` to preserve natural wrapping
