---
title: Packaging & Deployment
description: The app.json manifest, .ehpk packaging, and submitting to Even Hub.
---

## The `app.json` Manifest

Every Even Hub app requires an `app.json`:

```json
{
  "package_id": "com.example.myapp",
  "edition": "202601",
  "name": "My App",
  "version": "1.0.0",
  "min_app_version": "0.1.0",
  "tagline": "A short description",
  "description": "A longer description of what your app does",
  "author": "Your Name",
  "entrypoint": "index.html",
  "permissions": {
    "network": ["api.example.com"],
    "fs": ["./assets"]
  }
}
```

**`package_id` rules:** Valid reverse-domain format. Each segment must start with a lowercase letter and contain only lowercase letters or numbers. No hyphens.

## Building for Production

```bash
# Build your web app
npm run build

# Package into .ehpk format
evenhub pack app.json dist -o myapp.ehpk
```

The `.ehpk` file is the distribution format for the Even Hub platform.

## Distribution

Once submitted, your app becomes available on the **Even Hub** page. Users can:

- **Download** your app from Even Hub
- **Launch** it from the glasses menu or through the Even Realities App on their phone
