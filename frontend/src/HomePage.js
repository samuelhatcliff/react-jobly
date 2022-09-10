import { useState, useContext } from 'react';
import UserContext from './user/UserContext';



const HomePage = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>Jobly</h1>
            <h3>All the jobs in one, convenient place.</h3>
            {user.length ? (<><h5>Welcome Back {user[0]}!</h5></>) : (<><h5>Please sign in or create an account to use the platform!</h5></>)}
        </div>
    )

}
export default HomePage