import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from '../user/UserContext.js';


const SignUp = () => {
    const { signUp } = useContext(UserContext);
    const navigate = useNavigate();

    const initialState = {
        username: "",
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
        await signUp(formData);
        setFormData(initialState);
        navigate('/')
    }

    return (
        <>
            <h1>sign up</h1>
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

                <label htmlFor="firstName">Enter your first name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label htmlFor="lastName">Enter your last name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label htmlFor="email">Enter your email address:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <button>Sign Up!</button>
            </form>
        </>)
}
export default SignUp