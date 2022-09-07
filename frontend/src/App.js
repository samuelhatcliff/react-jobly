import React, { useState } from 'react';
import NavBar from './navbar/NavBar.js';
import RoutesComp from './routes/Routes.js'
import UserAuthData from './user/UserAuthData.js';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const company = "c"

  return (
    <div>
      <NavBar signedIn={signedIn} />
      <RoutesComp />
      {/* <UserAuthData /> */}
    </div>
  );
}

export default App;
