---
title: Architecture
description: How Even Hub apps connect your code to the G2 glasses.
---

Even Hub apps are **web apps** built with standard web technologies and the Even Hub SDK. You develop them locally, and when ready for distribution, you package and submit them to the **Even Hub platform**, which hosts and serves them.

## Connection Model

```
┌─────────────────┐     HTTPS     ┌─────────────────┐    Bluetooth    ┌──────────────┐
│  Even Hub Cloud  │ ◄──────────► │  Phone WebView   │ ◄────────────► │  G2 Glasses   │
│  (hosts your app │              │  (Even App)      │                │  (display +   │
│   in production) │              │                  │                │   input)      │
└─────────────────┘               └─────────────────┘                └──────────────┘
```

- **In development**, your app runs on a local dev server (e.g., `localhost:5173`). You sideload it to the glasses via QR code for testing.
- **In production**, your packaged app is hosted on the Even Hub cloud. The Even App on the user's phone loads it from there.
- **The phone** runs the Even App, which opens your app in a WebView and relays messages between the WebView and the glasses over Bluetooth.
- **The glasses** render UI containers sent via Bluetooth and send back input events (taps, scrolls, gestures). No code runs on the glasses.

## The SDK Bridge

The SDK injects a JavaScript bridge (`EvenAppBridge`) into the WebView. Your frontend calls this bridge to control the glasses display and receive input events.

**Web → Glasses:** Your JS calls `bridge.callEvenApp(method, params)` → WebView bridge → Even App → Bluetooth → glasses.

**Glasses → Web:** Input events travel Bluetooth → Even App → `window._listenEvenAppMessage(...)` → your callback.

## Minimal App Structure

```
my-app/
├── src/
│   └── main.ts          # Your app entry point
├── index.html           # Standard HTML entry
├── package.json
├── vite.config.ts
└── app.json             # Even Hub manifest
```

Your app is a standard web project. The SDK is the only Even-specific dependency.
