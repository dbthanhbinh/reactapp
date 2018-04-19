'use strict';
var model = require ('../models/user');
var userController = {};

userController.list = function(req, res) {
    model.find({}, function(err, data){        
        res.json(data);
    });    
};

userController.view = function(req, res){
    model.findOne({}, function(err, data){        
        res.json(data);
    }); 
};

userController.delete = function(req, res) {
    console.log('user delete');
};

userController.save = function(req, res) {
    console.log('user create');
};

userController.update = function(req, res) {
    console.log('user update');
};

module.exports = userController;