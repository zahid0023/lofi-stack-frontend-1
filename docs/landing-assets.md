# Landing Page — Asset Requirements

> **How to use this document**
> Fill in the Answer column for every field before development begins.
> Each field maps directly to a component prop or data file entry on the landing page.
> Fields marked ✅ Required will break or visually degrade the page if left empty.
> Fields marked ⬜ Optional enhance the page but have a working default if omitted.

---

## 1. Navbar

Appears on every page. Sticky at top, z-50, backdrop-blur dark background.

### 1.1 Logo

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Logo image file | ✅ Required | SVG or PNG placed in `/public/` | Max height 32px when rendered. Transparent background recommended. SVG preferred for crispness at all DPIs. | |

### 1.2 Coordinate Ticker

Cycles between the coordinate and the place name indefinitely on a timed interval.
Pattern: `coordinate → place name → coordinate → place name → …`

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Place name | ✅ Required | Plain text | Max 24 characters. Displays in JetBrains Mono 11px uppercase. | |
| Latitude | ✅ Required | Plain text | Format: `X.XXXX° N` or `X.XXXX° S`. | |
| Longitude | ✅ Required | Plain text | Format: `XXX.XXXX° E` or `XXX.XXXX° W`. | |
| Google Maps URL | ✅ Required | URL | Full URL. Opens in new tab. Used as `href` on the coordinate block. | |

### 1.3 Nav Links

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Link 1 label | ✅ Required | Plain text | Max 12 characters. (e.g. `Home`) | |
| Link 1 URL | ✅ Required | URL or path | Internal path (e.g. `/`) or anchor (e.g. `#section`) | |
| Link 2 label | ✅ Required | Plain text | Max 12 characters. (e.g. `About Us`) | |
| Link 2 URL | ✅ Required | URL or path | | |
| Link 3 label | ✅ Required | Plain text | Max 12 characters. (e.g. `Services`) | |
| Link 3 URL | ✅ Required | URL or path | | |
| Link 4 label | ✅ Required | Plain text | Max 12 characters. (e.g. `Pricing`) | |
| Link 4 URL | ✅ Required | URL or path | | |
| Link 5 label | ✅ Required | Plain text | Max 12 characters. (e.g. `Showcase`) | |
| Link 5 URL | ✅ Required | URL or path | | |
| Link 6 label | ✅ Required | Plain text | Max 12 characters. (e.g. `Blogs`) | |
| Link 6 URL | ✅ Required | URL or path | | |

---

## 2. HeroSection

Full-viewport intro section. Runs a timed animation sequence on load. Content is contained between vertical grid lines 1 and 11.

### 2.1 Section Tag (Header)

Sticky label that sits below the navbar. Stays fixed while animation plays.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Section label | ✅ Required | Plain text | Format: `[ 01 - Name ]`. Max 24 characters. JetBrains Mono, uppercase. | |

### 2.2 Animated Wordmark (Content)

9 SVG stroke-draw letters. In spread mode "L" touches line 1 and "K" touches line 11.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Wordmark text | ✅ Required | Plain text | Exactly 9 characters. All caps. (e.g. `LOFISTACK`) | |

### 2.3 Tagline Animation (Content → Footer)

Displayed large and centered during `tag-type` phase. Parked bottom-left in footer after.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Tagline — line 1 (small, muted) | ✅ Required | Plain text | Max 32 characters. Instrument Serif italic. Displayed above line 2. (e.g. `A quiet workspace for`) | |
| Tagline — line 2 (large, accent) | ✅ Required | Plain text | Max 20 characters. Large bold accent. (e.g. `loud ideas.`) | |

### 2.4 Description Animation (Content → Footer)

Displayed large word-by-word during `desc-stagger` phase. Parked bottom-right in footer after.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Description body | ✅ Required | Plain text | 15–25 words. Each word animates separately so short punchy words work best. (e.g. `Lofistack is a stack of tools, sounds and small rituals for people who make things at low volume`) | |

### 2.5 CTA Buttons (Footer)

Appear in the bottom-right corner of the hero. Stop button stays visible at all times while audio plays.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Play button label | ✅ Required | Plain text | Max 16 characters. Shown when audio is not playing. (e.g. `▶ play intro`) | |
| Stop button label | ✅ Required | Plain text | Max 16 characters. Shown while audio plays. (e.g. `■ stop`) | |
| Primary CTA label | ✅ Required | Plain text | Max 24 characters. Accent pill button. (e.g. `Book a Consultation`) | |
| Primary CTA URL | ✅ Required | URL or anchor | Internal path or anchor (e.g. `#contact`, `/contact`) | |

