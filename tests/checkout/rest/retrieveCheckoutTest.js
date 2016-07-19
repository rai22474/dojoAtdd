'use strict';

const sinon = require('sinon'),
    proxyquire = require('proxyquire');

require('chai').should();

const repositoryStub = {},
    retrieveCheckout = proxyquire('../../../src/checkout/rest/retrieveCheckout', {
        '../domain/checkoutsRepository': repositoryStub
    });

describe('Retrieve a checkout', () => {

    const checkoutId = 1;

    describe('when retrieving an existing checkout', () => {

        it('Should return 200 status code', done => {
            const request = createRequest(),
                response = createResponse();

            const responseMock = sinon.mock(response);
            repositoryStub.retrieve = function () {
                return {};
            };

            responseMock.expects('send').once().withArgs(200, sinon.match.any);
            retrieveCheckout(request, response, () => {
                responseMock.verify();
                done();
            });
        });

        it('Should return a checkout with code and total', done => {
            const request = createRequest(),
                response = createResponse();

            repositoryStub.retrieve = () => {
                return {
                    total: {
                        value: 0,
                        currency: 'EUR'
                    }
                };
            };

            const responseMock = sinon.mock(response),
                expectedCheckoutBody = {
                    code: checkoutId,
                    total: {
                        value: 0,
                        currency: 'EUR'
                    }
                };
            responseMock.expects('send').once().withArgs(sinon.match.any, expectedCheckoutBody);

            retrieveCheckout(request, response, () => {
                responseMock.verify();
                done();
            });
        });

    });

    it('Should return 404 status code when there is no checkout created', done => {
        const request = createRequest(),
            response = createResponse();

        const responseMock = sinon.mock(response);
        repositoryStub.retrieve = function () {
            return undefined;
        };

        responseMock.expects('send').once().withArgs(404);
        retrieveCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    it('Should call the next function', done => {
        const request = createRequest(),
            response = createResponse();

        const nextMock = sinon.mock();
        nextMock.once();

        retrieveCheckout(request, response, nextMock);
        nextMock.verify();
        done();
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
