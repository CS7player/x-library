---
sidebar_position: 7
title: Loader
description: Display a global loading overlay during asynchronous operations.
---

# Loader

The **Loader** component displays a full-screen loading overlay to indicate that an operation is currently in progress.

It follows a singleton pattern, allowing you to show or hide the loader from anywhere in your application using static methods.

## Features

- Global loading overlay
- Singleton architecture
- Built-in loading animation
- Custom loader support
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { Loader, LoaderLib } from '@cs7player/react-lib';
```

---

# Setup

Mount the loader **once** in your application.

Usually inside `App.tsx`.

```tsx
export default function App() {
 return (
  <>
   {/* Application */}

   <LoaderLib />
  </>
 );
}
```

---

# Show the Loader

Display the loading overlay.

```tsx
Loader.show();
```

---

# Hide the Loader

Hide the loading overlay.

```tsx
Loader.hide();
```

---

# Typical Usage

```tsx
async function saveData() {
 Loader.show();

 try {
  await api.save();
 } finally {
  Loader.hide();
 }
}
```

---

# Custom Loader

You can replace the default loading GIF with your own content.

```tsx
<LoaderLib>
 <div>Loading...</div>
</LoaderLib>
```

Example using your own image.

```tsx
<LoaderLib>
 <img src="/images/custom-loader.gif" alt="Loading" width={120} />
</LoaderLib>
```

Example using an icon.

```tsx
<LoaderLib>
 <div className="spinner" />
</LoaderLib>
```

---

# API

## Loader.show()

Displays the loading overlay.

```tsx
Loader.show();
```

---

## Loader.hide()

Hides the loading overlay.

```tsx
Loader.hide();
```

---

## Loader.getInstance()

Returns the singleton loader instance.

```tsx
const loader = Loader.getInstance();
```

Normally this method does not need to be called directly.

---

# LoaderLib Props

| Prop     | Type      | Required | Description           |
| -------- | --------- | -------- | --------------------- |
| children | ReactNode | No       | Custom loader content |

---

# Styling

The Loader component uses CSS for customization.

| Class        | Description               |
| ------------ | ------------------------- |
| `.container` | Full-screen overlay       |
| `.logo`      | Default loading animation |

Example

```css
.container {
 background: rgba(0, 0, 0, 0.35);
}

.logo {
 width: 80px;
}
```

---

# Accessibility

- Blocks interaction with the application while visible.
- Supports custom accessible loader content.
- Uses an image with an `alt` attribute by default.

---

# Best Practices

✅ Mount only one loader.

```tsx
<>
 <App />

 <LoaderLib />
</>
```

---

✅ Always hide the loader after asynchronous operations.

```tsx
Loader.show();

try {
 await fetchData();
} finally {
 Loader.hide();
}
```

---

✅ Prefer using `try...finally` to ensure the loader is always hidden.

```tsx
Loader.show();

try {
 await submitForm();
} finally {
 Loader.hide();
}
```

---

# Complete Example

```tsx
import { Loader, LoaderLib, Button, ButtonLib } from '@cs7player/react-lib';

const button = new Button('Load Data');

async function loadData() {
 Loader.show();

 try {
  await new Promise((resolve) => setTimeout(resolve, 2000));
 } finally {
  Loader.hide();
 }
}

export default function App() {
 return (
  <>
   <ButtonLib button={button} clickHandler={loadData} />

   <LoaderLib />
  </>
 );
}
```

---

# Notes

- The Loader component uses a singleton pattern.
- Only one loader overlay should be mounted in the application.
- The default loader displays the built-in animated GIF.
- Passing `children` to `LoaderLib` replaces the default loader with custom content.
- Calling `Loader.show()` and `Loader.hide()` automatically updates the UI across the application.
