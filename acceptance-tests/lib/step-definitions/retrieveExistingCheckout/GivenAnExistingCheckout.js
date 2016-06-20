'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

    this.Given(/^an existing checkout with code "([^"]*)"$/, function (code, done) {
        const world = this;
        const options = {
            method: 'POST',
            uri: 'http://localhost:3000/api/checkouts',
            json: {
                code: code
            },
            resolveWithFullResponse: true
        };

        requestPromise(options)
            .then(function (response) {
                response.statusCode.should.equal(201);
                response.headers.location.should.be.equal('http://localhost:3000/api/checkouts/' + code);

                done();
            })
            .catch(function (err) {
                done(err);
            });
    });

};
