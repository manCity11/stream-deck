const del = require('del');
const { dest } = require('./build-configs/build-config');

const clean = (cb) => {
  del(dest.distPath);
  cb();
};

exports.clean = clean;
