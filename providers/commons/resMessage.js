const resMessage = {};
resMessage.message = function (err, data, type) {
    var resData = {};
    if(err) {        
        resData = {
            status: 1,
            resType: type,
            statusCode: 400,                        
            message: 'Error with: ' + err,
            dataResult: {}
        };  
        return JSON.stringify(resData);
    }

    return JSON.stringify(
        resData = (!data) ? {
            status: 1,
            resType: type,
            statusCode: 400,            
            message: 'Error with: ' + err,
            dataResult: {}
        } :  {
            status: 0,
            resType: type,
            statusCode: 200,            
            message: 'Success!',
            dataResult: data
        }
    );
}    

module.exports = resMessage;
