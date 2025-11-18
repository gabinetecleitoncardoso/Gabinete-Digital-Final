/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0D47A1',
        'brand-gold': '#FFD700',
        'brand-light': '#F1F5F9',
        'brand-dark': '#0A3A82',
        'brand-navy': '#1A2B42',
        'page-bg': '#F3F4F6',
        'icon-circle-bg': '#E0EFFF',
        'icon-circle-fg': '#3B82F6',
      },
    },
  },
  plugins: [],
}