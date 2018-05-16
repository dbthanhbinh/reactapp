import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

import logo from './logo.svg';
import './semantic/dist/semantic.min.css';
import './App.css';

import Comment from './components/comment'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container style={{ marginTop: '3em' }}>
                <Header as='h1'>Theming Examples</Header>

                <Comment />
            </Container>
        );
    }
}

export default App;