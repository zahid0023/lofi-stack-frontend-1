This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# LOFISTACK Frontend

> Next.js 16.2.6 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · pnpm

---

## Stack

| | |
|---|---|
| Framework | Next.js 16.2.6 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Fonts | Space Grotesk, JetBrains Mono, Instrument Serif |
| Smooth scroll | Lenis |
| Package manager | pnpm |

---

## Folder structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, SmoothScroll
│   ├── page.tsx            # / — Landing page
│   └── globals.css         # CSS variables, keyframes, utility classes
│
├── components/
│   ├── common/             # Shared across every page
│   │   ├── Navbar.tsx
│   │   ├── BottomRail.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── BookConsultation.tsx
│   │
│   ├── landing/            # Components for the / route
│   │   ├── hero/
│   │   ├── ethos/
│   │   ├── features/
│   │   ├── clients/
│   │   └── gallery/
│   │
│   └── ui/                 # Design-system primitives (shadcn + custom)
│       ├── SectionTag.tsx
│       ├── SectionHeading.tsx
│       └── CtaButton.tsx
│
└── data/
    └── landing/            # Content for the / route
        ├── index.ts        # Barrel re-export
        ├── hero.ts
        ├── ethos.ts
        ├── features.ts
        ├── clients.ts
        └── gallery.ts
```

> **Convention for new pages:** add `src/components/<page>/` and `src/data/<page>/` mirroring the `landing/` pattern.

---

## Pages

| Route | File | Status |
|---|---|---|
| `/` | `src/app/page.tsx` | Live |
| `/about` | `src/app/about/page.tsx` | Planned |
| `/services` | `src/app/services/page.tsx` | Planned |
| `/pricing` | `src/app/pricing/page.tsx` | Planned |
| `/showcase` | `src/app/showcase/page.tsx` | Planned |
| `/blogs` | `src/app/blogs/page.tsx` | Planned |

---

## Design system

### Palettes

**Dark** — Hero, Ethos, Navbar, BottomRail

| Variable | Value | Usage |
|---|---|---|
| `--lofi-bg` | `#1c1a23` | Background |
| `--lofi-ink` | `#efe6d6` | Primary text |
| `--lofi-accent` | `#e08a5a` | Highlights |
| `--lofi-muted` | `#7a7062` | Labels |
| `--lofi-line` | dim white | Borders |

**Cream** — Features, Clients, Gallery

| Variable | Usage |
|---|---|
| `--cream-bg` | Background |
| `--cream-ink` | Primary text |
| `--cream-accent` | `#c2542a` — Highlights |
| `--cream-muted` | Labels |

### Section layout pattern

Every section uses this structure:

```tsx
<section className="px-[calc(100%/12)]">
  <SectionTag label="[ 0N - Name ]" variant="dark|cream" />
  <Card className="rounded-none ring-0 gap-0 py-0 bg-transparent overflow-visible">
    <CardContent className="px-0 overflow-visible">
      {/* content */}
    </CardContent>
  </Card>
</section>
```

- `px-[calc(100%/12)]` — 1/12 column gutters left and right
- `overflow-visible` on Card + CardContent — required for sticky children

### Adding a new page

1. Create `src/app/<page>/page.tsx` with a `metadata` export
2. Create `src/components/<page>/` — one subfolder per section
3. Create `src/data/<page>/index.ts` barrel + leaf files
4. Update Navbar `href="#"` placeholder to the real route

---

## Component reference

See [`docs/`](./docs/README.md) for per-component documentation.

| Section | Doc |
|---|---|
| Hero, AnimatedWordmark | [`docs/landing/hero.md`](./docs/landing/hero.md) |
| Ethos, ScrollParagraph | [`docs/landing/ethos.md`](./docs/landing/ethos.md) |
| Features, FeatureCard, TestimonialCard | [`docs/landing/features.md`](./docs/landing/features.md) |
| Clients, ClientCard, LogoMarquee | [`docs/landing/clients.md`](./docs/landing/clients.md) |
| Gallery, GalleryCard | [`docs/landing/gallery.md`](./docs/landing/gallery.md) |
| Navbar, BottomRail, SmoothScroll | [`docs/common/`](./docs/common/) |
| SectionTag, SectionHeading, CtaButton | [`docs/ui/`](./docs/ui/) |
| Code review | [`docs/clean-code.md`](./docs/clean-code.md) |
