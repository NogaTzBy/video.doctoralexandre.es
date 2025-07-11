/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#c1cee2',
          200: '#a3b4d2',
          300: '#8599c1',
          400: '#677fb1',
          500: '#4965a0',
          600: '#3b5080',
          700: '#2d3c60',
          800: '#1e2840',
          900: '#0f1420',
        },
        accent: {
          50: '#fdf4f4',
          100: '#f9d5d5',
          200: '#f5b6b6',
          300: '#f19797',
          400: '#ed7878',
          500: '#e95959',
          600: '#ba4747',
          700: '#8c3535',
          800: '#5d2323',
          900: '#2f1212',
        }
      },
    },
  },
  plugins: [],
};