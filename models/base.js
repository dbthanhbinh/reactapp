const logger = require('logger').createLogger();
const loggerfile = require('logger').createLogger('development.log');
class BaseModel {
    constructor (model) {
        this.model = model;               
    }

    find(query, done){
        logger.info('Runing find: ', query);
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
        logger.info('Begining create data..'); 
        this.model.create(Obj, function(err, data) {
            if(err){
                return done(err, null);
            }
            return done(null, data);            
        });
	}	
};

module.exports = BaseModel;