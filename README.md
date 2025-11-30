# Vite + React + Tailwind CSS + shadcn/ui + Font Awesome Project

A complete modern web development setup with all the essential tools for building beautiful, responsive React applications.

## 🚀 Features

- **Vite** - Lightning-fast build tool and dev server
- **React 19** - Latest React with modern features
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible React components
- **Font Awesome** - Comprehensive icon library
- **ESLint** - Code linting and formatting

## 📋 Prerequisites

Make sure you have Node.js installed (version 16 or higher):

- Download from: https://nodejs.org/

## 🛠️ Installation & Setup

Follow these steps to get your project running:

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at: http://localhost:5173

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/
│       └── button.jsx          # shadcn/ui Button component
├── lib/
│   └── utils.js               # Utility functions (cn helper)
├── App.jsx                    # Main application component
├── main.jsx                   # React entry point
└── index.css                  # Global styles with Tailwind

Configuration Files:
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Project dependencies
└── vite.config.js             # Vite configuration
```

## 🎨 Available Components

### shadcn/ui Button Component

```jsx
import { Button } from './components/ui/button'

// Usage examples:
<Button variant="default">Default Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button size="lg">Large Button</Button>
```

### Font Awesome Icons

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faCode } from "@fortawesome/free-solid-svg-icons";

// Usage:
<FontAwesomeIcon icon={faHeart} className="text-red-500" />;
```

## 🎯 Adding More Components

To add more shadcn/ui components, create new files in `src/components/ui/` following the same pattern as the Button component. Visit [shadcn/ui](https://ui.shadcn.com/) for more components.

## 🎨 Customizing Tailwind

Edit `tailwind.config.js` to customize your design system:

- Colors
- Typography
- Spacing
- Breakpoints
- And more...

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📖 Documentation Links

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Font Awesome](https://fontawesome.com/docs/web/use-with/react/)

## 🎉 Ready to Start!

Your development environment is now fully configured and ready to use. The example application demonstrates all the integrated technologies working together.

Happy coding! 🚀
