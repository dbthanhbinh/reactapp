(function () {
    
    module.exports = init(
        require ('lodash'),
        require ('../Entity')
    );

    function init(_, Entity){
        class CreateCategoryRequest extends Entity {}
        Entity.defineEntity(CreateCategoryRequest, { __class: 'WPTodos.CreateCategoryRequest', willPersist: false })

        class CreateCategoryResult extends Entity {}

        var serviceAPI = {};
        _.assign(serviceAPI, {
            CreateCategoryRequest,
            CreateCategoryResult
        });

        return serviceAPI
    }
})()
