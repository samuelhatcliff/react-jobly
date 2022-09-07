import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Company from './Company.js';
import Job from './Job.js';
import Profile from './Profile.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import HomePage from './HomePage.js';
import CompanyDetail from './CompanyDetail.js'

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