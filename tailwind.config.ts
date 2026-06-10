/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'weather-blue': '#4f9cf9',
        'weather-cyan': '#22d3ee',
        'weather-purple': '#a78bfa',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
