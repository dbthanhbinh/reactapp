'use strict';
var { model, schemaValidation } = require ('../models/comment');
var _ = require('lodash')
var async = require('async')
var resMessage = require('../providers/commons/resMessage');
var async = require('async')
var commentController = {};

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
    const formData = req.body        

    const Obj = {
        name: formData.name,
        content: formData.content
    };
    
    // model.create(Obj, function(err, data){        
    //     return res.send(resMessage.message(err, data, 'view'));
    // }); 
    
    async.waterfall([validateData, createData], (err, result) => {

    })

    function validateData (Obj, callback) {
        console.log ('fsffa: ', Obj)    
        schemaValidation.compile(Obj, (err, valid) => {
            if (err) {
                callback(err)
            }
            console.log('fasdf', valid);
        })
    }

    function createData(Obj, valid, callback) {
        console.log ('formData: ', Obj)
        console.log ('valid: ', valid)
    }
};

module.exports = commentController;