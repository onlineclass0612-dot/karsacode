---
name: karsacode-stack
description: >-
  Specialized engineering runbook and architecture guide for the KarsaCode project.
  Use when developing, modifying components, styling with Tailwind v4, animating with Framer Motion,
  handling i18n translations, or verifying builds and linter in KarsaCode.
---

# KarsaCode Project Architecture & Guidelines

KarsaCode is a high-performance, dark-aesthetic landing and showcase application for a modern digital engineering and evolution studio.

## 1. Core Technology Stack
- **Framework**: React 19 (`react`, `react-dom`)
- **Bundler & Dev Server**: Vite 8 (`@vitejs/plugin-react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/postcss`, `postcss`)
- **Animations**: Framer Motion 13 (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Linter**: Oxlint (`oxlint`)
- **Internationalization (i18n)**: In-house React Context (`src/context/LanguageContext.jsx`) supporting Indonesian (`id`) and English (`en`).

## 2. Design Aesthetics & Visual Identity
- **Base Background**: `#0D0C10` with seamless constellation mesh overlay (`/assets/tiled_bg.jpg` repeat at 512px) and dark overlay (`bg-[#0D0C10]/40`).
- **Color Accents**:
  - Primary Highlight: Warm Amber (`#FFB347` / `text-[#FFB347]` / `selection:bg-[#FFB347]/30`)
  - Cyan Accent: `#0284c7` (glow) and `#38bdf8` (bright)
  - Purple Accent: `#8b5cf6` (glow) and `#c084fc` (bright)
  - Neutral Darks: `#07090e`, `#090b10`, `#101422`, `#161c2e`
- **UI Architecture**: Spatial glassmorphism, subtle glowing border radiuses, bento cards with responsive layout grids.

## 3. Bilingual i18n Rules
- Never hardcode user-facing textual content directly in JSX.
- All copy must be defined in `src/context/LanguageContext.jsx` under both `translations.id` and `translations.en`.
- Use the hook `const { t, language, setLanguage } = useLanguage();` to access strings.

## 4. Animation & Framer Motion Conventions
- Use `whileInView` with `viewport: { once: true, amount: 0.2 }` for smooth scroll entries.
- Animate only composite-friendly properties (`opacity`, `transform: translate/scale`) to preserve 60 FPS and prevent layout shifts.
- Keep spring parameters subtle (e.g., `stiffness: 260, damping: 20` or `duration: 0.5`).

## 5. Build, Lint & Execution Commands
When running commands in the Windows terminal:
- **Lint**: Run `cmd /c npm run lint` to execute Oxlint. Keep zero errors.
- **Build**: Run `cmd /c npm run build` to verify Vite bundle output.
- **Dev**: Run `cmd /c npm run dev` for local HMR.
