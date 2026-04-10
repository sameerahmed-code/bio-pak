# Design Brief

## Direction

BIO-Pak — A sustainable packaging showcase app combining organic warmth with vivid eco-greens, designed for mobile-first discovery and action.

## Tone

Organic, approachable, and eco-forward — warm cream backgrounds with vibrant botanical greens create visual energy without aggression, inviting exploration of sustainable products.

## Differentiation

Floating nature icons with smooth micro-interactions (fade-in, slide-up, float animations) paired with bottom tab navigation deliver a cohesive, delightful mobile experience that elevates routine showcase screens into moments.

## Color Palette

| Token      | OKLCH       | Role                                           |
| ---------- | ----------- | ---------------------------------------------- |
| background | 0.96 0.015 75  | Warm cream base, light and approachable        |
| foreground | 0.2 0.03 50    | Deep earth brown for text, high contrast       |
| primary    | 0.54 0.2 160   | Vivid emerald green, calls-to-action & accents |
| secondary  | 0.35 0.08 30   | Muted terracotta, organic warmth               |
| accent     | 0.85 0.05 75   | Soft beige, subtle highlights & transitions    |
| muted      | 0.92 0.02 75   | Light neutral for dividers & inactive states   |

## Typography

- Display: Space Grotesk — bold, geometric, modern headings and hero text
- Body: Satoshi — warm, approachable sans for body copy and UI labels
- Scale: Hero `text-5xl font-bold`, Section `text-2xl font-semibold`, Label `text-sm font-semibold tracking-wide`, Body `text-base`

## Elevation & Depth

Subtle layering through rounded surfaces (12-16px borders) and soft shadows; no harsh drops. Depth emerges from background color shifts and card stacking, reinforcing hierarchy without visual noise.

## Structural Zones

| Zone    | Background              | Border         | Notes                               |
| ------- | ----------------------- | -------------- | ----------------------------------- |
| Header  | `bg-primary/5` with `border-b border-border` | Thin divider | Brand + tab navigation, subtle accent tint |
| Content | `bg-background` | —              | Main stage; alternates `bg-muted/20` every other section |
| Cards   | `bg-card` with `rounded-lg` | `border border-border/40` | Soft shadows, 12-16px radii          |
| Footer  | `bg-muted/30` with `border-t border-border` | Thin divider | Contact info, muted tone            |

## Spacing & Rhythm

Section gaps 32px (8 units), content padding 24px (6 units), component padding 16px (4 units); consistent rhythm creates visual repose while maintaining spaciousness appropriate for mobile showcase experience.

## Component Patterns

- Buttons: `bg-primary text-primary-foreground rounded-lg px-6 py-3` with `hover:bg-primary/90` and smooth `transition-smooth`
- Cards: `bg-card rounded-lg border border-border p-6` with subtle `shadow-sm`
- Badges: `bg-secondary/20 text-secondary rounded-full px-3 py-1 text-sm font-semibold`
- Icons: Nature-inspired (leaves, recycle, droplets, gears) via Lucide, sized 24–32px in primary/secondary colors

## Motion

- Entrance: `fade-in` 0.6s ease-in-out on page load, staggered card `slide-up` 0.5s each
- Hover: `scale-in` 0.4s elastic on button/card tap, `transition-smooth` all properties
- Decorative: Continuous `float` 3s ease-in-out for icon elements; no jarring or distracting animations

## Constraints

- No drop shadows; use color and roundness for depth
- No full-page gradients; use subtle background color tints only
- Max 5 colors visible at once (primary, secondary, accent, muted, foreground)
- No image overlays with transparency below 70%; maintain readability

## Signature Detail

Floating nature icons with gentle 10px bounce animation create a sense of organic vitality and reinforce the eco-forward positioning without distraction.

---

## Responsive Breakpoints

- Mobile: `max-w-sm` (320–384px) — primary design surface
- Tablet: `sm:max-w-md` (384–512px) — enhanced spacing
- Desktop: `md:max-w-2xl` (768px+) — expanded layout reserved for future phases
