/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '380px',
        'md': '700px',
        'lg': '1280px',
        'xl': '1440px'
      },
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
