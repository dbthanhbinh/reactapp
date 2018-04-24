import React, { Component } from 'react';
import { reactDom, Link } from 'react-router-dom';
import BoxTools from '../../containers/box-tools/index';


class CategoriesList extends Component{
    constructor (props) {
        super(props);
        this.state = {
            name: 'Category list'
        };
    }

    render (){
        return (       
            <section className="content">
                <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                    <div className="box-header">
                        <h3 className="box-title">{this.state.name}</h3>
                        <BoxTools buildData="renderAddCategory" />
                    </div>
                    
                    <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Trident</td>
                            <td>Internet
                            Explorer 4.0
                            </td>
                            <td>Win 95+</td>
                            <td> 4</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Trident</td>
                            <td>Internet
                            Explorer 5.0
                            </td>
                            <td>Win 95+</td>
                            <td>5</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>Trident</td>
                            <td>Internet
                            Explorer 5.5
                            </td>
                            <td>Win 95+</td>
                            <td>5.5</td>
                            <td>A</td>
                        </tr>
                        
                        <tr>
                            <td>Misc</td>
                            <td>PSP browser</td>
                            <td>PSP</td>
                            <td>-</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>Other browsers</td>
                            <td>All others</td>
                            <td>-</td>
                            <td>-</td>
                            <td>U</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                        </tr>
                        </tfoot>
                        </table>
                    </div>
                    
                    </div>                    
                    
                </div>
                
                </div>
                
            </section>
        )
    }
}

export default CategoriesList;
