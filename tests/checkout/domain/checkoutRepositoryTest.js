'use strict';

const checkoutRepository = require('../../../src/checkout/domain/checkoutsRepository'),
    expect = require('chai').expect;
require('chai').should();

describe('Checkouts Repository', () => {

    const fixture = {
        id: 1,
        checkout: {
            total: {
                value: 0,
                currency: 'EUR'
            }
        }
    };

    it('should create a new checkout given an identifier', () => {
        const id = fixture.id;

        const checkout = checkoutRepository.create(id);

        checkout.should.deep.equal(fixture.checkout);
    });

    it('should retrieve a previously checkout given an identifier', () => {
        const id = fixture.id;

        checkoutRepository.create(id);
        const checkout = checkoutRepository.retrieve(id);

        checkout.should.deep.equal(fixture.checkout);
    });

    it('should retrieve an undefined checkout when it have not been created previously', () => {
        const id = fixture.id;

        const checkout = checkoutRepository.retrieve(id);

        expect(checkout).to.be.an('undefined');
    });

    beforeEach(() => checkoutRepository.clear());

});
