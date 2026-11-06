---
name: web-performance-auditor
description: Web Performance & Core Web Vitals Auditor. Systematically audits frontend components for LCP, CLS, INP/FID, and FCP issues, enforcing modern image formats (WebP/AVIF), responsive preloads, font-display swap, and zero render-blocking assets.
---

# Web Performance & Core Web Vitals Auditor

Comprehensive checklist, audit rules, and refactoring patterns for frontend web performance and Google Core Web Vitals (CWV) compliance.

---

## 1. Largest Contentful Paint (LCP) Optimization (Target: < 2.5s)

### 1.1 Element Identification
- Identify the LCP element (typically the Hero image, large headline text, or video poster).
- **Rule:** The LCP element must NEVER be lazy-loaded (`loading="lazy"` on LCP causes an instant 1–2s penalty).

### 1.2 Image Optimization Standards
- **Format:** Serve modern compressed formats: **WebP** or **AVIF** with 80–85% quality.
- **Preload Scanner Discovery:** Add `<link rel="preload">` in the `<head>` of `index.html` with responsive `media` queries:
  ```html
  <link rel="preload" as="image" href="/images/hero-mobile.webp" media="(max-width: 768px)" type="image/webp" fetchpriority="high" />
  <link rel="preload" as="image" href="/images/hero-desktop.webp" media="(min-width: 769px)" type="image/webp" fetchpriority="high" />
  ```
- **Priority Attribute:** Always specify `fetchpriority="high"` and `decoding="async"` on the primary `<img>` or `<picture>` element.
- **Avoid Client-Side Dynamic Injections for LCP:** Ensure the LCP markup is present in the initial server HTML or static HTML template rather than injected after heavy client-side JavaScript execution.

---

## 2. Cumulative Layout Shift (CLS) Prevention (Target: < 0.1, Ideal: 0.0)

### 2.1 Explicit Aspect Ratio & Dimensions
- Every `<img>`, `<video>`, `<iframe>`, and SVG container must have explicit `width` and `height` attributes (or CSS `aspect-ratio`):
  ```html
  <img src="/logo.webp" width="128" height="128" alt="Brand Logo" class="w-10 h-10 object-contain" />
  ```
- Use CSS `aspect-ratio: 16 / 9` or modern padding containers to reserve bounding boxes before external assets finish downloading.

### 2.2 Dynamic Content & Skeleton Placeholders
- Reserve exact layout heights for dynamic content (banners, carousels, testimonials) using min-height or skeleton wrappers so newly loaded data does not push down layout blocks.
- **Fonts:** Prevent layout shift from Flash of Unstyled Text (FOUT) by matching fallback font metrics using CSS `size-adjust`, `ascent-override`, and `descent-override`.

---

## 3. Total Blocking Time (TBT) & Interaction to Next Paint (INP)

### 3.1 Main Thread Offloading
- Eliminate heavy JavaScript computation during initial page boot.
- Break long tasks (>50ms) using `requestIdleCallback`, `scheduler.yield()`, or `setTimeout(..., 0)`.
- Replace heavy JavaScript animation libraries (`framer-motion`, `gsap`) with pure CSS transitions and GPU-accelerated keyframes (`transform`, `opacity`) for common UI states.

### 3.2 Mobile GPU Throttling Prevention
- **Rule:** Never use real-time animated CSS `backdrop-filter: blur(...)` inside continuous animations on mobile screens. Mobile GPUs (Mali, Adreno) drop framerates to 15–20 FPS under canvas blurs. Use solid elegant background colors on mobile, and restrict blurs to desktop via responsive media queries (`md:backdrop-blur-sm`).

---

## 4. Elimination of Render-Blocking Resources

### 4.1 Scripts
- Scripts in `<head>` must have `defer`, `async`, or `type="module"` attributes.
- Non-critical 3rd-party analytics or widgets (Google Tag Manager, Meta Pixel, Hotjar) must be deferred until user interaction (`scroll`, `click`, `touchstart`) or loaded via Web Workers (Partytown).

### 4.2 Stylesheets
- Incline critical Above-The-Fold CSS directly in the `<head>` if feasible.
- Non-critical CSS or print styles:
  ```html
  <link rel="stylesheet" href="/fonts.css" media="print" onload="this.media='all'" />
  ```

---

## 5. Web Font Optimization

- Add `<link rel="preconnect">` and `crossorigin` for external font origins (e.g., `fonts.googleapis.com` & `fonts.gstatic.com`).
- Always specify `font-display: swap` in `@font-face` definitions to allow text to render immediately with fallbacks.
- Subset web fonts to only the required character ranges (Latin / Indonesian) rather than downloading 100+ language glyphs.
