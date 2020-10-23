import React, { Component } from 'react'

export default class Roster extends Component {
    render() {
        return this.props.roster.map((team_roster) => (
            <React.Fragment>   
                <h1>{ team_roster.roster_slot }: { team_roster.name }</h1>
                <h3>Team: { team_roster.team }</h3>
            </React.Fragment>
        ))
    }
}
