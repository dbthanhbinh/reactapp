const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const routes = require('./routers');
const config = require('./config');
const apiUri = config.api.name + '/' + config.api.version;
const Api = require('./providers/' + apiUri);

app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/' + apiUri, Api);

module.exports = app;
