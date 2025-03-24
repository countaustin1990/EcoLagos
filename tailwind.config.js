/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#effcf1',
          100: '#d8f7dc',
          200: '#b3eebf',
          300: '#81e09a',
          400: '#4fcb72',
          500: '#2bb152',
          600: '#1d9041',
          700: '#1b7336',
          800: '#1a5c2e',
          900: '#184c28',
          950: '#0a2a15',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
 