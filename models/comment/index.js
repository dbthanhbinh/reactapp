const mongoose = require('../../connecting');
const Schema = mongoose.Schema;
<<<<<<< HEAD
const baseModel = require('../base');
const commentSchema = require('./schemas/Comment');
var schemaValidation = require('../../providers/schemaValid');
schemaValidation = new schemaValidation(commentSchema)
=======
var schemaValidation = require('../../providers/schemaValid');
const baseModel = require('../base');
>>>>>>> f00d754c7c5fe48ce98c99ef48c6a42e345b95ce

const commentSchema = require('./schemas/Comment');
var CommentSchema = new Schema(commentSchema, { collection: 'comments' });
const model = new baseModel(mongoose.model('Comment', CommentSchema));
schemaValidation = new schemaValidation(commentSchema)
module.exports = { model, schemaValidation};