import { render } from '@testing-library/react'
import React, { Component } from 'react'
import Roster from './Roster';
import { Link } from 'react-router-dom';
import Teams from '../Teams.js'

class TeamView extends Component{
   
    render() {
      return (
        <div className="App">
          <Roster roster={this.Teams.state.teams.roster}/>
          <Link to="/">
            <p>Return to Home</p>  
          </Link>
        </div>
      )
    }
}

export default TeamView;
