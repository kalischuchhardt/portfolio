/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          darkBrown: '#5E5946',
          mediumBrown: '#AE887B',
          mutedGreen: '#C3C1AB',
          lightTan: '#D9BFB1',
          lightBeige: '#E7E5D9',
          cream: '#F0DED0',
        },
      },
    },
  },
}
