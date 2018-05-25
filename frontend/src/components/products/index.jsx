import React, { Component } from 'react'
import ProductList from './product.service'
import ProductItem from './product.item'
import { Item } from 'semantic-ui-react'
class Products extends Component {
    constructor (props) {
        super(props)

        this.state = {
            productList: ProductList
        }
    }

    render () {
        let productList = this.state.productList        
        return (
            <div className="ui divided items">
                {
                    productList.map((Item) => {
                        return <ProductItem key={Item.id} data={Item}/>
                    })
                }               
            </div>
        )
    }
}

export default Products