# Component Map

---

## Landing Page (`/`)

---

### Navbar

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Rail | - Full-width, sticky top-0, z-50<br>- backdrop-blur dark bg<br>- Bottom border lofi-line<br>- 3-col layout: logo · nav items · coordinate<br>- **Mobile:** hidden by default; slides down when hamburger is tapped; overlay or push layout | — |
| Logo | - Left col<br>- Lofistack logo image, fixed height<br>- Fallback: orange dot + "LOFISTACK" text if image fails<br>- Links to `/` | - Image: `lofistack-logo.svg` (or `.png`) |
| Nav items | - Center col<br>- 6 links: Home, About Us, Services, Pricing, Showcase, Blogs<br>- JetBrains Mono 12px uppercase tracking<br>- ink-soft → ink on hover (150ms)<br>- Active page link highlighted in accent<br>- **Mobile:** stacked vertically in the revealed menu | - Font: JetBrains Mono |
| Coordinate | - Right col<br>- Label "COORDINATE" in mono uppercase above the lat/long (toggleable — click to show/hide the label)<br>- Two-line lat/long: 1.3521° N / 103.8198° E<br>- muted → accent on hover<br>- Opens Google Maps on click<br>- **Mobile:** hidden or collapsed into menu | — |
| Hamburger button | - Visible on mobile only<br>- 3-line icon at rest → X when menu is open<br>- Toggles nav menu open/closed<br>- Positioned right col on mobile | — |

---

### HeroSection

#### Layout

- Min-height: 100vh minus navbar height
- 11 vertical grid lines span the full section width (lofi-line color, 60% opacity, pointer-events-none)
- **All content is contained between line 1 and line 11** — left and right edges align to the 1st and 11th lines (via `px-[calc(100%/12)]` column padding)
- Divided into three rows: **Header · Content · Footer**

---

#### Header

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| SectionTag | - Sticky label, dark variant<br>- Sits directly below navbar<br>- Full-width | - Text: `src/data/landing/hero.ts` → `label` |
| Phase indicator | - Reads current animation phase (idle → wm-reveal → wm-collapse → wm-exit → tag-type → tag-park → desc-stagger → desc-park → final-wm → rest)<br>- Controls visibility of all content elements below | — |

---

#### Content

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| AnimatedWordmark | - 9 SVG letters, each drawn via stroke-dashoffset animation<br>- **Spread mode:** letters span from line 1 to line 11 — "L" left edge touches line 1, "K" right edge touches line 11<br>- **Final mode:** wordmark stays at full spread size — does not shrink or collapse<br>- 650ms opacity transitions between modes<br>- Visible during: wm-reveal, wm-collapse, final-wm, rest phases | - SVG stroke paths for each letter of the wordmark<br>- Text: `src/data/landing/hero.ts` → `wordmark` |
| Tagline animation | - Space Grotesk medium clamp(36px–84px)<br>- Absolutely centered at vertical midpoint<br>- Typewriter effect: characters appear one by one (45ms each)<br>- Blinking caret `|` at end while typing<br>- Fades out when phase moves past tag-type<br>- Visible during: tag-type phase only | - Text: `src/data/landing/hero.ts` → `tagline` |
| Description animation | - Space Grotesk medium clamp(22px–48px)<br>- Absolutely centered at vertical midpoint<br>- Words appear one by one with 130ms stagger, slide+fade in<br>- Max 22ch centered<br>- Fades out when phase moves past desc-stagger<br>- Visible during: desc-stagger phase only | - Text: `src/data/landing/hero.ts` → `description` |

---

