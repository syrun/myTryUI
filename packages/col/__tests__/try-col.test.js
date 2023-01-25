'use strict';

const tryCol = require('..');
const assert = require('assert').strict;

assert.strictEqual(tryCol(), 'Hello from tryCol');
console.info("tryCol tests passed");
