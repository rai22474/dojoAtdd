'use strict';

const checkoutRepository = require('../domain/checkoutsRepository');

module.exports = (request, response, next) => {

    response.setHeader('Location', 'http://localhost:3000/api/checkouts/' + request.body.code);
    response.send(201, checkoutRepository.create(request.body.code));

    return next();
};
