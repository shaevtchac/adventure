/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1300px',
    },

    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
      marker: ['Permanent Marker', 'cursive'],
    },
    extend: {
      colors: {},
    },
  },

  plugins: [],
};
