import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderCtr from '../../containers/header-ctr/index';
import CategoryList from './category-list';
import Modal from '../../containers/modals/index';

class Categories extends Component{
    constructor (props) {
        super(props);
        this.state = {};
    }

    render (){
        return (       
            <div className="content-wrapper">                
                <HeaderCtr />
                <section className="content">                
                    <div className="row">
                        <CategoryList />
                        <Modal />
                    </div>
                </section>
            </div> 
        )
    }
}

export default Categories;
