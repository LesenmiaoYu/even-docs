---
title: Input & Events
description: Handling taps, scrolls, ring input, and lifecycle events.
---

## Event Types

| Event | Value | Source |
|---|---|---|
| `CLICK_EVENT` | 0 | Ring tap, temple tap |
| `SCROLL_TOP_EVENT` | 1 | Scroll reaches top boundary |
| `SCROLL_BOTTOM_EVENT` | 2 | Scroll reaches bottom boundary |
| `DOUBLE_CLICK_EVENT` | 3 | Ring/temple double-tap |
| `FOREGROUND_ENTER_EVENT` | 4 | App comes to foreground |
| `FOREGROUND_EXIT_EVENT` | 5 | App goes to background |
| `ABNORMAL_EXIT_EVENT` | 6 | Unexpected disconnect |

## Handling Events

```typescript
bridge.onEvenHubEvent((event) => {
  // Events arrive as one of: listEvent, textEvent, sysEvent, audioEvent, jsonData
  const textEvent = event.textEvent
  if (textEvent) {
    const eventType = textEvent.eventType
    if (eventType === OsEventTypeList.CLICK_EVENT || eventType === undefined) {
      // Handle click (see quirks below for why we check undefined)
    }
  }
})
```

Event routing depends on which container has `isEventCapture: 1`:
- **List container** captures → events arrive as `listEvent`
- **Text container** captures → events arrive as `textEvent`

## Known Quirks

These are important and will save you debugging time:

### 1. `CLICK_EVENT = 0` becomes `undefined`

The SDK's `fromJson` normalizes the value `0` to `undefined`. Always check for both:

```typescript
eventType === OsEventTypeList.CLICK_EVENT || eventType === undefined
```

### 2. Missing `currentSelectItemIndex`

The simulator omits this field when the index is `0`. Track selection state yourself as a fallback.

### 3. Simulator vs. hardware events

The simulator sends `sysEvent` for button clicks; real hardware sends `textEvent` or `listEvent`. Handle both paths.

### 4. Swipe throttling

Apply a ~300ms cooldown to prevent duplicate scroll actions.
