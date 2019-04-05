import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/smurf-form">Add Smurf</NavLink>
        </div>
    )
}

export default NavBar;