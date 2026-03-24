---
title: Device APIs
description: Audio, device info, user info, and local storage.
---

## Audio

```typescript
// Start/stop microphone capture
await bridge.audioControl(true)  // start
await bridge.audioControl(false) // stop
```

Audio data arrives via `audioEvent` in the event callback. Format: PCM 16kHz, signed 16-bit little-endian, mono.

## Device Info

```typescript
const info = await bridge.getDeviceInfo()
// Returns: model (G1/G2/Ring1), serial number, battery, wearing status, charging, in-case
```

Real-time monitoring:

```typescript
bridge.onDeviceStatusChanged((status) => {
  // Battery, wearing, charging updates
})
```

## User Info

```typescript
const user = await bridge.getUserInfo()
// Returns: uid, name, avatar, country
```

## Local Storage

```typescript
await bridge.setLocalStorage('key', 'value')
const value = await bridge.getLocalStorage('key')
```

## What the SDK Does NOT Expose

No direct Bluetooth access, no arbitrary pixel drawing, no audio output, no text alignment, no font control, no background colors, no per-item list styling, no programmatic scroll position, no animations, no camera (there is none), and images are greyscale only.
