import Forge from '../../../core/Forge';

var UIComponent = {

    renderUI: function (method) {
        switch (method){
            case 'renderAddCategory':
                return UIComponent.renderAddCategory();
            break;
        }
    },

    renderAddCategory: function(){
        var addCategoryRender = Forge.buildInput({'type': 'input', 'label': 'Name', 'placeholder': 'Enter name..'});

        return addCategoryRender;
    }
}

export default UIComponent;
