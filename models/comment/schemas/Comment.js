const mongoose = require('../../../connecting');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }

}, { collection: 'comments' });

module.exports = mongoose.model('Comment', CommentSchema);