# BottomRail

**File:** `src/components/common/BottomRail.tsx`
**Type:** Client component

Footer bar shared across every page. Three columns: cassette icon · service ticker · optional replay button.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `onReplay` | `() => void` | — | When provided, renders a "↺ replay sequence" pill button |

## Ticker

Service labels are defined in `TICKER_ITEMS` at the top of the file. Edit that array to change what scrolls.

## Animations

- Cassette reels: `lofi-spin` keyframe in `globals.css`
- Ticker scroll: `lofi-ticker` keyframe in `globals.css`

## Known issues

- Uses inline `style={}` objects instead of Tailwind — see `docs/clean-code.md` Issue 3
