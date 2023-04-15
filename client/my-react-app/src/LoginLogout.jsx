import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';
import './LoginLogout.css';

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="homepage">
      <div className="circle-container">
        <div className="circle">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
        <div className="circle">5</div>
        <div className="circle">6</div>
        <div className="circle">7</div>
      </div>
      
      <div className="glass-pane rotate-0">
        {isLoggedIn ? <LogoutForm onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
        <h2>Welcome to My App!</h2>
        <p>Please login or sign up to continue.</p>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LoginLogout;
