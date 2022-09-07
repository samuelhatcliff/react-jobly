import { NavLink } from 'react-router-dom';


const NavBar = ({ signedIn }) => {

    return (
        <nav>
            {/* <AppBar position="fixed" className="appBar">
                <Toolbar className="navigation"> */}
            {signedIn ? (
                <>
                    <NavLink exact to="/companies">Companies</NavLink>
                    <NavLink exact to="/jobs">Jobs</NavLink>
                    <NavLink exact to="/profile">Profile</NavLink>
                    <NavLink exact to="/logout">Log Out</NavLink>
                </>
            ) : (
                <>
                    <NavLink exact to="/signin">Sign in</NavLink>
                    <NavLink exact to="/signup">Sign up</NavLink>
                </>
            )}
            {/* </Toolbar>
            </AppBar> */}
        </nav>
    )
}

export default NavBar