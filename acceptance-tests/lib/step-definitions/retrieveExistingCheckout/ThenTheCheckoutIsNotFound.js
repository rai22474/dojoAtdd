'use strict';

require('chai').should();

module.exports = function () {

    this.Then(/^the checkout is not found$/, function () {
        const world = this,
            checkoutRequestResponse = world.getValue('checkoutRequestResponse');

        checkoutRequestResponse.statusCode.should.equal(404);
    });

};
