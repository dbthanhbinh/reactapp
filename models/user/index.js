const userSchema = require('./schemas/User');
const baseModel = require('../base');
const model = new baseModel(userSchema);

module.exports = model;