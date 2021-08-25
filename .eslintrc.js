module.exports = {
  extends: ['standard', 'prettier', 'plugin:import/errors'],
  plugins: ['prettier', 'import'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        jsxSingleQuote: true,
        singleQuote: true,
        trailingComma: 'es5',
        semi: false,
      },
    ],
    'no-irregular-whitespace': 0,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    jquery: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['jest/'],
      },
    },
  },
}
