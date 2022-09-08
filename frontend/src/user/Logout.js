import JoblyApi from "../api"
import { useNavigate } from 'react-router-dom'

const Logout = ({ setUser }) => {
    const navigate = useNavigate();
    JoblyApi.token = "";
    setUser([]);
    navigate('/');
    return (
        <div>
            <h1>Logged out successfully!</h1>
        </div>
    )
}
export default Logout