'use strict';
var { model, schemaValidation } = require ('../models/comment');
var resMessage = require('../providers/commons/resMessage');
var _ = require('lodash')
var async = require('async')

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
    console.log('Req body: ', req.body)
    console.log(schemaValidation)

    let Obj = {
        name: 'dbthanhbinh',
        email: req.body.email,
        content: req.body.content
    };

    async.waterfall([
            function(callback){
                schemaValidation.compile(Obj, (err, result) => {
                    console.log('resulteeeee', result)
                    if(err) {
                        console.log('eeeee', err)
                        callback(err)
                    }
                    callback(null, result);
                })                
            },
            function(result, callback){
                console.log('result: ', result)
                // model.create(Obj, function(err, data){        
                //     return res.send(resMessage.message(err, data, 'view'));
                // });

                callback(null, 'three');
            }
        ], function (err, result) {
            console.log('err2: ', err)
            console.log('result2: ', result)
            // result now equals 'done'
        }
    );
};

module.exports = commentController;