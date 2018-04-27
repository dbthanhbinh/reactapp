'use strict';
var model = require ('../models/user');
var resMessage = require('../providers/commons/resMessage');
var userController = {};

userController.list = function(req, res) {
    let query = {};
    model.find(query, function(err, data){                
        return res.send(resMessage.message(err, data, 'list'));
    });    
};

/**
 * Get view detail entity
 * @param {*} req 
 * @param {*} res 
 */
userController.view = function(req, res){
    let query = {};
    model.findOne(query, function(err, data){        
        return res.send(resMessage.message(err, data, 'view'));
    }); 
};

userController.delete = function(req, res) {
    let query = {};
    console.log('user delete');
};

userController.save = function(req, res) {
    let query = {};
    console.log('user create');
};

userController.update = function(req, res) {
    let query = {};
    console.log('user update');
};

module.exports = userController;