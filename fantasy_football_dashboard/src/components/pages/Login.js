import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div style={ loginStyle }>
                <h1>Login:</h1>
                <form>
                    <label>
                        <h4>Username: </h4>
                        <input type="text" placeholder="Enter Username" name="username" style={{ width:'30%' }} required />
                    </label>
                    <label>
                        <h4>Password: </h4>
                        <input type="password" placeholder="Enter Password" name="password" style={{ width: '30%' }} required />
                    </label>
                    <br/><br/>
                    <input type="submit" value="Submit" />
                </form>
                <br/><br/>
                <h4>Don't have an account?</h4>
                <Link to="/createAccount">
                    <p>Create Account</p>
                </Link>
                
            </div>
        )
    }
}

const loginStyle={
    textAlign: 'center'
}
