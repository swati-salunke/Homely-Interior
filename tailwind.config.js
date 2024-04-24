/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        monteserrat: ["Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        'lato': ['Lato']
    },
    backgroundImage: {
      'counter': "url('/images/counter.jpg')",
    }
    },
  },
  plugins: [],
}

