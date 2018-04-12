const express = require('express');
const router = express.Router();
//const model = require('../models').User;
const model = require('../models/user');

// router.get('/', function(req, res, next) {        
//     model.find({},function (err, data){        
//         return res.status(200).send(JSON.stringify(data))
//     });    
// })

// router.get('/:id', function(req, res, next){
//     const id = req.params.id
//     model.findOne({},function (err, data){        
//         return res.status(200).send(JSON.stringify(data))
//     });    
// })

module.exports = router;