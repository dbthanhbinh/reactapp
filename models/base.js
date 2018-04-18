class BaseModel {
    constructor (model) {
        this.model = model;               
    }
    find(){
        this.model.find({}, function(err, users) {
            if (err) {
                return next(err);
            }
            else {
                return users;
            }
        });
        // return 'fasdfas';
	}	
	findOne(){
        console.log('findOne')
	}	
};

module.exports = BaseModel;