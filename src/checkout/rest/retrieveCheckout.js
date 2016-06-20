'use strict';

const checkoutRepository = require('../domain/checkoutsRepository');

module.exports = function(req, res, next) {
    let id = req.params.checkoutId;
    let checkout = checkoutRepository.retrieve(id);

    if (checkout === undefined) {
        res.send(404);
    } else {
        res.send(200, checkout);
    }

    return next();
};
