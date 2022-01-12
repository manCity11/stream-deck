const path = require('path');
const webpack = require('webpack');
const { src } = require('./build-configs/build-config');
const indexHtml = require('./webpack-loaders/indexHtml')();
const scriptLoader = require('./webpack-loaders/script-loader')();
const styleLoader = require('./webpack-loaders/style-loader')();

module.exports = (isProd) => {
  const config = {
    mode: isProd ? 'production' : 'development',
    devtool: false,
    watch: !isProd,
    entry: src.app.entries,
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[hash].bundle.js',
    },
    module: {
      rules: [scriptLoader, styleLoader],
    },
    plugins: [
      indexHtml,
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
  };

  if (!isProd) {
    config.plugins.push(
      new webpack.SourceMapDevToolPlugin({
        test: [/\.js$/],
        columns: false,
        exclude: /vendors/,
        moduleFilenameTemplate: '[resource-path]',
        fallbackModuleFilenameTemplate: '[resource-path]',
      }),
    );
  }

  return config;
};
