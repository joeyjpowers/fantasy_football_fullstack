import { render } from '@testing-library/react'
import React, { Component } from 'react'
import Roster from './Roster';
import { Link } from 'react-router-dom';
import Teams from '../Teams.js'

class TeamView extends Component{
    
    constructor(props) {
      super(props)
      this.state = props.location.state
    }

    render() {
      return (
        <div className="App">
          <Roster roster={this.state.team}/>
        </div>
      )
    }
}

export default TeamView;
