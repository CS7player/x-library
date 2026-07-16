---
sidebar_position: 2
title: Installation
---

# Installation

This guide explains how to install and set up **@cs7player/react-lib** in your React project.

## Requirements

Before installing the library, ensure your project meets the following requirements:

- React **19** or later
- React DOM **19** or later
- Node.js **18+** (recommended)
- npm, yarn, pnpm, or bun

---

## Install the Library

Using npm:

```bash
npm install @cs7player/react-lib
```

Using yarn:

```bash
yarn add @cs7player/react-lib
```

Using pnpm:

```bash
pnpm add @cs7player/react-lib
```

Using bun:

```bash
bun add @cs7player/react-lib
```

---

## Install Peer Dependencies

If your project does not already include React 19, install the required peer dependencies.

```bash
npm install react react-dom
```

---

## Import the Stylesheet

Import the library stylesheet **once** in your application's entry file.

For example, in `main.tsx` or `index.tsx`:

```tsx
import '@cs7player/react-lib/styles.css';
```

---

## Verify the Installation

Create a simple button to verify everything is working correctly.

```tsx
import { Button, ButtonLib } from '@cs7player/react-lib';

const button = new Button('Hello');

export default function App() {
 return <ButtonLib button={button} clickHandler={() => console.log('Clicked')} />;
}
```

If you see the button rendered in your application, the library has been installed successfully.

---

## Recommended Project Structure

```text
src/
├── App.tsx
├── main.tsx
├── components/
├── pages/
└── styles/
```

Example `main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@cs7player/react-lib/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

---

## Updating the Library

To update to the latest version:

```bash
npm update @cs7player/react-lib
```

Or install a specific version:

```bash
npm install @cs7player/react-lib@latest
```

---

## Troubleshooting

### Components are not styled

Make sure you have imported the stylesheet:

```tsx
import '@cs7player/react-lib/styles.css';
```

---

### React version mismatch

Verify that your project is using React 19 or later.

```bash
npm list react
```

---

### TypeScript errors

Ensure your project is using a recent version of TypeScript and that dependencies are installed correctly.

```bash
npm install
```

---

## Next Steps

Now that the library is installed, continue to the **Getting Started** guide to build your first UI with the available components.
