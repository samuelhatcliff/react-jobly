import { useContext } from "react";
import UserContext from '../user/UserContext.js';
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();
    logout()
    navigate('/')
    return (
        <div>
            <h1>Logged out successfully!</h1>
        </div>
    )
}
export default Logout