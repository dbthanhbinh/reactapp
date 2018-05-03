import React, { Component } from 'react';
// import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/containers/home/index';
import Layout from './components/layouts/Layout';
import Service from './core/services/index';
 
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            {/* <Layout>
                <Route exact path="/" component={Home} />                
            </Layout> */}

            {/* <Route exact path="/" component={Home} /> */}
        </BrowserRouter>
       );
  }
}

export default App;