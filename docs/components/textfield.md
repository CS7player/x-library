---
sidebar_position: 10
title: TextField
description: Capture user input with support for text, password, email, and number fields.
---

# TextField

The **TextField** component allows users to enter and edit text-based data. It supports multiple input types, custom icons, required fields, disabled state, informational text, and automatic UI updates using the Observable architecture.

## Features

- Text input
- Password input with show/hide toggle
- Email input
- Number input
- Custom leading icon
- Required field indicator
- Disabled state
- Information text
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { TextField, TextFieldLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a TextField model.

```tsx
const username = new TextField('Username', 'Enter username');
```

Render the component.

```tsx
<TextFieldLib textfield={username} />
```

---

# Input Types

The component supports the following input types.

| Type       | Description                           |
| ---------- | ------------------------------------- |
| `text`     | Standard text input                   |
| `password` | Password field with visibility toggle |
| `email`    | Email address input                   |
| `number`   | Numeric input                         |

Example

```tsx
const password = new TextField('Password', 'Enter password', '', 'password');
```

---

# Default Value

Provide an initial value.

```tsx
const name = new TextField('Name', 'Enter name', 'John Doe');
```

---

# Placeholder

Specify placeholder text.

```tsx
const email = new TextField('Email', 'example@email.com');
```

---

# Required Field

Display the mandatory indicator.

```tsx
const username = new TextField('Username', '', '', 'text', true);
```

Or update it later.

```tsx
username.setIsMandatory(true);
```

---

# Disabled State

Disable the input.

```tsx
username.setDisabled(true);
```

---

# Custom Icon

Display an icon inside the input.

```tsx
import { Icons } from '@cs7player/react-lib';

username.setIcon(<Icons.User />);
```

---

# Password Visibility

Password fields automatically include a visibility toggle.

```tsx
const password = new TextField('Password', 'Enter password', '', 'password');
```

Users can click the eye icon to show or hide the password.

---

# Information Text

Display additional information.

```tsx
username.setInfoText('Username must be unique.');
```

---

# Reading the Value

Access the current value from the model.

```tsx
console.log(username.value);
```

---

# Handle Value Changes

```tsx
<TextFieldLib
 textfield={username}
 clickHandler={() => {
  console.log(username.value);
 }}
/>
```

---

# Constructor

## TextField()

Creates a new TextField instance.

```tsx
const textfield = new TextField(label, placeholder, value, type, isMandatory);
```

| Parameter   | Type                                          | Required | Description                 |
| ----------- | --------------------------------------------- | -------- | --------------------------- |
| label       | string                                        | No       | Field label                 |
| placeholder | string                                        | No       | Placeholder text            |
| value       | string                                        | No       | Initial value               |
| type        | `"text" \| "password" \| "number" \| "email"` | No       | Input type                  |
| isMandatory | boolean                                       | No       | Displays required indicator |

---

# Properties

| Property    | Type                | Description            |
| ----------- | ------------------- | ---------------------- |
| label       | string              | Field label            |
| placeholder | string              | Placeholder text       |
| value       | string              | Current input value    |
| type        | InputType           | Input type             |
| icon        | JSX.Element \| null | Leading icon           |
| isMandatory | boolean             | Required indicator     |
| disabled    | boolean             | Disabled state         |
| infoText    | string              | Additional information |

---

# Methods

## setValue()

Updates the field value.

```tsx
textfield.setValue('Hello');
```

---

## setDisabled()

Enables or disables the field.

```tsx
textfield.setDisabled(true);
```

---

## setIcon()

Displays a leading icon.

```tsx
textfield.setIcon(<Icons.Search />);
```

---

## setIsMandatory()

Updates the required indicator.

```tsx
textfield.setIsMandatory(true);
```

---

## setInfoText()

Updates the information text.

```tsx
textfield.setInfoText('Only letters are allowed.');
```

---

# TextFieldLib Props

| Prop         | Type       | Required | Description                        |
| ------------ | ---------- | -------- | ---------------------------------- |
| textfield    | TextField  | Yes      | TextField model                    |
| clickHandler | () => void | No       | Invoked whenever the value changes |

---

# Styling

Customize the TextField using CSS variables.

| Variable               | Description         |
| ---------------------- | ------------------- |
| `--border-color`       | Input border color  |
| `--border-focus-color` | Focus border color  |
| `--bg-disabled`        | Disabled background |
| `--border-radius`      | Corner radius       |
| `--label-size`         | Input font size     |
| `--label-weight`       | Input font weight   |
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

- Uses native HTML input elements.
- Password fields support visibility toggling.
- Displays keyboard focus styles.
- Disabled state prevents editing.
- Supports keyboard navigation.

---

# Best Practices

✅ Choose the correct input type.

```tsx
new TextField('Email', '', '', 'email');
```

---

✅ Read values directly from the model.

```tsx
console.log(textfield.value);
```

---

✅ Use icons to improve usability.

```tsx
textfield.setIcon(<Icons.Search />);
```

---

# Complete Example

```tsx
import { TextField, TextFieldLib, Icons } from '@cs7player/react-lib';

const username = new TextField('Username', 'Enter username', '', 'text', true);

username.setIcon(<Icons.User />);

username.setInfoText('Username should contain at least 6 characters.');

export default function App() {
 return <TextFieldLib textfield={username} clickHandler={() => console.log(username.value)} />;
}
```

---

# Notes

- Supports **text**, **password**, **email**, and **number** input types.
- Password fields include a built-in show/hide toggle.
- Leading icons can be added using `setIcon()`.
- The current input is stored in the `value` property.
- The component automatically re-renders whenever its observable state changes.

```

```
