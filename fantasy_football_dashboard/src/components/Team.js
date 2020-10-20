import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Team extends Component {
    render() {
        const { id, name, platform } = this.props.team;
        return (
            <div>
                
            </div>
        )
    }
}

//PropTypes
Team.propTypes = {
    team: PropTypes.object.isRequired,
}