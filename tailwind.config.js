/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'bar': ['Barlow Condensed', 'sans-serif'],
    },
    
    container: {
      center: true,
    },
    screens: {
      'sm': '380px',
      'md': '700px',
      'lg': '1280px',
      "xl" : '1440px'
    },

    extend: {},
  },

  plugins: [],
  
}