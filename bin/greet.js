#!/usr/bin/env node
greet = require('greet');
args = require('minimist')(process.argv.slice(2));
console.log(greet(args._, args.drunk));
