import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from './navBar.js';
import Company from './company.js';
import Job from './job.js';
import Profile from './profile.js';
import SignIn from './signIn.js';
import SignUp from './signUp.js';


function App() {
  const [signedIn, setSignedIn] = useState(true);
  return (
    <div>
      <Routes>
        <Route path="/companies" element={<Company />}>
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
      <NavBar signedIn={signedIn} />

    </div>
  );
}

export default App;
