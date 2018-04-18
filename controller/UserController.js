'use strict';
var userModel = require ('../models/user/schemas/User');
var baseModel = require ('../models/base');
var model = new baseModel(userModel);

// console.log(newBase.find());

var userController = {};

userController.list = function(req, res) {
    console.log('user list');
    model.find(params, callback);
    // userModel.find({}, function(err, users) {
    //     if (err) {
    //         return next(err);
    //     }
    //     else {
    //         res.json(users);
    //     }
    // });
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