const express = require('express');
const router = express.Router();
const Entity = require('./../providers/Entity')

console.log('Entity:', Entity)

router.get('/', function(req, res, next) {

  res.send(console.log(Entity));
});

module.exports = router;