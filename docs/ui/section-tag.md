# SectionTag

**File:** `src/components/ui/SectionTag.tsx`
**Type:** Server component

Sticky section label bar. Optionally shows a scroll progress bar or a phase indicator.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | required | Displayed text |
| `variant` | `"dark" \| "cream"` | `"dark"` | Color palette |
| `progress` | `number` | — | 0–1, renders a progress bar + percentage |
| `phase` | `string` | — | Renders `phase: <value>` right-aligned |
| `className` | `string` | — | Extra classes on the root element |

## Usage

```tsx
<SectionTag label="[ 01 - Hero ]" variant="dark" phase={phase} />
<SectionTag label="[ 03 - Features ]" variant="cream" progress={progress} />
```

## Notes

- Sticky at `top: 80px`, `z-index: 20`, backdrop blur `8px`
- Must be placed **inside** the padded section so width matches content
- Known issue: uses `<header>` element — semantically incorrect, should be `<div>` — see `docs/clean-code.md` Issue 8
