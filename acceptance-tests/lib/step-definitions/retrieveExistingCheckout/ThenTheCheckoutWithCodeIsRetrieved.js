'use strict';

require('chai').should();
const _ = require('lodash');

module.exports = function() {

    this.Then(/^the checkout with the code "([^"]*)" is returned$/, function (checkoutId, done) {
      const world = this;

        let checkoutCreationResponse = world.getValue('checkoutCreationResponse').body;
        let checkoutConsultResponse = JSON.parse(world.getValue('checkoutConsultResponse').body);

        checkoutConsultResponse.should.deep.equal(checkoutCreationResponse);

        done();
    });
};
