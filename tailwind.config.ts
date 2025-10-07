/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
          poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }