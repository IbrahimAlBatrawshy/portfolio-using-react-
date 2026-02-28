/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#171717',
        primary: '#3b82f6', // soft blue
        secondary: '#8b5cf6', // soft purple
      },
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
};
