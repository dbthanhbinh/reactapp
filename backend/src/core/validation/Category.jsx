'use strict'
var _ = require ('lodash');
const Entity = {
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,        
        require: false
    } 
}

var CategoryValid = {
    CreateRequest: function (request, callback){
        if(!_.isPlainObject(request)) {
            callback(null, 'The request is not Object {}');
            return;
        }

        _.forEach(Entity, function(element, key){
            if(!request[key]) {
                callback(null, 'The request is not exit key: ' + key);
                return;
            }
        });

        _.forEach(request, function(element, key){
            if(!Entity[key]) {
                callback(null, 'The request is not matches key: ' + key);
                return;
            }
        });
    }
}

export default CategoryValid;