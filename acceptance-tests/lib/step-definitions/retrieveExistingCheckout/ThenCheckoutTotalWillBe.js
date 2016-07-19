'use strict';

const moneyStringToObject = require('../../money/moneyStringToObject');
require('chai').should();

module.exports = function () {

    this.Then(/^the checkout total will be "([^"]*)"$/, function (expectedTotal) {
        const world = this,
            response = world.getValue('checkoutRequestResponse');

        response.body.should.have.property('total')
            .and.deep.equal(moneyStringToObject(expectedTotal));
    });

};
