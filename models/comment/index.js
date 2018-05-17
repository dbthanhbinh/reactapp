const mongoose = require('../../connecting');
const Schema = mongoose.Schema;
const schemaValidation = require('../../providers/schemaValid');
const baseModel = require('../base');
const commentSchema = require('./schemas/Comment');

var CommentSchema = new Schema(commentSchema, { collection: 'comments' });
const model = new baseModel(mongoose.model('Comment', CommentSchema));

module.exports = { model, schemaValidation};