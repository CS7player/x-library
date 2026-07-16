---
title: LocalStorage
description: Simple wrapper around browser localStorage.
---

# LocalStorage

The LocalStorage utility provides a type-safe wrapper around the browser's `localStorage`.

It automatically:

- Converts objects to JSON
- Encodes values with Base64
- Parses values when reading
- Handles errors safely

---

## Import

```tsx
import { LocalStorage } from '@cs7player/react-lib';
```

---

# Save Data

```tsx
LocalStorage.set('user', {
 name: 'John',
 age: 25,
});
```

---

# Read Data

```tsx
const user = LocalStorage.get<{
 name: string;
 age: number;
}>('user');

console.log(user);
```

---

# Remove

```tsx
LocalStorage.remove('user');
```

---

# Clear Everything

```tsx
LocalStorage.clear();
```

---

# Check if Exists

```tsx
if (LocalStorage.has('user')) {
 console.log('Found');
}
```

---

# API

## set()

```tsx
LocalStorage.set<T>(key, value);
```

Stores any serializable object.

---

## get()

```tsx
LocalStorage.get<T>(key);
```

Returns

```
T | null
```

---

## remove()

```tsx
LocalStorage.remove(key);
```

Deletes a single key.

---

## clear()

```tsx
LocalStorage.clear();
```

Removes every stored value.

---

## has()

```tsx
LocalStorage.has(key);
```

Returns

```
boolean
```

---

## Example

```tsx
import { LocalStorage } from '@cs7player/react-lib';

LocalStorage.set('theme', 'dark');

const theme = LocalStorage.get<string>('theme');

console.log(theme);

LocalStorage.remove('theme');
```
