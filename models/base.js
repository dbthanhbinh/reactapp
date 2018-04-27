class BaseModel {
    constructor (model) {
        this.model = model;               
    }

    find({}, done){
        this.model.find({}, function(err, data) {
            if(err){
                return done(err, null);
            }
            return done(null, data);            
        });
    }
    	
	findOne({}, done){
        this.model.findOne({}, function(err, data) {
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