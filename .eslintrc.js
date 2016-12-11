module.exports = {
  parser: 'babel-eslint',
  extends: [
    'yoctol-base',
  ],
  env: {
    node: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 'off',
  },
};
