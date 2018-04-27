import React, { Component } from 'react';
// import CategoryValid from '../../../core/validation/Category'
class Modal extends Component{
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            modalTitle: 'Modal title',
            modalBody: {}
        };        

        this.hanldSubmitForm = this.hanldSubmitForm.bind(this);
    }

    hanldSubmitForm(e) {
        e.preventDefault();
        var elements = document.getElementById("editFormModal").elements;
        var obj ={};
        for(var i = 0 ; i < elements.length ; i++){
            var item = elements.item(i);
            obj[item.name] = item.value;
        }

        // // console.log(JSON.stringify(obj));
        // console.log(document.getElementById("editFormModal").elements.formTypeAction.value);        
        // // call services
        let request = {
            name: 'dbthanhbinh',
            description: 'mota'
        };
        // // let request = 'fasd';
        // CategoryValid.CreateRequest(request, function(err, res){
        //     console.log('aaaaaa', res);
        // });

        return fetch('http://localhost:5000/api/v1/categories/create', {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    render (){
        return (       
            <div className="modal fade" id="modal-default">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form id="editFormModal">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">{this.state.modalTitle}</h4>
                            </div>
                            <div id="modal-body" className="modal-body">
                                
                            </div>
                            <div className="modal-footer">                                
                                <button type="button" onClick = {(e) => this.hanldSubmitForm(e)} className="btn btn-primary">Save changes</button>
                            </div>
                        </form>    
                    </div>                    
                </div>               
            </div>
        )
    }
}

export default Modal;
