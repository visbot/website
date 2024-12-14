// Note to self: Tailwind has go to die

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
