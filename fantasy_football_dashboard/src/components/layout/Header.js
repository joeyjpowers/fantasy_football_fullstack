import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from '../pages/Login';
import CreateAccount from '../pages/Login';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <React.Fragment>
                    <div style={linkStyle}>
                        <Link to="/createAccount" style={{ width: '30%', display: 'inline-block' }}>
                            <p>Create account</p>
                        </Link>

                        <Link to="/" style={{ width: '30%', display: 'inline-block' }}>
                            <p>Home</p>
                        </Link>
                        
                        <Link to="/login" style={{ display: 'inline-block', width: '30%'}}>
                            <p>Login</p>
                        </Link>
                    </div>
                    <h1 style={titleStyle}>Fantasy Football Dashboard</h1>
                        
                </React.Fragment>
            </header>
        </div>
    )
}

const headerStyle = {
    background: '#3c7bcf',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
}

const titleStyle = {
    
    fontSize: '40px',
    
}

const linkStyle = {
    textTransform: 'uppercase',
}



export default Header;