// tailwind.config.js
module.exports = {
  future: {},
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend : {
      opacity: ['disabled'],
    }
  },
  plugins: [],
}