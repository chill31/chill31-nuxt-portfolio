/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ], theme: {
    extend: {
      colors: {
        'bg': '#262B2E',
        'accent': '#41E3A7',
      },
      fontSize: {
        'h1': '4.8rem',
        'h2': '2.8rem',
        'h3': '2rem',
        'main': '1.1rem',
      },
    },
  },
  plugins: [],
}

