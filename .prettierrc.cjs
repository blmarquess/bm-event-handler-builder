module.exports = {
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  printWidth: 120,
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  proseWrap: 'preserve',
  tabWidth: 2,
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 2
      }
    }
  ]
};
