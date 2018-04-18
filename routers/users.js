const express = require('express');
const router = express.Router();
const user = require('../controller/UserController');

// Get all user
router.get('/', user.list);

router.get('/delete', user.delete);

module.exports = router;