#### Footer

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Parked tagline | - Bottom-left<br>- Em-dash rule above in mono muted<br>- Line 1: Instrument Serif italic muted clamp(14px–18px)<br>- Line 2: accent bold clamp(28px–44px) leading-[1.02]<br>- Fades in at tag-park phase, stays through rest | - Text: `src/data/landing/hero.ts` → `tagline` (split across two lines) |
| Parked description | - Bottom-right<br>- JetBrains Mono 10–12px muted<br>- Max 38ch, right-aligned<br>- Fades in at desc-park phase, stays through rest | - Text: `src/data/landing/hero.ts` → `description`<br>- Font: JetBrains Mono |
| Now Playing indicator | - 4 animated bar equalizer above CTA buttons<br>- Slides in / visible only while audio is playing | — |
| CtaButton ghost | - `▶ play intro` at rest → `■ stop` while audio plays<br>- Ghost pill style<br>- Clicking `▶ play intro` starts audio and re-runs animation sequence<br>- **Stop button is always visible while audio is playing**, regardless of animation phase — user can stop at any time | - Audio: `/public/lofi_sound.mp3`<br>- Text: `src/data/landing/hero.ts` → `ctaPlay`, `ctaStop` |
| CtaButton primary | - Accent fill pill<br>- Arrow `→` shifts right on hover | - Text: `src/data/landing/hero.ts` → `ctaPrimary.label`<br>- Link: `src/data/landing/hero.ts` → `ctaPrimary.href` |

---

### EthosSection

#### Layout

- **All content contained between line 1 and line 11** (via `px-[calc(100%/12)]` column padding)
- SectionTag is sticky, full-width, above the two-col layout
- Single **Content** block with two columns side by side: **Left · Right**

---

#### Content — Left

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| SectionTag | - Sticky (stays fixed as right column scrolls)<br>- Sticky label, dark variant<br>- Full-width across line 1 to line 11 | - Text: `src/data/landing/ethos.ts` → `ethosMeta.label` |
| SectionHeading (common) | - Sticky top-[148px] (stays fixed as right column scrolls)<br>- 30% width left column<br>- Overline: Instrument Serif italic accent, large<br>- Title: bold clamp(96px–220px) ink<br>- Body: JetBrains Mono 11px uppercase with top border rule<br>- Two CTA buttons (primary + secondary) below | - Text: `src/data/landing/ethos.ts` → `ethosMeta.overline`<br>- Text: `src/data/landing/ethos.ts` → `ethosMeta.since`<br>- Text: `src/data/landing/ethos.ts` → `ethosMeta.tagline`<br>- Text: `src/data/landing/ethos.ts` → `ethosMeta.cta.primary`<br>- Text: `src/data/landing/ethos.ts` → `ethosMeta.cta.secondary` |

---

#### Content — Right

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| ScrollParagraph × N | - Stacked paragraphs filling right column<br>- Each word wrapped in `.lofi-word` span<br>- Words animate dim → ink as paragraph enters 28%–82% of viewport on scroll<br>- Lead word renders bold in accent color<br>- Scroll-driven only, no click interaction | - Text: `src/data/landing/ethos.ts` → `ethosParagraphs[].lead`<br>- Text: `src/data/landing/ethos.ts` → `ethosParagraphs[].text` |

---

### FeaturesSection

#### Layout

- **All content contained between line 1 and line 11** (via `px-[calc(100%/12)]` column padding)
- SectionTag sticky, full-width, above content
- Single **Content** block with two columns: **Left · Right**
- TestimonialCard below content, full-width

---

#### Content — Left

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| SectionTag | - Sticky label, cream variant<br>- Progress bar fills left→right as section scrolls | - Text: `src/data/landing/features.ts` → `featuresHeadline.label` |
| SectionHeading (common) | - Sticky top-[140px]<br>- Overline<br>- Title with Instrument Serif italic accent phrase<br>- Body copy<br>- Two CTA buttons (primary + secondary) | - Text: `src/data/landing/features.ts` → `featuresHeadline.overline`<br>- Text: `src/data/landing/features.ts` → `featuresHeadline.title`<br>- Text: `src/data/landing/features.ts` → `featuresHeadline.body`<br>- Text: `src/data/landing/features.ts` → `featuresHeadline.cta.primary`<br>- Text: `src/data/landing/features.ts` → `featuresHeadline.cta.secondary` |

---

#### Content — Right (Scrollable FeatureCard Carousel)

