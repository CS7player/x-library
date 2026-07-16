# Observable Architecture

Unlike traditional React component libraries, every component in
**@cs7player/react-lib** is backed by an Observable model.

Instead of storing state inside React components using `useState`,
state lives inside classes.

React only subscribes to changes.

```

React
        ↓
Observable Model
        ↓
Component Updates
```

## Why?

- Less prop drilling
- Easy state management
- Reusable business logic
- Reactive updates
- Easier testing

---

# How it Works

Every component has two parts.

1. Model

```tsx
const button = new Button('Save');
```

2. React Component

```tsx
<ButtonLib button={button} />
```

The model stores all state.

The component only renders it.

---

# Updating State

```tsx
button.setDisabled(true);

button.setStartIcon(<Icons.Save />);
```

No React state is required.

The component updates automatically.

---

# Observable Base Class

Every component extends

```tsx
Observable<T>;
```

Example

```tsx
export class Button extends Observable<Button> {}
```

Whenever

```tsx
this.uiRender();
```

is called,

every subscribed component automatically updates.

---

# Example

```tsx
const button = new Button('Save');

button.setDisabled(true);

button.setStartIcon(<Icons.Save />);
```

React updates automatically.

No

```tsx
setState();

useState();

useReducer();
```

are needed.

---

# Benefits

- Clean separation of UI and state
- Reusable models
- Less React boilerplate
- Predictable rendering
- Better scalability
