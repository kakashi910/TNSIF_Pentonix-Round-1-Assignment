jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const { setUser } = useContext(UserContext);

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('jwtToken', token);
      setUser(user);

  
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
 );
};

export default Login;