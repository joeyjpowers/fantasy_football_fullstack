import React, { Component } from 'react'

export default class Roster extends Component {
    render() {
        return this.props.roster.map((player) => (
            <React.Fragment>   
                <h1>{ player.roster_slot }: { player.name }</h1>
                <h3>Team: { player.team }</h3>
            </React.Fragment>
        ))
    }
}
