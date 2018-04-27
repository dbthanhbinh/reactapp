const express = require('express');
const router = express.Router();
const category = require('../controller/CategoryController');

// Get all user
router.get('/', category.list);
router.post('/create', category.create);

module.exports = router;