import { useState } from "react";
import JoblyApi from "../api";
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setUser }) => {
    const navigate = useNavigate();
    //(Later, once you start working on the login form, you may find it
    // useful to log in as “testuser”. Their password is “password”).
    const initialState = {
        username: "",
        password: "",
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
        const token = await JoblyApi.loginUser(formData);
        JoblyApi.token = token;
        setUser([formData.username, token]);
        navigate('/');
        setFormData(initialState);
    }

    return (
        <>
            <h1>sign in</h1>
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor="username">Enter a username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="password">Enter a password:</label>
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button>Sign In!</button>
            </form>
        </>)
}
export default SignIn