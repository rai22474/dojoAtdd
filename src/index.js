'use strict';

const server = require('./server');

let serverInstance = server.create();

server.start(serverInstance, 3000).tap(() => {
    console.log('Up and running');
});
