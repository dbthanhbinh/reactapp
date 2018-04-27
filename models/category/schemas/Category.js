const Connecting = require('../../../connecting/index');
// const mongoose = require('mongoose');
const Schema = Connecting.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,        
        require: false
    }    
});

module.exports = Connecting.model('Categories', CategorySchema);