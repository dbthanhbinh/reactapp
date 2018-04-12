class Base {
    constructor (model) {
        this.model = model;               
    }

    test(){
        return 'ffasdfasfd';
    }
	
	findOne(){
        return this.model;
		// this.model.findOne({},function (err, data){        
		// 	if(err)
		// 		return err;
		// 	return JSON.stringify(data)
		// });
	}	
};

module.exports = Base;