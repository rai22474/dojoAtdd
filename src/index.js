'use strict';

const server = require('./server'),
    createCheckout = require('./checkout/rest/createCheckout.js');

let serverInstance = server.create();

server.start(serverInstance, 3000).tap(() => {
    serverInstance.post('/api/checkout', createCheckout);

    console.log('Up and running');
});
