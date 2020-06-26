import React from 'react'             //This will be just a functional component, so there will be no state here, just a display return

import {link} from 'react-router-dom';


function Header() {

    return (
        <Header style={headerStyle}>

            <h1>Courses Calendar</h1>
            <link style={linkStyle} to = '/'>Home</link> | <link style={linkStyle} to = '/about'>About</link>

        </Header>
            
        
    )
}


const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}



const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}



export default Header;




