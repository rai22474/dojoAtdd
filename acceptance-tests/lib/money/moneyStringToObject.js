'use strict';

module.exports = money => {
    return {
        value: parseFloat((/(^[0-9,.]*)/.exec(money))[0]),
        currency: (/(\w*$)/.exec(money))[0]
    };
};
