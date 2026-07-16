---
sidebar_position: 2
title: Alert
description: Display temporary notification messages to users.
---

# Alert

The **Alert** component displays temporary notification messages to inform users about actions, events, or application status.

Alerts automatically disappear after a configurable duration and can also be dismissed manually.

## Features

- Singleton alert manager
- Automatic dismissal
- Custom display duration
- Manual close button
- Multiple alerts supported
- Reactive updates using the Observable architecture

---

# Import

```tsx
import { AlertBox, AlertBoxLib } from '@cs7player/react-lib';
```

---

# Setup

The alert renderer should be mounted **once** in your application.

Usually inside `App.tsx`.

```tsx
export default function App() {
 return (
  <>
   {/* Your application */}

   <AlertBoxLib />
  </>
 );
}
```

---

# Show an Alert

Display a notification from anywhere in your application.

```tsx
AlertBox.ShowAlert('Data saved successfully.');
```

Result

```
┌─────────────────────────────┐
│ Data saved successfully.  ✕ │
└─────────────────────────────┘
```

---

# Multiple Alerts

Alerts are stacked automatically.

```tsx
AlertBox.ShowAlert('Profile updated.');

AlertBox.ShowAlert('Email sent.');

AlertBox.ShowAlert('Settings saved.');
```

---

# Change Display Duration

By default, alerts disappear after **2000 milliseconds**.

You can change the duration globally.

```tsx
AlertBox.setTimer(5000);
```

This example keeps every alert visible for **5 seconds**.

---

# Manual Close

Each alert contains a close button.

Users can dismiss notifications before the timer expires.

No additional configuration is required.

---

# API

## AlertBox.ShowAlert()

Displays a new alert.

```tsx
AlertBox.ShowAlert('Login successful');
```

| Parameter | Type   | Description   |
| --------- | ------ | ------------- |
| text      | string | Alert message |

---

## AlertBox.setTimer()

Changes the automatic dismissal duration.

```tsx
AlertBox.setTimer(4000);
```

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| time      | number | Duration in milliseconds |

---

## AlertBox.getInstance()

Returns the singleton alert manager.

```tsx
const alert = AlertBox.getInstance();
```

Normally you do not need to call this method directly.

---

# Renderer

## AlertBoxLib

Renders all active alerts.

```tsx
<AlertBoxLib />
```

This component should only be mounted **once**.

---

# Styling

The Alert component uses CSS variables for customization.

| Variable         | Description            |
| ---------------- | ---------------------- |
| `--danger-color` | Alert background color |
| `--border-color` | Border color           |
| `--label-size`   | Font size              |
| `--label-weight` | Font weight            |
| `--min-padding`  | Internal spacing       |

Example

```css
:root {
 --danger-color: #ffdddd;
 --border-color: #d0d7de;
}
```

---

# Behavior

The Alert component:

- Appears with a fade-in animation
- Automatically disappears after the configured duration
- Supports multiple simultaneous alerts
- Removes alerts independently
- Updates automatically without manual state management

---

# Best Practices

✅ Mount **one** `AlertBoxLib` in your application.

```tsx
<>
 <App />
 <AlertBoxLib />
</>
```

---

✅ Trigger alerts using the static API.

```tsx
AlertBox.ShowAlert('Saved successfully.');
```

---

✅ Configure the timer once during application startup.

```tsx
AlertBox.setTimer(3000);
```

---

# Complete Example

```tsx
import { AlertBox, AlertBoxLib, Button, ButtonLib } from '@cs7player/react-lib';

const button = new Button('Save');

export default function App() {
 return (
  <>
   <ButtonLib button={button} clickHandler={() => AlertBox.ShowAlert('Data saved successfully.')} />

   <AlertBoxLib />
  </>
 );
}
```

---

# Notes

- The Alert component follows a **singleton** pattern.
- All alerts are managed through a single global instance.
- Multiple alerts can be displayed simultaneously.
- Alerts are automatically removed after the configured timeout or when the user clicks the close button.
