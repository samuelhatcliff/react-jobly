import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Company from '../companies/Company.js';
import Job from '../jobs/Job.js';
import Profile from '../user/Profile.js';
import SignIn from '../user/SignIn.js';
import SignUp from '../user/SignUp.js';
import HomePage from '../HomePage.js';
import CompanyDetail from '../companies/CompanyDetail.js'

function RoutesComp({ data }) {
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
                <Route path="/logout">
                </Route>
                <Route path="/signup" element={<SignUp />}>
                </Route>
                <Route path="/signin" element={<SignIn />}>
                </Route>
            </Routes>
        </div>
    );
}

export default RoutesComp;