---
sidebar_position: 3
title: Getting Started
---

# Getting Started

Welcome to **@cs7player/react-lib**.

This guide introduces the core concepts of the library and walks you through creating your first component.

---

# How It Works

Unlike traditional React component libraries that rely solely on component props, this library uses an **observable state model**.

Each UI component consists of:

- A **component model** that stores the component state.
- A **React renderer** that displays the component.

For example, a button is created using the `Button` class and rendered using the `ButtonLib` component.

---

# Creating Your First Button

Create a button instance.

```tsx
import { Button, ButtonLib } from '@cs7player/react-lib';

const button = new Button('Click Me');
```

Render the button.

```tsx
export default function App() {
 return <ButtonLib button={button} clickHandler={() => alert('Button clicked')} />;
}
```

---

# Updating Component State

Component state is updated using its methods.

For example, disable the button.

```tsx
button.setDisabled(true);
```

Enable it again.

```tsx
button.setDisabled(false);
```

The UI updates automatically.

---

# Adding Icons

Start icon

```tsx
import { Save } from 'lucide-react';

button.setStartIcon(<Save />);
```

End icon

```tsx
import { ArrowRight } from 'lucide-react';

button.setEndIcon(<ArrowRight />);
```

Both icons

```tsx
button.setStartIcon(<Save />);
button.setEndIcon(<ArrowRight />);
```

---

# Listening for User Actions

Pass a click handler to the renderer.

```tsx
<ButtonLib
 button={button}
 clickHandler={() => {
  console.log('Clicked');
 }}
/>
```

---

# Multiple Components

Each component maintains its own state.

```tsx
const saveButton = new Button('Save');
const cancelButton = new Button('Cancel');
```

Render them independently.

```tsx
<>
 <ButtonLib button={saveButton} />
 <ButtonLib button={cancelButton} />
</>
```

---

# Component Lifecycle

Typical workflow:

```text
Create Component
        │
        ▼
Configure State
        │
        ▼
Render Component
        │
        ▼
Update State
        │
        ▼
UI Automatically Re-renders
```

---

# Recommended Folder Structure

```text
src/
├── App.tsx
├── main.tsx
├── components/
│   ├── Buttons.tsx
│   ├── Forms.tsx
│   └── Dashboard.tsx
└── pages/
```

---

# Best Practices

- Create component instances outside the render function whenever possible.
- Update component state using the provided methods.
- Reuse component instances instead of recreating them.
- Keep business logic separate from UI rendering.
- Import the stylesheet only once in your application.

---

# Next Steps

You are now ready to explore the available components.

Start with:

- Button
- TextField
- TextArea
- Dropdown
- Date Picker
- Switch
- Checkbox

Each component page explains its API, methods, customization options, and complete usage examples.
