import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './reset.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`https://password-reset-backend-uszv.onrender.com/api/auth/reset-password/${token}`, { password });
      setMessage(response.data.message);
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
    setIsLoading(false);
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2 className="reset-title">Reset Password</h2>
        <form onSubmit={handleSubmit} className="reset-form">
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <button type="submit" className="reset-button" disabled={isLoading}>
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default ResetPassword;
