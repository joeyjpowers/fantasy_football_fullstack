import React, { Component } from 'react';
import Teams from './components/Teams';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import TeamView from './components/pages/TeamView';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={ Teams } />
          <Route path="/team" exact component={ TeamView } />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
