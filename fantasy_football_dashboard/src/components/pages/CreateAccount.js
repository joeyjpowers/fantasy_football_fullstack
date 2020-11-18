import React, { Component } from 'react'

export default class CreateAccount extends Component {
    render() {
        return (
            <div style={ createAccountStyle }>
                <h1>Create Account:</h1>
                <form>
                    <label>
                        <h4>Email: </h4>
                        <input type="email" placeholder="Enter Username" name="email" style={{ width:'30%'}} required />
                    </label>
                    <label>
                        <h4>Username: </h4>
                        <input type="text" placeholder="Enter Username" name="username" style={{ width:'30%' }} required />
                    </label>
                    <label>
                        <h4>Password: </h4>
                        <input type="password" placeholder="Enter Password" name="password" style={{ width:'30%' }} required />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                
                
            </div>
        )
    }
}

const createAccountStyle={
    textAlign: 'center'
}