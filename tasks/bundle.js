const bundle = (cb) => {
  const webpack = require('webpack');
  const config = require('./webpack.config')();
  const PluginError = require('plugin-error');
  const log = require('fancy-log');

  return webpack(config, (err, stats) => {
    if (err) {
      throw new PluginError('webpack', err);
    }

    log('[webpack]', stats.toString({
      chunks: false,
      modules: false,
      assets: false,
      children: false,
      warnings: false,
    }));

    cb();
  });
};

exports.bundle = bundle;
