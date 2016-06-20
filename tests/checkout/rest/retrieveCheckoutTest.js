'use strict';

const retrieveCheckout = require('../../../src/checkout/rest/retrieveCheckout'),
    sinon = require('sinon');

require('chai').should();

describe('Retrieve an existing checkout', () => {

    it('Should return 200 status code when retrieve checkout', done => {
        const request = createRequest(),
            response = createResponse();

        const responseMock = sinon.mock(response);

        responseMock.expects('send').once().withArgs(200, sinon.match.any);
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
        return {};
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