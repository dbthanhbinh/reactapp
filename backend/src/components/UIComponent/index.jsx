import Forge from '../../core/Forge';
import CategoryAddEditForm from '../presentation/categories/form';

var UIComponent = {

    renderUI: function (selector, method) {
        switch (method){
            case 'AddEditCategory':
                CategoryAddEditForm.addEditForm(selector, method);
            break;
        }
    }
}

export default UIComponent;
