'use strict';

require('chai').should();
const _ = require('lodash');

module.exports = () => {

    this.Then(/^the checkout with the code "([^"]*)" is returned$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};