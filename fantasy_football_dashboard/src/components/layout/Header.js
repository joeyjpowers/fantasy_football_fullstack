import React from 'react'

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