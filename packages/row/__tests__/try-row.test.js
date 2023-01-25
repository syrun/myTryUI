'use strict';

const tryRow = require('..');
const assert = require('assert').strict;

assert.strictEqual(tryRow(), 'Hello from tryRow');
console.info("tryRow tests passed");
