module.exports = () => {
  const { src } = require('../build-configs/build-config');

  const rule = {
    test: /\.(js|jsx)$/,
    include: [src.app.appPath],
    use: ['babel-loader'],
  };

  return rule;
};
