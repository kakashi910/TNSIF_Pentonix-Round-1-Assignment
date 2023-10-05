jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
 const [username, setUsername] = useState('');

 return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="navbar-title">Login App</h1>
      </div>
      <div className="navbar-profile">
        <h2 className="navbar-username">{username}</h2>
      </div>
    </nav>
 );
};

export default Navbar;