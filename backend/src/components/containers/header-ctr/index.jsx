import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderCtr extends Component{
    constructor (props) {
        super(props);
        this.state = {
            name: 'Dashboard',
            subname: 'Control panel'
        };
    }

    render (){
        return (       
            <section className="content-header">
                <h1>
                    {this.state.name}
                    <small>{this.state.subname}</small>
                </h1>
                <ol className="breadcrumb">
                    <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                    <li className="active">{this.state.name}</li>
                </ol>
            </section>
        )
    }
}

export default HeaderCtr;
