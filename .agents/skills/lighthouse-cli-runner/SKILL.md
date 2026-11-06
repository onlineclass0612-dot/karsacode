---
name: lighthouse-cli-runner
description: Lighthouse / PageSpeed CLI Integration & Local Audit Runner. Guides running automated headless Lighthouse audits via CLI, parsing output JSON reports, diagnosing performance bottlenecks, and systematically refactoring flagged performance issues.
---

# Lighthouse / PageSpeed CLI Integration

Automated workflows for running headless Lighthouse audits from the terminal, parsing JSON audit results, and refactoring diagnostic flags directly in code.

---

## 1. Running Lighthouse via CLI

### 1.1 Local Dev Server Audit (Headless Chrome)
Execute a headless Lighthouse mobile audit against a local preview or production server:
```bash
# Run against local production build preview
npx lighthouse http://localhost:4173 \
  --output=json \
  --output-path=./lighthouse-report.json \
  --only-categories=performance \
  --form-factor=mobile \
  --screenEmulation.mobile=true \
  --throttling.rttMs=150 \
  --throttling.throughputKbps=1638.4 \
  --throttling.cpuSlowdownMultiplier=4 \
  --chrome-flags="--headless=new --no-sandbox"
```

### 1.2 Desktop Audit Run
```bash
npx lighthouse http://localhost:4173 \
  --output=json \
  --output-path=./lighthouse-desktop.json \
  --only-categories=performance \
  --preset=desktop \
  --chrome-flags="--headless=new --no-sandbox"
```

---

## 2. Parsing Audit Report JSON

Key metrics to extract from `lighthouse-report.json`:
```javascript
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

const scores = {
  performance: report.categories.performance.score * 100,
  FCP: report.audits['first-contentful-paint'].displayValue,
  LCP: report.audits['largest-contentful-paint'].displayValue,
  TBT: report.audits['total-blocking-time'].displayValue,
  CLS: report.audits['cumulative-layout-shift'].displayValue,
  speedIndex: report.audits['speed-index'].displayValue,
};
```

---

## 3. Systematic Diagnostic Refactoring Playbook

### 3.1 Flag: "Avoid an excessive DOM size" (> 800–1,400 nodes)
* **Root Cause:** Rendering hundreds of off-screen elements, hidden accordion contents, or massive unvirtualized lists.
* **Refactor:**
  - Virtualize long lists with `@tanstack/react-virtual`.
  - Do not render modals/drawers in the DOM until the user triggers them (lazy mount).
  - Simplify wrapper `<div>` soup; flatten DOM trees.

### 3.2 Flag: "Reduce unused JavaScript" & "Reduce unused CSS"
* **Refactor:**
  - Move non-critical components to `React.lazy`.
  - Purge unneeded CSS utility classes or remove unused CSS framework packages.
  - Defer analytics or interactive widget scripts until user interaction.

### 3.3 Flag: "Eliminate render-blocking resources"
* **Refactor:**
  - Verify `<script type="module">` or `defer` on all scripts in `index.html`.
  - Incline critical CSS or use media switch trick for asynchronous stylesheets:
    `media="print" onload="this.media='all'"`.

### 3.4 Flag: "Serve static assets with an efficient cache policy"
* **Refactor:**
  - Static hashed assets (`/assets/*.js`, `/assets/*.css`, `/images/*.webp`): Set `Cache-Control: public, max-age=31536000, immutable`.
  - HTML documents (`index.html`): Set `Cache-Control: public, max-age=0, must-revalidate` (to ensure clients always get latest deploy).

---

## 4. Closed-Loop Audit Cycle

When tasked with fixing a performance issue:
1. **Baseline Audit:** Run local Lighthouse CLI to capture initial score and long task traces.
2. **Isolate Bottleneck:** Identify whether the bottleneck is LCP (image/preload), TBT (JS execution), or CLS (layout shifts).
3. **Execute Refactoring:** Apply targeted code modifications without altering visual UI design.
4. **Verification Run:** Re-run Lighthouse CLI to verify score improvement (target: Score 95–100, TBT < 100ms, LCP < 2.5s).
