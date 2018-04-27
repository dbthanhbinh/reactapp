(function () {
    
    module.exports = init(
        require ('lodash'),
        require ('../Entity')
    );

    function init(_, Entity){
        class CreateRequest extends Entity {}

        class CreateResult extends Entity {}

        var serviceAPI = {};
        _.assign(serviceAPI, {
            CreateRequest,
            CreateResult
        });

        return serviceAPI
    }
})()
