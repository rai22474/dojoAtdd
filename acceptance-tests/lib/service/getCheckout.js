'use strict';

const request = require('request-promise'),
    baseUri = require('./baseUri');

module.exports = code => {

    const options = {
        method: 'GET',
        uri: baseUri + '/api/checkouts/' + code,
        resolveWithFullResponse: true,
        simple: false
    };

    return request(options);
};
