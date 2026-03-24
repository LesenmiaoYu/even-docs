---
title: Overview
description: What are the G2 glasses and what can you build for them.
---

The Even Realities G2 are smart glasses with dual micro-LED displays (one per lens), a four-microphone array, touchpads on the temples, and optional R1 ring for additional input. They pair with your phone via Bluetooth 5.2.

## Key Hardware Specs

| Spec | Value |
|---|---|
| **Display** | 576 x 288 pixels per eye |
| **Color depth** | 4-bit greyscale (16 shades of green) |
| **Connectivity** | Bluetooth 5.2 |
| **Audio input** | 4-mic array (single audio stream, 16kHz PCM) |
| **G2 touchpads** | Press, double press, swipe up, swipe down |
| **R1 touchpads** | Press, double press, swipe up, swipe down (optional accessory) |
| **Camera / Speaker** | None |

The glasses are privacy-focused by design — no camera, no speaker. App logic runs on the phone; the glasses handle display rendering and native scroll processing.

## What You Can Build

The Even Hub platform currently supports **plugins** — background-layer apps that run alongside the core glasses experience. The platform is actively expanding to include:

- **Dashboard widgets** — glanceable cards on the glasses home screen
- **Dashboard layouts** — custom arrangements of widgets and information
- **AI skills and integrations** — intelligent features that extend the glasses' capabilities

Plugins are **web apps** built with standard web technologies (HTML, CSS, JavaScript/TypeScript) and the Even Hub SDK. You develop with any framework you prefer — Vite, React, vanilla JS — and the SDK provides the bridge between your web code and the glasses hardware.

## Development Workflow

```
1. Write code      →  Standard web app (Vite + SDK)
2. Preview locally →  evenhub-simulator http://localhost:5173
3. Test on device  →  Sideload via QR, or upload a private build to the dev portal
4. Package         →  evenhub pack app.json dist -o myapp.ehpk
5. Submit          →  Upload .ehpk to Even Hub for distribution
```

## Quick Reference

| Resource | Link |
|---|---|
| **SDK** | [npm: @evenrealities/even_hub_sdk](https://www.npmjs.com/package/@evenrealities/even_hub_sdk) |
| **Simulator** | [npm: @evenrealities/evenhub-simulator](https://www.npmjs.com/package/@evenrealities/evenhub-simulator) |
| **CLI** | [npm: @evenrealities/evenhub-cli](https://www.npmjs.com/package/@evenrealities/evenhub-cli) |
| **Design Guidelines** | [Figma: Software Design Guidelines](https://www.figma.com/design/X82y5uJvqMH95jgOfmV34j/Even-Realities---Software-Design-Guidelines--Public-?node-id=2922-80782&t=r9P3fmZ2C2glMlQ9-1) |
| **Community Notes** | [GitHub: even-g2-notes](https://github.com/nickustinov/even-g2-notes/blob/main/G2.md) |
| **Community Toolkit** | [GitHub: even-toolkit](https://github.com/fabioglimb/even-toolkit) |
| **Discord** | [discord.gg/Y4jHMCU4sv](https://discord.gg/Y4jHMCU4sv) |
