# Clean Code Issues

> 9 issues fixed. 15 new issues open.

| #                                                                         | Severity | File(s)                                                             | Issue                                                                                                | Status   |
| ------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------- |
| [1](#issue-1--dead-colwidth-state)                                        | High     | `landing/hero/HeroSection.tsx`                                      | Dead `colWidth` state + unused `ResizeObserver`                                                      | ✅ Fixed |
| [2](#issue-2--duplicate-ctabutton)                                        | High     | `landing/hero/HeroSection.tsx`                                      | Local `CtaButton` duplicates `ui/CtaButton.tsx`                                                      | ✅ Fixed |
| [3](#issue-3--inline-styles--imperative-hover-handlers)                   | Medium   | `common/Navbar.tsx`, `common/BottomRail.tsx`                        | Inline `style={}` objects + imperative hover handlers                                                | ✅ Fixed |
| [4](#issue-4--duplicated-intersectionobserver)                            | Medium   | `features/`, `clients/`, `gallery/` sections                        | `IntersectionObserver` setup duplicated 3×                                                           | ✅ Fixed |
| [5](#issue-5--inline-testimonial-in-clientssection)                       | Medium   | `landing/clients/ClientsSection.tsx`                                | Inline testimonial ignores existing `TestimonialCard`                                                | ✅ Fixed |
| [6](#issue-6--array-index-as-react-key)                                   | Low      | Multiple                                                            | Array index used as React `key`                                                                      | ✅ Fixed |
| [7](#issue-7--section-used-for-layout-containers)                         | Low      | `EthosSection`, `ClientsSection`                                    | `<section>` used for layout-only containers                                                          | ✅ Fixed |
| [8](#issue-8--header-used-as-label-tag)                                   | Low      | `ui/SectionTag.tsx`                                                 | `<header>` element used as a label tag                                                               | ✅ Fixed |
| [9](#issue-9--module-level-derived-array)                                 | Low      | `landing/gallery/GallerySection.tsx`                                | `ROW2` derived at module level                                                                       | ✅ Fixed |
| [10](#issue-10--hardcoded-content-in-aboutsection-hero)                   | High     | `about-us/AboutSection.tsx`                                         | Hero block content fully hardcoded — not data-driven                                                 | ⬜ Open  |
| [11](#issue-11--alt-text-typos-in-aboutsection-hero)                      | High     | `about-us/AboutSection.tsx`                                         | `alt="about us iamge"` and `alt="avatr"` — typos                                                     | ✅ Fixed |
| [12](#issue-12--section-layout-wrapper-in-aboutsection)                   | Low      | `about-us/AboutSection.tsx`                                         | Inner `<section>` used as layout-only wrapper + unnecessary `cn()`                                   | ✅ Fixed |
| [13](#issue-13--dead-onreplay-prop-in-bottomrail)                         | Medium   | `common/BottomRail.tsx`, `app/page.tsx`                             | `onReplay` prop defined but never passed — replay button never renders                               | ⬜ Open  |
| [14](#issue-14--unused-variable-i-in-ethossection)                        | Low      | `landing/ethos/EthosSection.tsx`                                    | Unused variable `i` in `.map((p, i) =>`                                                              | ✅ Fixed |
| [15](#issue-15--unused-spanclass-in-lifeatsection)                        | Low      | `about-us/LifeAtSection.tsx`                                        | `spanClass` record defined at module level but never used                                            | ✅ Fixed |
| [16](#issue-16--raw-button-in-ourteamsection)                             | Low      | `about-us/OurTeamSection.tsx`                                       | Raw `<button>` used for carousel nav instead of shadcn `CarouselPrevious`/`CarouselNext`             | ⬜ Open  |
| [17](#issue-17--index-keys-on-gallery-marquee-arrays)                     | Low      | `landing/gallery/GallerySection.tsx`                                | Array index keys on duplicated marquee arrays — issue #6 not applied here                            | ⬜ Open  |
| [18](#issue-18--raw-a-tag-in-processsection-cta)                          | Low      | `services/ProcessSection.tsx`                                       | Raw `<a>` tag in CTA strip instead of `CtaButton` component                                          | ⬜ Open  |
| [19](#issue-19--missing-lofistack-logo-asset)                             | High     | `common/Navbar.tsx`                                                 | No Lofistack logo image — Navbar uses plain text fallback only                                       | ⬜ Open  |
| [20](#issue-20--coordinate-missing-place-name-carousel)                   | Medium   | `common/Navbar.tsx`                                                 | Coordinate shows lat/long only — place name carousel is missing                                      | ⬜ Open  |
| [21](#issue-21--grid-lines-render-over-sectiontag-and-phase)              | High     | `landing/hero/HeroSection.tsx`                                      | Grid lines render on top of SectionTag and phase indicator — z-order is wrong                        | ⬜ Open  |
| [22](#issue-22--animated-wordmark-does-not-span-line-1-to-line-11)        | High     | `landing/hero/HeroSection.tsx`, `landing/hero/AnimatedWordmark.tsx` | Wordmark "L" does not start at line 1 and "K" does not stop at line 11                               | ⬜ Open  |
| [23](#issue-23--cta-buttons-lack-visual-style)                            | Low      | `landing/hero/HeroSection.tsx`, `common/CtaButton.tsx`              | CTA buttons in HeroSection footer lack a distinctive, polished visual style                          | ⬜ Open  |
| [24](#issue-24--clientssection-sticky-header-leaves-gaps-while-scrolling) | High     | `landing/clients/ClientsSection.tsx`                                | Sticky SectionTag + SectionHeading leaves empty space — sections 2, 3, 4 do not flow correctly below | ✅ Fixed |

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
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("in", e.isIntersecting),
        ),
      { threshold },
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
/>;
```

---

## Issue 6 — Array index as React key

**Files:** `EthosSection.tsx`, `ScrollParagraph.tsx`, `HeroSection.tsx`, `BottomRail.tsx`, `LogoMarquee.tsx`
**Severity:** Low

### Problem

Five `.map()` calls used the array index `i` as the React `key`. Index keys cause React to misidentify elements when lists reorder or items are inserted/removed, leading to incorrect reconciliation and stale state bugs. For duplicated arrays (marquees, tickers), the same index appears twice in the DOM.

### How it was fixed

Each case was fixed based on what stable identity was available:

| File              | Old key   | New key                        | Reason                                           |
| ----------------- | --------- | ------------------------------ | ------------------------------------------------ |
| `EthosSection`    | `key={i}` | `key={p.text}`                 | Each paragraph's text is unique                  |
| `ScrollParagraph` | `key={i}` | ``key={`${word}-${i}`}``       | Words repeat; compound key is stable by position |
| `HeroSection`     | `key={i}` | ``key={`${word}-${i}`}``       | Same — words in a fixed string                   |
| `BottomRail`      | `key={i}` | ``key={`${item.label}-${i}`}`` | Array is doubled for seamless loop               |
| `LogoMarquee`     | `key={i}` | ``key={`${logo.name}-${i}`}``  | Array is doubled for seamless loop               |

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

---

## Issue 10 — Hardcoded content in AboutSection hero

**File:** `about-us/AboutSection.tsx`
**Severity:** High

### Problem

The hero block inside `AboutSection` has all content hardcoded directly in JSX — the headline, body copy, cover image URL, crew avatar URL, name "John Doe", and role "Creative Director". Every other section across the codebase reads from a data file (`src/data/`). This hero block is the only section that cannot be updated without editing component code.

---

## Issue 11 — Alt text typos in AboutSection hero

**File:** `about-us/AboutSection.tsx`
**Severity:** High

### Problem

Two `<img>` elements have incorrect `alt` attributes:

- `alt="about us iamge"` — "iamge" should be "image"
- `alt="avatr"` — "avatr" should be "avatar"

Screen readers will read these misspellings aloud, and they fail basic accessibility checks.

### How it was fixed

The `alt` attributes were corrected to fix the typos:

- `alt="about us iamge"` → `alt="about us image"`
- `alt="avatr"` → `alt="avatar"`

---

## Issue 12 — `<section>` layout wrapper + unnecessary `cn()` in AboutSection

**File:** `about-us/AboutSection.tsx`
**Severity:** Low

### Problem

Two separate problems in the same file:

1. The hero content is wrapped in `<section className={cn("py-32")}>`. This is a layout-only container with no semantic meaning — the same pattern fixed in Issue 7 for `EthosSection` and `ClientsSection` was not applied here.

2. `cn("py-32")` calls `cn` with a single static string. `cn` is a utility for merging conditional or conflicting class names — calling it with one unconditional string adds a function call overhead with no benefit.

### How it was fixed

Create another component `<IntroSection />` for the hero block, and move the content and `py-32` padding class there. This removes the layout-only `<section>` from `AboutSection` and gives the hero block its own semantic component.

---

## Issue 13 — Dead `onReplay` prop in BottomRail

**File:** `common/BottomRail.tsx`, `app/page.tsx`
**Severity:** Medium

### Problem

`BottomRail` accepts an `onReplay` prop and conditionally renders a replay button when it is passed. However, `page.tsx` renders `<BottomRail />` with no props — the replay button never appears in any page. The prop and its conditional render branch are dead code.

---

## Issue 14 — Unused variable `i` in EthosSection

**File:** `landing/ethos/EthosSection.tsx`
**Severity:** Low

### Problem

```tsx
{
  PARAGRAPHS.map((p, i) => (
    <ScrollParagraph key={p.text} lead={p.lead} text={p.text} />
  ));
}
```

The index `i` is declared in the map callback but never used. The key is correctly derived from `p.text`, not `i`.

### How it was fixed

Deleted the unused variable `i` from the map callback:

```tsx
{
  PARAGRAPHS.map((p) => (
    <ScrollParagraph key={p.text} lead={p.lead} text={p.text} />
  ));
}
```

---

## Issue 15 — Unused `spanClass` in LifeAtSection

**File:** `about-us/LifeAtSection.tsx`
**Severity:** Low

### Problem

A `spanClass` record is defined at module level but never referenced anywhere in the component. The bento grid uses inline conditional expressions instead:

```ts
const spanClass: Record<string, string> = {
  wide: "col-span-2",
  tall: "row-span-2",
  normal: "col-span-1",
};
```

---

## Issue 16 — Raw `<button>` for carousel navigation in OurTeamSection

**File:** `about-us/OurTeamSection.tsx`
**Severity:** Low

### Problem

The carousel prev/next controls use hand-rolled `<button>` elements with manual `onClick={() => api?.scrollPrev()}` calls. The shadcn `carousel` component ships `CarouselPrevious` and `CarouselNext` sub-components specifically for this purpose, with built-in disabled state, accessibility attributes, and consistent styling. Using raw buttons bypasses these and drifts from the design system.

---

## Issue 17 — Array index keys on duplicated gallery marquee arrays

**File:** `landing/gallery/GallerySection.tsx`
**Severity:** Low

### Problem

Issue #6 fixed index-based React keys in `BottomRail`, `LogoMarquee`, and `HeroSection`, but `GallerySection` was missed:

```tsx
{
  [...ROW1, ...ROW1].map((m, i) => <GalleryCard key={`r1-${i}`} {...m} />);
}
{
  [...row2, ...row2].map((m, i) => <GalleryCard key={`r2-${i}`} {...m} />);
}
```

Because the array is doubled for the seamless loop, two cards share the same index within each pass (e.g. index 0 appears twice). The row prefix prevents cross-row collisions but not within-row ones.

---

## Issue 18 — Raw `<a>` tag in ProcessSection CTA strip

**File:** `services/ProcessSection.tsx`
**Severity:** Low

### Problem

The CTA strip at the bottom of `ProcessSection` uses a raw `<a>` element with manually duplicated pill styles. Every other CTA across the codebase uses the shared `CtaButton` component, which encapsulates the lofi pill style, hover states, and the `asChild` + `href` pattern. This one-off `<a>` duplicates those styles and drifts from the design system.

---

## Issue 19 — Missing Lofistack logo asset

**File:** `common/Navbar.tsx`
**Severity:** High

### Problem

The Navbar renders the brand identity as a plain orange dot + "LOFISTACK" text string. There is no actual logo image — no `<img>` or `<svg>` asset exists in `/public/`. The component map specifies that the Navbar logo should display a Lofistack logo image (`lofistack-logo.svg` or `.png`) with the text as a fallback. Without the asset, the brand mark is missing from every page across the entire site.

---

## Issue 24 — ClientsSection sticky header leaves gaps while scrolling

**File:** `landing/clients/ClientsSection.tsx`
**Severity:** High

### Problem

The `[ 04 — Clients ]` SectionTag and SectionHeading are sticky at the top of the section. While the user scrolls down through Section 2 (Logo Marquee), Section 3 (Brand Cards), and Section 4 (TestimonialCard), unwanted empty space appears between the sticky header and the content below it. Sections 2, 3, and 4 should flow directly and continuously beneath the sticky header with no gaps — each section visible immediately below the previous one as the user scrolls.

---

## Issue 23 — CTA buttons lack visual style

**File:** `landing/hero/HeroSection.tsx`, `common/CtaButton.tsx`
**Severity:** Low

### Problem

The CTA buttons in the HeroSection footer (`▶ play intro` and `Book a Consultation`) use a basic pill style with minimal visual distinction. They lack a polished, characterful look that matches the lofi aesthetic of the rest of the section — the buttons should feel intentional and visually interesting, not generic.

---

## Issue 22 — Animated wordmark does not span line 1 to line 11

**File:** `landing/hero/HeroSection.tsx`, `landing/hero/AnimatedWordmark.tsx`
**Severity:** High

### Problem

In spread mode the "LOFISTACK" wordmark should fill exactly from the 1st vertical grid line to the 11th vertical grid line — the left edge of "L" touching line 1 and the right edge of "K" touching line 11. Currently the wordmark is centered with fixed pixel offsets (`left: 48px`, `right: 48px`) and does not align to the grid lines. The wordmark width and position must be derived from the column grid so it always stretches precisely between line 1 and line 11 regardless of viewport width.

---

## Issue 21 — Grid lines render over SectionTag and phase indicator

**File:** `landing/hero/HeroSection.tsx`
**Severity:** High

### Problem

The 11 vertical grid lines are rendered as an `absolute` overlay spanning the full section. The grid line `<div>` currently has no explicit z-index, so it stacks above the SectionTag and the phase indicator in certain paint orders. The grid lines should always sit underneath all content — SectionTag and phase must render on top of the grid, not below it.

---

## Issue 20 — Coordinate missing place name carousel

**File:** `common/Navbar.tsx`
**Severity:** Medium

### Problem

The Navbar coordinate block shows only a static lat/long. It should instead be a single auto-cycling ticker that alternates between the coordinate and "Singapore" on repeat indefinitely:

`1.3521° N / 103.8198° E → Singapore → 1.3521° N / 103.8198° E → Singapore → 1.3521° N / 103.8198° E → Singapore → …`

Each step flips/slides to the next value on a timed interval. Currently only the static coordinates are rendered — the alternating carousel is missing entirely.

## Issue -24 - ClientsSection sticky header leaves gaps while scrolling

The `[ 04 — Clients ]` SectionTag and SectionHeading are sticky at the top of the section. While the user scrolls down through Section 2 (Logo Marquee), Section 3 (Brand Cards), and Section 4 (TestimonialCard), unwanted empty space appears between the sticky header and the content below it. Sections 2, 3, and 4 should flow directly and continuously beneath the sticky header with no gaps — each section visible immediately below the previous one as the user scrolls.

### How it was fixed

I refactored the top position from value `top-[148px]` to `top-32`, which is the height of the SectionTag plus some margin. This ensures that the sticky header remains directly above the content as the user scrolls, without leaving any gaps.
