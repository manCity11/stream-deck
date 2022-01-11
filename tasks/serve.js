const gulp = require('gulp');

const { src, dest } = require('./build-configs/build-config');

const apiServe = () => {
  const server = require('gulp-express');
  server.run(src.api.entries);

  gulp.watch(src.api.scripts, server.run);
};

const appServe = () => {
  const server = require('browser-sync');
  server.init({
    server: {
      baseDir: dest.distPath,
    },
  });
};

exports.apiServe = apiServe;
exports.appServe = appServe;
