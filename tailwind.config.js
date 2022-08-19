/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
