import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/ships" style={styles.link}>Ships</Link>
        <Link to="/jobs" style={styles.link}>Jobs</Link>
        <Link to="/notifications" style={styles.link}>Notifications</Link>
      </div>
      <button onClick={handleLogout} style={styles.logout}>Logout</button>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#f0f0f0',
    borderBottom: '1px solid #ddd'
  },
  links: {
    display: 'flex',
    gap: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  },
  logout: {
    background: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '5px'
  }
};

export default Navbar;
