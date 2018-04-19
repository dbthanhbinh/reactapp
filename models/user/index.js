const connecting = require('../../connecting');
const userSchema = require('./schemas/User');
const baseModel = require('../base');
const model = new baseModel(userSchema);

console.log(userSchema)

/**
 * This rewrite function find from base {base.js => find()}
 * @param {*} params 
 * @param {*} done 
 */
// model.find =  function(params, done){
//     return done(null, 'fasfdasfasd');
// }

module.exports = model;