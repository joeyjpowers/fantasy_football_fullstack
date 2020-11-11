import React, { Component } from 'react';
import Team from './Team';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Teams extends Component {

    constructor(props) {
      super(props)
      this.state = {
        teams: [
          {
            id: 1,
            name: "Red Solo Kupp",
            platform: "NFL",
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
                }
            ]
          },
          {
            id: 2,
            name: "Hooked on a Thielen",
            platform: "ESPN",
            team_roster: [
              {
                pos: "QB",
                roster_slot: "QB",
                name: "Matt Ryan",
                team: "Falcons"
                },
                {
                  pos: "RB",
                  roster_slot: "RB",
                  name: "Derrick Henry",
                  team: "Titans"
                },
                {
                  pos: "RB",
                  roster_slot: "RB",
                  name: "Kareem Hunt",
                  team: "Browns"
                },
                {
                  pos: "WR",
                  roster_slot: "WR",
                  name: "Julio Jones",
                  team: "Falcons"
                },
                {
                  pos: "WR",
                  roster_slot: "WR",
                  name: "Adam Thielen",
                  team: "Vikings"
                },
                {
                  pos: "TE",
                  roster_slot: "TE",
                  name: "Austin Hooper",
                  team: "Browns"
                },
                {
                  pos: "WR",
                  roster_slot: "W/R",
                  name: "DK Metcalf",
                  team: "Seahawks"
                },
                {
                  pos: "K",
                  roster_slot: "K",
                  name: "Daniel Carlson",
                  team: "Raiders"
                },
                {
                  pos: "DEF",
                  roster_slot: "DEF",
                  name: "Chiefs",
                  team: "Chiefs"
                }
            ]
          },
          {
            id: 3,
            name: "Scary Terry in the Kitchen",
            platform: "Sleeper",
            team_roster: [
              {
                pos: "QB",
                roster_slot: "QB",
                name: "Jimmy Garropolo",
                team: "49ers"
              },
              {
                pos: "RB",
                roster_slot: "RB",
                name: "James Conner",
                team: "Steelers"
              },
              {
                pos: "RB",
                roster_slot: "RB",
                name: "Dalvin Cook",
                team: "Vikings"
              },
              {
                pos: "WR",
                roster_slot: "WR",
                name: "Mike Evans",
                team: "Bucaneers"
              },
              {
                pos: "WR",
                roster_slot: "WR",
                name: "Terry Mclaurin",
                team: "Football Team"
              },
              {
                pos: "TE",
                roster_slot: "TE",
                name: "Mo Alie Cox",
                team: "Colts"
              },
              {
                pos: "RB",
                roster_slot: "W/R",
                name: "Jonathan Taylor",
                team: "Colts"
              },
              {
                pos: "QB",
                roster_slot: "WRTQ",
                name: "Deshaun Watson",
                team: "Texans"
              }
            ]
          },
        ]
      }
    }

    render() {
        return this.state.teams.map((team) => (
            <React.Fragment>
                <Link to={{
                  pathname:"/team",
                  state:{
                    team: team.team_roster
                  }
                }}>
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