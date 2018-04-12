const Base = require('./base');

class User extends Base{
    constructor (model) {
        super(model, 'User');
    }
}
const UserModel = new User('User');
console.log(UserModel.findOne())
console.log('----')

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var User = new Schema({
//     username: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         require: true,
//         lowercase: true
//     }    
// });

module.exports = User;