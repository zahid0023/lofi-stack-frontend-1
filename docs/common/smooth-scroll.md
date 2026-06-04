# SmoothScroll

**File:** `src/components/common/SmoothScroll.tsx`
**Type:** Client component

Wraps the app with [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll. Mounted once in `layout.tsx` — do not add to individual pages.

## Configuration

| Option | Value | Effect |
|---|---|---|
| `duration` | `0.9` | Scroll inertia in seconds |
| `smoothWheel` | `true` | Smooth mouse wheel |
| `easing` | exponential decay | Natural deceleration curve |

To adjust scroll feel, edit the `new Lenis({ ... })` call inside `SmoothScroll.tsx`.
