import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../containers/header/header';
import Sidebar from '../containers/sidebar/sidebar';
import SidebarCtr from '../containers/sidebar-ctr/sidebar-ctr';
import SidebarCtrBg from '../containers/sidebar-ctr-bg/sidebar-ctr-bg';
import Footer from '../containers/footer/footer';
class Layout extends Component {
    render() {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />   
            { this.props.children }
            <Footer />
            <SidebarCtr />
            <SidebarCtrBg />
        </div>
        );
    }
}

export default Layout;