const gulp = require('gulp');
const historyApiFallback = require('connect-history-api-fallback');

const { src, dest } = require('./build-configs/build-config');

const apiServe = () => {
  const server = require('gulp-express');
  server.run(src.api.entries);

  gulp.watch(src.api.scripts, server.run);
};

const appServe = (cb) => {
  const webpack = require('webpack');
  const server = require('browser-sync');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config')();
  const _ = require('lodash');

  _.each(config.entry, (entry, key) => {
    const hmrConfig = 'webpack-hot-middleware/client?reload=true&quiet=false';
    config.entry[key] = [hmrConfig, entry];
  });

  config.plugins = config.plugins.concat([
    // Add webpack HMR support. It acts like livereload
    // reloading page after webpack rebuilt modules.
    new webpack.HotModuleReplacementPlugin(),
  ]);

  const compiler = webpack(config);

  server({
    port: 3000,
    watch: true,
    files: [
      'src/app/**/*.js',
      'src/app/**/*.scss',
    ],
    open: false,
    notify: false,
    server: {
      baseDir: dest.distPath,
    },
    middleware: [
      historyApiFallback({ index: '/index.html' }),
      webpackDevMiddleware(compiler, {
        stats: {
          chunk: false,
          modules: false,
          assets: false,
          children: false,
          warning: false,
        },
      }),
      webpackHotMiddleware(compiler),
    ],
  });

  return cb();
};

exports.apiServe = apiServe;
exports.appServe = appServe;
