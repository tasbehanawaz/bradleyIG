/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0B',
        gold: {
          DEFAULT: '#FDE18C',
          deep: '#D2AB36',
          dim: '#B8962E',
          dark: '#765900',
          darker: '#524315',
          mid: '#A78313',
        },
        text: {
          main: '#F5F2E8',
          body: '#CFCFCF',
          neutral: '#FBFDFE',
        },
        bronze: {
          light: '#D4AF37',
          DEFAULT: '#B8960F',
          dark: '#8B7310',
        },
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        serif: [
          '"Georgia"',
          'serif',
        ],
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(90deg, #D2AB36 0%, #FDE18C 100%)',
        'gold-grad-l': 'linear-gradient(270deg, #D2AB36 0%, #FDE18C 100%)',
      },
      backdropBlur: {
        glass: '27px',
        'glass-sm': '21px',
      },
    },
  },
  plugins: [],
};
