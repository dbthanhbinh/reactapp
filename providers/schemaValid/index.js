const Ajv = require('ajv')
const ajv = new Ajv({allErrors: true})
class schemaValidation {
    constructor (schema) {
        this.schema = schema
    }

    compile (newSchema, callback) {
        const validate = ajv.compile(this.schema)
        const valid = validate(newSchema)        
        if (!valid) {
            return callback(validate.errors)
        }
        return callback(null, newSchema, true)
    }    
}

module.exports = schemaValidation;