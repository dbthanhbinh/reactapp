class Validation{
    isString (value) {
        return typeof value === 'string' || value instanceof String;
    }

    isNumber (value) {
        return typeof value === 'number' && isFinite(value);
    }

    isArray (value) {
        return value && typeof value === 'object' && value.constructor === Array;
    }

    isFunction (value) {
        return typeof value === 'function';
    }

    isObject (value) {
        return value && typeof value === 'object' && value.constructor === Object;
    }

    isNull (value) {
        return value === null;
    }

    isUndefined (value) {
        return typeof value === 'undefined';
    }

    isBoolean (value) {
        return typeof value === 'boolean';
    }

    isEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    validateForm (Schema, data, callback) {

        return true
    }
}

module.exports = Validation