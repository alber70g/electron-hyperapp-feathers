module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import',
    'react',
  ],
  'rules': {
    'linebreak-style': 'off',
    'no-unused-vars': [2, { 'varsIgnorePattern': 'h' }],
    'arrow-parens': ["error", "as-needed"],
    'react/jsx-uses-vars': [2]
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
};