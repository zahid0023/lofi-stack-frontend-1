# HeroSection

**File:** `src/components/landing/hero/HeroSection.tsx`
**Type:** Client component | **Palette:** Dark

Full-viewport intro with a multi-phase entrance animation and audio playback.

## Phase sequence

```
idle → wm-reveal → wm-collapse → wm-exit → tag-type → tag-park → desc-stagger → desc-park → final-wm → rest
```

| Phase | What's visible |
|---|---|
| `idle` | Nothing |
| `wm-reveal` | Wordmark letters draw in |
| `wm-collapse` | Letters compress together |
| `wm-exit` | Wordmark fades out |
| `tag-type` | Tagline types in |
| `tag-park` | Tagline moves to footer left |
| `desc-stagger` | Description words stagger in |
| `desc-park` | Description moves to footer right |
| `final-wm` | Wordmark returns compact |
| `rest` | CTA buttons visible |

## Timing

Edit the `T` object at the top of the file to adjust delays (all values in ms):

```ts
const T = {
  INIT_DELAY: 400,
  COLLAPSE_AFTER: 1800,
  EXIT_AFTER: 2800,
  TAG_TYPE_AFTER: 3500,
  TAG_PARK_AFTER: 5200,
  DESC_STAGGER_AFTER: 5900,
  DESC_PARK_AFTER: 8500,
  FINAL_WM_AFTER: 9300,
  REST_AFTER: 10100,
};
```

## Audio

- File: `public/lofi_sound.mp3`
- Plays on sequence start, stops on `■ stop` or when the track ends
- `audioRef` is lazily created on first play

## Sub-components

- [`AnimatedWordmark`](./animated-wordmark.md)

## Known issues

- Local `CtaButton` duplicates `src/components/ui/CtaButton.tsx` — see `docs/clean-code.md` Issue 2
