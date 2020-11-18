import React, { Component } from 'react'

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
                </form>
                
            </div>
        )
    }
}

const loginStyle={
    textAlign: 'center'
}
