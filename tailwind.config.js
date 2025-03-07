/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto Mono', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        rufina:['Rufina', 'sans-serif'],
      },
     colors:{
      hero_green:"#224F34",
     }
    },
  },
  plugins: [],
}