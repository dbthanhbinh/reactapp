// const Ajv = require('ajv')
// const ajv = new Ajv()
const schemaValidation = {
    compile (modelSchema, newSchema, callback) {
        const validate = ajv.compile(modelSchema)
        const valid = validate(newSchema)
        if (valid) {
            return callback(validate.errors)
        }
        return callback(null, true)
    }    
}

module.exports = schemaValidation;