const express = require('express');
const router = express.Router();
const comment = require('../controller/CommentController');

// Get all user
router.get('/listing', comment.list);
router.get('/view', comment.view);
router.get('/create', comment.create);

module.exports = router;