- Each card occupies 100vh of scroll height
- Card is sticky at top-[140px] while its scroll container passes
- **Cards push each other** — as the next card scrolls in, it physically pushes the previous card upward out of view
- Cards stack via incrementing z-index so each new card renders on top
- cream-bg-deep background, rounded-[20px], border

##### FeatureCard — Header

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Number | - Ghost-outline index clamp(52px–76px)<br>- Space Grotesk bold<br>- Transparent fill, accent stroke `-webkit-text-stroke` | - Text: `src/data/landing/features.ts` → `features[].index` |
| Badge | - Top-right, pill outline<br>- JetBrains Mono 9px uppercase tracking<br>- cream-muted color, cream-line border | - Text: `src/data/landing/features.ts` → `features[].tag` |

##### FeatureCard — Content

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Title | - Space Grotesk semibold clamp(22px–30px)<br>- Tight tracking, cream-ink | - Text: `src/data/landing/features.ts` → `features[].title` |
| Separator | - Thin cream-line rule between title and description | — |
| Description | - Space Grotesk clamp(13px–15px) leading-[1.8]<br>- cream-ink-soft | - Text: `src/data/landing/features.ts` → `features[].description` |

##### FeatureCard — Footer

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Stat text | - Bold value clamp(17px–21px) cream-ink<br>- Mono uppercase label 9px cream-muted below | - Text: `src/data/landing/features.ts` → `features[].stat`<br>- Text: `src/data/landing/features.ts` → `features[].statLabel` |
| Arrow icon | - SVG arrow `→`, accent color<br>- Hidden (opacity 0, translateX 8px) at rest<br>- Slides in and fully visible while card is scrolled/hovered | — |
| Left accent line | - 3px vertical bar, rounded, accent color<br>- Positioned left edge of card, inset top-8 bottom-8<br>- Grows from 0 → full height on hover (scale-y, origin-bottom, 500ms) | — |

---

#### TestimonialCard

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| TestimonialCard | - Full-width below carousel<br>- Large decorative `"` in accent<br>- Blockquote text<br>- Separator rule<br>- Author + role in mono | - Text: `src/data/landing/features.ts` → `featuresHeadline.testimonial.quote`<br>- Text: `src/data/landing/features.ts` → `featuresHeadline.testimonial.author`<br>- Text: `src/data/landing/features.ts` → `featuresHeadline.testimonial.role` |

---

### ClientsSection

#### Layout

- **All content contained between line 1 and line 11** (via `px-[calc(100%/12)]` column padding)
- SectionTag sticky, full-width, above content
- Single **Content** block with four stacked sections

---

#### Content — Section 1: SectionHeading + Stats

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| SectionTag | - Sticky label, cream variant<br>- Full-width across line 1 to line 11 | - Text: `src/data/landing/clients.ts` → `clientsHeadline.label` |
| SectionHeading (common) | - Left side, sticky<br>- Overline<br>- Title with Instrument Serif italic accent phrase<br>- Body copy<br>- Two CTA buttons (primary + secondary) | - Text: `src/data/landing/clients.ts` → `clientsHeadline.overline`<br>- Text: `src/data/landing/clients.ts` → `clientsHeadline.title`<br>- Text: `src/data/landing/clients.ts` → `clientsHeadline.body`<br>- Text: `src/data/landing/clients.ts` → `clientsHeadline.cta.primary`<br>- Text: `src/data/landing/clients.ts` → `clientsHeadline.cta.secondary` |
| Stats block | - Right side, sticky alongside SectionHeading<br>- 3 stacked rows, each: value Space Grotesk bold clamp(36px–56px) + mono uppercase label<br>- Rows separated by rules | - Text: `src/data/landing/clients.ts` → `clientStats[].value`<br>- Text: `src/data/landing/clients.ts` → `clientStats[].label` |

---

#### Content — Section 2: Brand Logo Marquee

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| LogoMarquee | - Full-width rounded border card<br>- Continuous left scroll<br>- Each item: Avatar circle with initials + company name + thin vertical divider<br>- Edges fade via CSS mask | - Text: `src/data/landing/clients.ts` → `logos[].name`<br>- Text: `src/data/landing/clients.ts` → `logos[].initials` |

