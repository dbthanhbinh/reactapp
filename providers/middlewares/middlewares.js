var passport = require('passport'),
    passportJWT = require('passport-jwt')
    extractJwt = passportJWT.ExtractJwt,
    strategyJwt = passportJWT.Strategy;
    
exports.setAllowControl = function(){
    return function (req, res, next) {
        
        next();
    }    
}