/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Kaushan": 'Kaushan Script',
    },
  },
  plugins: [require("daisyui")],
}

