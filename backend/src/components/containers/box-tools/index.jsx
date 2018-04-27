import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UIComponent from '../../UIComponent/index';

class BoxTools extends Component{
    constructor (props) {
        super(props);        
        this.state = {};
        this.hanldClickOpenModal = this.hanldClickOpenModal.bind(this);
    }

    hanldClickOpenModal(e, target) {       
        var selector = document.getElementById('modal-body');
            selector.innerHTML = '';
            UIComponent.renderUI(selector, this.props.buildData)
    }
        
    render (){
        return (       
            <div className="box-tools">                               
                <button type="button" data-toggle="modal" onClick={this.hanldClickOpenModal} data-target="#modal-default" className="btn btn-block btn-info btn-sm">Add new</button>
            </div>
        )
    }
}

export default BoxTools;
