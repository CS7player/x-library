---
sidebar_position: 13
title: ToolTip
description: Display helpful contextual information when users hover over an element.
---

# ToolTip

The **ToolTip** component displays contextual information when users hover over another element. It can wrap any React component and shows a lightweight popup containing descriptive text.

## Features

- Hover-triggered tooltip
- Wraps any React element
- Simple API
- Lightweight implementation
- Customizable through CSS variables

---

# Import

```tsx
import { ToolTip, ToolTipLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a ToolTip model.

```tsx
const tooltip = new ToolTip('Click to save your changes.');
```

Wrap any element.

```tsx
<ToolTipLib toolTip={tooltip}>
 <button>Save</button>
</ToolTipLib>
```

---

# Tooltip Text

Provide the tooltip message through the constructor.

```tsx
const tooltip = new ToolTip('This action cannot be undone.');
```

---

# Wrapping Components

The tooltip can wrap any React element.

Button

```tsx
<ToolTipLib toolTip={tooltip}>
 <ButtonLib button={button} />
</ToolTipLib>
```

Icon

```tsx
<ToolTipLib toolTip={tooltip}>
 <Icons.Info />
</ToolTipLib>
```

Text

```tsx
<ToolTipLib toolTip={tooltip}>
 <span>Hover me</span>
</ToolTipLib>
```

Image

```tsx
<ToolTipLib toolTip={tooltip}>
 <img src="/logo.png" alt="Logo" />
</ToolTipLib>
```

---

# Constructor

## ToolTip()

Creates a new ToolTip instance.

```tsx
const tooltip = new ToolTip(context);
```

| Parameter | Type   | Required | Description     |
| --------- | ------ | -------- | --------------- |
| context   | string | No       | Tooltip message |

---

# Properties

| Property | Type   | Description     |
| -------- | ------ | --------------- |
| context  | string | Tooltip content |

---

# ToolTipLib Props

| Prop     | Type      | Required | Description                       |
| -------- | --------- | -------- | --------------------------------- |
| toolTip  | ToolTip   | Yes      | ToolTip model                     |
| children | ReactNode | Yes      | Element that triggers the tooltip |

---

# Styling

Customize the ToolTip using CSS variables.

| Variable           | Description           |
| ------------------ | --------------------- |
| `--bg-color`       | Tooltip background    |
| `--font-color`     | Tooltip text color    |
| `--border-color`   | Tooltip border color  |
| `--border-radius`  | Tooltip border radius |
| `--content-size`   | Font size             |
| `--content-weight` | Font weight           |
| `--min-padding`    | Internal spacing      |

Example

```css
:root {
 --bg-color: #1f2937;
 --font-color: white;
 --border-color: #374151;
 --border-radius: 8px;
}
```

---

# Positioning

The tooltip is displayed:

- Below the wrapped element
- Horizontally centered
- Automatically shown on hover

No additional configuration is required.

---

# Accessibility

- Uses normal HTML content.
- Appears on mouse hover.
- Can wrap any accessible React component.
- Suitable for displaying short contextual information.

---

# Best Practices

✅ Keep tooltip text concise.

```tsx
new ToolTip('Delete item');
```

---

✅ Use tooltips for additional guidance rather than essential information.

```tsx
new ToolTip('Password must contain at least 8 characters.');
```

---

✅ Wrap only interactive or informative elements.

```tsx
<ToolTipLib toolTip={tooltip}>
 <Icons.Info />
</ToolTipLib>
```

---

# Complete Example

```tsx
import { ToolTip, ToolTipLib, Button, ButtonLib } from '@cs7player/react-lib';

const button = new Button('Save');

const tooltip = new ToolTip('Save your current changes.');

export default function App() {
 return (
  <ToolTipLib toolTip={tooltip}>
   <ButtonLib button={button} />
  </ToolTipLib>
 );
}
```

---

# Notes

- The tooltip appears automatically when the user hovers over the wrapped element.
- It can wrap any React component or HTML element.
- Tooltip content is defined through the `ToolTip` model.
- Positioning is handled automatically by the component.
- Styling can be customized using CSS variables.
