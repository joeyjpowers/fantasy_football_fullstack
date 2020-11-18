import React, { Component } from 'react'

export default class StatPage extends Component {
    render() {
        return this.props.statPage.map((stats) => (
            <React.Fragment>
                <p>{ stats.pos }</p>
                <p>{ stats.passYards }</p>
                <p>{ stats.passTDs }</p>
                <p>{ stats.rushYards }</p>
                <p>{ stats.rushTDs }</p>
                <p>{ stats.receivingYards }</p>
                <p>{ stats.receivingTDs }</p>
            </React.Fragment>
        ))
    }
}
