/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",flowbite.content(),
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        libre: ["Libre Baskerville", 'serif']
      }, 
      colors: {
        primary: {
          500: '#BDA19F',
          300: '#FBF5F2'
        }
      }
    },
  },
  plugins: [ flowbite.plugin(),],
}

