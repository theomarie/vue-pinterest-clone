module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#E60023',
        'dark': '#111111',
        'light': '#Efefef',
        'ligthHover': '#d7D7D7',
        'muted': '#717171'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
