import React, { Component } from 'react';
import Team from './Team';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Teams extends Component {
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
        return this.state.teams.map((team) => (
            <React.Fragment>
                <Link to="/team">
                    <h2 style={teamStyle}>Team Name: { team.name }</h2>
                </Link>
                <p>Platform: { team.platform }</p>
            </React.Fragment>
        ))
    }
}



const teamStyle = {
    textDecoration: 'underline'
}

export default Teams;