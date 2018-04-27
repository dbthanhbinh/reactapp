const CategorySchema = require('./schemas/Category');
const baseModel = require('../base');
const model = new baseModel(CategorySchema);
module.exports = model;