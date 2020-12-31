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
                    <h1 style = {playerStyle}>{ player.roster_slot }: { player.name }</h1> 
                    
                </Link>
                
                <h4 style = {teamStyle}>Team: { player.team }</h4>
                <p style = {statsStyle}>Receiving TDS: {player.stats[0].receivingTDs} TDS</p> 
                <p style = {statsStyle}>Receiving YDS: { player.stats[0].receivingYards } yards</p>
                <p style = {statsStyle}>Rush TDS: {player.stats[0].rushTDs} TDS</p> 
                <p style = {statsStyle}>Rush YDS: { player.stats[0].rushYards } yards</p>
                <p style = {statsStyle}>Pass TDS: {player.stats[0].passTDs} TDS</p> 
                <p style = {statsStyle}>Pass YDS: { player.stats[0].passYards } yards</p>
                
                
            </React.Fragment>
        ))
    }
}

const playerStyle = {
    marginLeft: '10px'
}
const teamStyle = {
    display: 'inline-block',
    marginTop: '0px',
    marginLeft: '20px'
}
const statsStyle = {
    float: 'right',
    display: 'inline-block',
    marginRight: '10px',
    marginTop: '0px',
    marginBottom: '0px'
}
