const express = require('express');
const app = express();
const routes = require('./routers');
const config = require('./config');
const apiUri = config.api.name + '/' + config.api.version;
const Api = require('./providers/' + apiUri);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/' + apiUri, Api);

module.exports = app;
