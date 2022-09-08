import React, { useState } from 'react';
import NavBar from './navbar/NavBar.js';
import RoutesComp from './routes/Routes.js'
import UserContext from './user/UserContext.js';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState([]);
  console.log("USER IN APP", user)

  return (
    <div>
      <UserContext.Provider value={user}>
        <NavBar signedIn={signedIn} />
        <RoutesComp setUser={setUser} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
