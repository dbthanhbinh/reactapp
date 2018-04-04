const express = require('express');
const routes = require('./routers');
const Api = require('./routers/api');

var app = express();

app.get('/', routes);
app.use('/api', Api);

module.exports = app;