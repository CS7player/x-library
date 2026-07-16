---
sidebar_position: 5
title: Dialog
description: Display modal dialogs to confirm or cancel user actions.
---

# Dialog

The **Dialog** component displays a modal window that requires user interaction before continuing. It is commonly used for confirmations, warnings, or critical actions.

## Features

- Modal overlay
- Confirmation dialog
- Custom title and message
- Yes callback
- No callback
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { Dialog, DialogLib } from '@cs7player/react-lib';
```

---

# Basic Usage

Create a dialog model.

```tsx
const dialog = new Dialog(
 'Delete Record',
 'Are you sure you want to delete this record?',
 () => {
  console.log('Confirmed');
 },
 () => {
  console.log('Cancelled');
 },
);
```

Render the dialog.

```tsx
<DialogLib dialog={dialog} />
```

---

# Open the Dialog

Display the dialog by calling `start()`.

```tsx
dialog.start();
```

---

# Close the Dialog

Hide the dialog programmatically.

```tsx
dialog.stop();
```

The dialog also closes automatically when either **Yes** or **No** is clicked.

---

# Confirmation Dialog

```tsx
const dialog = new Dialog('Delete User', 'This action cannot be undone.', () => {
 deleteUser();
});
```

Open it.

```tsx
dialog.start();
```

---

# Cancel Callback

The cancel callback is optional.

```tsx
const dialog = new Dialog(
 'Logout',
 'Do you want to logout?',
 () => logout(),
 () => console.log('Cancelled'),
);
```

---

# Constructor

## Dialog()

Creates a new dialog instance.

```tsx
const dialog = new Dialog(title, context, yesCallback, noCallback);
```

| Parameter   | Type       | Required | Description                      |
| ----------- | ---------- | -------- | -------------------------------- |
| title       | string     | Yes      | Dialog title                     |
| context     | string     | Yes      | Dialog message                   |
| yesCallback | () => void | Yes      | Executed when **Yes** is clicked |
| noCallback  | () => void | No       | Executed when **No** is clicked  |

---

# Properties

| Property | Type    | Description                             |
| -------- | ------- | --------------------------------------- |
| title    | string  | Dialog title                            |
| context  | string  | Dialog message                          |
| show     | boolean | Indicates whether the dialog is visible |

---

# Methods

## start()

Opens the dialog.

```tsx
dialog.start();
```

---

## stop()

Closes the dialog.

```tsx
dialog.stop();
```

---

## yesCallBack()

Executes the confirmation callback and closes the dialog.

Normally, you do not call this method directly.

---

## noCallBack()

Executes the cancel callback and closes the dialog.

Normally, you do not call this method directly.

---

# DialogLib Props

| Prop   | Type   | Required | Description               |
| ------ | ------ | -------- | ------------------------- |
| dialog | Dialog | Yes      | Dialog instance to render |

---

# Styling

The Dialog component uses CSS variables for customization.

| Variable           | Description         |
| ------------------ | ------------------- |
| `--border-color`   | Dialog border color |
| `--border-radius`  | Corner radius       |
| `--label-size`     | Title font size     |
| `--label-weight`   | Title font weight   |
| `--content-size`   | Message font size   |
| `--content-weight` | Message font weight |
| `--min-padding`    | Internal spacing    |

Example

```css
:root {
 --border-radius: 10px;
 --border-color: #d1d5db;
}
```

---

# Accessibility

- Modal overlay blocks interaction with the background.
- Keyboard focus remains inside the dialog while open.
- Uses native buttons for confirmation actions.
- Automatically closes after user selection.

---

# Best Practices

✅ Create one dialog instance for each confirmation flow.

```tsx
const deleteDialog = new Dialog('Delete', 'Delete this record?', deleteRecord);
```

---

✅ Open the dialog only when confirmation is required.

```tsx
<ButtonLib button={button} clickHandler={() => deleteDialog.start()} />
```

---

✅ Keep callback functions focused on business logic.

```tsx
const dialog = new Dialog('Logout', 'Do you really want to logout?', logout);
```

---

# Complete Example

```tsx
import { Button, ButtonLib, Dialog, DialogLib } from '@cs7player/react-lib';

const deleteDialog = new Dialog(
 'Delete Record',
 'Are you sure you want to delete this record?',
 () => {
  console.log('Record deleted');
 },
 () => {
  console.log('Operation cancelled');
 },
);

const button = new Button('Delete');

export default function App() {
 return (
  <>
   <ButtonLib button={button} clickHandler={() => deleteDialog.start()} />

   <DialogLib dialog={deleteDialog} />
  </>
 );
}
```

---

# Notes

- The dialog is hidden by default.
- Calling `start()` displays the modal.
- Clicking **Yes** executes the confirmation callback and closes the dialog.
- Clicking **No** executes the optional cancel callback and closes the dialog.
- The dialog automatically updates whenever its observable state changes.
