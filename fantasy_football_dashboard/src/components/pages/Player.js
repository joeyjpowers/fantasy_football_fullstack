import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Player extends Component {
    render() {
        const { pos, roster_slot, name, team } = this.props.team_roster;
        return (
            <div>
                
            </div>
        )
    }
}

//PropTypes
Player.propTypes = {
    player: PropTypes.object.isRequired,
}