import { Route, Routes } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import Company from '../companies/Company.js';
import Job from '../jobs/Job.js';
import Profile from '../user/Profile.js';
import SignIn from '../user/SignIn.js';
import SignUp from '../user/SignUp.js';
import Logout from '../user/Logout.js';
import HomePage from '../HomePage.js';
import CompanyDetail from '../companies/CompanyDetail.js';


function RoutesComp({ setUser }) {
    const [signedIn, setSignedIn] = useState(true);
    const company = "c"
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}>
                </Route>
                <Route path="/companies" element={<Company />}>
                    <Route path={company} element={<CompanyDetail />}>
                    </Route>
                </Route>
                <Route path="/jobs" element={<Job />}>
                </Route>
                <Route path="/profile" element={<Profile />}>
                </Route>
                <Route path="/logout" element={<Logout setUser={setUser} />}>
                </Route>
                <Route path="/signup" element={<SignUp setUser={setUser} />}>
                </Route>
                <Route path="/signin" element={<SignIn setUser={setUser} />}>
                </Route>
            </Routes>
        </div>
    );
}

export default RoutesComp;