# Navbar

**File:** `src/components/common/Navbar.tsx`
**Type:** Client component

Sticky top navigation bar shared across every page.

## Layout

```
┌──────────────────────────────────────────────────────┐
│  • LOFISTACK    Home  About  Services …    1.3521° N  │
│                                            103.8198° E │
└──────────────────────────────────────────────────────┘
```

Three columns: logo mark · nav links · GPS coordinates (links to Google Maps).

## Updating nav links

Links are currently hardcoded as plain strings. When a page is ready, replace the `href="#"` placeholder with the real route:

```tsx
{ label: "About Us", href: "/about" },
{ label: "Services", href: "/services" },
```

## Known issues

- Uses inline `style={}` objects instead of Tailwind — see `docs/clean-code.md` Issue 3
- Hover effects use imperative `onMouseEnter/Leave` style mutation — same issue
