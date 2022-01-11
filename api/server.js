const express = require('express');
const liveReload = require('connect-livereload');

const server = express();
const port = 3000;

server.use(liveReload());

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
