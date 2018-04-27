const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const routes = require('./routers');
const config = require('./config');
const apiUri = config.api.name + '/' + config.api.version;
const Api = require('./providers/' + apiUri);
const middlewares = require('./providers/middlewares/middlewares');
console.log(middlewares)
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/' + apiUri, middlewares.setAllowControl(), Api);

module.exports = app;
