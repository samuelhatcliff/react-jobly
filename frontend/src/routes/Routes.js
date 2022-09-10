import { Route, Routes } from 'react-router-dom';
import Company from '../companies/Company.js';
import Job from '../jobs/Job.js';
import Profile from '../user/Profile.js';
import SignIn from '../user/SignIn.js';
import SignUp from '../user/SignUp.js';
import Logout from '../user/Logout.js';
import HomePage from '../HomePage.js';
import CompanyJobs from '../companies/CompanyJobs.js';

import NotFound from './NotFound.js';


function RoutesComp() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}>
                </Route>
                <Route path="/companies" element={<Company />}>
                    {/* <Route path={handle} element={<CompanyJobs handle={handle} />}>
                    </Route> */}
                </Route>
                <Route path="/companies/:handle" element={<CompanyJobs />}>
                </Route>
                <Route path="/jobs" element={<Job />}>
                </Route>
                <Route path="/profile" element={<Profile />}>
                </Route>
                <Route path="/logout" element={<Logout />}>
                </Route>
                <Route path="/signup" element={<SignUp />}>
                </Route>
                <Route path="/signin" element={<SignIn />}>
                </Route>
                <Route element={<NotFound />} ></Route>
            </Routes>
        </div>
    );
}

export default RoutesComp;