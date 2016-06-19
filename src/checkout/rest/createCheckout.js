'use strict';

module.exports = function (req, res, next) {

    res.setHeader('Location', 'http://localhost:3000/api/checkouts/' + req.body.code);
    res.send(201, {
        total: {
            value: 0,
            currency: 'EUR'
        }
    });

    return next();
};