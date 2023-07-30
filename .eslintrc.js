const path = require('path');
module.exports = {
  extends: [
    './node_modules/@mondaydotcomorg/global-config/configs/eslint.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  root: true,
  plugins: ['prettier', 'react', 'import', 'jsx-a11y', 'json', 'markdown', 'jest', 'lodash'],
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    jest: {
      version: 27,
    },
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // optionally, if TypeScript project:
      // https://github.com/alexgorbatchev/eslint-import-resolver-typescript
      typescript: {
        alwaysTryTypes: false,
        project: __dirname,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      [path.resolve('./eslint/resolver.js')]: {
        someConfig: 1,
      },
    },
  },
  rules: {
    'global-require': 'off',
    'func-names': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'lodash/import-scope': [2, 'member'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/no-danger': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 0,
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/display-name': 'off',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    radix: 'off',
    'no-shadow': 'warn',
    'no-param-reassign': 'warn',
  },
  overrides: [
    {
      files: ['*.jest.js', 'jest.config.js', '**/__tests__/*.js'],
      env: {
        jest: true,
      },
    },
  ],
};
