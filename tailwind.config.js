/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'soft-red' : 'rgba(255, 19, 19, 0.04)',
      },
    },
  },
  plugins: [],
}