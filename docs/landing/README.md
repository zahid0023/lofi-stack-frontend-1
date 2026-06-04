# Landing Page — Component List

All components for the `/` route. Files live in `src/components/landing/`.

| Component | File | Type | Palette | Doc | Issue | Status |
|---|---|---|---|---|---|---|
| **HeroSection** | `landing/hero/HeroSection.tsx` | Client | Dark | [hero.md](./hero.md) | [#1](../clean-code.md#issue-1--dead-colwidth-state-in-herosection--fixed) [#2](../clean-code.md#issue-2--duplicate-ctabutton) | #1 Fixed · #2 Pending |
| &nbsp;&nbsp;↳ AnimatedWordmark | `landing/hero/AnimatedWordmark.tsx` | Client | — | [animated-wordmark.md](./animated-wordmark.md) | — | — |
| **EthosSection** | `landing/ethos/EthosSection.tsx` | Client | Dark | [ethos.md](./ethos.md) | [#6](../clean-code.md#issue-6--array-index-used-as-react-key) [#7](../clean-code.md#issue-7--section-used-for-layout-containers) | Pending |
| &nbsp;&nbsp;↳ EthosHeading | `landing/ethos/EthosHeading.tsx` | Server | — | [ethos.md](./ethos.md) | — | — |
| &nbsp;&nbsp;↳ ScrollParagraph | `landing/ethos/ScrollParagraph.tsx` | Server | — | [ethos.md](./ethos.md) | [#6](../clean-code.md#issue-6--array-index-used-as-react-key) | Pending |
| **FeaturesSection** | `landing/features/FeaturesSection.tsx` | Client | Cream | [features.md](./features.md) | [#4](../clean-code.md#issue-4--duplicated-intersectionobserver) | Pending |
| &nbsp;&nbsp;↳ FeatureCard | `landing/features/FeatureCard.tsx` | Server | — | [features.md](./features.md) | — | — |
| &nbsp;&nbsp;↳ TestimonialCard | `landing/features/TestimonialCard.tsx` | Server | — | [features.md](./features.md) | — | — |
| **ClientsSection** | `landing/clients/ClientsSection.tsx` | Client | Cream | [clients.md](./clients.md) | [#4](../clean-code.md#issue-4--duplicated-intersectionobserver) [#5](../clean-code.md#issue-5--inline-testimonial-block-in-clientssection) [#7](../clean-code.md#issue-7--section-used-for-layout-containers) | Pending |
| &nbsp;&nbsp;↳ ClientCard | `landing/clients/ClientCard.tsx` | Server | — | [clients.md](./clients.md) | — | — |
| &nbsp;&nbsp;↳ LogoMarquee | `landing/clients/LogoMarquee.tsx` | Server | — | [clients.md](./clients.md) | — | — |
| &nbsp;&nbsp;↳ PillButton | `landing/clients/PillButton.tsx` | Server | — | [clients.md](./clients.md) | — | — |
| **GallerySection** | `landing/gallery/GallerySection.tsx` | Client | Cream | [gallery.md](./gallery.md) | [#4](../clean-code.md#issue-4--duplicated-intersectionobserver) [#9](../clean-code.md#issue-9--module-level-derived-array) | Pending |
| &nbsp;&nbsp;↳ GalleryCard | `landing/gallery/GalleryCard.tsx` | Server | — | [gallery.md](./gallery.md) | — | — |
