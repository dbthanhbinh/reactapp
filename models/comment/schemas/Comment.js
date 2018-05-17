// const mongoose = require('../../../connecting');
// const Schema = mongoose.Schema;

const CommentSchema = {
    name: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
}

module.exports = CommentSchema

// var CommentSchema = new Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     content: {
//         type: String,
//         require: true
//     }

// }, { collection: 'comments' });

// module.exports = mongoose.model('Comment', CommentSchema);