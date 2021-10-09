const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'xs': {'max': '361px'},
      ...defaultTheme.screens,
    },

    maxWidth: {
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '3/5': '60%',
      '3/4': '75%',
      '4/5': '80%',
      '17/20': '85%',
      '9/10': '90%',
      '11/12': '91.6%',
      '100': '100%'
    },

    extend: {
      backgroundImage: {
        'forest-img': "url(../src/images/forest.jpg)",
      },

      fontFamily: {
        merriweather: ['Merriweather'],
        librefranklin: ['Libre Franklin'],
        courgette: ['Courgette']
      },
    },
  },

  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  
  plugins: [],
}
