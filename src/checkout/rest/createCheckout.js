'use strict';

module.exports = function (req, res, next) {
    res.send(201, {
        total: {
            value: 0,
            currency: 'EUR'
        }
    });

    return next();
};