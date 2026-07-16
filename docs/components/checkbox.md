---
sidebar_position: 3
title: CheckBox
description: Display and manage multiple selectable options.
---

# CheckBox

The **CheckBox** component allows users to select one or more options from a list.

It supports:

- Multiple selections
- Default selected values
- Required field indicator
- Disabled state
- Information text
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { CheckBox, CheckBoxLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a checkbox model.

```tsx
const languages = [
 {
  id: 1,
  name: 'React',
 },
 {
  id: 2,
  name: 'Angular',
 },
 {
  id: 3,
  name: 'Vue',
 },
];

const checkbox = new CheckBox(
 'Frameworks',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 languages,
);
```

Render the component.

```tsx
<CheckBoxLib checkbox={checkbox} />
```

---

# Default Selected Values

Provide an array of selected values.

```tsx
const checkbox = new CheckBox(
 'Frameworks',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 languages,
 [1, 3],
);
```

---

# Required Field

Show a mandatory indicator.

```tsx
const checkbox = new CheckBox(
 'Skills',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 languages,
 [],
 true,
);
```

---

# Disabled State

Disable all checkboxes.

```tsx
checkbox.setDisabled(true);
```

---

# Information Text

Display additional information below the label.

```tsx
checkbox.setInfoText('Select all technologies you have experience with.');
```

---

# Handle Selection Changes

```tsx
<CheckBoxLib
 checkbox={checkbox}
 clickHandler={() => {
  console.log(checkbox.selectedValues);
 }}
/>
```

---

# Constructor

## CheckBox()

Creates a new checkbox group.

```tsx
const checkbox = new CheckBox(label, options, items);
```

| Parameter      | Type    | Required | Description                 |
| -------------- | ------- | -------- | --------------------------- |
| label          | string  | No       | Group label                 |
| options        | object  | Yes      | Maps label and value fields |
| array          | any[]   | No       | List of items               |
| selectedValues | any[]   | No       | Default selected values     |
| isMandatory    | boolean | No       | Shows required indicator    |

---

# Options Object

The `options` object tells the component which fields to use.

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
  name: 'React',
 },
 {
  id: 2,
  name: 'Angular',
 },
];
```

---

# Properties

| Property       | Type    | Description            |
| -------------- | ------- | ---------------------- |
| label          | string  | Group label            |
| options        | object  | Field mapping          |
| array          | any[]   | Available options      |
| selectedValues | any[]   | Selected values        |
| isMandatory    | boolean | Required indicator     |
| disabled       | boolean | Disabled state         |
| infoText       | string  | Additional information |

---

# Methods

## setValue()

Updates selected values.

```tsx
checkbox.setValue([1, 2]);
```

---

## setDisabled()

Enables or disables the component.

```tsx
checkbox.setDisabled(true);
```

---

## setInfoText()

Updates the information text.

```tsx
checkbox.setInfoText('Choose at least one option.');
```

---

# CheckBoxLib Props

| Prop         | Type       | Required | Description                      |
| ------------ | ---------- | -------- | -------------------------------- |
| checkbox     | CheckBox   | Yes      | Checkbox model                   |
| clickHandler | () => void | No       | Triggered when selection changes |

---

# Styling

Customize the component using CSS variables.

| Variable           | Description         |
| ------------------ | ------------------- |
| `--bg-color`       | Checkbox background |
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
 --border-radius: 8px;
 --border-color: #d1d5db;
}
```

---

# Accessibility

- Uses the native HTML checkbox element.
- Labels are associated using `htmlFor`.
- Supports keyboard navigation.
- Disabled checkboxes cannot be modified.

---

# Best Practices

✅ Use unique values for every option.

```tsx
[
 {
  id: 1,
  name: 'React',
 },
 {
  id: 2,
  name: 'Vue',
 },
];
```

---

✅ Store identifiers instead of entire objects.

```tsx
[1, 2, 3];
```

---

✅ Read selected values directly from the model.

```tsx
console.log(checkbox.selectedValues);
```

---

# Complete Example

```tsx
import { CheckBox, CheckBoxLib } from '@cs7player/react-lib';

const technologies = [
 {
  id: 1,
  name: 'React',
 },
 {
  id: 2,
  name: 'Angular',
 },
 {
  id: 3,
  name: 'Vue',
 },
];

const checkbox = new CheckBox(
 'Technologies',
 {
  labelKey: 'name',
  valueKey: 'id',
 },
 technologies,
 [1],
 true,
);

export default function App() {
 return <CheckBoxLib checkbox={checkbox} clickHandler={() => console.log(checkbox.selectedValues)} />;
}
```

---

# Notes

- Supports selecting multiple values.
- Selected values are stored in the `selectedValues` array.
- The component automatically re-renders when its state changes.
- The displayed label and stored value can be mapped to any object properties using the `options` configuration.
