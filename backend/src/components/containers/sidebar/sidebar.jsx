import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component{
    render (){
        return (
            <aside className="main-sidebar">                
                <section className="sidebar">                
                <div className="user-panel">
                    <div className="pull-left image">
                    <img src="assets/dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                    </div>
                    <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <Link to="#"><i className="fa fa-circle text-success"></i> Online</Link>
                    </div>
                </div>                
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..."/>
                    <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>                
                <ul className="sidebar-menu" data-widget="tree">                                      
                    <li><Link to="/categories"><i className="fa fa-circle-o text-red"></i> <span>Categories</span></Link></li>
                </ul>
                </section>                
            </aside>
        )
    }
}

export default Sidebar;
