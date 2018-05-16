const CommentSchema = require('./schemas/Comment');
const baseModel = require('../base');
const model = new baseModel(CommentSchema);

module.exports = model;