const express = require('express');
const router = express.Router();
const user = require('../controller/UserController');

// Get all user
router.get('/', user.list);

router.get('/delete', user.delete);

router.get('/view', user.view);

module.exports = router;