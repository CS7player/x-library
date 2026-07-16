---
sidebar_position: 1
title: Introduction
slug: /
---

# React Library

A modern **React UI component library** built with **TypeScript**, designed to provide reusable, customizable, and reactive UI components for building modern web applications.

The library focuses on:

- 🚀 Lightweight and fast
- ⚛️ Built for React 19
- 📦 TypeScript support out of the box
- 🎨 Easily customizable using CSS variables
- 🔄 Reactive components powered by an observable architecture
- 🧩 Reusable UI components
- 📱 Responsive by default
- ♿ Accessibility-focused

---

## Installation

```bash
npm install @cs7player/react-lib
```

Install the required peer dependencies if they are not already present:

```bash
npm install react react-dom
```

---

## Import Styles

Import the library stylesheet once in your application.

```tsx
import '@cs7player/react-lib/styles.css';
```

---

## Your First Component

```tsx
import { Button, ButtonLib } from '@cs7player/react-lib';

const button = new Button('Click Me');

export default function App() {
 return <ButtonLib button={button} clickHandler={() => alert('Hello World')} />;
}
```

---

## Features

- Modern React components
- Reactive state management
- TypeScript-first API
- CSS Modules architecture
- CSS Variable based theming
- Minimal dependencies
- MIT Licensed
- Tree-shakable package
- Easy integration with existing React projects

---

## Available Components

The library currently includes components such as:

- Button
- TextField
- TextArea
- Date Picker
- Dropdown
- RadioButton
- Checkbox
- Switch
- Tooltip
- Loader

More components are continuously being added.

---

## Browser Support

Supports all modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Documentation

The documentation contains:

- Installation Guide
- Getting Started
- Component Documentation
- Theming
- Observable Architecture
- Migration Guides
- Examples

Use the navigation sidebar to explore each section.

---

## License

This project is released under the **MIT License**.

---

## Repository

GitHub Repository

https://github.com/CS7player/x-library

Issues and feature requests are welcome.
