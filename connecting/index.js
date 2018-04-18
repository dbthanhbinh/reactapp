'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/reactapp')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

  module.exports = mongoose;