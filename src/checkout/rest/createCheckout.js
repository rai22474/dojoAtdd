'use strict';

const checkoutRepository = require('../domain/checkoutsRepository');

module.exports = function (req, res, next) {

    res.setHeader('Location', 'http://localhost:3000/api/checkouts/' + req.body.code);
    res.send(201, checkoutRepository.create(req.body.code));

    return next();
};
