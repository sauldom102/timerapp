module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'eslint-comments/no-unused-disable': 'off',
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        'arrow-body-style': ['error'],
        'import/order': [
          'error',
          {
            groups: [
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'unknown',
            ],
            pathGroups: [
              {
                pattern: 'styled-components/native',
                patternOptions: {matchBase: true},
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'react-native',
                patternOptions: {matchBase: true},
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'react',
                patternOptions: {matchBase: true},
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
