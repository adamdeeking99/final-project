'use client';




// pages/login.js
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }


    console.log('Username:', username);
    console.log('Password:', password);

  
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}
