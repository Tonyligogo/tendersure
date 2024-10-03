/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen:'#009933',
        customBlue:'#002c5b',
      }
    },
  },
  plugins: [],
}