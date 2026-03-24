---
title: CLI
description: Even Hub CLI reference — authentication, sideloading, and packaging.
---

The CLI handles authentication, QR sideloading, and app packaging.

## Installation

```bash
npm install -D @evenrealities/evenhub-cli
```

> **npm:** [@evenrealities/evenhub-cli](https://www.npmjs.com/package/@evenrealities/evenhub-cli)

## Commands

| Command | Description |
|---|---|
| `evenhub login` | Authenticate with your Even Hub developer account |
| `evenhub init` | Generate a starter `app.json` manifest |
| `evenhub qr --url <url>` | Generate a QR code for sideloading during development |
| `evenhub pack app.json dist -o myapp.ehpk` | Package your built app for distribution |

## Sideloading via QR

During development, sideload your app directly to the glasses:

```bash
evenhub qr --url "http://192.168.1.100:5173"
```

Scan the QR code with the **Even Realities App** on your phone. Your app loads on the glasses with hot reload support.
