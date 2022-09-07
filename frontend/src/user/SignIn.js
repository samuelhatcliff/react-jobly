import { useState } from "react";
import JoblyApi from "../api";

const SignIn = ({ loginUser }) => {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = JoblyApi.loginUser(formData)
        // addUser(formData);
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