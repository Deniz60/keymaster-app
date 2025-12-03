# KeyMaster - Keyboard Shortcuts Cheatsheet Platform

## Tech Stack
- **Framework**: Next.js 14+ (App Router) for SEO optimization
- **Styling**: Tailwind CSS with dark mode default
- **Icons**: Lucide React
- **Animations**: Framer Motion for micro-interactions
- **Language**: TypeScript for strong typing

## Project Structure
```
KeyMaster/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── ShortcutCard.tsx
│   ├── SearchBar.tsx
│   ├── OSToggle.tsx
│   ├── CategoryFilter.tsx
│   └── Toast.tsx
├── hooks/
│   └── useShortcuts.ts
├── data/
│   └── shortcuts.ts
├── types/
│   └── index.ts
└── lib/
    └── utils.ts
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Adding New Apps
To add shortcuts for a new app (e.g., Excel, Figma):
1. Add app type to `types/index.ts`
2. Add shortcut data to `data/shortcuts.ts`
3. The filtering and UI will automatically include the new app
