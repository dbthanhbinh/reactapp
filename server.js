const express = require('express');
const app = express();
const routes = require('./routers');
const config = require('./config');
const apiUri = config.api.name + '/' + config.api.version;
const Api = require('./providers/' + apiUri);

app.use('/' + apiUri, Api);

module.exports = app;
