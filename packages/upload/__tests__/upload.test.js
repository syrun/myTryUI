'use strict';

const upload = require('..');
const assert = require('assert').strict;

assert.strictEqual(upload(), 'Hello from upload');
console.info("upload tests passed");
