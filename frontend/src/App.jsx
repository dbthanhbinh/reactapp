import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'

import logo from './logo.svg'
import './semantic/dist/semantic.min.css'
import './App.css'

import Comment from './components/comment'

import Products from './components/products'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container style={{ marginTop: '3em' }}>
                <Header as='h1'>Theming Examples</Header>
                <Products />
                {/* <Comment /> */}
            </Container>
        );
    }
}

export default App;