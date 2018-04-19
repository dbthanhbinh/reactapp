class BaseModel {
    constructor (model) {
        this.model = model;               
    }

    find({}, done){
        this.model.find({}, function(err, data) {
            return done(null, data);            
        });
    }
    	
	findOne({}, done){
        this.model.findOne({}, function(err, data) {
            return done(null, data);            
        });
	}	
};

module.exports = BaseModel;