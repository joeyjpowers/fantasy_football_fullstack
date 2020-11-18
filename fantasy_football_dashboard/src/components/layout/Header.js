import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from '../pages/Login';
import CreateAccount from '../pages/Login';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <React.Fragment>
                    <h1>Fantasy Football Dashboard</h1>
                    <div style={linkStyle}>
                        <Link to="/login">
                            <p>Login</p>
                        </Link>
                        <Link to="/createAccount">
                            <p>Create account</p>
                        </Link>
                        <Link to="/">
                            <p>Return Home</p>
                        </Link>
                    </div>
                        
                </React.Fragment>
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

const linkStyle = {
    display: 'inline-block'
}



export default Header;