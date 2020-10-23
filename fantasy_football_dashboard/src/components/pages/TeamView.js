import { render } from '@testing-library/react'
import React, { Component } from 'react'
import Roster from './components/Roster';

class TeamView extends Component{
    state = {
        team_roster: [
            {
              pos: "QB",
              roster_slot: "QB",
              name: "Joe Burrow",
              team: "Bengals"
            },
            {
              pos: "RB",
              roster_slot: "RB",
              name: "Ezekiel Elliot",
              team: "Cowboys"
            },
            {
              pos: "RB",
              roster_slot: "RB",
              name: "Josh Jacobs",
              team: "Raiders"
            },
            {
                pos: "WR",
                roster_slot: "WR",
                name: "Terry Mclaurin",
                team: "Football Team"
              },
              {
                pos: "WR",
                roster_slot: "WR",
                name: "Julio Jones",
                team: "Falcons"
              },
              {
                pos: "TE",
                roster_slot: "TE",
                name: "George Kittle",
                team: "49ers"
              },
              {
                pos: "RB",
                roster_slot: "W/R",
                name: "Miles Sanders",
                team: "Eagles"
              },
              {
                pos: "WR",
                roster_slot: "W/R",
                name: "CeeDee Lamb",
                team: "Cowboys"
              },
              {
                pos: "K",
                roster_slot: "K",
                name: "Younghoe Koo",
                team: "Falcons"
              },
              {
                pos: "DEF",
                roster_slot: "DEF",
                name: "Vikings",
                team: "Vikings"
              },

          ]
    }
    render() {
        <div className="App">
        <Header />
        <Roster roster={this.state.team_roster}/>
      </div>
    }
}

export default TeamView;
