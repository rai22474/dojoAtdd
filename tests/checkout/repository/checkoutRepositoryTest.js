'use strict';

const checkoutRepository = require('../../../src/checkout/repository/checkoutRepository');

require('chai').should();

describe('The Checkout Repository', () => {

  const fixture = {
    checkout: {
        total: {
            value: 0,
            currency: 'EUR'
        }
    }
  };

  it('Should create a new checkout given an identifier', done => {
    let id = 1;

    let checkout = checkoutRepository.create(id);

    checkout.should.deep.equal(fixture.checkout);

    done();
  });
});
