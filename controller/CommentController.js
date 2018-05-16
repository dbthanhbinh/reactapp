'use strict';
var model = require ('../models/comment');
var resMessage = require('../providers/commons/resMessage');
var commentController = {};

commentController.list = function(req, res) {
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
commentController.view = function(req, res){
    let query = {};
    model.findOne(query, function(err, data){        
        return res.send(resMessage.message(err, data, 'view'));
    }); 
};

commentController.create = function(req, res){
    let Obj = {
        name: 'dbthanhbinh',
        content: 'this test comment'
    };
    model.create(Obj, function(err, data){        
        return res.send(resMessage.message(err, data, 'view'));
    }); 
};

module.exports = commentController;