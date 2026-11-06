---
name: bundle-size-optimizer
description: Bundle Size & Tree-Shaking Optimizer. Analyzes project dependencies, eliminates barrel file bloat, enforces granular named imports, implements dynamic code-splitting via React.lazy/dynamic imports, and configures optimal bundler chunk splitting.
---

# Bundle Size & Tree-Shaking Optimizer

Guidance, audit rules, and actionable patterns to trim client-side JavaScript bundles, eliminate duplicate modules, and maximize tree-shaking efficiency.

---

## 1. Import Sanitization & Tree-Shaking Audits

### 1.1 The Barrel File Trap
Barrel files (`index.js` exporting hundreds of submodules) break tree-shaking in many build pipelines, pulling megabytes of unneeded code into the entry bundle.
* ❌ **Anti-pattern:**
  ```javascript
  import { Check, Phone, Calendar, ArrowRight } from 'lucide-react';
  import { debounce, cloneDeep } from 'lodash';
  import { format, parseISO } from 'date-fns';
  ```
* ✅ **Optimized Pattern:**
  - For `lodash`: Use `lodash-es` or micro-packages (`lodash.debounce`), or native modern JS (`structuredClone`, standard debounce).
  - For icon libraries: Ensure bundler configuration transforms named imports or points directly to single-icon chunks.
  - For date libraries: Prefer native `Intl.DateTimeFormat` or modular `date-fns` direct submodule imports.

### 1.2 Deprecate Heavy Monolithic Libraries
| Heavy Monolithic Library | Modern Lightweight Replacement | Typical Savings |
| :--- | :--- | :--- |
| `moment.js` (290 kB) | `dayjs` (2 kB) or native `Intl` API | ~99% bundle cut |
| `lodash` (71 kB) | Native ES6+ methods (`Object.assign`, `[...arr]`) | 100% elimination |
| Full `framer-motion` (124 kB) | Pure GPU CSS animations / `@keyframes` | ~120 kB reduction |
| `axios` (32 kB) | Native `fetch` with typed wrapper | 100% elimination |

---

## 2. Dynamic Code Splitting & Lazy Loading

### 2.1 Route-Level Splitting
Every major page route must be dynamically loaded with `React.lazy` (or Next.js dynamic imports):
```javascript
import React, { lazy, Suspense } from 'react';

const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

export default function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
}
```

### 2.2 Component & Modal Splitting (Interaction-Based)
Never include heavy modals, lightboxes, PDF generators, or rich-text editors in the initial bundle:
```javascript
// Load only when user clicks "Lihat Detail" or "Preview"
const PackageModal = lazy(() => import('./components/PackageModal'));

function PackageSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => import('./components/PackageModal')} // Intelligent Pre-fetching on Hover
      >
        Lihat Detail
      </button>
      {isOpen && (
        <Suspense fallback={<ModalSkeleton />}>
          <PackageModal onClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
```

---

## 3. Bundler Chunk Configuration (Vite / Rollup / Webpack)

### 3.1 Vite / Rollup `manualChunks` Optimization
Prevent core framework runtimes (`react`, `react-dom`) from being accidentally grouped into third-party utility chunks:
```javascript
// vite.config.js
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
        }
      }
    }
  }
});
```

---

## 4. Bundle Analysis Tooling

Run analysis tools periodically to visualize chunk composition:
* **Vite / Rollup:** `rollup-plugin-visualizer` (generates `stats.html` heatmap).
* **Next.js:** `@next/bundle-analyzer`.
* **Webpack:** `webpack-bundle-analyzer`.
* **Size Limit Enforcement:** Use `size-limit` in CI to fail builds that exceed budget thresholds (e.g., initial JS budget < 80 kB gzipped).
