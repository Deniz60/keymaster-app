# KeyMaster - Professional Keyboard Shortcuts Cheatsheet

A modern, SEO-optimized keyboard shortcuts cheatsheet platform built with Next.js 14+, Tailwind CSS, and Framer Motion.

## Features

- 🔍 **Dynamic Search** - Real-time filtering by action name, category, or key
- 💻 **OS Toggle** - Switch between Windows (Ctrl) and macOS (Cmd) key bindings
- 📁 **Category Filtering** - Filter shortcuts by category (Editing, Navigation, Terminal, etc.)
- 📋 **Copy to Clipboard** - Click any shortcut card to copy the key combination
- 🎨 **Dark Mode** - Modern glassmorphism design with smooth animations
- 🚀 **SEO Optimized** - JSON-LD schema, semantic HTML, and optimized metadata
- ♿ **Accessible** - Full keyboard navigation and ARIA labels

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
KeyMaster/
├── app/
│   ├── layout.tsx      # Root layout with metadata & JSON-LD
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── ShortcutCard.tsx    # Individual shortcut card with animations
│   ├── SearchBar.tsx       # Search input component
│   ├── OSToggle.tsx        # Windows/macOS toggle switch
│   ├── CategoryFilter.tsx  # Category pill filters
│   └── Toast.tsx           # Copy confirmation toast
├── hooks/
│   └── useShortcuts.ts     # Filtering logic hook
├── data/
│   └── shortcuts.ts        # VS Code shortcuts data
├── types/
│   └── index.ts            # TypeScript interfaces
└── lib/
    └── utils.ts            # Utility functions
```

## Adding New Apps

To add shortcuts for a new application (e.g., Figma, Excel):

1. **Add app type** to `types/index.ts`:
```typescript
export type AppType = 'vscode' | 'figma' | 'excel';
```

2. **Add app info** to `data/shortcuts.ts`:
```typescript
export const appInfo: Record<string, AppInfo> = {
  // ... existing apps
  figma: {
    id: 'figma',
    name: 'Figma',
    icon: 'Figma',
    color: '#F24E1E',
  },
};
```

3. **Add shortcuts** to the `shortcuts` array in `data/shortcuts.ts`:
```typescript
{
  id: 'figma-zoom-in',
  app: 'figma',
  action: 'Zoom In',
  category: 'View',
  keys: {
    win: ['Ctrl', '+'],
    mac: ['Cmd', '+'],
  },
  description: 'Zoom in on the canvas.',
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
