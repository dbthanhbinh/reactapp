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