'use strict';

const checkoutMap = {};

function create(id) {
    checkoutMap[id] = {
        total: {
            value: 0,
            currency: 'EUR'
        }
    };

    return checkoutMap[id];
}

module.exports = {
    create: create
};
