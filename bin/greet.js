#!/usr/bin/env node
greet = require('../lib/index.js');
args = require('minimist')(process.argv.slice(2));
console.log(greet(args._, args.drunk));
