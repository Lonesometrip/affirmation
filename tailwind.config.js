/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a365d',
        'primary-light': '#2b4c7e',
        'primary-dark': '#0f2a4a',
        'secondary': '#e2e8f0',
        'accent': '#3182ce',
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        'full': '0',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