---

#### Content — Section 3: Brand Cards

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| ClientCard × N | - 3-col grid, rounded-2xl border<br>- **Header:** Avatar initials circle + industry Badge on dot-grid bg<br>- **Body:** company name semibold + description muted<br>- Border → accent, soft shadow on hover | - Text: `src/data/landing/clients.ts` → `clients[].initials`<br>- Text: `src/data/landing/clients.ts` → `clients[].name`<br>- Text: `src/data/landing/clients.ts` → `clients[].industry`<br>- Text: `src/data/landing/clients.ts` → `clients[].description` |

---

#### Content — Section 4: TestimonialCard

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| TestimonialCard | - Full-width<br>- Large decorative `"` in accent<br>- Blockquote text<br>- Separator rule<br>- Author + role in mono | - Text: `src/data/landing/clients.ts` → `clientsHeadline.quote.text`<br>- Text: `src/data/landing/clients.ts` → `clientsHeadline.quote.author`<br>- Text: `src/data/landing/clients.ts` → `clientsHeadline.quote.role` |

---

### GallerySection

#### Layout

- SectionTag and SectionHeading **contained between line 1 and line 11** (via `px-[calc(100%/12)]` column padding)
- **ImageCardMarquee is full-width** — breaks out of column padding, spans edge to edge of the viewport
- Single **Content** block with two stacked sections: **SectionHeading · ImageCardMarquee**

---

#### Content — SectionHeading

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| SectionTag | - Sticky label, cream variant<br>- Contained between line 1 and line 11 | - Text: `src/data/landing/gallery.ts` → `galleryHeadline.label` |
| SectionHeading (common) | - Contained between line 1 and line 11<br>- Overline<br>- Title with Instrument Serif italic accent phrase<br>- Body copy<br>- Two CTA buttons (primary + secondary) | - Text: `src/data/landing/gallery.ts` → `galleryHeadline.overline`<br>- Text: `src/data/landing/gallery.ts` → `galleryHeadline.title`<br>- Text: `src/data/landing/gallery.ts` → `galleryHeadline.body`<br>- Text: `src/data/landing/gallery.ts` → `galleryHeadline.cta.primary`<br>- Text: `src/data/landing/gallery.ts` → `galleryHeadline.cta.secondary` |

---

#### Content — ImageCardMarquee

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| GalleryCard × N — Row 1 | - **Full-width marquee** (edge to edge, escapes column padding)<br>- Scrolls left at 52s, pauses on hover<br>- GalleryCard: 210×210px cream polaroid frame, 10px padding<br>- Photo: sepia+contrast filter, grain overlay, vignette<br>- Instrument Serif italic caption below photo<br>- Mono tag badge below caption<br>- Deterministic tilt + vertical offset per card id<br>- On hover: straightens, lifts 10px, scales 107%, deep shadow | - Images: `src/data/landing/gallery.ts` → `moments[].photo`<br>- Text: `src/data/landing/gallery.ts` → `moments[].caption`<br>- Text: `src/data/landing/gallery.ts` → `moments[].tag` |
| Separator | - 1px cream-line rule between the two rows<br>- Full-width | — |
| GalleryCard × N — Row 2 | - **Full-width marquee** (edge to edge, escapes column padding)<br>- Scrolls right at 60s, pauses on hover<br>- Same GalleryCard spec as Row 1<br>- Uses reversed moments array | - Same as Row 1 |
| Count label | - Bottom-left, contained between line 1 and line 11<br>- JetBrains Mono 11px uppercase muted | - Text: `src/data/landing/gallery.ts` → `galleryHeadline.footer.countLabel` |
| CtaButton ghost | - Bottom-right, contained between line 1 and line 11<br>- Inverted on hover: ink bg, cream text | - Text: `src/data/landing/gallery.ts` → `galleryHeadline.footer.cta.label`<br>- Link: `src/data/landing/gallery.ts` → `galleryHeadline.footer.cta.href` |

