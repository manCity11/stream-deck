module.exports = () => {
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { src } = require('../build-configs/build-config');

  const options = {
    template: src.app.indexHtml,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
  };

  return new HtmlWebpackPlugin(options);
};
