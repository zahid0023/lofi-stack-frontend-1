# SectionHeading

**File:** `src/components/ui/SectionHeading.tsx`
**Type:** Server component

Overline + `<h2>` + body paragraph + optional CTA buttons. Used as the left-column heading in every section.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `overline` | `string` | required | Small label above the title |
| `title` | `ReactNode` | required | `<h2>` content — accepts JSX for italic accents |
| `body` | `string` | required | Supporting paragraph |
| `variant` | `"dark" \| "cream"` | `"cream"` | Color palette |
| `cta` | `{ primary, secondary }` | — | Renders two `CtaButton` elements |
| `className` | `string` | `""` | Wrapper div classes |
| `overlineClassName` | `string` | `""` | Overline override classes |
| `titleClassName` | `string` | `""` | `<h2>` override classes |
| `bodyClassName` | `string` | `""` | Body paragraph override classes |

## Usage

```tsx
<SectionHeading
  overline="What we do"
  title={<>Innovation, <em className="...">met with precision.</em></>}
  body="Supporting paragraph text."
  variant="cream"
  cta={{
    primary:   { label: "Book a Consultation", href: "#" },
    secondary: { label: "Learn More",          href: "#" },
  }}
/>
```
