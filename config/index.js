const config = {
    api:{
        name: 'api',
        version: 'v1'
    },

    security: {
        token : {
            secret: 'jsonwebtoken',
            url : 'mongodb://localhost/'
        }        
    }    
}

module.exports = config;