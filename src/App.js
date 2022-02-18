import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import ShipsPage from './pages/ShipsPage.js';
import UserStatusPage from './pages/UserStatusPage.js';
import MarketPage from './pages/MarketPage.js';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage.js';

function App() {
  const [token, setToken] = useState('f4310eb4-0c1a-4f44-80aa-f10be7493ce6');
  const [user, setUser] = useState(null);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    saveToLocal('token', token);

    if (token && !user) {
      getUserInfo(token);
    }
  }, [user, token]);

  useEffect(() => {
    loadShips();
  }, []);

  async function loadShips() {
    try {
      const token = 'f4310eb4-0c1a-4f44-80aa-f10be7493ce6';
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

        <Route path="/userstatus" element={<UserStatusPage user={user} />} />
        <Route path="/ships" element={<ShipsPage />} />
        <Route path="/market" element={<MarketPage ships={ships} />} />
      </Routes>
    </div>
  );

  async function loginUser(username) {
    setIsUsernameTaken(false);

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
      console.log(data.token);
      setToken(data.token);
      setUser(data.user);
    } else {
      setIsUsernameTaken(true);
    }
  }

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
