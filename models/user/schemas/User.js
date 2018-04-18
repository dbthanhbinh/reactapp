const mongoose = require('../../../connecting');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    }    
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);