const express = require('express');
const router = express.Router();
const newsRoute = require('./news');

router.get('/news', newsRoute);

module.exports = router;