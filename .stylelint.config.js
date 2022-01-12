module.exports = {
  extends: 'stylelint-config-standdard',
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  ignoreFiles: [
    '**/dist/**',
    '**/node_modules/**',
    '**/reports/**',
  ],
  rules: {
    'string-quotes': 'double',
  }
}