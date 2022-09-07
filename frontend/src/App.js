import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from './NavBar.js';
import RoutesComp from './Routes.js'


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
