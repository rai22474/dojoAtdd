'use strict';

require('chai').config.includeStack = true;
const _ = require('lodash');

const World = function() {

    let sandbox = {};

    this.publishValue = function(name, value) {
        if (_.isObject(sandbox[name]) && _.isObject(value)) {
            const newValue = _.assign(sandbox[name], value);
            sandbox[name] = newValue;
            return newValue;
        }
        let newProperties = {};
        newProperties[name] = value;

        sandbox = _.assign(sandbox, newProperties);
    };

    this.getValue = function(name) {
        return sandbox[name];
    };
};

module.exports = function() {
    this.World = World;
};
