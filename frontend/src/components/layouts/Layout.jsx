import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from '../containers/sidebar/sidebar';
import Footer from '../containers/footer/footer';
class Layout extends Component {
    render() {
    return (
        <div>
            <Sidebar />                       
            { this.props.children }
            <Footer />
        </div>
        );
    }
}

export default Layout;