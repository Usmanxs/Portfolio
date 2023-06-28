/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ['var(--font-poppins)']
      // },
      colors: {
        grey: {
          800: '#18141c',
          900: '#120f16'
        },
        voilet:{
          700: "#a21caf"
        }
      },
      backgroundImage: {
     
      }
    },
    plugins: [],
  }
}