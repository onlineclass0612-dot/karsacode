# KarsaCode Agent Workspace Guidelines

Welcome to the **KarsaCode** project. This file establishes coding standards, conventions, and operational workflows for AI agents operating within this workspace.

---

## 1. Project Overview & Tech Stack
- **Framework**: React 19 SPA (`react`, `react-dom`)
- **Build Tool**: Vite 8 with `@vitejs/plugin-react`
- **CSS Engine**: Tailwind CSS v4 with `@tailwindcss/vite` and PostCSS
- **Animation**: Framer Motion 13 (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Linter**: Oxlint (`oxlint`) configured via `.oxlintrc.json`
- **i18n**: In-house Context (`src/context/LanguageContext.jsx`) supporting Indonesian (`id`) and English (`en`)

---

## 2. Terminal & Command Execution (Windows)
Because PowerShell script execution policies may restrict `.ps1` wrappers for Node tools:
- Always invoke npm scripts via `cmd /c npm <command>` (e.g., `cmd /c npm run lint`, `cmd /c npm run build`, `cmd /c npm run dev`).
- Ensure all commits follow the **Conventional Commits** format: `feat:`, `fix:`, `refactor:`, `chore:`, `style:`.

---

## 3. UI/UX & Design Philosophy
- **Theme**: Ambient dark theme with base background `#0D0C10` overlaid with a seamless constellation mesh texture (`/assets/tiled_bg.jpg` repeat at 512px).
- **Accents**:
  - Warm Amber: `#FFB347` (selection, primary focal glow)
  - Cyan Glow: `#0284c7`, `#38bdf8`
  - Purple Glow: `#8b5cf6`, `#c084fc`
  - Glassmorphic panels: `backdrop-blur-md`, subtle border highlights (`border-white/10`).
- **Typography**: Clean modern sans-serif typography (`Plus Jakarta Sans`).

---

## 4. Performance & Animation Rules
- **60 FPS Rule**: Animate only composite properties (`transform`, `opacity`). Never animate layout properties like `height`, `width`, `top`, `left`, `margin`, or `padding`.
- **Viewport Triggers**: Always add `viewport={{ once: true }}` to scroll animations to avoid repeating heavy animations.
- **Bundle Optimization**: Ensure granular imports from `lucide-react` and avoid large uncompressed media. Keep production JS bundles lean.

---

## 5. Multilingual Localization (i18n)
- Every user-facing UI text must be stored in `src/context/LanguageContext.jsx` in both `translations.id` and `translations.en`.
- Do not introduce raw Indonesian or English strings directly in component JSX.

---

## 6. Installed Workspace Skills (`.agents/skills/`)
The following specialized skills are installed in `.agents/skills/` to assist in workflows:
1. `karsacode-stack`: Specific architecture, design system, and runbook for KarsaCode.
2. `ui-ux-pro-max`: Design intelligence for color palettes, typography, bento layouts, and UX heuristics.
3. `performant-web-animations`: Guidelines for high-performance 60 FPS Framer Motion animations.
4. `bundle-size-optimizer`: Strategies for chunk splitting, tree-shaking, and bundle size reduction in Vite.
5. `web-performance-auditor`: Audit checklists for Core Web Vitals (LCP, CLS, INP) and asset delivery.
6. `lighthouse-cli-runner`: Running headless local Lighthouse audits to gauge performance and SEO.
7. `clean-code-playbook`: Clean code standards, refactoring principles, and maintainability.
8. `coderabbit`: Automated code review persona for security, edge cases, and code quality.
9. `git-commit-formatter`: Standardized atomic Conventional Commits workflow.
10. `gsd-core`: Phased execution methodology (Explore, Plan, Execute, Verify).
11. `puppeteer`: Automated browser testing and cross-device responsive layout validation.
