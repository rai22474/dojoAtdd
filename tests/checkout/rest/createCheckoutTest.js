'use strict';

const sinon = require('sinon'),
    proxyquire = require('proxyquire');

require('chai').should();

describe('Create a new checkout', () => {

    const checkoutId = 1,
        checkout = {code: checkoutId},
        repositoryStub = {},
        createCheckout = proxyquire('../../../src/checkout/rest/createCheckout', {
            '../domain/checkoutsRepository': repositoryStub
        });

    it('should return 201 status code when creating a new checkout', done => {
        const request = createRequest(),
            response = createResponse();
        setupCheckoutCreation();

        const responseMock = sinon.mock(response);
        responseMock.expects('send').once().withArgs(201);

        createCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    it('should return the checkout total', done => {
        const request = createRequest(),
            response = createResponse();
        setupCheckoutCreation();

        const responseMock = sinon.mock(response);
        responseMock.expects('send').once().withArgs(sinon.match.any, checkout);

        createCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    it('should call the next function', () => {
        const request = createRequest(),
            response = createResponse();
        setupCheckoutCreation();

        const nextMock = sinon.mock();
        nextMock.once();

        createCheckout(request, response, nextMock);
        nextMock.verify();
    });

    it('should set the location header', done => {
        const request = createRequest(),
            response = createResponse();
        setupCheckoutCreation();

        const responseMock = sinon.mock(response);
        responseMock.expects('setHeader').once().withArgs('Location', 'http://localhost:3000/api/checkouts/1');

        createCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    function setupCheckoutCreation() {
        const createStub = sinon.stub();
        createStub.withArgs(checkoutId).returns(checkout);
        repositoryStub.create = createStub;
    }

    function createRequest() {
        return {
            body: {
                code: checkoutId
            }
        };
    }

    function createResponse() {
        return {
            send: () => {
            },
            setHeader: () => {
            }
        };
    }
});
