/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
}