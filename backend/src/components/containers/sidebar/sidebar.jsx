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
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active treeview">
                    <Link to="#">
                        <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li className="active"><Link to="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</Link></li>
                        <li><Link to="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</Link></li>
                    </ul>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-files-o"></i>
                        <span>Layout Options</span>
                        <span className="pull-right-container">
                        <span className="label label-primary pull-right">4</span>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</Link></li>
                        <li><Link to="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</Link></li>
                        <li><Link to="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</Link></li>
                        <li><Link to="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</Link></li>
                    </ul>
                    </li>
                    <li>
                    <Link to="pages/widgets.html">
                        <i className="fa fa-th"></i> <span>Widgets</span>
                        <span className="pull-right-container">
                        <small className="label pull-right bg-green">new</small>
                        </span>
                    </Link>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-pie-chart"></i>
                        <span>Charts</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</Link></li>
                        <li><Link to="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</Link></li>
                        <li><Link to="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</Link></li>
                        <li><Link to="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</Link></li>
                    </ul>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-laptop"></i>
                        <span>UI Elements</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</Link></li>
                        <li><Link to="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</Link></li>
                        <li><Link to="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</Link></li>
                        <li><Link to="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</Link></li>
                        <li><Link to="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</Link></li>
                        <li><Link to="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</Link></li>
                    </ul>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-edit"></i> <span>Forms</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</Link></li>
                        <li><Link to="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</Link></li>
                        <li><Link to="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</Link></li>
                    </ul>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-table"></i> <span>Tables</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</Link></li>
                        <li><Link to="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</Link></li>
                    </ul>
                    </li>
                    <li>
                    <Link to="pages/calendar.html">
                        <i className="fa fa-calendar"></i> <span>Calendar</span>
                        <span className="pull-right-container">
                        <small className="label pull-right bg-red">3</small>
                        <small className="label pull-right bg-blue">17</small>
                        </span>
                    </Link>
                    </li>
                    <li>
                    <Link to="pages/mailbox/mailbox.html">
                        <i className="fa fa-envelope"></i> <span>Mailbox</span>
                        <span className="pull-right-container">
                        <small className="label pull-right bg-yellow">12</small>
                        <small className="label pull-right bg-green">16</small>
                        <small className="label pull-right bg-red">5</small>
                        </span>
                    </Link>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-folder"></i> <span>Examples</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</Link></li>
                        <li><Link to="pages/examples/profile.html"><i className="fa fa-circle-o"></i> Profile</Link></li>
                        <li><Link to="pages/examples/login.html"><i className="fa fa-circle-o"></i> Login</Link></li>
                        <li><Link to="pages/examples/register.html"><i className="fa fa-circle-o"></i> Register</Link></li>
                        <li><Link to="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</Link></li>
                        <li><Link to="pages/examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</Link></li>
                        <li><Link to="pages/examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</Link></li>
                        <li><Link to="pages/examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</Link></li>
                        <li><Link to="pages/examples/pace.html"><i className="fa fa-circle-o"></i> Pace Page</Link></li>
                    </ul>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-share"></i> <span>Multilevel</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="#"><i className="fa fa-circle-o"></i> Level One</Link></li>
                        <li className="treeview">
                        <Link to="#"><i className="fa fa-circle-o"></i> Level One
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="#"><i className="fa fa-circle-o"></i> Level Two</Link></li>
                            <li className="treeview">
                            <Link to="#"><i className="fa fa-circle-o"></i> Level Two
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to="#"><i className="fa fa-circle-o"></i> Level Three</Link></li>
                                <li><Link to="#"><i className="fa fa-circle-o"></i> Level Three</Link></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li><Link to="#"><i className="fa fa-circle-o"></i> Level One</Link></li>
                    </ul>
                    </li>
                    <li><Link to="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></Link></li>
                    <li className="header">LABELS</li>
                    <li><Link to="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></Link></li>
                    <li><Link to="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></Link></li>
                    <li><Link to="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></Link></li>
                </ul>
                </section>                
            </aside>
        )
    }
}

export default Sidebar;
