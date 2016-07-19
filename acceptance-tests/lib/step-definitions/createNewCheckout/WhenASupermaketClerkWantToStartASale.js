'use strict';

const createCheckout = require('../../service/createCheckout');

module.exports = function () {

    this.When(/^a supermarket clerk wants to start a sale with code "([^"]*)"$/, function (code) {
        const world = this;

        return createCheckout(code)
            .then(response => {
                world.publishValue('checkoutCreationResponse', response);
                world.publishValue('code', code);
            });
    });
};

