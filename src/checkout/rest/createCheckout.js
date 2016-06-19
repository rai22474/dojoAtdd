'use strict';

module.exports = function (req, res, next) {
    res.send(201, 0);
    return next();
};