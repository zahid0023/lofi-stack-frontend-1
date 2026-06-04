# Clean Code Issues

> All 9 issues fixed.

| # | Severity | File(s) | Issue | Status |
|---|---|---|---|---|
| [1](#issue-1--dead-colwidth-state) | High | `landing/hero/HeroSection.tsx` | Dead `colWidth` state + unused `ResizeObserver` | ✅ Fixed |
| [2](#issue-2--duplicate-ctabutton) | High | `landing/hero/HeroSection.tsx` | Local `CtaButton` duplicates `ui/CtaButton.tsx` | ✅ Fixed |
| [3](#issue-3--inline-styles--imperative-hover-handlers) | Medium | `common/Navbar.tsx`, `common/BottomRail.tsx` | Inline `style={}` objects + imperative hover handlers | ✅ Fixed |
| [4](#issue-4--duplicated-intersectionobserver) | Medium | `features/`, `clients/`, `gallery/` sections | `IntersectionObserver` setup duplicated 3× | ✅ Fixed |
| [5](#issue-5--inline-testimonial-in-clientssection) | Medium | `landing/clients/ClientsSection.tsx` | Inline testimonial ignores existing `TestimonialCard` | ✅ Fixed |
| [6](#issue-6--array-index-as-react-key) | Low | Multiple | Array index used as React `key` | ✅ Fixed |
| [7](#issue-7--section-used-for-layout-containers) | Low | `EthosSection`, `ClientsSection` | `<section>` used for layout-only containers | ✅ Fixed |
| [8](#issue-8--header-used-as-label-tag) | Low | `ui/SectionTag.tsx` | `<header>` element used as a label tag | ✅ Fixed |
| [9](#issue-9--module-level-derived-array) | Low | `landing/gallery/GallerySection.tsx` | `ROW2` derived at module level | ✅ Fixed |

---

## Issue 1 — Dead `colWidth` state

**File:** `landing/hero/HeroSection.tsx`
**Severity:** High

### Problem
`HeroSection` had a `colWidth` state variable, a `setColWidth` setter, and a `useLayoutEffect` that set up a `ResizeObserver` to track the section width. None of this data was ever read or used anywhere in the render — the value was computed and discarded. The `ResizeObserver` also ran on every resize, adding unnecessary overhead on every frame.

### How it was fixed
Deleted the `colWidth` state declaration, the `setColWidth` call, the entire `useLayoutEffect` block, and the `useLayoutEffect` import (reducing it to just `useEffect`). No visual or behavioural change — the dead code simply did not exist in any output path.

---

## Issue 2 — Duplicate CtaButton

**File:** `landing/hero/HeroSection.tsx`
**Severity:** High

### Problem
`HeroSection.tsx` had a full local `CtaButton` component defined at the bottom of the file (lines 278–305). An identical shared component already existed at `src/components/ui/CtaButton.tsx`. Any styling changes to the button would need to be made in two places, with no indication they were meant to be the same component.

### How it was fixed
Deleted the local component definition entirely. Added the import that was already present in every other section:

```tsx
import CtaButton from "@/components/ui/CtaButton";
```

The call sites inside `HeroSection` were already passing the correct props (`variant`, `href`, `onClick`, children), so no usage changes were needed.

---

## Issue 3 — Inline styles & imperative hover handlers

**Files:** `common/Navbar.tsx`, `common/BottomRail.tsx`
**Severity:** Medium

### Problem
Both components used `style={{ ... }}` objects for all visual properties (font, color, border, padding, etc.) and `onMouseEnter`/`onMouseLeave` handlers that directly mutated `e.currentTarget.style` to implement hover effects. This meant:
- Styles were invisible to Tailwind's purge/scan, making the design system inconsistent
- The `"use client"` directive on `Navbar` was only needed because of the mouse event handlers — removing them made the component fully static
- Every render created new object references for every `style` prop

### How it was fixed
Replaced all `style={}` objects with Tailwind utility classes using CSS custom property values (e.g. `text-[var(--lofi-ink)]`). Replaced `onMouseEnter`/`onMouseLeave` mutations with `hover:` variants:

```tsx
// Before
onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lofi-ink)")}
onMouseLeave={(e) => (e.currentTarget.style.color = "var(--lofi-ink-soft)")}

// After
className="text-[var(--lofi-ink-soft)] hover:text-[var(--lofi-ink)] transition-colors duration-150"
```

The only `style={}` retained in `BottomRail` is `maskImage`/`WebkitMaskImage` — vendor-prefixed CSS mask properties that have no Tailwind equivalent. `"use client"` was removed from `Navbar` since it had no remaining JS handlers. `BottomRail` keeps `"use client"` for the replay button's `onClick`.

---

## Issue 4 — Duplicated IntersectionObserver

**Files:** `features/FeaturesSection.tsx`, `clients/ClientsSection.tsx`, `gallery/GallerySection.tsx`
**Severity:** Medium

### Problem
All three section components contained an identical `useEffect` block wiring up an `IntersectionObserver` to toggle an `"in"` class on any `.lofi-reveal` child as it entered the viewport. The only difference was the `threshold` value (`0.12`, `0.08`, `0.12`). Three copies of the same logic meant any behaviour change had to be applied three times.

### How it was fixed
Extracted the pattern into `src/hooks/useRevealObserver.ts`:

```ts
export function useRevealObserver(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const reveals = ref.current?.querySelectorAll(".lofi-reveal");
    if (!reveals?.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting)),
      { threshold }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
```

Each section replaced its `useRef` + `useEffect` block with a single call. `FeaturesSection` already used `sectionRef` for its scroll progress calculation — assigning the hook's return value to `sectionRef` preserved that without needing a second ref on the same element. `ClientsSection` passed `0.08` to preserve its lower threshold.

---

## Issue 5 — Inline testimonial in ClientsSection

**File:** `landing/clients/ClientsSection.tsx`
**Severity:** Medium

### Problem
`ClientsSection` contained a 20-line inline block rendering a testimonial quote — complete with its own `<blockquote>`, decorative `"` character, `<footer>`, and typography classes. `TestimonialCard` already existed in `landing/features/TestimonialCard.tsx` with exactly this responsibility and an identical visual design. The duplication meant two different DOM structures for what was visually the same component.

### How it was fixed
Deleted the inline block, imported `TestimonialCard`, and passed the data from `clientsHeadline.quote`:

```tsx
import TestimonialCard from "@/components/landing/features/TestimonialCard";

<TestimonialCard
  quote={clientsHeadline.quote.text}
  author={clientsHeadline.quote.author}
  role={clientsHeadline.quote.role}
/>
```

---

## Issue 6 — Array index as React key

**Files:** `EthosSection.tsx`, `ScrollParagraph.tsx`, `HeroSection.tsx`, `BottomRail.tsx`, `LogoMarquee.tsx`
**Severity:** Low

### Problem
Five `.map()` calls used the array index `i` as the React `key`. Index keys cause React to misidentify elements when lists reorder or items are inserted/removed, leading to incorrect reconciliation and stale state bugs. For duplicated arrays (marquees, tickers), the same index appears twice in the DOM.

### How it was fixed
Each case was fixed based on what stable identity was available:

| File | Old key | New key | Reason |
|---|---|---|---|
| `EthosSection` | `key={i}` | `key={p.text}` | Each paragraph's text is unique |
| `ScrollParagraph` | `key={i}` | `` key={`${word}-${i}`} `` | Words repeat; compound key is stable by position |
| `HeroSection` | `key={i}` | `` key={`${word}-${i}`} `` | Same — words in a fixed string |
| `BottomRail` | `key={i}` | `` key={`${item.label}-${i}`} `` | Array is doubled for seamless loop |
| `LogoMarquee` | `key={i}` | `` key={`${logo.name}-${i}`} `` | Array is doubled for seamless loop |

---

## Issue 7 — `<section>` used for layout containers

**Files:** `landing/ethos/EthosSection.tsx`, `landing/clients/ClientsSection.tsx`
**Severity:** Low

### Problem
`<section>` is a semantic landmark element — assistive technologies expose it as a named region. Both components used `<section>` for purely structural layout containers (flex rows, column wrappers, reveal wrappers) that carried no semantic meaning. This pollutes the page's landmark outline and can confuse screen reader navigation.

### How it was fixed
Changed layout-only `<section>` elements to `<div>`. The outer `<section>` on each component (the true page landmark) was left unchanged.

**EthosSection** (2 changes):
- Flex row wrapper containing `SectionHeading` + article → `<div>`
- Bare wrapper around the `<article>` → `<div>`

**ClientsSection** (4 changes):
- Stats column inside the sticky header → `<div>`
- Marquee reveal wrapper → `<div>`
- Client cards grid wrapper → `<div>`
- Testimonial reveal wrapper → `<div>`

---

## Issue 8 — `<header>` used as a label tag

**File:** `ui/SectionTag.tsx`
**Severity:** Low

### Problem
`SectionTag` rendered a `<header>` element. The `<header>` tag carries the implicit ARIA role `banner` (at page level) or `sectionheading`, and is intended for introductory content at the top of a page or section. Here it was used as a small decorative label strip — not a header in any structural sense. Screen readers would announce it as a banner landmark.

### How it was fixed
Replaced `<header>` with `<div>`. The element's visual appearance is unchanged; it retains all its Tailwind classes. It now has no implicit ARIA role, which is correct for a decorative label.

```tsx
// Before
<header className="sticky top-[80px] z-20 ...">

// After
<div className="sticky top-[80px] z-20 ...">
```

---

## Issue 9 — Module-level derived array

**File:** `landing/gallery/GallerySection.tsx`
**Severity:** Low

### Problem
`ROW2` was derived at module scope by reversing `MOMENTS`:

```ts
const ROW2 = [...MOMENTS].reverse();
```

Module-level code runs once when the module is first imported and is never garbage-collected. For a pure derivation from another constant this is low risk, but it executes outside React's lifecycle — it cannot be conditional, cannot be memoized per-render, and makes the module harder to tree-shake. It also created an inconsistency where `ROW1` was just an alias (`const ROW1 = MOMENTS`) while `ROW2` was a derived copy.

### How it was fixed
Moved the derivation inside the component using `useMemo`, and removed the module-level constant:

```tsx
// Before — module level
const ROW2 = [...MOMENTS].reverse();

// After — inside component
const row2 = useMemo(() => [...MOMENTS].reverse(), []);
```

The empty dependency array means it still only computes once per component mount, with no performance difference. This fix was applied alongside Issue 4 since both touched `GallerySection`.
