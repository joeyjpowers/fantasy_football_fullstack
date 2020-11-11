import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from '../pages/Login';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                
                <h1>Fantasy Football Dashboard</h1>
            </header>
        </div>
    )
}

const headerStyle = {
    background: '#3c7bcf',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}



export default Header;