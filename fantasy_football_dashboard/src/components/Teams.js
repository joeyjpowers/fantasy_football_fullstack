import React, { Component } from 'react';
import Team from './Team';
import PropTypes from 'prop-types';

class Teams extends Component {
    render() {
        return this.props.teams.map((team) => (
            <React.Fragment>   
                <h2 style={teamStyle}>Team Name: { team.name }</h2>
                <p>Platform: { team.platform }</p>
            </React.Fragment>
        ))
    }
}

//PropTypes
Teams.propTypes = {
    teams: PropTypes.array.isRequired
}

const teamStyle = {
    textDecoration: 'underline'
}

export default Teams;