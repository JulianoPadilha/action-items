module.exports = {
  purge: {
    mode: 'all',
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.jsx',
    ]
  },
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        'row-9': '250px 155px 155px 155px 155px 155px 155px 115px 115px'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
