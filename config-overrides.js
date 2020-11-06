const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@assets': path.resolve(__dirname, 'src/assets'),
  })
);