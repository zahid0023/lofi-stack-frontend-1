# AnimatedWordmark

**File:** `src/components/landing/hero/AnimatedWordmark.tsx`
**Type:** Client component

SVG stroke-draw wordmark. Each letter animates in via `strokeDashoffset`.

## Props

| Prop | Type | Description |
|---|---|---|
| `mode` | `"idle" \| "spread" \| "collapsed" \| "final"` | Layout mode |
| `revealedCount` | `number` | How many letters are drawn (0–9) |

## Modes

| Mode | Behaviour |
|---|---|
| `spread` | Letters centered with max gap, accent ticks visible |
| `collapsed` | `justify-content: space-between`, gap closes over 1100 ms |
| `final` | Same as collapsed, all letters revealed instantly |

## Notes

- Font size is capped by a `ResizeObserver` so letters never overflow the container
- `strokeDasharray` values are set in SVG units — do not use `em` here
