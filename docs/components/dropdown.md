---
sidebar_position: 6
title: DropDown
description: Select a single value from a list of options.
---

# DropDown

The **DropDown** component allows users to select a single value from a predefined list of options.

It provides a simple, reactive API with support for default values, disabled state, required fields, and informational text.

## Features

- Single item selection
- Default selected value
- Required field indicator
- Disabled state
- Information text
- Native HTML `<select>` element
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { DropDown, DropDownLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a DropDown model.

```tsx
const countries = [
 {
  id: 1,
  name: 'India',
 },
 {
  id: 2,
  name: 'United States',
 },
 {
  id: 3,
  name: 'Japan',
 },
];

const dropdown = new DropDown(
 'Country',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 countries,
);
```

Render the component.

```tsx
<DropDownLib dropdown={dropdown} />
```

---

# Default Selected Value

Provide the initial selected value.

```tsx
const dropdown = new DropDown(
 'Country',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 countries,
 2,
);
```

---

# Required Field

Display the mandatory indicator.

```tsx
const dropdown = new DropDown(
 'Country',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 countries,
 '',
 true,
);
```

---

# Disabled State

Disable the dropdown.

```tsx
dropdown.setDisabled(true);
```

---

# Information Text

Display additional information.

```tsx
dropdown.setInfoText('Please select your country.');
```

---

# Reading the Selected Value

The selected value is available through the model.

```tsx
console.log(dropdown.value);
```

Example output

```text
2
```

---

# Handle Value Changes

```tsx
<DropDownLib
 dropdown={dropdown}
 clickHandler={() => {
  console.log(dropdown.value);
 }}
/>
```

---

# Constructor

## DropDown()

Creates a new DropDown instance.

```tsx
const dropdown = new DropDown(label, options, items, value, isMandatory);
```

| Parameter   | Type             | Required | Description                 |
| ----------- | ---------------- | -------- | --------------------------- |
| label       | string           | No       | Field label                 |
| options     | object           | Yes      | Maps label and value fields |
| array       | any[]            | No       | List of options             |
| value       | string \| number | No       | Default selected value      |
| isMandatory | boolean          | No       | Shows required indicator    |

---

# Options Object

The `options` object specifies which object properties should be used.

```tsx
{
    labelKey: "name",
    valueKey: "id"
}
```

Example data

```tsx
[
 {
  id: 1,
  name: 'India',
 },
 {
  id: 2,
  name: 'Japan',
 },
];
```

---

# Properties

| Property    | Type             | Description            |
| ----------- | ---------------- | ---------------------- |
| label       | string           | Field label            |
| options     | object           | Object mapping         |
| array       | any[]            | Available options      |
| value       | string \| number | Selected value         |
| isMandatory | boolean          | Required indicator     |
| disabled    | boolean          | Disabled state         |
| infoText    | string           | Additional information |

---

# Methods

## setValue()

Updates the selected value.

```tsx
dropdown.setValue(3);
```

---

## setDisabled()

Enables or disables the component.

```tsx
dropdown.setDisabled(true);
```

---

## setInfoText()

Updates the information text.

```tsx
dropdown.setInfoText('Selection is required.');
```

---

# DropDownLib Props

| Prop         | Type       | Required | Description                               |
| ------------ | ---------- | -------- | ----------------------------------------- |
| dropdown     | DropDown   | Yes      | DropDown model                            |
| clickHandler | () => void | No       | Triggered when the selected value changes |

---

# Styling

Customize the DropDown using CSS variables.

| Variable               | Description         |
| ---------------------- | ------------------- |
| `--bg-disabled`        | Disabled background |
| `--border-color`       | Border color        |
| `--border-focus-color` | Focus border color  |
| `--border-radius`      | Border radius       |
| `--min-padding`        | Internal spacing    |

Example

```css
:root {
 --border-color: #d1d5db;
 --border-radius: 8px;
}
```

---

# Accessibility

- Uses the native HTML `<select>` element.
- Supports keyboard navigation.
- Displays focus styles using `:focus-within`.
- Disabled state prevents user interaction.

---

# Best Practices

✅ Use unique values for each option.

```tsx
[
 {
  id: 1,
  name: 'India',
 },
 {
  id: 2,
  name: 'Japan',
 },
];
```

---

✅ Store identifiers instead of entire objects.

```tsx
dropdown.setValue(2);
```

---

✅ Read the selected value directly from the model.

```tsx
console.log(dropdown.value);
```

---

# Complete Example

```tsx
import { DropDown, DropDownLib } from '@cs7player/react-lib';

const countries = [
 {
  id: 1,
  name: 'India',
 },
 {
  id: 2,
  name: 'United States',
 },
 {
  id: 3,
  name: 'Japan',
 },
];

const dropdown = new DropDown(
 'Country',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 countries,
 1,
 true,
);

dropdown.setInfoText('Select your country of residence.');

export default function App() {
 return <DropDownLib dropdown={dropdown} clickHandler={() => console.log(dropdown.value)} />;
}
```

---

# Notes

- Supports selecting a single value.
- Displays a default **"Select"** option when no value is chosen.
- Selected values are stored in the `value` property.
- The displayed label and stored value can be mapped to any object properties using the `options` configuration.
- The component automatically re-renders whenever its observable state changes.
