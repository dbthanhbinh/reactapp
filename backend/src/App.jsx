import React, { Component } from 'react';
// import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/containers/dashboard/dashboard';
import Layout from './components/layouts/Layout';
import Categories from './components/presentation/categories/index';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Dashboard} />    
                <Route exact path="/categories" component={Categories} />            
            </Layout>
        </BrowserRouter>
       );
  }
}

export default App;