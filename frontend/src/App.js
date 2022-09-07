import React, { useState } from 'react';
import NavBar from './navbar/NavBar.js';
import RoutesComp from './routes/Routes.js'


function App() {
  const [signedIn, setSignedIn] = useState(true);
  const company = "c"

  return (
    <div>
      <NavBar signedIn={signedIn} />
      <RoutesComp />
    </div>
  );
}

export default App;
