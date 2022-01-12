const { series, parallel } = require('gulp');
const { scriptsLint } = require('./tasks/lint');
const { apiServe, appServe } = require('./tasks/serve');
const { bundle } = require('./tasks/bundle');
const { clean } = require('./tasks/clean');

const bundleTask = series(clean, bundle);

exports.lint = scriptsLint;
exports.apiServe = apiServe;
exports.appServe = appServe;
exports.build = bundleTask;
exports.serve = parallel(apiServe, appServe);
