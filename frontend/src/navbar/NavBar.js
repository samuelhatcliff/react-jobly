import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../user/UserContext.js';


const NavBar = () => {
    const { user } = useContext(UserContext);
    let loggedIn = false;
    if (user) {
        if (user.length) {
            loggedIn = true;
        }
    }
    return (
        <nav>
            {loggedIn ? (
                <>
                    <NavLink exact to="/companies">Companies</NavLink>
                    <NavLink exact to="/jobs">Jobs</NavLink>
                    <NavLink exact to="/profile">Profile</NavLink>
                    <NavLink exact to="/logout">Log Out {user[0]}</NavLink>
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