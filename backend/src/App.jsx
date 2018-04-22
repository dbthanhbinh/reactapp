import React, { Component } from 'react';
// import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/containers/dashboard/dashboard';
import Layout from './components/layouts/Layout';
 
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Dashboard} />                
            </Layout>
        </BrowserRouter>
       );
  }
}

export default App;