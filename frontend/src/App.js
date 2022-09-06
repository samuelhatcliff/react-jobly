import { BrowserRouter, Route } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from './navBar.js';
import Company from './company.js';
import Job from './job.js';
import Profile from './profile.js';


function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/companies">
          <Company />
        </Route>
        <Route exact path="/jobs">
          <Job />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/logout">
        </Route>
        <Route exact path="/signup">
          <signUp />
        </Route>
        <Route exact path="/signin">
          <signIn />
        </Route>

        <NavBar signedIn={signedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
