import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StatPage extends Component {
    render() {
        return this.props.statPage.map((stats) => (
            <React.Fragment>
                <h1>Position: { stats.pos }</h1>
                <h3>Pass Yards: { stats.passYards }</h3>
                <h3>Pass TDs: { stats.passTDs }</h3>
                <h3>Rush Yards: { stats.rushYards }</h3>
                <h3>Rush TDs: { stats.rushTDs }</h3>
                <h3>Receiving Yards: { stats.receivingYards }</h3>
                <h3>Receiving TDs: { stats.receivingTDs }</h3>
            </React.Fragment>
            
        ))
    }
}
