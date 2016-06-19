'use strict';

require('chai').should();

module.exports = () => {

    this.Then(/^a new checkout is created with "([^"]*)" in the total value$/, function (total, done) {
        const world = this;

        const response = world.getValue('checkoutCreationResponse');
        response.statusCode.should.equal(201);

        done();
    });

};