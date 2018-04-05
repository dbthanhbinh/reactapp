const express = require('express');
const router = express.Router();
const newsRoute = require('./news');

router.use('/news', newsRoute);

module.exports = router;