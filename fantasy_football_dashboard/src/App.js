import React, { Component } from 'react';
import Teams from './components/Teams';
import './App.css';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    teams: [
      {
        id: 1,
        name: "Red Solo Kupp",
        platform: "NFL"
      },
      {
        id: 2,
        name: "Hooked on a Thielen",
        platform: "ESPN"
      },
      {
        id: 3,
        name: "Scary Terry in the Kitchen",
        platform: "Sleeper"
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Teams teams={this.state.teams}/>
      </div>
    );
  }
}

export default App;
