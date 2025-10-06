import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      if (password === 'loydReviewer') {
        onLogin();
      } else {
        setError('Incorrect password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Exam Reviewer</h1>
          <p>Enter your password to access the quiz portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="login-btn"
            disabled={isLoading || !password}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Verifying...
              </>
            ) : (
              'Access Quiz Portal'
            )}
          </button>
        </form>

        <div className="login-hint">
          <p>Hint: The password is same as before</p>
        </div>
      </div>
    </div>
  );
};

export default Login;