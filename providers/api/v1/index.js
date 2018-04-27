const express = require('express');
const router = express.Router();

const users = require('../../../routers/Users');
const categories = require('../../../routers/categories');

router.use('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use('/users', users);

router.use('/categories', categories);

module.exports = router;