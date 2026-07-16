---
sidebar_position: 8
title: RadioButton
description: Allow users to select a single option from a group.
---

# RadioButton

The **RadioButton** component allows users to select **one option** from a predefined list.

It supports default selection, required fields, disabled state, information text, and automatic UI updates using the Observable architecture.

## Features

- Single selection
- Default selected value
- Required field indicator
- Disabled state
- Information text
- Native HTML radio inputs
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { RadioButton, RadioButtonLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a RadioButton model.

```tsx
const genders = [
 {
  id: 'M',
  name: 'Male',
 },
 {
  id: 'F',
  name: 'Female',
 },
 {
  id: 'O',
  name: 'Other',
 },
];

const radioButton = new RadioButton(
 'Gender',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 genders,
 'M',
);
```

Render the component.

```tsx
<RadioButtonLib radiobutton={radioButton} />
```

---

# Default Selected Value

Specify the initial selected value.

```tsx
const radioButton = new RadioButton(
 'Gender',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 genders,
 'F',
);
```

---

# Required Field

Display a mandatory indicator.

```tsx
const radioButton = new RadioButton(
 'Gender',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 genders,
 '',
 true,
);
```

---

# Disabled State

Disable all radio buttons.

```tsx
radioButton.setDisabled(true);
```

---

# Information Text

Display additional information below the label.

```tsx
radioButton.setInfoText('Please select one option.');
```

---

# Reading the Selected Value

Access the selected value through the model.

```tsx
console.log(radioButton.value);
```

Example output

```text
M
```

---

# Handle Selection Changes

```tsx
<RadioButtonLib
 radiobutton={radioButton}
 clickHandler={() => {
  console.log(radioButton.value);
 }}
/>
```

---

# Constructor

## RadioButton()

Creates a new RadioButton instance.

```tsx
const radioButton = new RadioButton(label, options, items, value, isMandatory);
```

| Parameter   | Type             | Required | Description                 |
| ----------- | ---------------- | -------- | --------------------------- |
| label       | string           | No       | Field label                 |
| options     | object           | Yes      | Maps label and value fields |
| array       | any[]            | No       | List of radio options       |
| value       | string \| number | Yes      | Default selected value      |
| isMandatory | boolean          | No       | Shows required indicator    |

---

# Options Object

The `options` object specifies which properties are used for display and value.

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
  id: 'M',
  name: 'Male',
 },
 {
  id: 'F',
  name: 'Female',
 },
];
```

---

# Properties

| Property    | Type                     | Description            |
| ----------- | ------------------------ | ---------------------- |
| label       | string                   | Field label            |
| options     | object                   | Object mapping         |
| array       | any[]                    | Available options      |
| value       | string \| number \| null | Selected value         |
| isMandatory | boolean                  | Required indicator     |
| disabled    | boolean                  | Disabled state         |
| infoText    | string                   | Additional information |

---

# Methods

## setValue()

Updates the selected value.

```tsx
radioButton.setValue('F');
```

---

## setDisabled()

Enables or disables the component.

```tsx
radioButton.setDisabled(true);
```

---

## setInfoText()

Updates the information text.

```tsx
radioButton.setInfoText('Only one option can be selected.');
```

---

# RadioButtonLib Props

| Prop         | Type        | Required | Description                                |
| ------------ | ----------- | -------- | ------------------------------------------ |
| radiobutton  | RadioButton | Yes      | RadioButton model                          |
| clickHandler | () => void  | No       | Triggered when the selected option changes |

---

# Styling

Customize the RadioButton using CSS variables.

| Variable           | Description         |
| ------------------ | ------------------- |
| `--bg-color`       | Background color    |
| `--bg-disabled`    | Disabled background |
| `--border-color`   | Border color        |
| `--border-radius`  | Border radius       |
| `--content-size`   | Label font size     |
| `--content-weight` | Label font weight   |
| `--min-padding`    | Internal spacing    |

Example

```css
:root {
 --bg-color: white;
 --bg-disabled: #f3f4f6;
 --border-color: #d1d5db;
 --border-radius: 8px;
}
```

---

# Accessibility

- Uses native HTML radio inputs.
- Labels are associated using `htmlFor`.
- Supports keyboard navigation.
- Only one option can be selected.
- Disabled state prevents interaction.

---

# Best Practices

✅ Use unique values for every option.

```tsx
[
 {
  id: 'M',
  name: 'Male',
 },
 {
  id: 'F',
  name: 'Female',
 },
];
```

---

✅ Store identifiers instead of entire objects.

```tsx
radioButton.setValue('M');
```

---

✅ Read the selected value directly from the model.

```tsx
console.log(radioButton.value);
```

---

# Complete Example

```tsx
import { RadioButton, RadioButtonLib } from '@cs7player/react-lib';

const genders = [
 {
  id: 'M',
  name: 'Male',
 },
 {
  id: 'F',
  name: 'Female',
 },
 {
  id: 'O',
  name: 'Other',
 },
];

const radioButton = new RadioButton(
 'Gender',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 genders,
 'M',
 true,
);

radioButton.setInfoText('Select your gender.');

export default function App() {
 return <RadioButtonLib radiobutton={radioButton} clickHandler={() => console.log(radioButton.value)} />;
}
```

---

# Notes

- Supports selecting exactly one option from a list.
- The selected value is stored in the `value` property.
- Labels and values can be mapped to any object fields using the `options` configuration.
- Uses native HTML radio inputs for accessibility.
- Automatically re-renders whenever the observable state changes.
