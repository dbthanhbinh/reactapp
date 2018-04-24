import React, { Component } from 'react';

class Modal extends Component{
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            modalTitle: 'Modal title',
            modalBody: {}
        };        
    }

    render (){
        return (       
            <div className="modal fade" id="modal-default">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">{this.state.modalTitle}</h4>
                    </div>
                    <div id="modal-body" className="modal-body">
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>                    
                </div>               
            </div>
        )
    }
}

export default Modal;
