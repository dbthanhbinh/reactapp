import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UIComponent from '../../presentation/UIComponent/index';

class BoxTools extends Component{
    constructor (props) {
        super(props);        
        this.state = {};

        this.hanldClickAdd = this.hanldClickAdd.bind(this);
    }

    hanldClickAdd(e, target) {                
        document.getElementById('modal-body').innerHTML = '';        
        document.getElementById('modal-body').appendChild(UIComponent.renderUI(this.props.buildData));
    }
    
    render (){
        return (       
            <div className="box-tools">                               
                <button type="button" data-toggle="modal" onClick={this.hanldClickAdd} data-target="#modal-default" className="btn btn-block btn-info btn-sm">Add new</button>
            </div>
        )
    }
}

export default BoxTools;
