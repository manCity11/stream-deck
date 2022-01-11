const gulp = require('gulp');
const eslint = require('gulp-eslint');
const { src } = require('./build-configs/build-config');

const scriptsLint = () => gulp.src(src.reports.scripts)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());

exports.scriptsLint = scriptsLint;
