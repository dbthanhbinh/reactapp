'use strict';
var model = require ('../models/category');
const userSchema = require('../models/category/schemas/Category');
var resMessage = require('../providers/commons/resMessage');
var categoryController = {};

categoryController.list = function(req, res) {    
    model.find({}, function(err, data){        
        return res.send(resMessage.message(err, data));
    });    
};

categoryController.view = function(req, res){
    model.findOne({}, function(err, data){        
        res.json(data);
    }); 
};

categoryController.delete = function(req, res) {
    console.log('user delete');
};

categoryController.create = function(req, res) {    
    let category = {
        name: req.body.name, 
        description: req.body.description
    }
    model.create(category, function(err, data){
        return res.send(resMessage.message(err, data));
    });    
};

categoryController.update = function(req, res) {
    console.log('user update');
};

module.exports = categoryController;