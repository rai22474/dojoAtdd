'use strict';

const createCheckout = require('../../service/createCheckout');

module.exports = function () {

    this.Given(/^an existing checkout with code "([^"]*)"$/, function (code) {
        const world = this;

        return createCheckout(code)
            .then(response => {
                response.statusCode.should.equal(201);
                world.publishValue('checkoutCreationResponse', response);
            });
    });

};
