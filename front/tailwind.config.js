/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '340px',
      'xl': '1280px',
      
    },
    extend: {},
  },
  plugins: [],
}

