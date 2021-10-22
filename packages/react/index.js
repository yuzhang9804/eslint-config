module.exports = {
  extends: [
    'plugin:react/recommended',
    '@yuzhang9804/eslint-config-typescript',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
}
