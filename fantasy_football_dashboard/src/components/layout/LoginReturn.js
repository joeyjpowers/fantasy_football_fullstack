import React from 'react'
import { BrowserRouter, Router, Link } from 'react-router-dom';

function LoginReturn() {
    return (
        <div>
            <div style = { headerStyle }>
                <React.Fragment>
                        <BrowserRouter>
                            <Link to="/login">
                                <p>Login</p>
                            </Link>
                            <Link to="/">
                                <p>Return Home</p>
                            </Link>
                        </BrowserRouter>
                    </React.Fragment>
            </div>
        </div>
    )
}

const headerStyle = {
    background: '#3c7bcf',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default LoginReturn;
