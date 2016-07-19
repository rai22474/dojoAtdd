'use strict';

require('chai').should();

module.exports = function () {

    this.Then(/^the checkout with the code "([^"]*)" is returned$/, function (checkoutId) {
        const world = this,
            checkoutCreationResponse = world.getValue('checkoutCreationResponse').body,
            checkoutRequestResponse = JSON.parse(world.getValue('checkoutRequestResponse').body);

        checkoutRequestResponse.should.deep.equal(checkoutCreationResponse);
    });
};
