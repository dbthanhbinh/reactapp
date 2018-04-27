'use strict';
var model = require ('../models/category');
var categoryController = {};

categoryController.list = function(req, res) {    
    model.find({}, function(err, data){        
        res.json(data);
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
    model.create({ name: "book", description: 'fasdfa' }, function(err, result){
        if(err) {
            console.log('Error', err);    
            return;
        }
        console.log('create', result);
    });    
};

categoryController.update = function(req, res) {
    console.log('user update');
};

module.exports = categoryController;