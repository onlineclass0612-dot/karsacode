---
name: puppeteer
description: Puppeteer / Playwright Browser Automation. Complements Antigravity's built-in browser to run automated end-to-end (E2E) testing, login flow validation, responsive layout checks across viewports, and headless browser tasks.
---

# Puppeteer / Playwright Browser Automation Guide

A comprehensive automation guide designed to complement Antigravity's built-in browser tools. Use this skill to execute automated end-to-end (E2E) test suites, validate authentication/login flows, inspect responsive UI layouts across multiple devices, and render pixel-perfect documents.

---

## 1. Role in the Antigravity Ecosystem

In Antigravity, browser automation operates on two complementary levels:

| Tool / Layer | Primary Purpose | When to Use |
|---|---|---|
| **Antigravity `browser_subagent`** | Interactive, visual, real-time browser exploration. | Visual smoke-testing, debugging interactive UI, and recording WebP demonstration videos for the user. |
| **Puppeteer / Playwright Scripts** | Headless, programmatic, assertion-driven automation. | Running automated E2E test suites, regression testing, multi-viewport layout validation, and headless PDF invoice rendering. |

---

## 2. End-to-End (E2E) Testing Workflows

### 2.1 Complete Booking / Transaction Flow
Simulate a real customer journey from landing to confirmation:

```typescript
import puppeteer from 'puppeteer';

export async function testBookingFlow(baseUrl: string) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await browser.newPage();

  try {
    // 1. Visit Catalog
    await page.goto(`${baseUrl}/catalog`, { waitUntil: 'networkidle2' });
    await page.waitForSelector('[data-testid="car-card"]');

    // 2. Select Car and Date Range
    await page.click('[data-testid="car-card"]:first-child a');
    await page.waitForSelector('[data-testid="start-date-input"]');
    await page.type('[data-testid="start-date-input"]', '2026-11-01');
    await page.type('[data-testid="end-date-input"]', '2026-11-03');

    // 3. Fill Customer Details
    await page.type('#customerName', 'Budi Santoso');
    await page.type('#customerPhone', '081234567890');

    // 4. Submit & Assert Navigation to Checkout / Tracking
    await page.click('[data-testid="submit-booking-btn"]');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const currentUrl = page.url();
    if (!currentUrl.includes('/order/') && !currentUrl.includes('/checkout')) {
      throw new Error(`E2E Failure: Unexpected redirect target: ${currentUrl}`);
    }

    console.log('✅ Booking Flow Test Passed!');
  } finally {
    await browser.close();
  }
}
```

---

## 3. Login & Authentication Flow Validation

### 3.1 Validating Form Security & Edge Cases
Always test authentication flows against three core scenarios:

1. **Invalid Credentials Check:**
   - Input incorrect email/password.
   - Assert error banner appears (`[data-testid="auth-error"]`).
   - Assert user remains on `/login` and no authentication session/cookie is set.
2. **Successful Login & Session Storage:**
   - Input valid credentials.
   - Assert redirect to `/admin` or `/dashboard`.
   - Verify auth cookie/token presence:
     ```typescript
     const cookies = await page.cookies();
     const authCookie = cookies.find((c) => c.name === 'session' || c.name === 'token');
     if (!authCookie) throw new Error('Missing session token cookie after successful login');
     ```
3. **Route Guarding & Protected Route Test:**
   - Open a fresh incognito context without cookies.
   - Navigate directly to `/admin/cars`.
   - Assert immediate redirection back to `/login?redirect=/admin/cars`.

---

## 4. Automated Responsive Layout Checks

Detect horizontal overflow bugs, broken layouts, and truncated elements across standard device breakpoints.

### 4.1 Multi-Device Viewport Matrix

```typescript
export const VIEWPORT_MATRIX = [
  { name: 'Mobile Portrait (iPhone 14 / Pixel)', width: 390, height: 844, isMobile: true },
  { name: 'Mobile Small (Budget Android)', width: 360, height: 800, isMobile: true },
  { name: 'Tablet Portrait (iPad Mini)', width: 768, height: 1024, isMobile: true },
  { name: 'Laptop / Desktop HD', width: 1366, height: 768, isMobile: false },
  { name: 'Desktop Full HD', width: 1920, height: 1080, isMobile: false },
];
```

### 4.2 Automated Layout Inspection Script

```typescript
export async function auditResponsiveLayout(page: any, url: string) {
  for (const vp of VIEWPORT_MATRIX) {
    await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.isMobile });
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Check for Horizontal Overflow (The most common mobile bug)
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    if (hasHorizontalOverflow) {
      console.error(`🚨 Layout Bug: Horizontal scroll detected on ${vp.name} (${vp.width}px)!`);
      await page.screenshot({ path: `overflow-bug-${vp.name.replace(/\s+/g, '_')}.png` });
      throw new Error(`Horizontal overflow defect detected at ${vp.width}px width.`);
    }

    // Verify Mobile Navigation Elements
    if (vp.isMobile) {
      const isMobileMenuPresent = await page.$('[data-testid="mobile-menu-btn"], [data-testid="hamburger"]');
      if (!isMobileMenuPresent) {
        console.warn(`⚠️ Warning: Mobile hamburger/navigation button not found on ${vp.name}`);
      }
    }
  }
  console.log('✅ All viewports passed responsive layout validation!');
}
```

---

## 5. High-Resolution PDF & Document Generation

Used for generating pixel-perfect invoices, booking receipts, and printable vouchers:

```typescript
export async function renderInvoicePdf(htmlContent: string): Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();

  try {
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true, // Crucial for rendering badge colors & gradients
      margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
      preferCSSPageSize: true,
    });
    return Buffer.from(pdfBuffer);
  } finally {
    await browser.close();
  }
}
```

---

## 6. Pre-Test Automation Checklist

- [ ] **Cleanup Guarantee:** Is every `browser.newPage()` or `puppeteer.launch()` wrapped in `try...finally` with `browser.close()`?
- [ ] **No Flaky Timeouts:** Are hardcoded `sleep` delays replaced with dynamic `waitForSelector()` or `waitForNavigation()`?
- [ ] **Mobile-First Validation:** Has the page been tested against `360px` and `390px` widths for horizontal scroll leakage?
- [ ] **Defensive Auth:** Do unauthenticated visits to protected admin routes redirect to `/login`?
- [ ] **Error Artifacts:** Are screenshots captured automatically upon test assertion failures?
