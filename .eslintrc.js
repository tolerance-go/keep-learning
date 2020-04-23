module.exports = {
  root: true,
  env: {
    node: true,
    'jest/globals': true,
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', 'react', '@typescript-eslint', 'jest'],
  rules: {
    // just use typescript type define
    'react/prop-types': 0,
  },
};
