module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*', 'dist/*', 'coverage/'],
  plugins: [
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
    'testing-library',
    'jest-dom',
    'unused-imports',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'turbo',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          typescript: {},
          node: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        'no-restricted-imports': ['error'],
        'linebreak-style': ['error', 'unix'],
        'react/prop-types': 'off',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-autofocus': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        'prettier/prettier': [
          'error',
          {},
          {
            usePrettierrc: true,
          },
        ],
      },
    },
    {
      files: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
      ],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
  ],
};
