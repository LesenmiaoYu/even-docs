---
title: UI/UX Design Guidelines
description: Designing for the 576x288 glasses display.
---

Even Realities publishes official software design guidelines covering layout principles, component patterns, interaction models, and visual standards for the glasses display and companion app screens.

**[View the Design Guidelines in Figma →](https://www.figma.com/design/X82y5uJvqMH95jgOfmV34j/Even-Realities---Software-Design-Guidelines--Public-?node-id=2922-80782&t=r9P3fmZ2C2glMlQ9-1)**

## Display Constraints

When designing for the G2 display, keep in mind:

- **576 x 288 px** — this is a very small canvas. Every pixel matters.
- **4-bit greyscale** — design in shades of grey; the hardware renders them as shades of green.
- **No background fill** — you can only use borders and text/image content for visual structure.
- **Max 4 containers** — plan your layout within this constraint.
- **One event-capturing container** — design your interaction model around a single active input target.

## Designing Icons

When creating icons for the glasses display, follow these principles:

- **Design at native resolution** — work at the actual pixel size (e.g., 24x24 or 32x32). Avoid designing large and scaling down, as subpixel detail is lost on a 4-bit greyscale display.
- **Use the full greyscale range** — leverage all 16 levels (0–15) for depth and readability. High-contrast outlines (level 15) with mid-tone fills work best.
- **Pixel-align edges** — avoid anti-aliased curves where possible. Clean, sharp pixel boundaries read better at small sizes on this display.
- **Keep it simple** — at 576x288 total canvas, icons compete for space. Aim for immediately recognizable silhouettes with minimal internal detail.
- **Test on hardware** — the green-tinted greyscale rendering on the glasses differs from your monitor. Always verify icon legibility on the actual display or simulator with glow enabled.
- **Use Unicode glyphs when possible** — the firmware font includes many useful symbols (arrows, shapes, card suits). Check the [supported glyph tables](https://github.com/nickustinov/even-g2-notes/blob/main/G2.md) before drawing a custom icon.

## Common UI Patterns

| Pattern | How |
|---|---|
| Fake buttons | Prefix text with `>` as a cursor indicator |
| Selection highlight | Toggle `borderWidth` on individual text containers |
| Multi-row layout | Stack multiple text containers vertically (e.g., 3 containers at 96px height) |
| Progress bars | Use Unicode block characters: `━` and `─` |
| Page flipping | Pre-paginate text at ~400–500 character boundaries, rebuild on scroll events |
