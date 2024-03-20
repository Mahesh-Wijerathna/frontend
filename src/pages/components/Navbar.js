import React from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */

const NavBar = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li><a href="/" style={{ outline: '1px solid black', padding: '10px' }}>Home</a></li>
                <li><a href="" style={{ outline: '1px solid black', padding: '10px' }}>Services</a></li>
                <li><a href="" style={{ outline: '1px solid black', padding: '10px' }}>About Us</a></li>
                <li><a href="/map" style={{ outline: '1px solid black', padding: '10px' }}>Map</a></li>
                <li><a href="/login" style={{ outline: '1px solid black', padding: '10px' }}>Login</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
