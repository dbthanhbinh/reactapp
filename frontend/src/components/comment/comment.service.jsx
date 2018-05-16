import API from '../../core/API/index'

const CommentServices = {
    listing (callback) {
        API.get('comments/' + API.commons.listing, (err, result) => {
            if (err) return callback(err)      
            result.then(function(e) {
                return callback(e, null)
            })                  
        })
    },

    create (callback) {
        API.get(API.commons.create, (err, result) => {
            if (err) return callback(err)

            callback(null, result)
        })
    }
}

// const commentList = [
//     {
//         _id: 111,
//         name: 'Matt',
//         avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
//         date: 'Today at 5:42PM',
//         text: 'This has been very useful for my research. Thanks as well!'
//     },
//     {
//         _id: 222,
//         name: 'Matt',
//         avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
//         date: 'Today at 5:42PM',
//         text: 'This has been very useful for my research. Thanks as well!'
//     },
//     {
//         _id: 333,
//         name: 'Matt',
//         avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
//         date: 'Today at 5:42PM',
//         text: 'This has been very useful for my research. Thanks as well!'
//     },
//     {
//         _id: 444,
//         name: 'Matt',
//         avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
//         date: 'Today at 5:42PM',
//         text: 'This has been very useful for my research. Thanks as well!'
//     },
//     {
//         _id: 555,
//         name: 'Matt',
//         avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
//         date: 'Today at 5:42PM',
//         text: 'This has been very useful for my research. Thanks as well!'
//     }
// ]

// module.exports = commentList
export default CommentServices