import React, { useEffect, useState } from 'react';
import AppComponents from './AppComponents.js';
import UserContext from './user/UserContext.js';
import JoblyApi from './api.js';
import useLocalStorage from './useLocalStorage.js';


export const TOKEN_STORAGE_ID = "jobly-token";


function App() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getUser() {
      if (token) {
        try {
          JoblyApi.token = token;
          const username = await JoblyApi.decodeToken(token)
          JoblyApi.token = token;
          const user = await JoblyApi.getUser(username);
          const apps = user.user.applications;
          setUser([username, token, apps]);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setUser(null);
        }
      }
    }

    getUser();
  }, [token]);


  /** Handles site-wide logout. */
  function logout() {
    setUser(null);
    setToken(null);
  }

  async function signUp(formData) {
    try {
      let token = await JoblyApi.registerUser(formData);
      setToken(token);
      JoblyApi.token = token;
      const user = await JoblyApi.getUser(formData.username)
      const apps = user.user.applications
      setUser([formData.username, token, apps]);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(formData) {
    try {
      const token = await JoblyApi.loginUser(formData);
      JoblyApi.token = token;
      const user = await JoblyApi.getUser(formData.username)
      const apps = user.user.applications
      setUser([formData.username, token, apps]);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  async function updateUser(formData, username) {
    try {
      await JoblyApi.updateUser(formData, username);
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }


  console.log("USER IN APP:", user)

  return (
    <div>
      <UserContext.Provider value={{ user, setUser, logout, signUp, login, updateUser }}>
        <AppComponents />
      </UserContext.Provider>

    </div>
  );
}

export default App;
