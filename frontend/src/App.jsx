import React, { Component } from 'react';
// import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/containers/home/index';
import Layout from './components/layouts/Layout';
 
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Home} />                
            </Layout>
        </BrowserRouter>
       );
  }
}

export default App;