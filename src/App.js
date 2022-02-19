import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import ShipsPage from './pages/ShipsPage.js';
import UserStatusPage from './pages/UserStatusPage.js';
import MarketPage from './pages/MarketPage.js';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage.js';
import useFetch from './hooks/useFetch.js';

function App() {
  const [token, setToken] = useState(loadFromLocal('token'));
  const [user, setUser] = useState(null);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [ships, setShips] = useState([]);
  const [data] = useFetch(token);

  useEffect(() => {
    saveToLocal('token', token);

    if (token && !user) {
      getUserInfo(token);
    }
  }, [user, token]);

  useEffect(() => {
    loadShips(token);
  }, []);

  async function loadShips(token) {
    try {
      // const token = 'f4310eb4-0c1a-4f44-80aa-f10be7493ce6';
      const response = await fetch(
        'https://api.spacetraders.io/systems/OE/ship-listings?token=' + token
      );
      const data = await response.json();
      setShips(data.shipListings);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              token={token}
              user={user}
              onLogin={loginUser}
              isUsernameTaken={isUsernameTaken}
            />
          }
        />

        <Route
          path="/userstatus"
          element={<UserStatusPage user={user} token={token} data={data} />}
        />
        <Route path="/ships" element={<ShipsPage />} />
        <Route path="/market" element={<MarketPage ships={ships} user={user} token={token}/>} />
      </Routes>
    </div>
  );

  async function loginUser(username) {
    setIsUsernameTaken(false);
    //New User
    const response = await fetch(
      `https://api.spacetraders.io/users/${username}/claim`,
      {
        method: 'POST',
      }
    ).catch(error => {
      console.log('ERROR', error.message);
    });

    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      setUser(data.user);
    } else {
      setIsUsernameTaken(true);
    }
  }
  //Old User
  async function getUserInfo(token) {
    try {
      const response = await fetch(
        'https://api.spacetraders.io/my/account?token=' + token
      );
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;