---

### BottomRail

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Cassette icon | - 64×38px bordered rectangle<br>- Two reel circles spin 4s linear infinite<br>- Dark bg, lofi-ink border | — |
| Scrolling ticker | - Continuous left scroll 38s<br>- Each item: bold ink label + small accent dot bullet<br>- Edges fade via CSS mask | — |
| Replay button | - Pill ghost button `↺ replay sequence`<br>- Only renders when `onReplay` prop is passed | — |

---

## About Page (`/about`)

---

### Navbar
*(same spec as Landing — logo, nav items, coordinate toggle, sticky, mobile hamburger)*

---

### AboutSection — Hero Block

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Headline | - text-5xl lg:text-7xl semibold<br>- First phrase: cream-ink<br>- Second phrase: cream-accent | — |
| Cover image | - Full-width, h-132, object-cover<br>- Sits below headline | - Image: full-width brand/team photo |
| Crew blurb | - 2-col on lg<br>- Left: body copy muted<br>- Right: avatar image size-12 + name bold + role muted below | - Image: avatar portrait |

---

### OurStory

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Section heading | - 2-col on lg<br>- Left: Instrument Serif italic overline large accent + two-tone heading<br>- Right: body copy muted, aligned bottom | - Font: Instrument Serif<br>- Data: `src/data/about/index.ts` → `ourStorySection` |
| Milestone row × N | - Full-width, bottom border<br>- Ghost year number text-[88px] accent/10, absolute bg<br>- Title text-2xl semibold ink → accent on hover<br>- Body muted right side<br>- Left accent bar slides down on hover<br>- Bg wash on hover | - Data: `src/data/about/index.ts` → `milestones` |

---

### OurValueSection

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Section heading | - Same 2-col pattern<br>- Instrument Serif italic overline + heading + body copy | - Font: Instrument Serif<br>- Data: `src/data/about/index.ts` → `ourValuesSection` |
| ValueCard × N | - 3-col grid, rounded-2xl<br>- Index number italic accent large<br>- Lucide icon in ink square, skews on hover<br>- Instrument Serif italic title<br>- Body muted<br>- Last card: dark-inverted (cream-ink bg)<br>- Bottom accent bar grows on hover | - Font: Instrument Serif<br>- Icons: Lucide (Target, Sparkles, Eye, MessageCircle, Layers)<br>- Data: `src/data/about/index.ts` → `values` |

---

### OurTeamSection

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Section heading | - Same 2-col pattern<br>- Instrument Serif italic overline + heading + body copy | - Font: Instrument Serif<br>- Data: `src/data/about/index.ts` → `teamSection` |
| TeamMemberCard × N | - Free-drag carousel<br>- Portrait image 3:4 aspect ratio<br>- Image scales 105% on hover<br>- Name text-base semibold → accent on hover<br>- Mono uppercase role label below | - Images: portrait photo per member<br>- Data: `src/data/about/index.ts` → `team` |
| Prev / Next buttons | - Right-aligned pair, size-11 square<br>- cream-ink bg, efe6d6 icon<br>- → accent bg on hover<br>- 25% opacity + pointer-events-none when disabled | - Icons: Lucide ChevronLeft, ChevronRight |

---

### LifeAtSection

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Section heading | - Same 2-col pattern<br>- Instrument Serif italic overline + heading + body copy | - Font: Instrument Serif<br>- Data: `src/data/about/index.ts` → `lifeAtSection` |
| Ritual card × N | - 3-col grid, 1px gap on ink/10 bg<br>- Index in Instrument Serif italic accent<br>- Label bold → accent on hover<br>- Body muted<br>- Bg wash + bottom accent bar on hover | - Data: `src/data/about/index.ts` → `rituals` |
| Bento photo × 5 | - 3-col 2-row grid<br>- Photo 0 spans 2 cols, photo 1 spans 2 rows, rest 1×1<br>- Grayscale → color on hover<br>- Scales 105% on hover<br>- Warm accent tint fades on hover<br>- Caption slides up from bottom on hover (JetBrains Mono) | - Images: 5 photos (src, alt, caption each)<br>- Data: `src/data/about/index.ts` → `lifePhotos` |

