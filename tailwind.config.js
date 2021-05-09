module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '100': '1 1 100%',
    },

    extend: {
      screens: {
        xs: { max: '600px' },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['odd', 'hover', 'checked'],
      backgroundColor: ['disabled', 'checked'],
      opacity: ['disabled', 'checked', 'hover'],
      ringWidth: ['hover', 'checked'],
      ringOffsetWidth: ['hover', 'checked'],
      ringColor: ['hover', 'checked'],
      borderWidth: ['even'],
    },
  },
};
