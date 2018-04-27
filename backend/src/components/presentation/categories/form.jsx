import Forge from '../../../core/Forge';
var CategoriesForm = {
    addEditForm: function(selector, method){
        var nameRender = Forge.buildInput({'type': 'input', 'id': 'textName', 'label': 'Name', 'placeholder': 'Enter name..'});
        var desRender  = Forge.buildInput({'type': 'textarea', 'id': 'textDescription', 'label': 'Description', 'placeholder': 'Description ..'});
        var actionType = Forge.build({ 'dom': 'input', 'type': 'hidden', 'id': 'formTypeAction', 'value': method});
        selector.appendChild(nameRender);
        selector.appendChild(desRender);
        selector.appendChild(actionType);
    }
}

export default CategoriesForm;
