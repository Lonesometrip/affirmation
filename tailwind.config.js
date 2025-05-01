/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#c9b16f',
        secondary: '#1e2022',
        accent: '#e8d8a3',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 