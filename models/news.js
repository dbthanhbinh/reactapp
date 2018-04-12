var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var News = new Schema({
    name: {
        type: String,
        require: true
    },
    content: {
        type: String,        
        require: true
    }    
});

module.exports = mongoose.model('News', News);