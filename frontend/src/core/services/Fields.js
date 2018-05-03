module.exports = init(
    require('lodash')
);

function init(_){
    
    class Fields{}

    function defineField(__class, fieldMeta) {
        console.log(__class)
        const name = fieldMeta.name;
        if (typeof name !== 'string') {
            console.log(`Invalid field definition, missing name`);
            return
        }

        if (!fieldMeta.label) fieldMeta.label = name.toUpperCase();
        
        const proto = __class.prototype;
        if (!proto.hasOwnProperty('__fieldsMeta')) {
            if (proto.__fieldsMeta) {
                proto.__fieldsMeta = _.clone(proto.__fieldsMeta)
                proto.__fieldsMetaList = _.clone(proto.__fieldsMetaList)
            } else {
                proto.__fieldsMeta = {}
                proto.__fieldsMetaList = []
            }
        }

        function _get () {
            return this.__get(name)
        }
        function _set (value) {
            this.__set(name, value)
        }

        Object.defineProperty(proto, name, { enumerable: true, get: _get, set: _set })
    }

    Fields.define_String = function define_String (__class, name, overrides) {
        defineField(__class, _.defaults({}, overrides, {
            name: name,
        }))
    }

      
    return Fields
}