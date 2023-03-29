const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.stone,
      blue: colors.sky,
      red: colors.rose,
    },
    extend: {},
  },
  plugins: [],
}
