const qrCode = require('qrcode');
const express = require('express');
const liveReload = require('connect-livereload');
const { getServerIp } = require('./utils/utils');

const server = express();
const port = 5000;

server.use(liveReload());

server.get('/', (req, res) => {
  qrCode.toDataURL(`http://${getServerIp()}:3000`)
    .then((url) => {
      res.send(`<img src=${url} alt="qrCode" />`);
    })
    .catch(() => {
      res.send('error');
    });
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
