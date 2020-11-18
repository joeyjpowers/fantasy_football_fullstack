import React, { Component } from 'react'
import Roster from './Roster'
import StatPage from './StatPage'
import PropTypes from 'prop-types'

export default class Player extends Component {
    
    constructor(props) {
        super(props)
        this.state = props.location.state
      }
    
    render() {
        return (
            <div className="App">
                <StatPage statPage={this.state.player}/>
            </div>
        )
    }
}

//PropTypes
Player.propTypes = {
    player: PropTypes.object.isRequired,
}