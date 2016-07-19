'use strict';

const request = require('request-promise'),
    baseUri = require('./baseUri');

module.exports = code => {

    const options = {
        method: 'POST',
        uri: baseUri + '/api/checkouts',
        json: {
            code: code
        },
        resolveWithFullResponse: true
    };

    return request(options);
};