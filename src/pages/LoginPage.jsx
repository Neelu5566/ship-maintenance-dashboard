import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const hardcodedUsers = [
    { email: "admin@entnt.in", password: "admin123", role: "Admin" },
    { email: "inspector@entnt.in", password: "inspect123", role: "Inspector" },
    { email: "engineer@entnt.in", password: "engine123", role: "Engineer" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || hardcodedUsers;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Password:</label><br />
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button style={{ marginTop: '1rem' }} type='submit'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;