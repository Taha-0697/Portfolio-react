import React from 'react';
import "../Styles/navbar.css";

function navbar() {
    return (
        <div className="navbar">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default navbar
