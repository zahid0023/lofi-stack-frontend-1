# CtaButton

**File:** `src/components/ui/CtaButton.tsx`
**Type:** Server component

Pill-shaped button. Renders an `<a>` when `href` is supplied, otherwise a `<button>`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary" \| "ghost"` | required | Visual style |
| `href` | `string` | — | Renders as `<a>` via shadcn `asChild` |
| `onClick` | `() => void` | — | Click handler (button only) |
| `className` | `string` | — | Tailwind overrides |

## Usage

```tsx
<CtaButton variant="primary" href="/contact">Book a Consultation</CtaButton>
<CtaButton variant="ghost" onClick={handleClick}>Learn More</CtaButton>
```

## Palette overrides

Base styles use `--lofi-ink`. For cream-palette sections pass color overrides via `className`:

```tsx
<CtaButton
  variant="primary"
  href="#"
  className="border-[var(--cream-ink)] bg-[var(--cream-ink)] text-[var(--cream-bg)] hover:bg-[var(--cream-accent)] hover:border-[var(--cream-accent)] hover:text-white"
>
  Book a Consultation
</CtaButton>
```
