jsx
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Login from './components/Login';
import UserInterface from './components/UserInterface';

export const UserContext = createContext();

const App = () => {
 const [user, setUser] = useState(null);
 const [username, setUsername] = useState('');

 useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

   
      axios.get('http://localhost:5000/api/auth/user')
        .then((response) => {
          setUser(response.data);
          setUsername(response.data.name);
        })
        .catch((error) => console.error(error));
    }
 }, []);

 return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar username={username} />
      {user ? <UserInterface /> : <Login />}
    </UserContext.Provider>
 );
};

export default App;