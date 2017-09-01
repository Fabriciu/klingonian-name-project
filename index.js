#!/usr/bin/env node
'use strict';
var app = require('./bin/star-trek-character');
var api = require('./bin/api-handler');

var name = process.argv.splice(2, process.argv.length -1).join(' ');

console.log(name);

app.getNameInHexa(name);
api.retrieveFromApi(name);
