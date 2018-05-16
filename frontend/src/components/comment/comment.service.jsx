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

    create (data, callback) {        
        API.post('comments/' + API.commons.create, data, (err, result) => {
            if (err) return callback(err)
            callback(null, result)
        })
    }
}
export default CommentServices