module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '2': '2 1 0%',
    },

    extend: {
      screens: {
        xs: { max: '600px' },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['odd'],
    },
  },
  plugins: [],
};