### 2.6 Audio

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Intro audio file | ✅ Required | `.mp3` placed in `/public/` | Recommended duration: 60–180 seconds. File size under 5MB. Lofi / ambient tone preferred. | |

---

## 3. EthosSection

Sticky left column + scroll-driven paragraph reveal on the right. Content between line 1 and line 11.

### 3.1 Section Tag

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Section label | ✅ Required | Plain text | Format: `[ 02 - Name ]`. Max 24 characters. | |

### 3.2 Section Heading (Left Column, Sticky)

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Overline | ✅ Required | Plain text | Max 12 characters. Displayed in large Instrument Serif italic accent above the title. (e.g. `Since`) | |
| Year / title | ✅ Required | Plain text | 4 characters recommended. Rendered at clamp(96px–220px), dominant visual element. (e.g. `2021`) | |
| Body tagline | ✅ Required | Plain text | Max 120 characters. JetBrains Mono 11px uppercase. Displayed below the year with a top border rule. | |
| Primary CTA label | ✅ Required | Plain text | Max 24 characters. (e.g. `Book a Consultation`) | |
| Primary CTA URL | ✅ Required | URL or anchor | | |
| Secondary CTA label | ✅ Required | Plain text | Max 20 characters. (e.g. `About Us`) | |
| Secondary CTA URL | ✅ Required | URL or anchor | | |

### 3.3 Scroll Paragraphs (Right Column)

Each paragraph word-reveals as it enters 28%–82% of the viewport. The lead word renders bold in accent color.
Minimum 3 paragraphs. Maximum 6 recommended.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Paragraph 1 — lead word | ✅ Required | Single word | Bold accent. Must be the first word of the paragraph text. | |
| Paragraph 1 — body text | ✅ Required | Plain text | 30–60 words. Full paragraph including the lead word. | |
| Paragraph 2 — lead word | ✅ Required | Single word | | |
| Paragraph 2 — body text | ✅ Required | Plain text | 30–60 words. | |
| Paragraph 3 — lead word | ✅ Required | Single word | | |
| Paragraph 3 — body text | ✅ Required | Plain text | 30–60 words. | |
| Paragraph 4 — lead word | ⬜ Optional | Single word | | |
| Paragraph 4 — body text | ⬜ Optional | Plain text | 30–60 words. | |
| Paragraph 5 — lead word | ⬜ Optional | Single word | | |
| Paragraph 5 — body text | ⬜ Optional | Plain text | 30–60 words. | |

---

## 4. FeaturesSection

Sticky left heading + stacked scrollable feature cards on the right. Cards push each other upward as user scrolls. Content between line 1 and line 11.

### 4.1 Section Tag

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Section label | ✅ Required | Plain text | Format: `[ 03 - Name ]`. Max 24 characters. | |

### 4.2 Section Heading (Left Column, Sticky)

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Overline | ✅ Required | Plain text | Max 20 characters. (e.g. `What we do`) | |
| Title — plain part | ✅ Required | Plain text | (e.g. `Innovation,`) | |
| Title — italic accent part | ✅ Required | Plain text | Renders in Instrument Serif italic accent. (e.g. `met with precision.`) | |
| Body copy | ✅ Required | Plain text | 30–50 words. Describes the feature set at a glance. | |
| Primary CTA label | ✅ Required | Plain text | Max 24 characters. | |
| Primary CTA URL | ✅ Required | URL or anchor | | |
| Secondary CTA label | ✅ Required | Plain text | Max 20 characters. | |
| Secondary CTA URL | ✅ Required | URL or anchor | | |

### 4.3 Feature Cards (Right Column — Scrollable Stack)

