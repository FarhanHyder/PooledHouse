module.exports = {
  "presets": [
    ['@babel/env', {targets: {node: 'current'}}],
    '@babel/react',
  ],
  "plugins": ["@babel/plugin-transform-runtime",
  "@babel/plugin-proposal-class-properties"],
};
