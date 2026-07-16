---
sidebar_position: 12
title: TimePicker
description: Select time using an intuitive 12-hour or 24-hour picker.
---

# TimePicker

The **TimePicker** component allows users to select a time using either **12-hour** or **24-hour** format. It automatically parses the provided value, validates the input, and updates the selected time using the Observable architecture.

## Features

- 12-hour format (AM/PM)
- 24-hour format
- Automatic time parsing
- Time validation
- Required field indicator
- Disabled state
- Information text
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { TimePicker, TimePickerLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a TimePicker model.

```tsx
const timePicker = new TimePicker('Meeting Time', 12, '10:30 AM', false);
```

Render the component.

```tsx
<TimePickerLib timePicker={timePicker} />
```

---

# 12-Hour Format

Use a 12-hour clock with AM/PM.

```tsx
const timePicker = new TimePicker('Start Time', 12, '08:15 PM', false);
```

Supported values

```text
01:30 AM
10:45 PM
12:00 PM
```

---

# 24-Hour Format

Use military time.

```tsx
const timePicker = new TimePicker('Start Time', 24, '18:45', false);
```

Supported values

```text
00:00
08:30
14:15
23:59
```

---

# Required Field

Display the mandatory indicator.

```tsx
const timePicker = new TimePicker('Meeting Time', 12, '09:00 AM', true);
```

---

# Disabled State

Disable user interaction.

```tsx
timePicker.setDisabled(true);
```

---

# Information Text

Display additional guidance.

```tsx
timePicker.setInfoText('Please select your preferred time.');
```

---

# Reading the Value

Access the selected time.

```tsx
console.log(timePicker.value);
```

Example output

```text
09:45 AM
```

or

```text
21:45
```

---

# Constructor

## TimePicker()

Creates a new TimePicker instance.

```tsx
const timePicker = new TimePicker(label, format, value, isMandatory);
```

| Parameter   | Type     | Required | Description                 |
| ----------- | -------- | -------- | --------------------------- |
| label       | string   | No       | Field label                 |
| format      | 12 \| 24 | Yes      | Time format                 |
| value       | string   | Yes      | Initial time                |
| isMandatory | boolean  | Yes      | Displays required indicator |

---

# Properties

| Property     | Type     | Description             |
| ------------ | -------- | ----------------------- |
| label        | string   | Field label             |
| format       | 12 \| 24 | Time format             |
| value        | string   | Selected time           |
| hoursValue   | string   | Selected hour           |
| minutesValue | string   | Selected minute         |
| merdianValue | string   | AM or PM (12-hour only) |
| disabled     | boolean  | Disabled state          |
| isMandatory  | boolean  | Required indicator      |
| infoText     | string   | Additional information  |

---

# Methods

## setValue()

Updates the selected time.

```tsx
timePicker.setValue('08:30 PM');
```

---

## setDisabled()

Enables or disables the component.

```tsx
timePicker.setDisabled(true);
```

---

## setInfoText()

Updates the information text.

```tsx
timePicker.setInfoText('Business hours only.');
```

---

# TimePickerLib Props

| Prop       | Type       | Required | Description      |
| ---------- | ---------- | -------- | ---------------- |
| timePicker | TimePicker | Yes      | TimePicker model |

---

# Invalid Time Handling

If the supplied value cannot be parsed, the component displays an error message.

Example

```tsx
const timePicker = new TimePicker('Meeting', 12, '25:90 PM', false);
```

Output

```text
Invalid Time!!!
```

---

# Styling

Customize the TimePicker using CSS variables.

| Variable          | Description             |
| ----------------- | ----------------------- |
| `--border-color`  | Border color            |
| `--bg-disabled`   | Disabled background     |
| `--danger-color`  | Invalid time color      |
| `--border-radius` | Corner radius           |
| `--label-size`    | Label font size         |
| `--content-size`  | Error message font size |
| `--min-padding`   | Internal spacing        |

Example

```css
:root {
 --border-color: #d1d5db;
 --danger-color: #dc2626;
 --border-radius: 8px;
}
```

---

# Accessibility

- Uses native HTML `<select>` elements.
- Supports keyboard navigation.
- Disabled state prevents interaction.
- Clearly indicates invalid time values.
- Automatically updates when the observable state changes.

---

# Best Practices

✅ Use the correct time format.

```tsx
new TimePicker('Start Time', 24, '14:30', false);
```

---

✅ Store time in the `value` property.

```tsx
console.log(timePicker.value);
```

---

✅ Validate the initial value before passing it.

```tsx
'09:30 AM';
```

instead of

```tsx
'9:3';
```

---

# Complete Example

```tsx
import { TimePicker, TimePickerLib } from '@cs7player/react-lib';

const meetingTime = new TimePicker('Meeting Time', 12, '10:15 AM', true);

meetingTime.setInfoText('Select your preferred meeting time.');

export default function App() {
 return <TimePickerLib timePicker={meetingTime} />;
}
```

---

# Notes

- Supports both **12-hour** and **24-hour** time formats.
- Automatically parses the provided time string.
- Invalid time values display an error message.
- Uses native HTML `<select>` elements for hours, minutes, and AM/PM selection.
- The selected time is stored in the `value` property.
- The component automatically re-renders whenever its observable state changes.