Each card occupies 100vh of scroll. Cards push each other upward as user scrolls. Minimum 4 cards, maximum 8.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Card 1 — index | ✅ Required | Text | 2 characters. Ghost-outline display at clamp(52–76px). (e.g. `01`) | |
| Card 1 — badge tag | ✅ Required | Plain text | Max 16 characters. Pill badge top-right. (e.g. `Design`) | |
| Card 1 — title | ✅ Required | Plain text | Max 40 characters. Space Grotesk semibold. | |
| Card 1 — description | ✅ Required | Plain text | 30–50 words. Displayed below separator line. | |
| Card 1 — stat value | ✅ Required | Plain text | Max 8 characters. Bold. (e.g. `98%`, `4.9★`, `120+`) | |
| Card 1 — stat label | ✅ Required | Plain text | Max 24 characters. Mono uppercase tiny. (e.g. `client satisfaction`) | |
| Card 2 — index | ✅ Required | Text | 2 characters. | |
| Card 2 — badge tag | ✅ Required | Plain text | Max 16 characters. | |
| Card 2 — title | ✅ Required | Plain text | Max 40 characters. | |
| Card 2 — description | ✅ Required | Plain text | 30–50 words. | |
| Card 2 — stat value | ✅ Required | Plain text | Max 8 characters. | |
| Card 2 — stat label | ✅ Required | Plain text | Max 24 characters. | |
| Card 3 — index | ✅ Required | Text | 2 characters. | |
| Card 3 — badge tag | ✅ Required | Plain text | Max 16 characters. | |
| Card 3 — title | ✅ Required | Plain text | Max 40 characters. | |
| Card 3 — description | ✅ Required | Plain text | 30–50 words. | |
| Card 3 — stat value | ✅ Required | Plain text | Max 8 characters. | |
| Card 3 — stat label | ✅ Required | Plain text | Max 24 characters. | |
| Card 4 — index | ✅ Required | Text | 2 characters. | |
| Card 4 — badge tag | ✅ Required | Plain text | Max 16 characters. | |
| Card 4 — title | ✅ Required | Plain text | Max 40 characters. | |
| Card 4 — description | ✅ Required | Plain text | 30–50 words. | |
| Card 4 — stat value | ✅ Required | Plain text | Max 8 characters. | |
| Card 4 — stat label | ✅ Required | Plain text | Max 24 characters. | |
| Card 5 — index | ⬜ Optional | Text | 2 characters. | |
| Card 5 — badge tag | ⬜ Optional | Plain text | Max 16 characters. | |
| Card 5 — title | ⬜ Optional | Plain text | Max 40 characters. | |
| Card 5 — description | ⬜ Optional | Plain text | 30–50 words. | |
| Card 5 — stat value | ⬜ Optional | Plain text | Max 8 characters. | |
| Card 5 — stat label | ⬜ Optional | Plain text | Max 24 characters. | |

### 4.4 Testimonial

Full-width quote block below the card stack.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Quote text | ✅ Required | Plain text | 20–40 words. No quotation marks needed — added by component. | |
| Author name | ✅ Required | Plain text | Max 32 characters. (e.g. `Jane Smith`) | |
| Author role / title | ✅ Required | Plain text | Max 48 characters. JetBrains Mono. (e.g. `CEO, Acme Corp`) | |

---

## 5. ClientsSection

Sticky header with heading + stats, followed by logo marquee, client cards grid, and testimonial. Content between line 1 and line 11.

### 5.1 Section Tag

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Section label | ✅ Required | Plain text | Format: `[ 04 — Name ]`. Max 24 characters. | |

### 5.2 Section Heading (Section 1, Sticky Left)

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Overline | ✅ Required | Plain text | Max 32 characters. (e.g. `Clients We Collaborate With`) | |
| Title — plain part | ✅ Required | Plain text | (e.g. `We build the stack`) | |
| Title — italic accent part | ✅ Required | Plain text | Instrument Serif italic. (e.g. `behind`) | |
| Title — trailing plain part | ⬜ Optional | Plain text | Text after the accent word. (e.g. `ambitious teams.`) | |
| Body copy | ✅ Required | Plain text | 30–50 words. | |
| Primary CTA label | ✅ Required | Plain text | Max 24 characters. | |
| Primary CTA URL | ✅ Required | URL or anchor | | |
| Secondary CTA label | ✅ Required | Plain text | Max 20 characters. | |
| Secondary CTA URL | ✅ Required | URL or anchor | | |

### 5.3 Stats Block (Section 1, Sticky Right)

3 rows of stat value + label displayed alongside the heading.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Stat 1 — value | ✅ Required | Plain text | Max 8 characters. Large bold. (e.g. `120+`) | |
| Stat 1 — label | ✅ Required | Plain text | Max 24 characters. Mono uppercase tiny. (e.g. `projects delivered`) | |
| Stat 2 — value | ✅ Required | Plain text | Max 8 characters. | |
| Stat 2 — label | ✅ Required | Plain text | Max 24 characters. | |
| Stat 3 — value | ✅ Required | Plain text | Max 8 characters. | |
| Stat 3 — label | ✅ Required | Plain text | Max 24 characters. | |

