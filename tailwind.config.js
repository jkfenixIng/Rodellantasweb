/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#08153F',
        'brand-red': '#EF3924',
        'brand-white': '#FFFFFF',
        'brand-gray': '#F5F5F5',
        'brand-dark': '#1a1a1a',
        'brand-light': '#e0e0e0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
