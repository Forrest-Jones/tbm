import React from 'react';

function LogoutForm({ onLogout }) {
  const handleLogout = () => {
    fetch('/logout', { method: 'POST' })
      .then(res => {
        if (res.ok) {
          onLogout();
        } else {
          throw new Error('Failed to log out');
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <form onSubmit={handleLogout}>
      <button type="submit">Log out</button>
    </form>
  );
}

export default LogoutForm;
