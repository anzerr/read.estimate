
const fs = require('fs'),
	estimate = require('./index.js');

console.log(estimate(fs.readFileSync('./README.md').toString()));
