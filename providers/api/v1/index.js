const express = require('express');
const router = express.Router();

//const news = require('../../../routers/news');
const users = require('../../../routers/users');

//router.use('/news', news);
router.use('/users', users);

module.exports = router;