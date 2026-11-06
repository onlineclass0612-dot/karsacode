---
name: performant-web-animations
description: Panduan penulisan animasi UI/UX yang halus, menarik, dan 60 FPS tanpa menurunkan Core Web Vitals (INP/CLS) di desktop maupun mobile.
---

# Web Animation & Motion Guidelines

Terapkan aturan berikut setiap kali membuat animasi, micro-interactions, atau transisi halaman:

## 1. Aturan Properti Komposisi (GPU-Accelerated)
- Gunakan **HANYA** `transform` (`translate`, `scale`, `rotate`) dan `opacity` untuk animasi kontinu, transisi elemen, atau hover effects.
- **DILARANG** menganimasikan `width`, `height`, `top`, `bottom`, `left`, `right`, `margin`, atau `padding` karena memaksa browser melakukan reflow/relayout di setiap frame.
- Untuk efek ekspansi/akordion, kombinasikan `transform: scaleY()` atau CSS Grid `grid-template-rows: 0fr -> 1fr` secara hati-hati tanpa memicu reflow terus-menerus.

## 2. Pengendalian Memori & Baterai Mobile
- Jangan gunakan `will-change` secara permanen pada banyak elemen sekaligus; batasi hanya pada elemen yang sedang dianimasikan untuk mencegah kehabisan VRAM/memori GPU.
- Hindari filter berat berulang (`backdrop-filter: blur()`, `box-shadow` berlapis besar) di dalam keyframes animasi pada viewport mobile. Gunakan solid color atau batasi blur hanya pada breakpoint desktop (`md:backdrop-blur-sm`).

## 3. Scroll & Event Handling
- Jangan gunakan event listener JavaScript mentah (`window.addEventListener('scroll', ...)`) untuk efek parallax/scroll karena dapat memblokir Main Thread.
- Gunakan CSS Scroll-Driven Animations atau `IntersectionObserver` untuk memicu kelas animasi saat elemen masuk viewport secara asynchronous.

## 4. Aksesibilitas
- Selalu sediakan fallback untuk pengguna dengan sensitivitas visual atau mode hemat baterai:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

## 5. Aturan Khusus Framer Motion / Motion Library
- **Jangan mencampur Tailwind transform classes** (seperti `-translate-y-1`, `scale-95`, `rotate-45`) dengan properti `animate` atau `whileHover` pada elemen `<motion.*>` yang sama untuk mencegah tabrakan/override pada inline style `transform`.
- **Pemisahan Peran:** Serahkan animasi dinamis/interaktif sepenuhnya ke props motion (`x`, `y`, `scale`, `opacity`), dan gunakan Tailwind hanya untuk styling statis (warna, padding, layout, rounded, shadow).
- **Aksesibilitas Framer Motion:** Selalu gunakan `useReducedMotion()` untuk menghormati preferensi aksesibilitas pengguna:
  ```javascript
  import { useReducedMotion } from 'framer-motion'; // atau motion/react

  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  ```
