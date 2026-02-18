module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 우리가 허용할 type만 강제
    'type-enum': [2, 'always', [
      'feat',
      'fix',
      'design',
      'refactor',
      'chore',
      'docs',
      'test'
    ]],

    'type-empty': [2, 'never'],

    'scope-empty': [0],

    'subject-empty': [2, 'never'],

    'header-max-length': [2, 'always', 72],
  },
};
