'use strict';
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const IP = '0.0.0.0';

server.use('/', express.static('./'));

server.listen(PORT, IP, () => {
    console.log(`server start at ${IP}:${PORT}`);
});