---

## Services Page (`/services`)

---

### Navbar
*(same spec as Landing — logo, nav items, coordinate toggle, sticky, mobile hamburger)*

---

### ServicesSection

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Hero block | - py-32<br>- Overline: Instrument Serif italic text-5xl lg:text-6xl accent<br>- Heading: text-5xl lg:text-7xl two-tone (ink + accent)<br>- Body copy muted, max-xl | - Font: Instrument Serif<br>- Data: `src/data/services/index.ts` → `servicesHero` |
| Service row × N | - Full-width, bottom border, 12-col grid<br>- Left: index (Instrument Serif italic text-4xl accent) + icon square<br>- Center-left: title (Instrument Serif italic text-3xl) → accent on hover<br>- Center-right: description muted<br>- Right: deliverable bullet list with accent dots<br>- Left accent bar + bg wash on hover | - Icons: Lucide (Layers, Paintbrush, GitBranch, Users, Zap)<br>- Data: `src/data/services/index.ts` → `services` |

---

### OurProductsSection

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Section heading | - Same 2-col pattern<br>- Instrument Serif italic overline + heading + body copy | - Font: Instrument Serif<br>- Data: `src/data/services/index.ts` → `ourProductsSection` |
| Featured product card | - Dark cream-ink bg, spans 2 cols<br>- min-h-[380px]<br>- Tag pill + year top row<br>- Instrument Serif italic title text-5xl → accent on hover<br>- Body muted max-lg<br>- Bottom accent bar on hover | - Data: `src/data/services/index.ts` → `products` (featured: true) |
| Regular product card × N | - Light bg, 1 col<br>- Tag pill + year<br>- Instrument Serif italic title text-3xl → accent on hover<br>- Body muted<br>- Bottom accent bar on hover | - Data: `src/data/services/index.ts` → `products` (non-featured) |

---

### WhyChooseUsSection

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Section heading | - Same 2-col pattern on dark cream-ink bg<br>- Overline accent + heading efe6d6 + body muted | - Font: Instrument Serif<br>- Data: `src/data/services/index.ts` → `whyChooseUsSection` |
| Differentiator card × N | - 3-col dark grid<br>- Index pill: accent border + text<br>- Instrument Serif italic title efe6d6 → accent on hover<br>- Body muted<br>- Ghost huge index number in bg<br>- Bottom accent bar on hover | - Data: `src/data/services/index.ts` → `differentiators` |
| Stats grid | - 4-col divided border grid<br>- Stat value: Instrument Serif italic text-7xl accent<br>- Label: mono uppercase efe6d6/35 | - Data: `src/data/services/index.ts` → `whyStats` |

---

### ProcessSection

| Element | Visual Spec | Assets |
|---------|-------------|--------|
| Section heading | - Same 2-col pattern<br>- Instrument Serif italic overline + heading + body copy | - Font: Instrument Serif<br>- Data: `src/data/services/index.ts` → `processSection` |
| Process step card × N | - 4-col grid<br>- Index: Instrument Serif italic text-4xl accent<br>- Title semibold → accent on hover<br>- Body muted<br>- Detail bullet list with accent dots, top border rule<br>- Bottom accent bar on hover | - Data: `src/data/services/index.ts` → `processSteps` |
| Commitment card × N | - 3-col grid<br>- Stat: Instrument Serif italic text-6xl accent<br>- Label semibold → accent on hover<br>- Body muted<br>- Left accent bar slides on hover | - Data: `src/data/services/index.ts` → `processCommitments` |
| CTA strip | - Dark cream-ink bg, rounded-2xl, p-10 lg:p-14<br>- Left: Instrument Serif italic quote text-3xl efe6d6/90 + mono attribution below<br>- Right: rounded-full accent CTA button | - Data: `src/data/services/index.ts` → `processCta` |
