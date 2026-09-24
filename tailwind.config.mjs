/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Navy blue — from the "SAC" wordmark
        'navy': {
          50: '#eef3f9',
          100: '#d5e0ee',
          200: '#a9c0dc',
          300: '#7095c2',
          400: '#3f6aa1',
          500: '#1f4a80',
          600: '#123a6a',
          700: '#0b2f5c',
          800: '#072648',
          900: '#001a3c',
          950: '#00122b',
        },
        // Green — from the ring / leaf gradient
        'sac-green': {
          50: '#eefbe6',
          100: '#d6f5c2',
          200: '#b3ea8c',
          300: '#8ede54',
          400: '#6bcb2a',
          500: '#4fae16',
          600: '#3a8c0f',
          700: '#2c6b0f',
          800: '#1f4c10',
          900: '#0d3a12',
        },
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