### 5.4 Logo Marquee (Section 2)

Continuous scrolling strip of client logos as avatar circles with initials. Minimum 6 logos for a seamless loop.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Logo 1 — company name | ✅ Required | Plain text | Max 32 characters. Displayed in Space Grotesk 12px. | |
| Logo 1 — initials | ✅ Required | Plain text | 2–3 characters. Displayed inside avatar circle. | |
| Logo 2 — company name | ✅ Required | Plain text | Max 32 characters. | |
| Logo 2 — initials | ✅ Required | Plain text | 2–3 characters. | |
| Logo 3 — company name | ✅ Required | Plain text | Max 32 characters. | |
| Logo 3 — initials | ✅ Required | Plain text | 2–3 characters. | |
| Logo 4 — company name | ✅ Required | Plain text | Max 32 characters. | |
| Logo 4 — initials | ✅ Required | Plain text | 2–3 characters. | |
| Logo 5 — company name | ✅ Required | Plain text | Max 32 characters. | |
| Logo 5 — initials | ✅ Required | Plain text | 2–3 characters. | |
| Logo 6 — company name | ✅ Required | Plain text | Max 32 characters. | |
| Logo 6 — initials | ✅ Required | Plain text | 2–3 characters. | |
| Logo 7 — company name | ⬜ Optional | Plain text | Max 32 characters. | |
| Logo 7 — initials | ⬜ Optional | Plain text | 2–3 characters. | |
| Logo 8 — company name | ⬜ Optional | Plain text | Max 32 characters. | |
| Logo 8 — initials | ⬜ Optional | Plain text | 2–3 characters. | |

### 5.5 Client Cards (Section 3)

3-column grid of client cards. Each card has a dot-grid header with avatar + badge, and a body with name + description. Minimum 3, maximum 9.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Client 1 — initials | ✅ Required | Plain text | 2–3 characters. Displayed in avatar circle. | |
| Client 1 — company name | ✅ Required | Plain text | Max 32 characters. Bold in card body. | |
| Client 1 — industry | ✅ Required | Plain text | Max 20 characters. Displayed as badge. (e.g. `Fintech`) | |
| Client 1 — description | ✅ Required | Plain text | 15–25 words. Muted body text. | |
| Client 2 — initials | ✅ Required | Plain text | 2–3 characters. | |
| Client 2 — company name | ✅ Required | Plain text | Max 32 characters. | |
| Client 2 — industry | ✅ Required | Plain text | Max 20 characters. | |
| Client 2 — description | ✅ Required | Plain text | 15–25 words. | |
| Client 3 — initials | ✅ Required | Plain text | 2–3 characters. | |
| Client 3 — company name | ✅ Required | Plain text | Max 32 characters. | |
| Client 3 — industry | ✅ Required | Plain text | Max 20 characters. | |
| Client 3 — description | ✅ Required | Plain text | 15–25 words. | |
| Client 4 — initials | ⬜ Optional | Plain text | 2–3 characters. | |
| Client 4 — company name | ⬜ Optional | Plain text | Max 32 characters. | |
| Client 4 — industry | ⬜ Optional | Plain text | Max 20 characters. | |
| Client 4 — description | ⬜ Optional | Plain text | 15–25 words. | |

### 5.6 Testimonial (Section 4)

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Quote text | ✅ Required | Plain text | 20–40 words. No quotation marks needed. | |
| Author name | ✅ Required | Plain text | Max 32 characters. | |
| Author role / title | ✅ Required | Plain text | Max 48 characters. | |

---

## 6. GallerySection

Section heading between line 1 and line 11. Dual full-width marquee rows of polaroid cards below.

### 6.1 Section Tag

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Section label | ✅ Required | Plain text | Format: `[ 05 — Name ]`. Max 24 characters. | |

### 6.2 Section Heading

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Overline | ✅ Required | Plain text | Max 40 characters. | |
| Title — plain part | ✅ Required | Plain text | (e.g. `Real people.`) | |
| Title — italic accent part | ✅ Required | Plain text | Instrument Serif italic. (e.g. `Real problems.`) | |
| Title — trailing plain part | ⬜ Optional | Plain text | (e.g. `Solved.`) | |
| Body copy | ✅ Required | Plain text | 20–40 words. | |
| Primary CTA label | ✅ Required | Plain text | Max 24 characters. | |
| Primary CTA URL | ✅ Required | URL or anchor | | |
| Secondary CTA label | ✅ Required | Plain text | Max 20 characters. | |
| Secondary CTA URL | ✅ Required | URL or anchor | | |

