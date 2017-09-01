'use strict';
var app = require('./bin/star-trek-character');
var api = require('./bin/api-handler');

var name = "Uhura";

app.getNameInHexa(name);
api.retrieveFromApi(name);