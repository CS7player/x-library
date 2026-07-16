---
sidebar_position: 9
title: Switch
description: Toggle between two states using an interactive switch.
---

# Switch

The **Switch** component allows users to toggle between two states such as **On/Off**, **Yes/No**, or **Enabled/Disabled**.

It supports customizable labels, required fields, disabled state, informational text, and reactive updates using the Observable architecture.

## Features

- Toggle between two states
- Custom left and right labels
- Default value
- Required field indicator
- Disabled state
- Information text
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { SwitchField, SwitchFieldLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a Switch model.

```tsx
const switchField = new SwitchField('Dark Mode', false, false);

switchField.setOptions({
 leftSideName: 'Off',
 rightSideName: 'On',
});
```

Render the component.

```tsx
<SwitchFieldLib switchField={switchField} />
```

---

# Default Value

Set the initial switch state.

```tsx
const switchField = new SwitchField('Notifications', true, false);
```

---

# Custom Labels

Customize the text shown on each side.

```tsx
switchField.setOptions({
 leftSideName: 'No',
 rightSideName: 'Yes',
});
```

Another example

```tsx
switchField.setOptions({
 leftSideName: 'Light',
 rightSideName: 'Dark',
});
```

---

# Disabled State

Prevent user interaction.

```tsx
switchField.setDisabled(true);
```

---

# Information Text

Display additional information.

```tsx
switchField.setInfoText('Enable notifications to receive updates.');
```

---

# Reading the Current Value

Access the current state from the model.

```tsx
console.log(switchField.value);
```

Example output

```text
true
```

---

# Handle State Changes

```tsx
<SwitchFieldLib
 switchField={switchField}
 clickHandler={() => {
  console.log(switchField.value);
 }}
/>
```

---

# Constructor

## SwitchField()

Creates a new Switch instance.

```tsx
const switchField = new SwitchField(label, value, isMandatory);
```

| Parameter   | Type    | Required | Description                 |
| ----------- | ------- | -------- | --------------------------- |
| label       | string  | No       | Field label                 |
| value       | boolean | Yes      | Initial switch state        |
| isMandatory | boolean | Yes      | Displays required indicator |

---

# Properties

| Property    | Type    | Description            |
| ----------- | ------- | ---------------------- |
| label       | string  | Field label            |
| value       | boolean | Current switch state   |
| options     | object  | Left and right labels  |
| isMandatory | boolean | Required indicator     |
| disabled    | boolean | Disabled state         |
| infoText    | string  | Additional information |

---

# Methods

## setValue()

Updates the switch value.

```tsx
switchField.setValue(true);
```

---

## setOptions()

Updates the displayed labels.

```tsx
switchField.setOptions({
 leftSideName: 'Disabled',
 rightSideName: 'Enabled',
});
```

| Property      | Type   | Description                  |
| ------------- | ------ | ---------------------------- |
| leftSideName  | string | Label displayed on the left  |
| rightSideName | string | Label displayed on the right |

---

## setDisabled()

Enables or disables the switch.

```tsx
switchField.setDisabled(true);
```

---

## setInfoText()

Updates the information text.

```tsx
switchField.setInfoText('Choose your preferred mode.');
```

---

# SwitchFieldLib Props

| Prop         | Type        | Required | Description                                 |
| ------------ | ----------- | -------- | ------------------------------------------- |
| switchField  | SwitchField | Yes      | Switch model                                |
| clickHandler | () => void  | No       | Triggered whenever the switch value changes |

---

# Styling

Customize the Switch component using CSS variables.

| Variable          | Description         |
| ----------------- | ------------------- |
| `--border-color`  | Border color        |
| `--bg-disabled`   | Disabled background |
| `--border-radius` | Border radius       |
| `--label-size`    | Label font size     |
| `--label-weight`  | Label font weight   |
| `--min-padding`   | Internal spacing    |

Example

```css
:root {
 --border-color: #d1d5db;
 --border-radius: 999px;
 --bg-disabled: #f3f4f6;
}
```

---

# Accessibility

- Supports mouse interaction.
- Provides a clear visual indicator for the current state.
- Disabled state prevents user interaction.
- Automatically updates the UI when the observable state changes.

---

# Best Practices

✅ Use meaningful labels.

```tsx
switchField.setOptions({
 leftSideName: 'Disabled',
 rightSideName: 'Enabled',
});
```

---

✅ Read the current value from the model.

```tsx
console.log(switchField.value);
```

---

✅ Keep business logic inside the click handler.

```tsx
<SwitchFieldLib switchField={switchField} clickHandler={() => saveSettings()} />
```

---

# Complete Example

```tsx
import { SwitchField, SwitchFieldLib } from '@cs7player/react-lib';

const switchField = new SwitchField('Dark Mode', false, false);

switchField.setOptions({
 leftSideName: 'Light',
 rightSideName: 'Dark',
});

switchField.setInfoText('Choose your preferred theme.');

export default function App() {
 return <SwitchFieldLib switchField={switchField} clickHandler={() => console.log(switchField.value)} />;
}
```

---

# Notes

- Supports toggling between two boolean states.
- Labels can be customized using `setOptions()`.
- Clicking the component automatically switches between the left and right states.
- The current state is stored in the `value` property.
- The component automatically re-renders whenever its observable state changes.
