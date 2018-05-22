const Ajv = require('ajv')
<<<<<<< HEAD
const ajv = new Ajv()
=======
const ajv = new Ajv({allErrors: true})
>>>>>>> f00d754c7c5fe48ce98c99ef48c6a42e345b95ce
class schemaValidation {
    constructor (schema) {
        this.schema = schema
    }

    compile (newSchema, callback) {
        const validate = ajv.compile(this.schema)
<<<<<<< HEAD
        const valid = validate(newSchema)
        if (valid) {
            console.log('validate.errors: ', validate.errors)
=======
        const valid = validate(newSchema)        
        if (!valid) {
>>>>>>> f00d754c7c5fe48ce98c99ef48c6a42e345b95ce
            return callback(validate.errors)
        }
        return callback(null, newSchema, true)
    }    
}

module.exports = schemaValidation;