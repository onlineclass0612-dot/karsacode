/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090e',
          900: '#090b10',
          850: '#0e121e',
          800: '#101422',
          700: '#161c2e',
        },
        cyan: {
          glow: '#0284c7',
          bright: '#38bdf8',
        },
        purple: {
          glow: '#8b5cf6',
          bright: '#c084fc',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
