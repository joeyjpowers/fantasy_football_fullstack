import React, { Component } from 'react';
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
                team: "Bengals",
                stats:[
                  {
                    id:"100",
                    pos:"QB",
                    passYards:"356",
                    passTDs:"3",
                    rushYards:"31",
                    rushTDs:"0",
                    receivingYards:"0",
                    receivingTDs:"0",
                  }
                ]
              },
              {
                pos: "RB",
                roster_slot: "RB",
                name: "Ezekiel Elliot",
                team: "Cowboys",
                stats:[
                  {
                    id:"110",
                    pos:"RB",
                    passYards:"0",
                    passTDs:"0",
                    rushYards:"87",
                    rushTDs:"1",
                    receivingYards:"22",
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "RB",
                roster_slot: "RB",
                name: "Josh Jacobs",
                team: "Raiders",
                stats:[
                  {
                    id:"120",
                    pos:"RB",
                    passYards:"0",
                    passTDs:"0",
                    rushYards:"121",
                    rushTDs:"0",
                    receivingYards:"44",
                    receivingTDs:"1"
                  }
                ]
              },
              {
                  pos: "WR",
                  roster_slot: "WR",
                  name: "Terry Mclaurin",
                  team: "Football Team",
                  stats:[
                    {
                      id:"210",
                      pos:"WR",
                      passYards:"0",
                      passTDs:"0",
                      rushYards:"0",
                      rushTDs:"0",
                      receivingYards:"89",
                      receivingTDs:"1"
                    }
                  ]
                },
                {
                  pos: "WR",
                  roster_slot: "WR",
                  name: "Julio Jones",
                  team: "Falcons",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "TE",
                  roster_slot: "TE",
                  name: "George Kittle",
                  team: "49ers",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "RB",
                  roster_slot: "W/R",
                  name: "Miles Sanders",
                  team: "Eagles",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "WR",
                  roster_slot: "W/R",
                  name: "CeeDee Lamb",
                  team: "Cowboys",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "K",
                  roster_slot: "K",
                  name: "Younghoe Koo",
                  team: "Falcons",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "DEF",
                  roster_slot: "DEF",
                  name: "Vikings",
                  team: "Vikings",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                }
            ],
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
                team: "Falcons",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
                },
                {
                  pos: "RB",
                  roster_slot: "RB",
                  name: "Derrick Henry",
                  team: "Titans",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "RB",
                  roster_slot: "RB",
                  name: "Kareem Hunt",
                  team: "Browns",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "WR",
                  roster_slot: "WR",
                  name: "Julio Jones",
                  team: "Falcons",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "WR",
                  roster_slot: "WR",
                  name: "Adam Thielen",
                  team: "Vikings",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "TE",
                  roster_slot: "TE",
                  name: "Austin Hooper",
                  team: "Browns",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "WR",
                  roster_slot: "W/R",
                  name: "DK Metcalf",
                  team: "Seahawks",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "K",
                  roster_slot: "K",
                  name: "Daniel Carlson",
                  team: "Raiders",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                },
                {
                  pos: "DEF",
                  roster_slot: "DEF",
                  name: "Chiefs",
                  team: "Chiefs",
                  stats:[
                    {
                      id:"100"
                    },
                    {
                      pos:"QB"
                    },
                    {
                      passYards:"356",
                    },
                    {
                      passTDs:"3"
                    },
                    {
                      rushYards:"31"
                    },
                    {
                      rushTDs:"0",
                    },
                    {
                      receivingYards:"0",
                    },
                    {
                      receivingTDs:"0"
                    }
                  ]
                }
            ],
            
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
                team: "49ers",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "RB",
                roster_slot: "RB",
                name: "James Conner",
                team: "Steelers",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "RB",
                roster_slot: "RB",
                name: "Dalvin Cook",
                team: "Vikings",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "WR",
                roster_slot: "WR",
                name: "Mike Evans",
                team: "Bucaneers",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "WR",
                roster_slot: "WR",
                name: "Terry Mclaurin",
                team: "Football Team",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "TE",
                roster_slot: "TE",
                name: "Mo Alie Cox",
                team: "Colts",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "RB",
                roster_slot: "W/R",
                name: "Jonathan Taylor",
                team: "Colts",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
              },
              {
                pos: "QB",
                roster_slot: "WRTQ",
                name: "Deshaun Watson",
                team: "Texans",
                stats:[
                  {
                    id:"100"
                  },
                  {
                    pos:"QB"
                  },
                  {
                    passYards:"356",
                  },
                  {
                    passTDs:"3"
                  },
                  {
                    rushYards:"31"
                  },
                  {
                    rushTDs:"0",
                  },
                  {
                    receivingYards:"0",
                  },
                  {
                    receivingTDs:"0"
                  }
                ]
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