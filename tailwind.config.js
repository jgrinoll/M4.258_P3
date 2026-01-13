/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/views/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000078',
        secondary: '#5d4e37',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      screens: {
        'md': '728px',
      },
      height: {
        '280': '280px',
        '300': '300px',
      },
      maxWidth: {
        'card': '320px',
        'article': '900px',
      },
      flexBasis: {
        'card': '300px',
      },
    },
  },
  plugins: [],
}
