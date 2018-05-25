import React, { Component } from 'react'

class ProductItem extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {        
        let Data = this.props.data
        console.log('Data: ', Data)
        return (
            <div className="item">
                {
                    Data.thumb
                    ? <div className="image">
                        <img src={Data.thumb} />
                    </div> 
                    : ''
                }                
                <div className="content">
                <a className="header">{Data.name}</a>
                <div className="meta">
                    <span className="cinema">IFC Cinema</span>
                </div>
                <div className="description">
                    <p>description</p>
                </div>
                <div className="extra">
                    <div class="ui vertical animated button" tabindex="0">
                        <div class="hidden content">Shop</div>
                        <div class="visible content">
                            <i class="shop icon"></i>
                        </div>
                    </div>                   
                    <div className="ui label">Limited</div>
                </div>
                </div>
            </div>
        )
    }
}

export default ProductItem
