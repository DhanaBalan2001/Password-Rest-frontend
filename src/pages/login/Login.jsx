import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setMessage(response.data.message);
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      setMessage(error.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            autoComplete="email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoComplete="current-password"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="login-button">Login</button>
          <button className="signup-button" onClick={() => navigate('/register')}>New User? Register Here</button>
          <button className="forgot-password-button" onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Login;