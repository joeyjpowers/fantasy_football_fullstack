import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Roster extends Component {
    
    render() {
        return this.props.roster.map((player) => (
            <React.Fragment>
                <Link to={{
                  pathname:"/player",
                  state:{
                    player: player.stats
                  }
                }}>
                    <h1 style={{paddingLeft: '10px', fontSize: '30px'}}>{ player.roster_slot }: { player.name }</h1>
                </Link>
                <h4 style={{paddingLeft: '25px'}}>Team: { player.team }</h4>
            </React.Fragment>
        ))
    }
}
