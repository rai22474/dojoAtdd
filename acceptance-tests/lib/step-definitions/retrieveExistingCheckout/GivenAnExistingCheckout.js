'use strict';

const createCheckout = require('../../service/createCheckout');

module.exports = function () {

    this.Given(/^an existing checkout with code "([^"]*)"$/, function (code) {

        return createCheckout(code)
            .then(response => {
                response.statusCode.should.equal(201);
            });
    });

};
