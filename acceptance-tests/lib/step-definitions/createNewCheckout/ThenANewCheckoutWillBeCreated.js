'use strict';

const moneyStringToObject = require('../../money/moneyStringToObject');
require('chai').should();

module.exports = function () {

    this.Then(/^a new checkout will be created with "([^"]*)" in the total value$/, function (total) {

        const world = this,
            response = world.getValue('checkoutCreationResponse');
        response.statusCode.should.equal(201);

        const expectedTotal = moneyStringToObject(total);
        response.body.should.have.property('total')
            .and.deep.equal(expectedTotal);

        const expectedLocationHeader = 'http://localhost:3000/api/checkouts/' + world.getValue('code');
        response.headers.should.have.property('location', expectedLocationHeader);
    });

};
