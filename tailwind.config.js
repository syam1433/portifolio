/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fonts:[
          "Arvo",
        ],
        newfont:[
          "Regular 400",
        ]
      },
      height: {
        'custom-1': '650px',
        'custom-2': '75%',
      },
      colors:{
        "navbg":"#DFEBF7"
      }
    },
  },
  plugins: [],
}

