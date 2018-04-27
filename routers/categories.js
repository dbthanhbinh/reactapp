const express = require('express');
const router = express.Router();
const category = require('../controller/CategoryController');

/**
 * Process all router categories
 */
router.get('/', category.list);
router.post('/create', category.create);

module.exports = router;