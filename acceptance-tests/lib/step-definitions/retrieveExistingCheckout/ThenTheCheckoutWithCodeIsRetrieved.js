'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the checkout with the code "([^"]*)" is returned$/, function (checkoutId, done) {
      const world = this;

        let checkoutCreationResponse = world.getValue('checkoutCreationResponse').body;
        let checkoutRequestResponse = JSON.parse(world.getValue('checkoutRequestResponse').body);

        checkoutRequestResponse.should.deep.equal(checkoutCreationResponse);

        done();
    });
};
