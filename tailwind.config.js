const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'projectMenuPic': "url('/images/project.jpg')",
      })
    },
    colors: {
      primary: '#090677',
      primarylight: '#8581f9',
      secondary: '#f97b05',
      white: colors.white,
      prame: colors.cyan,
      yellow: colors.yellow,
      grey: colors.gray,
      social: '#ffba00',
      black: colors.black,
      footerbg: "#f2f5f6",
      cyan: colors.cyan,
      teal: colors.teal,

    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],

}
