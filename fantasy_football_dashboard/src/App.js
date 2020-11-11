import React, { Component } from 'react';
import Teams from './components/Teams';
import './App.css';
import Header from './components/layout/Header';
import LoginReturn from './components/layout/LoginReturn';
import { BrowserRouter, Route } from 'react-router-dom';
import TeamView from './components/pages/TeamView';
import Login from './components/pages/Login'

class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <LoginReturn />
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={ Teams } />
          <Route path="/team" exact component={ TeamView } />
          <Route path="/login" exact component={ Login } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
