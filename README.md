# 🚀 React UI Reuseable Component Library

<p align="center">
  <img src="./icons/poster.png" width="500" alt="React Lib Logo" />
</p>

<p align="center">
  <strong>A modern, lightweight, and reusable React component library built with TypeScript.</strong>
</p>

<p align="center">
Build beautiful React applications faster with customizable UI components, two-way data binding, and a developer-friendly API.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![npm](https://img.shields.io/npm/v/@cs7player/react-lib)

</p>

---

# ✨ Why React Lib?

React Lib is designed to make UI development simple, fast, and maintainable.

It provides reusable components with an object-oriented approach, allowing state and UI to stay synchronized with minimal boilerplate.

## Features

- 🎨 Modern and clean UI
- ⚡ Built with React + TypeScript
- 📦 Lightweight package
- 🔄 Two-way data binding
- 🧩 Reusable architecture
- 📱 Responsive components
- 🎯 Strong TypeScript support
- 🛠 Highly customizable
- 🚀 Easy integration

---

# 📦 Installation

Using npm

```bash
npm install @cs7player/react-lib
```

Using Yarn

```bash
yarn add @cs7player/react-lib
```

Using pnpm

```bash
pnpm add @cs7player/react-lib
```

---

# 🎨 Import Styles

```tsx
import '@cs7player/react-lib/styles.css';
```

---

# 🚀 Quick Start

```tsx
import '@cs7player/react-lib/styles.css';

import { Button, ButtonLib } from '@cs7player/react-lib';

function App() {
 const button = new Button('Click Me');

 return <ButtonLib button={button} />;
}

export default App;
```

---

# 📚 Available Components

| Component       | Status      |
| --------------- | ----------- |
| ✅ Button       | Stable      |
| ✅ Text Field   | Stable      |
| ✅ Checkbox     | Stable      |
| ✅ Radio Button | Stable      |
| ✅ Dropdown     | Stable      |
| ✅ Switch       | Stable      |
| ✅ Tooltip      | Stable      |
| ✅ Time Picker  | Stable      |
| ✅ Label Header | Stable      |
| ✅ Alert        | Stable      |
| ✅ Loader       | Stable      |
| 🚧 Date Picker  | Coming Soon |
| 🚧 Dialog       | Coming Soon |
| 🚧 Autocomplete | Coming Soon |

---

# 📖 Documentation

Documentation, examples, and API reference are available on GitHub.

## Repository

https://github.com/CS7player/x-library

---

# 🛠 Development

Clone the repository

```bash
git clone https://github.com/CS7player/x-library.git
```

Install dependencies

```bash
npm install
```

Build the library

```bash
npm run build
```

Link locally

```bash
npm link
```

In your local React project

```bash
npm link @cs7player/react-lib
```

---

# 💡 Example

```tsx
const textField = new TextField('Username');

<TextFieldLib textField={textField} />;
```

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Commit your changes.

```bash
git commit -m "Add awesome feature"
```

4. Push your branch.

```bash
git push origin feature/my-feature
```

5. Open a Pull Request.

---

# 📄 License

Distributed under the MIT License.

See the **LICENSE** file for more information.

---

# 👨‍💻 Author

**Chandra Sekhar**

GitHub:
https://github.com/CS7player

---

⭐ If you find this project useful, consider giving it a star on GitHub!
