var mongoose = require('mongoose');
var db = mongoose.connection;

console.log(db)

class Base {
    constructor (model) {
        this.model = model;               
    }

    test(){
        return 'ffasdfasfd';
    }
	
	findOne(){
        //return this.model;
		// db.findOne({},function (err, data){        
		// 	if(err)
		// 		return err;
		// 	return JSON.stringify(data)
		// });
	}	
};

module.exports = Base;