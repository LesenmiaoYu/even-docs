---
title: Architecture
description: How Even Hub apps connect your code to the G2 glasses.
---

Even Hub apps are **web apps** built with standard web technologies and the Even Hub SDK. You develop them locally, and when ready for distribution, you package and submit them to the **Even Hub platform**, where users can download and run them.

## Connection Model

```
┌──────────────────┐    HTTPS     ┌────────────────────┐   Bluetooth    ┌───────────────┐
│  Even Hub Cloud   │ ◄──────────► │  Phone              │ ◄────────────► │  G2 Glasses    │
│  (distribution    │              │  (Even Realities    │                │  (display +    │
│   & hosting)      │              │   App + WebView)    │                │   input)       │
└──────────────────┘              └────────────────────┘                └───────────────┘
```

- **The phone** runs the Even Realities App, which opens your app in a WebView and handles all communication with the glasses over Bluetooth. Your app logic executes here.
- **The glasses** render UI containers and send back input events (presses, scrolls, swipes). Aside from native scroll processing, app logic does not run on the glasses.

## Testing Your App

There are several ways to get your app running on hardware during development:

1. **QR sideloading** — run a local dev server and generate a QR code via the CLI. Scan it with the Even Realities App to load your app directly with hot reload.
2. **Private builds** — package your app via the CLI (`evenhub pack`) and upload it to the developer portal for testing on your own devices.
3. **Simulator** — preview layouts and test logic entirely on your computer, no hardware needed.

## PWA as an Alternative

If you prefer to keep your app private or distribute it outside of Even Hub, you can build a **Progressive Web App (PWA)** and route users directly to your hosted web app. This approach gives you full control over distribution and hosting, though it does not go through Even Hub's packaging and review process.

## The SDK Bridge

The SDK injects a JavaScript bridge (`EvenAppBridge`) into the WebView. Your frontend calls this bridge to control the glasses display and receive input events.

**Web → Glasses:** Your JS calls `bridge.callEvenApp(method, params)` → WebView bridge → Even Realities App → Bluetooth → glasses.

**Glasses → Web:** Input events travel Bluetooth → Even Realities App → `window._listenEvenAppMessage(...)` → your callback.

## App Structure

A typical Even Hub app is a standard web project with an `app.json` manifest for packaging:

```
my-app/
├── src/
│   ├── main.ts              # App entry point
│   └── components/          # Your UI components
├── public/
│   └── assets/              # Static assets (icons, images)
├── index.html               # HTML entry
├── package.json
├── vite.config.ts           # Build config (Vite recommended)
├── tsconfig.json            # TypeScript config (optional)
└── app.json                 # Even Hub manifest (required for packaging)
```

The SDK ([`@evenrealities/even_hub_sdk`](https://www.npmjs.com/package/@evenrealities/even_hub_sdk)) is the only Even-specific dependency. Everything else is standard web tooling.
