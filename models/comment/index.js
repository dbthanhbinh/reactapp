const mongoose = require('../../connecting');
const Schema = mongoose.Schema;
const baseModel = require('../base');
const commentSchema = require('./schemas/Comment');
var schemaValidation = require('../../providers/schemaValid');
schemaValidation = new schemaValidation(commentSchema)

var CommentSchema = new Schema(commentSchema, { collection: 'comments' });
const model = new baseModel(mongoose.model('Comment', CommentSchema));

module.exports = { model, schemaValidation};