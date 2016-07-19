'use strict';

require('chai').should();

module.exports = function () {

    this.Then(/^the checkout with the code "([^"]*)" will be returned$/, function (checkoutId) {
        const world = this,
            returnedResponse = world.getValue('checkoutRequestResponse');

        returnedResponse.statusCode.should.equal(200);
        returnedResponse.body.should.have.property('code', checkoutId);
    });
};
