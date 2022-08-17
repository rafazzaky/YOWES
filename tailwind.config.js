/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {fontFamily:{
      pop: "'Poppins', sans-serif;",
    },
    colors: {
      primary: '#132786',
      secondary: {
        1: '#FEBD59',
        2: '#FBCC03'
      },
    },
  },
  },
  plugins: [],
}
