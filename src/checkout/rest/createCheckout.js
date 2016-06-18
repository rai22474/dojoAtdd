 'use strict';

module.exports = function (req, res, next) {
    res.send(203, 0);
    return next();
};