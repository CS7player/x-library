---
title: Icons
description: Built-in SVG icon library.
---

# Icons

X Library ships with a collection of lightweight SVG icons.

No external icon library is required.

## Import

```tsx
import { Icons, IconSize } from '@cs7player/react-lib';
```

---

## Available Icons

| Icon         |
| ------------ |
| Menu         |
| Search       |
| User         |
| Info         |
| Mail         |
| Eye          |
| EyeSlash     |
| Edit         |
| Trash        |
| Calendar     |
| Clock        |
| ChevronUp    |
| ChevronDown  |
| ChevronLeft  |
| ChevronRight |

---

## Basic Usage

```tsx
import { Icons } from '@cs7player/react-lib';

function Example() {
 return <Icons.Search />;
}
```

---

## Size

Use predefined sizes.

```tsx
<Icons.Search size={IconSize.SM} />
<Icons.Search size={IconSize.MD} />
<Icons.Search size={IconSize.LG} />
<Icons.Search size={IconSize.XL} />
```

or any custom number.

```tsx
<Icons.Search size={40} />
```

---

## Color

```tsx
<Icons.Search color="red" />

<Icons.User color="#2563eb" />

<Icons.Calendar color="green" />
```

---

## Styling

```tsx
<Icons.Menu size={32} color="#333" className="my-icon" />
```

---

## Props

| Prop      | Type               | Default | Description          |
| --------- | ------------------ | ------- | -------------------- |
| size      | number \| IconSize | MD      | Icon size            |
| color     | string             | "#000"  | Icon color           |
| className | string             | -       | Additional CSS class |

---

## Example

```tsx
import { Icons, IconSize } from '@cs7player/react-lib';

export default function App() {
 return (
  <>
   <Icons.Menu />

   <Icons.Search size={IconSize.LG} color="#2563eb" />

   <Icons.Calendar size={40} color="green" />
  </>
 );
}
```
