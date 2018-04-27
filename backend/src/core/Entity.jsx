var _ = require ('lodash');
class Entity {}

Entity.defineEntity = function defineEntity (__class, metaData) {
    _.assign(__class.prototype, metaData)
    if (!metaData.__collection) {
        __class.prototype.__collection = metaData.__class
    }
    if (!Entity.__classMap) Entity.__classMap = {}
    if (Entity.__classMap[metaData.__class]) {
        console.log(`Redefined Entity '${metaData.__class}'`)
    }
    Entity.__classMap[metaData.__class] = __class    
}

module.exports = Entity;