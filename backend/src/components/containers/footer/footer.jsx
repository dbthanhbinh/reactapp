import React, { Component } from 'react';

class Footer extends Component{
    render (){
        return (       
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <div>
                    <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
                    reserved.
                </div>    
            </footer>
        )
    }
}

export default Footer;
