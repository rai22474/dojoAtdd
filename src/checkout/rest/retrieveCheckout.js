'use strict';

const checkoutRepository = require('../domain/checkoutsRepository');

module.exports = (request, response, next) => {
    const id = request.params.checkoutId,
        checkout = checkoutRepository.retrieve(id);

    if (checkout === undefined) {
        response.send(404);
    } else {
        response.send(200, buildCheckout(id, checkout));
    }

    return next();
};

function buildCheckout(id, checkout) {
    return {
        code: id,
        total: checkout.total
    };
}