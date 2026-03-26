---
title: Installation
description: Install the SDK, Simulator, and CLI.
---

## Prerequisites

- **Node.js** (v18+)
- A web framework of your choice (Vite recommended)
- A phone with the **Even Realities App** installed (for hardware testing)
- **G2 glasses** (for hardware testing; the simulator covers early development)
- **R1 ring** (optional — provides additional touchpad input)

## Install the SDK

```bash
npm install @evenrealities/even_hub_sdk
```

Current version: **0.0.9**. The SDK provides typed methods for display control, input handling, audio, device info, and local storage.

> **npm:** [@evenrealities/even_hub_sdk](https://www.npmjs.com/package/@evenrealities/even_hub_sdk)

## Install the Simulator

The simulator lets you preview UI layouts and test logic without physical hardware. It is a supplement to — not a replacement for — hardware testing.

```bash
npm install -g @evenrealities/evenhub-simulator
```

Current version: **0.6.2**. Cross-platform (macOS, Linux, Windows).

> **npm:** [@evenrealities/evenhub-simulator](https://www.npmjs.com/package/@evenrealities/evenhub-simulator)

See the full [Simulator Reference](/reference/simulator/) for options and caveats.

## Install the CLI

The CLI handles authentication, QR sideloading, and app packaging.

```bash
npm install -D @evenrealities/evenhub-cli
```

Current version: **0.1.10**. Can also be installed globally with `npm install -g`.

> **npm:** [@evenrealities/evenhub-cli](https://www.npmjs.com/package/@evenrealities/evenhub-cli)

See the full [CLI Reference](/reference/cli/) for all commands, and [Packaging & Deployment](/reference/packaging/) for the complete `app.json` schema and troubleshooting guide.
