'use strict';

const restify = require('restify'),
    q = require('q');

module.exports = {
    create: create,
    start: start
};

function create() {
    const server = restify.createServer({
        name: 'checkout'
    });

    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    return server;
}

function start(server, port) {
    const deferred = q.defer();
    server.listen(port, () => deferred.resolve());
    return deferred.promise;
}
