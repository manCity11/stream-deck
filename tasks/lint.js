const gulp = require('gulp');
const eslint = require('gulp-eslint');
const styleLint = require('gulp-stylelint');
const { src } = require('./build-configs/build-config');

const scriptsLint = () => gulp.src(src.reports.scripts)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());

const stylesLint = () => gulp.src(src.reports.styles)
  .pipe(styleLint({
    failAfterError: true,
    reporters: [
      { formatter: 'string', console: true },
    ],
  }));

exports.scriptsLint = scriptsLint;
exports.stylesLint = stylesLint;
