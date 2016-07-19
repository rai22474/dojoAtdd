'use strict';

const sinon = require('sinon'),
    proxyquire = require('proxyquire');

require('chai').should();

describe('Retrieve a checkout', () => {

    const checkoutId = 1,
        checkout = {
            total: {
                value: 0,
                currency: 'EUR'
            }
        };

    const repositoryStub = {},
        retrieveCheckout = proxyquire('../../../src/checkout/rest/retrieveCheckout', {
            '../domain/checkoutsRepository': repositoryStub
        });

    describe('When retrieving an existing checkout', () => {

        it('should return 200 status code', done => {
            const request = createRequest(),
                response = createResponse();
            setupCheckoutRetrieval();

            const responseMock = sinon.mock(response);
            responseMock.expects('send').once().withArgs(200, sinon.match.any);
            retrieveCheckout(request, response, () => {
                responseMock.verify();
                done();
            });
        });

        it('should return a checkout with code and total', done => {
            const request = createRequest(),
                response = createResponse();
            setupCheckoutRetrieval();

            const responseMock = sinon.mock(response),
                expectedCheckoutBody = {
                    code: checkoutId,
                    total: checkout.total
                };
            responseMock.expects('send').once().withArgs(sinon.match.any, expectedCheckoutBody);

            retrieveCheckout(request, response, () => {
                responseMock.verify();
                done();
            });
        });

        it('should call the next function', () => {
            const request = createRequest(),
                response = createResponse();
            setupCheckoutRetrieval();

            const next = sinon.mock();
            next.once();

            retrieveCheckout(request, response, next);
            next.verify();
        });

        function setupCheckoutRetrieval() {
            const retrieveStub = sinon.stub();
            retrieveStub.withArgs(checkoutId).returns(checkout);
            repositoryStub.retrieve = retrieveStub;
        }

    });

    describe('when retrieving a non existing checkout', () => {

        it('Should return 404 status code when there is no checkout created', done => {
            const request = createRequest(),
                response = createResponse();
            repositoryStub.retrieve = sinon.stub();

            const responseMock = sinon.mock(response);
            responseMock.expects('send').once().withArgs(404);
            retrieveCheckout(request, response, () => {
                responseMock.verify();
                done();
            });
        });

        it('should call the next function', () => {
            const request = createRequest(),
                response = createResponse();
            repositoryStub.retrieve = sinon.stub();

            const next = sinon.mock();
            next.once();

            retrieveCheckout(request, response, next);
            next.verify();
        });

    });

    function createRequest() {
        return {
            params: {
                checkoutId: checkoutId
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
