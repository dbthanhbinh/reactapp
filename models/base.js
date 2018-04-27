const logger = require('logger').createLogger();
const loggerfile = require('logger').createLogger('development.log');
class BaseModel {
    constructor (model) {
        this.model = model;               
    }

    find(query, done){
        logger.info('Runing query: ', query);
        this.model.find(query, function(err, data) {
            if(err){
                return done(err, null);
            }
            return done(null, data);            
        });
    }
    	
	findOne(query, done){
        this.model.findOne(query, function(err, data) {
            if(err){
                return done(err, null);
            }
            return done(null, data);            
        });
    }

    create(Obj, done){        
        this.model.create(Obj, function(err, data) {
            if(err){
                return done(err, null);
            }
            return done(null, data);            
        });
	}	
};

module.exports = BaseModel;