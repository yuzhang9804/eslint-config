// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('@yuzhang9804/eslint-config-typescript')

module.export = {
  extends: [
    '@yuzhang9804/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: basic.overrides,
  rules: {
    // typescript
    'no-useless-constructor': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } }
    ],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],

    // off
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off'
  }
}
