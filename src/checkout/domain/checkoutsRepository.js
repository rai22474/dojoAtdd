'use strict';

module.exports = {
    create: create,
    retrieve: retrieve,
    clear: clear
};

let checkoutMap = {};

function create(id) {
    checkoutMap[id] = {
        total: {
            value: 0,
            currency: 'EUR'
        }
    };

    return checkoutMap[id];
}

function retrieve(id) {
    return checkoutMap[id];
}

function clear() {
    checkoutMap = {};
}

