---
sidebar_position: 1
title: Button
description: Interactive button component for triggering actions.
---

# Button

The **Button** component is used to trigger actions such as submitting forms, opening dialogs, navigating between pages, or executing custom logic.

The button supports:

- Disabled state
- Start icon
- End icon
- Keyboard accessibility
- CSS variable based theming
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { Button, ButtonLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a button model.

```tsx
const button = new Button('Save');
```

Render it.

```tsx
<ButtonLib button={button} clickHandler={() => console.log('Saved')} />
```

---

# Disabled Button

Disable interaction.

```tsx
const button = new Button('Delete');

button.setDisabled(true);

<ButtonLib button={button} />;
```

---

# Start Icon

```tsx
import { Save } from 'lucide-react';

const button = new Button('Save');

button.setStartIcon(<Save />);

<ButtonLib button={button} />;
```

---

# End Icon

```tsx
import { ArrowRight } from 'lucide-react';

const button = new Button('Next');

button.setEndIcon(<ArrowRight />);

<ButtonLib button={button} />;
```

---

# Both Icons

```tsx
import { Save, ArrowRight } from 'lucide-react';

const button = new Button('Save');

button.setStartIcon(<Save />);
button.setEndIcon(<ArrowRight />);

<ButtonLib button={button} />;
```

---

# Click Event

```tsx
<ButtonLib
 button={button}
 clickHandler={() => {
  console.log('Button clicked');
 }}
/>
```

---

# Constructor

## Button(label)

Creates a new button instance.

```tsx
const button = new Button('Submit');
```

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| label     | string | Text displayed inside the button |

---

# Properties

| Property  | Type                | Description                            |
| --------- | ------------------- | -------------------------------------- |
| label     | string              | Button label                           |
| disabled  | boolean             | Returns whether the button is disabled |
| startIcon | JSX.Element \| null | Icon displayed before the label        |
| endIcon   | JSX.Element \| null | Icon displayed after the label         |

These properties are read-only. Update them using the provided methods.

---

# Methods

## setDisabled()

Enable or disable the button.

```tsx
button.setDisabled(true);
```

| Parameter | Type    |
| --------- | ------- |
| disabled  | boolean |

---

## setStartIcon()

Adds an icon before the label.

```tsx
button.setStartIcon(<Save />);
```

| Parameter | Type        |
| --------- | ----------- |
| icon      | JSX.Element |

---

## setEndIcon()

Adds an icon after the label.

```tsx
button.setEndIcon(<ArrowRight />);
```

| Parameter | Type        |
| --------- | ----------- |
| icon      | JSX.Element |

---

# ButtonLib Props

| Prop         | Type       | Required | Description                        |
| ------------ | ---------- | -------- | ---------------------------------- |
| button       | Button     | Yes      | Button instance to render          |
| clickHandler | () => void | No       | Invoked when the button is clicked |

---

# Styling

The Button component is fully customizable using CSS variables.

| Variable               | Description               |
| ---------------------- | ------------------------- |
| `--bg-color`           | Button background color   |
| `--bg-disabled`        | Disabled background color |
| `--border-color`       | Border color              |
| `--border-focus-color` | Hover border color        |
| `--font-color`         | Text color                |
| `--label-size`         | Font size                 |
| `--label-weight`       | Font weight               |
| `--border-radius`      | Corner radius             |
| `--primary-color`      | Focus outline color       |
| `--min-padding`        | Internal padding          |

Example:

```css
:root {
 --bg-color: #2f80ed;
 --font-color: white;
 --border-radius: 8px;
}
```

---

# Accessibility

The Button component includes built-in accessibility features.

- Keyboard accessible
- Focus indicator using `:focus-visible`
- Disabled buttons ignore click events
- Supports screen readers through the native `<button>` element

---

# Best Practices

✅ Create one button instance and reuse it.

```tsx
const button = new Button('Save');
```

✅ Update state using the provided methods.

```tsx
button.setDisabled(true);
```

✅ Keep click logic inside `clickHandler`.

```tsx
<ButtonLib button={button} clickHandler={saveData} />
```

---

# Complete Example

```tsx
import { Button, ButtonLib } from '@cs7player/react-lib';

import { Save, ArrowRight } from 'lucide-react';

const button = new Button('Save');

button.setStartIcon(<Save />);
button.setEndIcon(<ArrowRight />);

export default function App() {
 return (
  <ButtonLib
   button={button}
   clickHandler={() => {
    console.log('Saved');
   }}
  />
 );
}
```

---

# Next Component

Continue to the **TextField** documentation to learn how to build forms using the library.
