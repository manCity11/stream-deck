const path = require('path');

module.exports = {
  src: {
    api: {
      entries: ['api/server.js'],
      scripts: ['api/**/*.js'],
    },
    app: {
      entries: ['./src/index.js'],
      indexHtml: './src/index.html',
      appPath: path.resolve('src'),
    },
    reports: {
      scripts: [
        'api/**/*.js',
        'tasks/**/*.js',
        'src/**/*.js',
      ],
    },
  },
  dest: {
    distPath: 'dist',
  },
};
