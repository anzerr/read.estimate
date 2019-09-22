
const fs = require('fs'),
	estimate = require('./index.js'),
	assert = require('assert');

const data = fs.readFileSync('./README.md').toString();

let out = estimate(data);
assert.equal(out.text, '1 minutes');
assert.equal(out.count.images, 3);
out = estimate(data, {scale: 10});
assert.equal(out.text, '10 minutes');
assert.equal(out.count.images, 3);
