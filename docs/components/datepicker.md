---
sidebar_position: 4
title: DatePicker
description: Select a date using an interactive calendar.
---

# DatePicker

The **DatePicker** component provides an interactive calendar for selecting dates. It supports month and year navigation, default values, disabled state, required indicators, and informational text.

## Features

- Interactive calendar popup
- Month navigation
- Year navigation
- Default selected date
- Required field indicator
- Disabled state
- Information text
- Automatic date formatting (`DD/MM/YYYY`)
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { DatePicker, DatePickerLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a DatePicker model.

```tsx
const datepicker = new DatePicker('Date of Birth', '', false);
```

Render the component.

```tsx
<DatePickerLib datepicker={datepicker} />
```

---

# Default Date

Provide a default date in **DD/MM/YYYY** format.

```tsx
const datepicker = new DatePicker('Joining Date', '15/07/2026', false);
```

---

# Required Field

Show the mandatory indicator.

```tsx
const datepicker = new DatePicker('Start Date', '', true);
```

---

# Disabled State

Disable the DatePicker.

```tsx
datepicker.setDisabled(true);
```

---

# Information Text

Display additional information.

```tsx
datepicker.setInfoText('Please select your birth date.');
```

---

# Reading the Selected Date

The selected value is available through the model.

```tsx
console.log(datepicker.selectedDate);
```

Example output

```text
15/07/2026
```

---

# Calendar Navigation

The built-in calendar supports:

- Previous month
- Next month
- Month selection
- Year selection
- Date selection

Simply click the input field to open the calendar.

---

# Constructor

## DatePicker()

Creates a new DatePicker instance.

```tsx
const datepicker = new DatePicker(label, selectedDate, isMandatory);
```

| Parameter    | Type    | Required | Description                 |
| ------------ | ------- | -------- | --------------------------- |
| label        | string  | No       | Field label                 |
| selectedDate | string  | No       | Initial date (`DD/MM/YYYY`) |
| isMandatory  | boolean | Yes      | Displays required indicator |

---

# Properties

| Property     | Type    | Description             |
| ------------ | ------- | ----------------------- |
| label        | string  | Field label             |
| selectedDate | string  | Currently selected date |
| isMandatory  | boolean | Required indicator      |
| disabled     | boolean | Disabled state          |
| infoText     | string  | Additional information  |

---

# Methods

## setValue()

Updates the selected date.

```tsx
datepicker.setValue('25/12/2026');
```

---

## setDisabled()

Enables or disables the component.

```tsx
datepicker.setDisabled(true);
```

---

## setInfoText()

Updates the information text.

```tsx
datepicker.setInfoText('Date cannot be changed.');
```

---

# DatePickerLib Props

| Prop       | Type       | Required | Description      |
| ---------- | ---------- | -------- | ---------------- |
| datepicker | DatePicker | Yes      | DatePicker model |

---

# Date Format

The component uses the following display format.

```text
DD/MM/YYYY
```

Example

```text
01/01/2026
15/07/2026
31/12/2026
```

If an invalid date is supplied, the component displays **"Invalid Date"** and becomes disabled automatically.

---

# Styling

Customize the component using CSS variables.

| Variable               | Description              |
| ---------------------- | ------------------------ |
| `--bg-color`           | Background color         |
| `--bg-disabled`        | Disabled background      |
| `--bg-active`          | Selected date background |
| `--border-color`       | Border color             |
| `--border-focus-color` | Focus border             |
| `--border-radius`      | Border radius            |
| `--label-size`         | Label font size          |
| `--label-weight`       | Label font weight        |
| `--min-padding`        | Internal spacing         |

Example

```css
:root {
 --bg-color: white;
 --bg-active: #2563eb;
 --border-radius: 8px;
}
```

---

# Accessibility

- Keyboard focus support
- Read-only input prevents invalid typing
- Native input element
- Clear visual focus state
- Disabled state prevents interaction

---

# Best Practices

✅ Always provide dates in `DD/MM/YYYY` format.

```tsx
datepicker.setValue('10/08/2026');
```

---

✅ Read values from the model.

```tsx
console.log(datepicker.selectedDate);
```

---

✅ Mount one DatePicker model per field.

```tsx
const startDate = new DatePicker('Start Date');

const endDate = new DatePicker('End Date');
```

---

# Complete Example

```tsx
import { DatePicker, DatePickerLib } from '@cs7player/react-lib';

const datepicker = new DatePicker('Appointment Date', '15/07/2026', true);

datepicker.setInfoText('Select your preferred appointment date.');

export default function App() {
 return <DatePickerLib datepicker={datepicker} />;
}
```

---

# Notes

- Uses a popup calendar interface.
- Supports month and year navigation.
- Automatically formats valid dates as `DD/MM/YYYY`.
- Invalid date strings disable the component until a valid value is provided.
- The component automatically updates whenever the observable state changes.
