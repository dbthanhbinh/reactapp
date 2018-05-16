// const  = 'http://localhost:5000/api/v1/'
const API = {
    baseUrl : 'http://localhost:5000/api/v1/',
    commons: {
        listing: 'listing',
        create: 'create',
        update: 'update',
        delete: 'delete',
        detail: 'detail'
    },

    options: {
        method: 'get'
    },

    get(endPoint, callback, params) {
        // url (required), options (optional)
        fetch(API.baseUrl + endPoint, API.options)
        .then(function(response) {
            return callback(null, response.json())
        }).catch(function(err) {
            // Error :(
            console.log('Error!', err)    
        });
    }
}

export default API
