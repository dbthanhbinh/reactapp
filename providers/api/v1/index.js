const express = require('express');
const router = express.Router();

const users = require('../../../routers/Users');
const categories = require('../../../routers/categories');

router.use('/users', users);

router.use('/categories', categories);

module.exports = router;