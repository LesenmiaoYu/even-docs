---
title: Community Resources
description: Community-built tools, references, and how to get help.
---

The Even Realities developer community has produced valuable resources that complement the official tooling.

## G2 Development Notes

A comprehensive, independently maintained reference covering architecture deep-dives, full Unicode glyph tables, SDK quirks, error codes, and annotated examples from real apps.

**[even-g2-notes →](https://github.com/nickustinov/even-g2-notes/blob/main/G2.md)**

Includes reference implementations for: chess, reddit, weather, tesla vehicle status, pong, and snake — each demonstrating different patterns (modular architecture, API proxies, image-based rendering, canvas games, settings UI).

## Even Toolkit

A community-built component library for building companion web UIs (settings pages, configuration screens) alongside your glasses app. Includes 55+ React components, 191 pixel-art icons, design tokens, and glasses SDK bridge utilities.

**[even-toolkit →](https://github.com/fabioglimb/even-toolkit)**

Key features:

- **Web components:** Button, Card, NavBar, ListItem, Toggle, Dialog, Toast, BottomSheet, Charts, Calendar, and more
- **Glasses bridge utilities:** `useGlasses` hook, `buildActionBar`, `mapGlassEvent`, canvas renderer, PNG utils, pagination helpers
- **Design tokens:** CSS custom properties for colors, spacing, radii, and fonts (FK Grotesk Neue). Light and dark themes.
- **Typography:** Classes from `.text-vlarge-title` (24px) down to `.text-detail` (11px)

Install:

```bash
npm install even-toolkit
```

## Discord

Join the Even Realities developer community for support, bug reports, and discussion with other developers and the Even Realities team.

**[Join the Discord →](https://discord.gg/Y4jHMCU4sv)**
