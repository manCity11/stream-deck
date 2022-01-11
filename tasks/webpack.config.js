const path = require('path');
const { src } = require('./build-configs/build-config');
const indexHtml = require('./webpack-loaders/indexHtml')();
const scriptLoader = require('./webpack-loaders/script-loader')();
const styleLoader = require('./webpack-loaders/style-loader')();

module.exports = () => {
  const config = {
    entry: src.app.entries,
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.[hash].js',
    },
    module: {
      rules: [scriptLoader, styleLoader],
    },
    plugins: [
      indexHtml,
    ],
  };
  return config;
};
