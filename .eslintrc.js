module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  plugins: ['import', 'prettier', 'promise'],
  rules: {
    'import/order': [
      2,
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': [2],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'babel',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
