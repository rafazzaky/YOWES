/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens:{
      'sm': '640px',

      'md': '720px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {fontFamily:{
      pop: "'Poppins', sans-serif;",
    },
    colors: {
      primary: '#3B9AE1',
      secondary: {
        1: '#3120E0',
        2: '#21E1E1'
      },
      third: '#F0EABE',
    },
  },
  },
  plugins: [],
}
