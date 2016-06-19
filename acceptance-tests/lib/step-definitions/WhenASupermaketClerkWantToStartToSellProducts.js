'use strict';

const requestPromise = require('request-promise');

module.exports = () => {

    this.When(/^a supermarket clerk want to start to sell products to a customer$/, function (done) {
        const world = this;
        const options = {
            method: 'POST',
            uri: 'http://localhost:3000/api/checkout',
            json: true,
            resolveWithFullResponse: true
        };

        requestPromise(options)
            .then(function (response) {
                world.publishValue('checkoutCreationResponse', response);
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
};