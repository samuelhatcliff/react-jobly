import { useState, useContext } from "react";
import JoblyApi from "../api";
import { useNavigate } from 'react-router-dom';
import UserContext from '../user/UserContext.js';



const Profile = ({ setUser }) => {
    const navigate = useNavigate();
    const username = useContext(UserContext)[0];


    const initialState = {
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        formData['username'] = username;
        const res = await JoblyApi.updateUser(formData)
        console.log(res)
        navigate('/')
    }
    if (success) {
        return (
            <>
                <h1>Success!</h1>
            </>
        )
    }

    return (
        <>
            <h1>Edit Profile</h1>
            <form
                onSubmit={handleSubmit}
            >

                <label htmlFor="password">Enter a new password:</label>
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <label htmlFor="firstName">Enter a new first name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label htmlFor="lastName">Enter a new last name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label htmlFor="email">Enter a new email address:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <button>Save Changes</button>
            </form>
        </>)
}
export default Profile