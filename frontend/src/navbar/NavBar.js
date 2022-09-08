import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import UserContext from '../user/UserContext.js';


const NavBar = ({ signedIn }) => {
    const username = useContext(UserContext)[0];

    return (
        <nav>
            {username ? (
                <>
                    <NavLink exact to="/companies">Companies</NavLink>
                    <NavLink exact to="/jobs">Jobs</NavLink>
                    <NavLink exact to="/profile">Profile</NavLink>
                    <NavLink exact to="/logout">Log Out {username}</NavLink>
                </>
            ) : (
                <>
                    <NavLink exact to="/signin">Sign in</NavLink>
                    <NavLink exact to="/signup">Sign up</NavLink>
                </>
            )}
        </nav>
    )
}

export default NavBar