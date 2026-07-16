---
sidebar_position: 11
title: TextArea
description: Capture multi-line text input with support for labels, validation, and customization.
---

# TextArea

The **TextArea** component allows users to enter and edit multi-line text. It supports placeholder text, configurable rows, required fields, disabled state, informational text, and automatic UI updates using the Observable architecture.

## Features

- Multi-line text input
- Configurable number of rows
- Placeholder text
- Default value
- Required field indicator
- Disabled state
- Information text
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { TextArea, TextAreaLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a TextArea model.

```tsx
const description = new TextArea('Description', 'Enter description...');
```

Render the component.

```tsx
<TextAreaLib textArea={description} />
```

---

# Default Value

Provide an initial value.

```tsx
const notes = new TextArea('Notes', 'Enter notes', 'Initial content');
```

---

# Placeholder

Specify placeholder text.

```tsx
const comments = new TextArea('Comments', 'Write your comments here...');
```

---

# Required Field

Display the mandatory indicator.

```tsx
const description = new TextArea('Description', '', '', true);
```

Or update it later.

```tsx
description.setIsMandatory(true);
```

---

# Set Number of Rows

Change the visible height of the textarea.

```tsx
description.setRow(5);
```

---

# Disabled State

Disable editing.

```tsx
description.setDisabled(true);
```

---

# Information Text

Display additional guidance.

```tsx
description.setInfoText('Maximum 500 characters.');
```

---

# Reading the Value

Access the current value from the model.

```tsx
console.log(description.value);
```

---

# Handle Value Changes

```tsx
<TextAreaLib
 textArea={description}
 clickHandler={() => {
  console.log(description.value);
 }}
/>
```

---

# Constructor

## TextArea()

Creates a new TextArea instance.

```tsx
const textArea = new TextArea(label, placeholder, value, isMandatory);
```

| Parameter   | Type    | Required | Description                 |
| ----------- | ------- | -------- | --------------------------- |
| label       | string  | No       | Field label                 |
| placeholder | string  | No       | Placeholder text            |
| value       | string  | No       | Initial value               |
| isMandatory | boolean | No       | Displays required indicator |

---

# Properties

| Property    | Type    | Description            |
| ----------- | ------- | ---------------------- |
| label       | string  | Field label            |
| placeholder | string  | Placeholder text       |
| value       | string  | Current textarea value |
| row         | number  | Number of visible rows |
| isMandatory | boolean | Required indicator     |
| disabled    | boolean | Disabled state         |
| infoText    | string  | Additional information |

---

# Methods

## setValue()

Updates the textarea value.

```tsx
textArea.setValue('New content');
```

---

## setRow()

Changes the number of visible rows.

```tsx
textArea.setRow(6);
```

---

## setDisabled()

Enables or disables the textarea.

```tsx
textArea.setDisabled(true);
```

---

## setIsMandatory()

Updates the required indicator.

```tsx
textArea.setIsMandatory(true);
```

---

## setInfoText()

Updates the information text.

```tsx
textArea.setInfoText('Please provide detailed information.');
```

---

# TextAreaLib Props

| Prop         | Type       | Required | Description                        |
| ------------ | ---------- | -------- | ---------------------------------- |
| textArea     | TextArea   | Yes      | TextArea model                     |
| clickHandler | () => void | No       | Invoked whenever the value changes |

---

# Styling

Customize the TextArea using CSS variables.

| Variable               | Description         |
| ---------------------- | ------------------- |
| `--border-color`       | Border color        |
| `--border-focus-color` | Focus border color  |
| `--bg-disabled`        | Disabled background |
| `--border-radius`      | Corner radius       |
| `--min-padding`        | Internal spacing    |

Example

```css
:root {
 --border-color: #d1d5db;
 --border-focus-color: #2563eb;
 --border-radius: 8px;
}
```

---

# Accessibility

- Uses a native HTML `<textarea>` element.
- Supports keyboard navigation.
- Displays keyboard focus styles.
- Disabled state prevents editing.
- Automatically updates the UI when the observable state changes.

---

# Best Practices

✅ Increase the number of rows for long-form input.

```tsx
textArea.setRow(6);
```

---

✅ Read values directly from the model.

```tsx
console.log(textArea.value);
```

---

✅ Provide placeholder text to guide users.

```tsx
new TextArea('Description', 'Describe your issue...');
```

---

# Complete Example

```tsx
import { TextArea, TextAreaLib } from '@cs7player/react-lib';

const description = new TextArea('Description', 'Enter your description...', '', true);

description.setRow(5);

description.setInfoText('Please provide as much detail as possible.');

export default function App() {
 return <TextAreaLib textArea={description} clickHandler={() => console.log(description.value)} />;
}
```

---

# Notes

- Supports multi-line text input.
- The current text is stored in the `value` property.
- The number of visible rows can be customized using `setRow()`.
- Uses a native HTML `<textarea>` element for accessibility.
- The component automatically re-renders whenever its observable state changes.
