'use strict';
var { model, schemaValidation } = require ('../models/comment');
var _ = require('lodash')
var async = require('async')
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

/**
 * POST: create data
 * @param {*} req 
 * @param {*} res 
 */
commentController.create = function(req, res){
    console.log('Req body: ', req.body)
   
    let commentData = {
        name: 'dbthanhbinh',
        email: req.body.email,
        content: req.body.content
    };

    async.waterfall([validateComment, createComment], (err, result) => {

    });

    function validateComment (callback) {
        schemaValidation.compile(commentData, callback)  
    }

    function createComment (commentData, valid) {
        if (valid) {
            model.create(commentData, function(err, data){        
                if (err) {
                    console.error(err.errors)                    
                }
                return res.send(resMessage.message(err, data, 'view'));
            });
        }
    }
};

module.exports = commentController;