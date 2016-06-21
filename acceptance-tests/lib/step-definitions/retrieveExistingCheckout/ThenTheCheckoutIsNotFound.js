'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the checkout is not found$/, function(done) {
        const world = this;

        let checkoutRequestResponse = world.getValue('checkoutRequestResponse');

        checkoutRequestResponse.statusCode.should.equal(404);

        done();
    });

};
