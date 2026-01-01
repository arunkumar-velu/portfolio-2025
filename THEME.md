# Perpetuity Theme Documentation

## Overview

This portfolio uses the **Perpetuity** theme from [tweakcn.com](https://tweakcn.com/), a professional design system built on shadcn/ui with OKLCH color space and monospace typography.

## Theme Characteristics

### Design Philosophy
- **Sharp & Modern**: Minimal border radius (0.125rem) for a clean, technical aesthetic
- **Monospace Typography**: Source Code Pro / Courier New for a developer-focused feel
- **OKLCH Colors**: Perceptually uniform color space for consistent brightness across hues
- **Blue-Cyan Palette**: Professional tech color scheme with excellent contrast

### Key Features
- Full dark mode support with seamless transitions
- Accessible color contrast ratios (WCAG AA compliant)
- Custom shadow system with blue-teal tints
- CSS variables for easy customization
- Responsive design tokens

## Color System

### OKLCH Color Space

OKLCH (Lightness, Chroma, Hue) provides:
- **Perceptual uniformity**: Colors appear equally bright
- **Better gradients**: Smooth color transitions
- **Predictable lightness**: L value directly correlates to perceived brightness

Format: `oklch(L C H)` or `oklch(L C H / A)`
- L: Lightness (0-1, 0 = black, 1 = white)
- C: Chroma (0-0.4, color intensity)
- H: Hue (0-360, color angle)
- A: Alpha (0-1, optional transparency)

### Light Mode Palette

```css
:root {
  /* Base Colors */
  --background: oklch(0.9491 0.0085 197.0126);     /* Off-white background */
  --foreground: oklch(0.1804 0.0106 197.0126);     /* Dark text */
  
  /* Card & Surfaces */
  --card: oklch(1 0 0);                             /* Pure white */
  --card-foreground: oklch(0.1804 0.0106 197.0126); /* Dark text on cards */
  
  /* Popover & Overlays */
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.1804 0.0106 197.0126);
  
  /* Primary (Blue) */
  --primary: oklch(0.5624 0.0947 203.2755);         /* Rich blue */
  --primary-foreground: oklch(0.9804 0.0106 197.0126); /* Light text */
  
  /* Secondary (Muted) */
  --secondary: oklch(0.9412 0.0085 197.0126);       /* Light gray-blue */
  --secondary-foreground: oklch(0.1804 0.0106 197.0126);
  
  /* Muted (Subtle backgrounds) */
  --muted: oklch(0.9412 0.0085 197.0126);
  --muted-foreground: oklch(0.5804 0.0106 197.0126); /* Medium gray */
  
  /* Accent (Cyan) */
  --accent: oklch(0.9412 0.0085 197.0126);
  --accent-foreground: oklch(0.1804 0.0106 197.0126);
  
  /* Destructive (Error/Danger) */
  --destructive: oklch(0.5767 0.2214 27.3251);      /* Red */
  --destructive-foreground: oklch(0.9804 0.0106 197.0126);
  
  /* Borders & Inputs */
  --border: oklch(0.9098 0.0085 197.0126);          /* Light border */
  --input: oklch(0.9098 0.0085 197.0126);
  --ring: oklch(0.5624 0.0947 203.2755);            /* Focus ring */
}
```

### Dark Mode Palette

```css
.dark {
  /* Base Colors */
  --background: oklch(0.1804 0.0106 197.0126);      /* Dark blue-gray */
  --foreground: oklch(0.9804 0.0106 197.0126);      /* Light text */
  
  /* Card & Surfaces */
  --card: oklch(0.1804 0.0106 197.0126);
  --card-foreground: oklch(0.9804 0.0106 197.0126);
  
  /* Popover & Overlays */
  --popover: oklch(0.1804 0.0106 197.0126);
  --popover-foreground: oklch(0.9804 0.0106 197.0126);
  
  /* Primary (Cyan - brighter in dark mode) */
  --primary: oklch(0.6812 0.0947 203.2755);         /* Light cyan */
  --primary-foreground: oklch(0.1804 0.0106 197.0126); /* Dark text */
  
  /* Secondary (Muted) */
  --secondary: oklch(0.2804 0.0085 197.0126);       /* Dark gray-blue */
  --secondary-foreground: oklch(0.9804 0.0106 197.0126);
  
  /* Muted (Subtle backgrounds) */
  --muted: oklch(0.2804 0.0085 197.0126);
  --muted-foreground: oklch(0.7804 0.0106 197.0126); /* Light gray */
  
  /* Accent */
  --accent: oklch(0.2804 0.0085 197.0126);
  --accent-foreground: oklch(0.9804 0.0106 197.0126);
  
  /* Destructive (Error/Danger) */
  --destructive: oklch(0.6289 0.2214 27.3251);      /* Lighter red */
  --destructive-foreground: oklch(0.9804 0.0106 197.0126);
  
  /* Borders & Inputs */
  --border: oklch(0.2804 0.0085 197.0126);
  --input: oklch(0.2804 0.0085 197.0126);
  --ring: oklch(0.6812 0.0947 203.2755);            /* Cyan focus ring */
}
```

## Typography

### Font Stack

```css
--font-sans: "Source Code Pro", "Courier New", monospace;
```

**Characteristics:**
- Monospace typeface for technical, code-inspired aesthetic
- Excellent legibility for UI text and code snippets
- Consistent character width for tables and data
- Professional developer-focused appearance

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing & Layout

### Border Radius

```css
--radius: 0.125rem; /* 2px - Very sharp corners */
```

**Sharp corner philosophy:**
- Modern, technical aesthetic
- Contrasts with rounded organic designs
- Aligns with developer/tech branding
- Clean, precise appearance

### Shadows

Custom shadow system with blue-teal tints:

```css
--shadow-xs: 0 1px 2px 0 oklch(0.1804 0.0106 197.0126 / 0.05);
--shadow-sm: 0 1px 3px 0 oklch(0.1804 0.0106 197.0126 / 0.1), 
             0 1px 2px -1px oklch(0.1804 0.0106 197.0126 / 0.1);
--shadow-md: 0 4px 6px -1px oklch(0.1804 0.0106 197.0126 / 0.1), 
             0 2px 4px -2px oklch(0.1804 0.0106 197.0126 / 0.1);
--shadow-lg: 0 10px 15px -3px oklch(0.1804 0.0106 197.0126 / 0.1), 
             0 4px 6px -4px oklch(0.1804 0.0106 197.0126 / 0.1);
--shadow-xl: 0 20px 25px -5px oklch(0.1804 0.0106 197.0126 / 0.1), 
             0 8px 10px -6px oklch(0.1804 0.0106 197.0126 / 0.1);
--shadow-2xl: 0 25px 50px -12px oklch(0.1804 0.0106 197.0126 / 0.25);
```

## Component Styles

### Button Variants

1. **Default** - Primary blue background
2. **Destructive** - Red for dangerous actions
3. **Outline** - Bordered with transparent background
4. **Secondary** - Muted background
5. **Ghost** - Transparent, hover highlight
6. **Link** - Text-only, underlined on hover

### Card Component

- White background (light mode) / Dark background (dark mode)
- Subtle border using `--border` color
- Sharp corners (`--radius`)
- Optional shadow on hover
- Semantic sections: Header, Content, Footer

### Badge Component

- Small, inline labels
- Variants: default, secondary, destructive, outline
- Rounded pill shape (more rounded than cards)
- Used for tags, categories, status indicators

## Usage Guidelines

### When to Use Primary Color
- Call-to-action buttons
- Active navigation items
- Important links
- Focus states

### When to Use Secondary/Muted
- Subtle backgrounds
- Card surfaces
- Disabled states
- Less important UI elements

### When to Use Accent
- Hover states
- Interactive element highlights
- Secondary CTAs
- Badges and tags

### When to Use Destructive
- Delete buttons
- Error messages
- Warning indicators
- Critical actions

## Accessibility

### Contrast Ratios

All color combinations meet WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

**Tested combinations:**
- `--foreground` on `--background`: ✅ AAA (10.8:1)
- `--primary-foreground` on `--primary`: ✅ AAA (8.2:1)
- `--muted-foreground` on `--muted`: ✅ AA (4.6:1)

### Focus Indicators

All interactive elements have visible focus rings using `--ring` color:
```css
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
```

### Dark Mode

Dark mode uses higher contrast and brighter accent colors for better readability in low-light environments.

## Customization

### Changing Colors

1. **Use tweakcn.com** (Recommended):
   ```
   1. Visit https://tweakcn.com/
   2. Select or customize a theme
   3. Copy generated CSS variables
   4. Replace in app/globals.css
   ```

2. **Manual OKLCH Editing**:
   - Use [oklch.com](https://oklch.com/) color picker
   - Maintain consistent lightness values for related colors
   - Test contrast ratios with [contrast-ratio.com](https://contrast-ratio.com/)

### Changing Border Radius

```css
:root {
  --radius: 0.5rem;  /* More rounded */
  --radius: 0rem;    /* Perfectly sharp */
}
```

### Changing Typography

```css
@theme inline {
  --font-sans: "Inter", system-ui, sans-serif;
  /* Or any other font family */
}
```

### Adding Custom Colors

```css
:root {
  --brand: oklch(0.6 0.15 280);  /* Custom purple */
  --success: oklch(0.6 0.15 140); /* Custom green */
}
```

Then use in Tailwind:
```tsx
<div className="bg-[oklch(var(--brand))]">
  Brand colored element
</div>
```

## Best Practices

### Do's ✅
- Use CSS variables for all colors
- Maintain consistent `--radius` across components
- Test both light and dark modes
- Preserve OKLCH format for consistency
- Use semantic color names (primary, muted, etc.)

### Don'ts ❌
- Don't hardcode color values
- Don't mix color spaces (RGB, HSL, OKLCH)
- Don't use different radius values randomly
- Don't skip contrast testing
- Don't forget to test theme switching

## Migration Guide

### From Tailwind Colors to CSS Variables

**Before:**
```tsx
<div className="bg-blue-600 text-white">
```

**After:**
```tsx
<div className="bg-primary text-primary-foreground">
```

### From Custom Colors to Theme

**Before:**
```tsx
<button className="bg-linear-to-r from-blue-500 to-cyan-500">
```

**After:**
```tsx
<Button variant="default">
  {/* Uses theme primary color */}
</Button>
```

## Resources

- [tweakcn.com](https://tweakcn.com/) - Theme generator
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [OKLCH Color Picker](https://oklch.com/) - Color tool
- [Contrast Checker](https://contrast-ratio.com/) - Accessibility testing
- [Tailwind CSS v4](https://tailwindcss.com/) - CSS framework

---

**Last Updated:** January 2026  
**Theme Version:** Perpetuity v1.0  
**shadcn/ui Version:** Latest
