module.exports = init(
    require('lodash')
);

function init(_){ 
    let objectID   
    let ObjectID = global && global.ObjectID
    objectID = 1
    ObjectID = function ObjectID (id) {
        if (id) return '' + id
        id = '000000000' + (objectID++ % 1000000000)
        return `(${id.substr(id.length - 10)})`
      }
    class Entity{
        constructor (data) {
            if (typeof data === 'object') {

            } else {

            }

            this.wasCreated = false
            this.wasTouched = false
            this.wasUpdated = false
            this.wasDeleted = false
        }
    }

    return Entity
}