### 6.3 Gallery Moments (Polaroid Cards)

Displayed in two full-width marquee rows (Row 1 scrolls left, Row 2 scrolls right using a reversed copy).
Each card is a 210×210px cream polaroid frame. Photo has sepia filter applied automatically.
Minimum 6 moments for a seamless dual marquee. Maximum 12 recommended.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Moment 1 — photo | ✅ Required | Image URL or `/public/` path | Min 420×420px. Square crop recommended. JPEG or WebP preferred. | |
| Moment 1 — caption | ✅ Required | Plain text | Max 40 characters. Instrument Serif italic below photo. | |
| Moment 1 — tag | ✅ Required | Plain text | Max 16 characters. Mono badge below caption. (e.g. `Workshop`) | |
| Moment 2 — photo | ✅ Required | Image URL or path | Min 420×420px. | |
| Moment 2 — caption | ✅ Required | Plain text | Max 40 characters. | |
| Moment 2 — tag | ✅ Required | Plain text | Max 16 characters. | |
| Moment 3 — photo | ✅ Required | Image URL or path | Min 420×420px. | |
| Moment 3 — caption | ✅ Required | Plain text | Max 40 characters. | |
| Moment 3 — tag | ✅ Required | Plain text | Max 16 characters. | |
| Moment 4 — photo | ✅ Required | Image URL or path | Min 420×420px. | |
| Moment 4 — caption | ✅ Required | Plain text | Max 40 characters. | |
| Moment 4 — tag | ✅ Required | Plain text | Max 16 characters. | |
| Moment 5 — photo | ✅ Required | Image URL or path | Min 420×420px. | |
| Moment 5 — caption | ✅ Required | Plain text | Max 40 characters. | |
| Moment 5 — tag | ✅ Required | Plain text | Max 16 characters. | |
| Moment 6 — photo | ✅ Required | Image URL or path | Min 420×420px. | |
| Moment 6 — caption | ✅ Required | Plain text | Max 40 characters. | |
| Moment 6 — tag | ✅ Required | Plain text | Max 16 characters. | |
| Moment 7 — photo | ⬜ Optional | Image URL or path | Min 420×420px. | |
| Moment 7 — caption | ⬜ Optional | Plain text | Max 40 characters. | |
| Moment 7 — tag | ⬜ Optional | Plain text | Max 16 characters. | |
| Moment 8 — photo | ⬜ Optional | Image URL or path | Min 420×420px. | |
| Moment 8 — caption | ⬜ Optional | Plain text | Max 40 characters. | |
| Moment 8 — tag | ⬜ Optional | Plain text | Max 16 characters. | |

### 6.4 Footer

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Count label | ✅ Required | Plain text | Word(s) after the auto-counted number. (e.g. `moments captured`) | |
| Footer CTA label | ✅ Required | Plain text | Max 24 characters. Ghost button bottom-right. | |
| Footer CTA URL | ✅ Required | URL or anchor | | |

---

## 7. BottomRail

Scrolling ticker of service labels. Minimum 6 items for a seamless loop. Maximum 12.

| Description | Required | Type | Constraints | Answer |
|-------------|----------|------|-------------|--------|
| Ticker item 1 | ✅ Required | Plain text | Max 28 characters. (e.g. `App Development`) | |
| Ticker item 2 | ✅ Required | Plain text | Max 28 characters. | |
| Ticker item 3 | ✅ Required | Plain text | Max 28 characters. | |
| Ticker item 4 | ✅ Required | Plain text | Max 28 characters. | |
| Ticker item 5 | ✅ Required | Plain text | Max 28 characters. | |
| Ticker item 6 | ✅ Required | Plain text | Max 28 characters. | |
| Ticker item 7 | ⬜ Optional | Plain text | Max 28 characters. | |
| Ticker item 8 | ⬜ Optional | Plain text | Max 28 characters. | |
| Ticker item 9 | ⬜ Optional | Plain text | Max 28 characters. | |
| Ticker item 10 | ⬜ Optional | Plain text | Max 28 characters. | |
