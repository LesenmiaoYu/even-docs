---
title: Your First App
description: Build and run a minimal G2 glasses app.
---

## SDK Initialization

```typescript
import { waitForEvenAppBridge, EvenAppBridge } from '@evenrealities/even_hub_sdk'

// Recommended: async wait — resolves when the bridge is ready
const bridge = await waitForEvenAppBridge()

// Alternative: synchronous singleton — only after bridge is initialized
const bridge = EvenAppBridge.getInstance()
```

## Creating a Page

Display a simple text screen on the glasses:

```typescript
import {
  waitForEvenAppBridge,
  TextContainerProperty,
} from '@evenrealities/even_hub_sdk'

const bridge = await waitForEvenAppBridge()

const textContainer = new TextContainerProperty({
  xPosition: 0,
  yPosition: 0,
  width: 576,
  height: 288,
  borderWidth: 0,
  borderColor: 5,
  paddingLength: 4,
  containerID: 1,
  containerName: 'main',
  content: 'Hello from G2!',
  isEventCapture: 1,
})

const result = await bridge.createStartUpPageContainer(1, [textContainer])
// result: 0 = success, 1 = invalid, 2 = oversize, 3 = out of memory
```

## Run It

### With the Simulator

```bash
evenhub-simulator http://localhost:5173
```

### On Real Hardware

```bash
evenhub qr --url "http://192.168.1.100:5173"
```

Scan the QR code with the Even App on your phone. Your app loads on the glasses with hot reload support.

## Next Steps

- Learn about the [Display & UI System](/guides/display/) — containers, text, images, and fonts
- Understand [Input & Events](/guides/input-events/) — handling taps, scrolls, and ring input
- Read the [Design Guidelines](/guides/design-guidelines/) for the 576x288 canvas
