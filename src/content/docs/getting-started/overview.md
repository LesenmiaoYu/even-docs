---
title: Overview
description: What are the G2 glasses and what can you build for them.
---

The Even Realities G2 are smart glasses with dual micro-LED displays (one per lens), a microphone, touch-sensitive temples, and an R1 control ring for input. They pair with your phone via Bluetooth 5.2.

## Key Hardware Specs

| Spec | Value |
|---|---|
| Display | 576 x 288 pixels per eye |
| Color depth | 4-bit greyscale (16 shades of green) |
| Connectivity | Bluetooth 5.2 |
| Input | Temple touch, R1 ring (scroll + click) |
| Microphone | Yes (16kHz PCM) |
| Camera / Speaker | None |

The glasses are privacy-focused by design — no camera, no speaker. They are a display and input peripheral; no code runs on the glasses themselves.

## What You Build

Even Hub apps are **web apps** built with standard web technologies (HTML, CSS, JavaScript/TypeScript) and the Even Hub SDK. You develop with any framework you prefer — Vite, React, vanilla JS — and the SDK provides the bridge between your web code and the glasses hardware.

## Development Workflow

```
1. Write code      →  Standard web app (Vite + SDK)
2. Preview locally →  evenhub-simulator http://localhost:5173
3. Test on device  →  evenhub qr --url "http://192.168.x.x:5173"
                      Scan QR with Even App on your phone → app loads on glasses (hot reload works)
4. Package         →  evenhub pack app.json dist -o myapp.ehpk
5. Submit          →  Upload .ehpk to Even Hub for cloud hosting and distribution
```

## Quick Reference

| Resource | Link |
|---|---|
| SDK | [npm: @evenrealities/even_hub_sdk](https://www.npmjs.com/package/@evenrealities/even_hub_sdk) |
| Simulator | [npm: @evenrealities/evenhub-simulator](https://www.npmjs.com/package/@evenrealities/evenhub-simulator) |
| CLI | [npm: @evenrealities/evenhub-cli](https://www.npmjs.com/package/@evenrealities/evenhub-cli) |
| Design Guidelines | [Figma: Software Design Guidelines](https://www.figma.com/design/X82y5uJvqMH95jgOfmV34j/Even-Realities---Software-Design-Guidelines--Public-?node-id=2922-80782&t=r9P3fmZ2C2glMlQ9-1) |
| Community Notes | [GitHub: even-g2-notes](https://github.com/nickustinov/even-g2-notes/blob/main/G2.md) |
| Community Toolkit | [GitHub: even-toolkit](https://github.com/fabioglimb/even-toolkit) |
| Discord | [discord.gg/Y4jHMCU4sv](https://discord.gg/Y4jHMCU4sv) |
